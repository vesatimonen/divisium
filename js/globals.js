/*****************************************************************************
 * Global variables
 *****************************************************************************/
const globals = {
    game:         undefined,
    boardMaxSize: 9,
    boardMargin:  0.06, /* Room kept for margin when sizing cells, in cells */
    cellSize:     undefined,
    frameWidth:   undefined, /* Wall line, whole device pixels */
    animating:    false, /* Solve animation running */
};

/*****************************************************************************
 * URL options
 *****************************************************************************/
const options = {
    challenges: [],
    level:      0,
    debug:      false, /* Debug set from ?s=debug */
    manual:     false, /* Manual challenges from ?c= */
    saved:      undefined, /* Saved game from storage */
    reached:    0,         /* Furthest level > may go to, solved + 1 */
    language:   "ENG",
    gameOverText: "Game solved!" /* Changed by language */
};

/*****************************************************************************
 * UI elements
 *****************************************************************************/
const elements = {
    screen:         document.getElementById("game-screen"),
    board:          document.getElementById("game-board"),
    grid:           document.getElementById("game-grid"),

    canvas:         document.getElementById('game-canvas'),
    modal:          document.getElementById("game-modal"),
    modalTitle:     document.getElementById("modal-title"),
    modalText:      document.getElementById("modal-text"),
    buttonRestart:  document.getElementById("button-restart"),
    buttonUndo:     document.getElementById("button-undo"),
    buttonAbout:    document.getElementById("button-about"),
    buttonShare:    document.getElementById("button-share"),
    info:           document.getElementById("game-info"),
    instructions:   document.getElementById("game-instructions"),

    debug:          document.getElementById("debug-text")
};


