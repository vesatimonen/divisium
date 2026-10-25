
/*****************************************************************************
 * Move helpers
 *****************************************************************************/
function uiMovePosition(event) {
    let X, Y;

    switch (event.type) {
        case "click":
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
function uiClick(event) {
    /* Get clock position */
    const move = uiMovePosition(event);
    const X = move.X;
    const Y = move.Y;

    /* Closest wall */
    const Xwall = Math.round(X);
    const Ywall = Math.round(Y);

    /* Current cell */
    const Xcell = Math.floor(X);
    const Ycell = Math.floor(Y);

    /* Check limits */
    if (Ycell < 0 || Ycell >= globals.game.board.height ||
        Xcell < 0 || Xcell >= globals.game.board.width) {
        return false;
    }

    /* Direction from wall */
    const Xdelta = Math.abs(X - Xwall);
    const Ydelta = Math.abs(Y - Ywall);
    if (Xdelta < Ydelta) {
        if (Ydelta - Xdelta > 0.0) {
            /* Vertical wall */
            if (Xwall > 0 && Xwall < globals.game.board.width) {
                globals.game.makeMove("vertical", Xwall, Ycell);
                uiRedraw();
            }
        }
    } else {
        if (Xdelta - Ydelta > 0.0) {
            /* Horizontal wall */
            if (Ywall > 0 && Ywall < globals.game.board.height) {
                globals.game.makeMove("horizontal", Xcell, Ywall);
                uiRedraw();
            }
        }
    }
}

elements.board.addEventListener("click", uiClick, {passive: true});




