/*****************************************************************************
 * Canvas element sizes, part of cell size
 *****************************************************************************/
const FRAME_WIDTH = 0.04; /* Walls and grid frame */

/*****************************************************************************
 * Canvas colors
 *****************************************************************************/
/* Dark color for walls, dots and text */
const INK_COLOR = "#1C2B3A";

/*****************************************************************************
 * Redraw buttons
 *****************************************************************************/
function uiButtonsRedraw(game) {
    /* Disabled when nothing to undo, or input blocked */
    if (game.undoable() && !uiInputBlocked()) {
        elements.buttonUndo.disabled    = false;
        elements.buttonRestart.disabled = false;
    } else {
        elements.buttonUndo.disabled    = true;
        elements.buttonRestart.disabled = true;
    }
}

/*****************************************************************************
 * Redraw level elements
 *****************************************************************************/
function uiInfoRedraw(game) {
    let gameInfo = document.getElementById("game-info");
    gameInfo.innerHTML = "L" + (game.level + 1) + "/" + options.challenges.length;
}

/*****************************************************************************
 * Redraw cell
 *****************************************************************************/
function uiCellRedraw(board, x, y) {
    /* Get DOM element for counter */
    let cell = document.getElementById("cell-" + x + "-" + y);

    /* Set background */
    if (board.resolved(x, y)) {
        cell.style.background = "#67BFEC";
    } else {
        cell.style.background = "none";
    }

}


/* Draw cell digits, empty when zero, same baseline shift as dottium hints */
function uiValuesDraw(context, board) {
    const fontYShift = 0.28 * globals.cellSize; /* 0.4 of font size, Oswald digit middle */

    context.font      = (0.7 * globals.cellSize) + "px Oswald, sans-serif";
    context.fillStyle = INK_COLOR;
    context.textAlign = "center";

    for (let y = 0; y < board.height; y++) {
        for (let x = 0; x < board.width; x++) {
            if (board.values[x][y] == 0) {
                continue;
            }

            context.fillText(board.values[x][y], globals.cellSize * (x + 0.5), globals.cellSize * (y + 0.5) + fontYShift);
        }
    }
}


function uiElementsRedraw(board) {
    const context = elements.canvas.getContext('2d');

    /* Canvas fills board, setting size also clears it */
    const pixelRatio = window.devicePixelRatio || 1;
    const canvasRect = elements.canvas.getBoundingClientRect(); /* Exact size, not rounded */
    elements.canvas.width  = Math.round(canvasRect.width  * pixelRatio);
    elements.canvas.height = Math.round(canvasRect.height * pixelRatio);
    context.scale(pixelRatio, pixelRatio);

    /* Grid 0,0 after margin */
    const margin = uiBoardMargin();
    context.translate(margin, margin);

    /* Draw digits under dots and walls */
    uiValuesDraw(context, board);

    /* Odd width lines move half pixel to sit on whole pixels, dots follow lines */
    context.save();
    const lineShift = uiLineShift(globals.frameWidth);
    context.translate(lineShift, lineShift);

    /* Draw dots */
    for (let y = 0; y <= board.height; y++) {
        for (let x = 0; x <= board.width; x++) {
            context.beginPath();
            context.arc(globals.cellSize * x, globals.cellSize * y, globals.frameWidth, 0, 2 * Math.PI, false); /* Dot twice line width */
            context.fillStyle = INK_COLOR;
            context.fill();
        }
    }

    /* Draw walls */
    context.beginPath();
    context.lineWidth = globals.frameWidth; /* Snapped to device pixels, sharp */
    context.lineCap = "round"; /* Smooth wall ends and corners */
    context.strokeStyle = INK_COLOR;

    /* Draw vertical walls */
    for (let x = 0; x < board.width + 1; x++) {
        for (let y = 0; y < board.height; y++) {
            if (board.getVerticalWall(x, y) > 0) {
                context.moveTo(globals.cellSize * x, globals.cellSize * y);
                context.lineTo(globals.cellSize * x, globals.cellSize * (y + 1));
            }
        }
    }

    /* Draw horizontal walls */
    for (let y = 0; y < board.height + 1; y++) {
        for (let x = 0; x < board.width; x++) {
            if (board.getHorizontalWall(x, y) > 0) {
                context.moveTo(globals.cellSize * x, globals.cellSize * y);
                context.lineTo(globals.cellSize * (x + 1), globals.cellSize * y);
            }
        }
    }

    context.stroke();
    context.restore(); /* Back to unshifted grid */
}

/* Redraw when Oswald is loaded, canvas does not do it itself */
document.fonts.load("16px Oswald").then(function () {
    if (globals.game) {
        uiElementsRedraw(globals.game.board);
    }
});

function uiBoardRedraw(board) {
    /* Redraw cell content */
    for (let y = 0; y < board.height; y++) {
        for (let x = 0; x < board.width; x++) {
            /* Redraw item image */
            uiCellRedraw(board, x ,y);
        }
    }

    /* Redraw dots and walls */
    uiElementsRedraw(board);

    /* Redraw info */
    uiInfoRedraw(globals.game);

    /* Redraw buttons */
    uiButtonsRedraw(globals.game);
}

/* No input during solve animation or while modal shows */
function uiInputBlocked() {
    return globals.animating || modalVisible();
}


/*****************************************************************************
 * Frame line width snapped to whole device pixels, at least 1
 *****************************************************************************/
function uiFrameWidth(cellSize) {
    const pixelRatio  = window.devicePixelRatio || 1;
    const framePixels = Math.max(1, Math.round(FRAME_WIDTH * cellSize * pixelRatio));

    return framePixels / pixelRatio;
}


/*****************************************************************************
 * Half device pixel shift for odd width lines, else zero
 *****************************************************************************/
function uiLineShift(lineWidth) {
    const pixelRatio = window.devicePixelRatio || 1;
    const linePixels = Math.round(lineWidth * pixelRatio);

    if (linePixels % 2 === 1) {
        return 0.5 / pixelRatio;
    }
    return 0;
}


/*****************************************************************************
 * Margin around grid in whole pixels, fits corner dot and line shift
 *****************************************************************************/
function uiBoardMargin() {
    return Math.ceil(globals.frameWidth + uiLineShift(globals.frameWidth));
}


/*****************************************************************************
 * Setup board elements
 *****************************************************************************/
function uiBoardSetup(board) {

    /* Calculate board grid size, margin on both sides takes room too */
    globals.cellSize = Math.floor((elements.screen.clientWidth) / (globals.boardMaxSize + 2 * globals.boardMargin));

    /* Walls use whole device pixels */
    globals.frameWidth = uiFrameWidth(globals.cellSize);

    /* Modal and buttons use same line as walls */
    document.documentElement.style.setProperty("--frame-width", globals.frameWidth + "px");

    /* Clear elements in board */
    while (elements.grid.firstChild) {
        elements.grid.removeChild(elements.grid.firstChild);
    }

    /* Margin as padding so canvas covers outer walls */
    elements.board.style.padding = uiBoardMargin() + "px";

    /* Center the board */
    elements.board.style.width = globals.cellSize * board.width + "px";
    elements.board.style.left  = Math.floor((globals.cellSize * (globals.boardMaxSize - board.width)) / 2) + "px";

    /* Create grid and add cells */
    for (let y = 0; y < board.height; y++) {
        /* Create row */
        let newRow = document.createElement("div");
        newRow.className = "grid-row";
        elements.grid.appendChild(newRow);

        for (let x = 0; x < board.width; x++) {
            /* Create cell */
            let newCell = document.createElement("div");
            newCell.className    = "grid-cell";
            newCell.id           = "cell-" + x + "-" + y;

            newCell.style.width      = globals.cellSize + "px";
            newCell.style.height     = globals.cellSize + "px";
            newCell.style.lineHeight = globals.cellSize + "px"; /* Center text vertically */
            newCell.style.textAlign  = "center";

            newRow.appendChild(newCell);

        }
    }

    /* Redraw board */
    uiBoardRedraw(board);
}

/*****************************************************************************
 * Refresh board elements and check if game over
 *****************************************************************************/
function uiGridAnimationEnd(event) {
    event.stopPropagation();
    globals.animating = false;

    gameStart(globals.game.level + 1); /* Start new level */
    return false;
}


/*****************************************************************************
 * Redraw UI
 *****************************************************************************/
function uiRedraw() {
    /* Redraw game board */
    uiBoardRedraw(globals.game.board);

    /* Save after every change */
    gameSave();

    /* Check if end of level */
    if (globals.game.board.solved()) {
        /* Last level, fade in game over modal, board stays */
        if (globals.game.level + 1 >= options.challenges.length) {
            modalShow("Game solved!", "", true); /* Fade in, a bit faster than level change */
            return;
        }

        /* Start animation to next level, block input and gray buttons */
        globals.animating = true;
        uiButtonsRedraw(globals.game);
        elements.board.addEventListener("animationend", uiGridAnimationEnd);
        elements.board.style.animation = "none";
        elements.board.offsetHeight; /* trigger reflow */
        elements.board.style.animation = "image-appear 1.0s ease-in 0.4s 1 reverse"; /* 2x slower */
    }
}



//document.getElementById("debug-text").innerHTML = window.innerWidth;

