
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X, Y;

    switch (event.type) {
        case "pointerdown":
        case "pointermove":
            X = event.clientX;
            Y = event.clientY;
            break;
        default:
            return undefined;
    }

    let rect = elements.grid.getBoundingClientRect();
    X -= rect.left;
    Y -= rect.top;
    X = X / globals.cellSize;
    Y = Y / globals.cellSize;

    return {X, Y};
}


/*****************************************************************************
 * Event handlers
 *****************************************************************************/
/* Painting on, from press to release */
let paintActive = false;

/* Wall value being painted, undefined until first wall when press is outside board */
let paintValue = undefined;

/* Last pointer point while painting, in cells */
let paintLastX = undefined;
let paintLastY = undefined;

/* Press point, drag starts after moving this far, in cells */
const DRAG_THRESHOLD = 0.3;
let paintStartX = undefined;
let paintStartY = undefined;
let paintDragging = false;

/* Paint wall this much before its middle, in cells */
const PAINT_EARLY = 0.2;

/* Pointer must be this close to wall line, in cells */
const PAINT_NEAR = 0.3;

/* Paint one inner wall, returns true if changed */
function uiPaintWall(direction, x, y) {
    const board = globals.game.board;
    let value;

    if (direction == "vertical") {
        /* Frame or off board */
        if (x <= 0 || x >= board.width || y < 0 || y >= board.height) {
            return false;
        }
        value = board.getVerticalWall(x, y);
    } else {
        if (x < 0 || x >= board.width || y <= 0 || y >= board.height) {
            return false;
        }
        value = board.getHorizontalWall(x, y);
    }

    /* Already painted */
    if (value == paintValue) {
        return false;
    }

    /* First wall decides value when press was outside board */
    if (paintValue == undefined) {
        paintValue = globals.game.makeMove(direction, x, y);
        return true;
    }

    globals.game.makeMove(direction, x, y);
    return true;
}

/* Paint point shift, toward where pointer comes from */
function uiPaintEarly(from, to) {
    if (to > from) {
        return -PAINT_EARLY;
    }
    return PAINT_EARLY;
}

/* Paint walls whose paint point pointer crossed near their line */
function uiPaintWalls(fromX, fromY, toX, toY) {
    let changed = false;

    /* Sideways part crosses horizontal walls */
    if (toX != fromX) {
        const Xmin   = Math.min(fromX, toX);
        const Xmax   = Math.max(fromX, toX);
        const Xearly = uiPaintEarly(fromX, toX);

        for (let x = Math.floor(Xmin - 1); x <= Math.ceil(Xmax); x++) {
            const Xpaint = x + 0.5 + Xearly;
            if (Xpaint < Xmin || Xpaint > Xmax) {
                continue;
            }

            /* Pointer Y where it crossed, nearest line */
            const Ycross = fromY + (toY - fromY) * (Xpaint - fromX) / (toX - fromX);
            const Ywall  = Math.round(Ycross);
            if (Math.abs(Ycross - Ywall) <= PAINT_NEAR && uiPaintWall("horizontal", x, Ywall)) {
                changed = true;
            }
        }
    }

    /* Up or down part crosses vertical walls */
    if (toY != fromY) {
        const Ymin   = Math.min(fromY, toY);
        const Ymax   = Math.max(fromY, toY);
        const Yearly = uiPaintEarly(fromY, toY);

        for (let y = Math.floor(Ymin - 1); y <= Math.ceil(Ymax); y++) {
            const Ypaint = y + 0.5 + Yearly;
            if (Ypaint < Ymin || Ypaint > Ymax) {
                continue;
            }

            /* Pointer X where it crossed, nearest line */
            const Xcross = fromX + (toX - fromX) * (Ypaint - fromY) / (toY - fromY);
            const Xwall  = Math.round(Xcross);
            if (Math.abs(Xcross - Xwall) <= PAINT_NEAR && uiPaintWall("vertical", Xwall, y)) {
                changed = true;
            }
        }
    }

    return changed;
}

function uiPointerDown(event) {
    /* Ignore during solve animation or modal */
    if (uiInputBlocked()) {
        return false;
    }

    /* Only main button */
    if (event.button != 0) {
        return false;
    }

    /* Buttons keep their own taps */
    if (event.target.closest("button")) {
        return false;
    }

    /* Get press position */
    const move = uiMovePosition(event);
    const X = move.X;
    const Y = move.Y;

    /* Closest wall */
    const Xwall = Math.round(X);
    const Ywall = Math.round(Y);

    /* Current cell */
    const Xcell = Math.floor(X);
    const Ycell = Math.floor(Y);

    /* Inside board, toggle wall like a tap, its new value is used for painting */
    paintValue = undefined;
    if (Ycell >= 0 && Ycell < globals.game.board.height &&
        Xcell >= 0 && Xcell < globals.game.board.width) {
        const Xdelta = Math.abs(X - Xwall);
        const Ydelta = Math.abs(Y - Ywall);
        if (Xdelta < Ydelta) {
            /* Vertical wall */
            if (Xwall > 0 && Xwall < globals.game.board.width) {
                paintValue = globals.game.makeMove("vertical", Xwall, Ycell);
            }
        } else {
            /* Horizontal wall */
            if (Ywall > 0 && Ywall < globals.game.board.height) {
                paintValue = globals.game.makeMove("horizontal", Xcell, Ywall);
            }
        }
    }

    /* Outside board or frame, first wall crossed sets value */
    paintActive = true;

    /* Remember press point for drag threshold */
    paintStartX = X;
    paintStartY = Y;
    paintLastX  = X;
    paintLastY  = Y;
    paintDragging = false;

    /* Keep getting moves outside page until release */
    elements.screen.setPointerCapture(event.pointerId);

    if (paintValue != undefined) {
        uiRedraw();
    }
}

function uiPointerMove(event) {
    /* Not painting, solve animation running or modal */
    if (!paintActive || uiInputBlocked()) {
        return false;
    }

    /* Button released where we did not see it, stop painting */
    if (event.buttons == 0) {
        paintActive = false;
        return false;
    }

    const move = uiMovePosition(event);

    /* Small finger slide is not a drag */
    if (!paintDragging) {
        if (Math.hypot(move.X - paintStartX, move.Y - paintStartY) < DRAG_THRESHOLD) {
            return false;
        }
        paintDragging = true;
    }

    /* Paint from last point to this one */
    const changed = uiPaintWalls(paintLastX, paintLastY, move.X, move.Y);
    paintLastX = move.X;
    paintLastY = move.Y;

    if (changed) {
        uiRedraw();
    }
}

function uiPointerUp(event) {
    /* Stop painting */
    paintActive = false;
}

/* Stop iOS magnifier and page scroll on board, modal closes on pointerdown */
function uiTouchStart(event) {
    event.preventDefault();
}

/* Whole page listens, paint can start outside board */
elements.screen.addEventListener("pointerdown",   uiPointerDown);
elements.screen.addEventListener("pointermove",   uiPointerMove);
elements.screen.addEventListener("pointerup",     uiPointerUp);
elements.screen.addEventListener("pointercancel", uiPointerUp);
elements.screen.addEventListener("lostpointercapture", uiPointerUp); /* Release outside window */
elements.board.addEventListener("touchstart",    uiTouchStart, {passive: false});
