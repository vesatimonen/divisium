
/*****************************************************************************
 * Game levels
 *****************************************************************************/
const defaultChallengeSet = [
    {info: "INFO: V04-02-02-01 C00-00-06 D0000 T000001 E000 S00.000 #3x3=3-100223001"},
    {info: "INFO: V04-02-02-01 C00-00-06 D0000 T000001 E000 S00.000 #3x3=3-102130020"},
    {info: "INFO: V02-06-00-01 C00-00-06 D0000 T000001 E000 S00.000 #3x3=3-111103110"},

    {info: "INFO: V14-13-04-05 C00-00-36 D0000000000000 T000001 E000 S00.000 #6x6=3-023000101031031120031012101311021010"},
    {info: "INFO: V12-14-08-02 C00-00-36 D0000000000000 T000001 E002 S00.007 #6x6=3-210012112110010032211112100321102000"},
    {info: "INFO: V13-12-09-02 C00-16-36 D0000100000000 T000001 E002 S00.088 #6x6=3-302121011000011301010220100121222120"},

    {info: "INFO: V32-27-12-10 C00-00-90 D0000000000000000000000000000 T000001 E000 S00.015 #9x9=3-212011113021010300002010021300013103131320230102010000130012101001012001111320211"}, // 7
    {info: "INFO: V34-24-12-11 C00-28-90 D0000000000000100000000000000 T000001 E001 S00.067 #9x9=3-011110311000001031321323000011102021332011120000121001010203300120300030211021200"}, // 8
    {info: "INFO: V36-18-18-09 C00-23-90 D0000000000000010000000000000 T000001 E001 S00.075 #9x9=3-211202211303010302000212000012010201202001201011221130000032200301201213003003000"}, // 9
    {info: "INFO: V38-18-12-13 C00-35-90 D0000000010000000000000000000 T000001 E004 S00.096 #9x9=3-021301100012012020010023303000300300322120003332100000000013101010221130030011112"}, // 10
    {info: "INFO: V40-16-10-15 C00-19-90 D0000000000000000100000000000 T000001 E019 S00.156 #9x9=3-200020000003012130130120032300030001203000300100031222000311111203330001103000311"}, // 11
    {info: "INFO: V35-20-17-09 C01-13-89 D0000000000100300000000000000 T000005 E000 S00.120 #9x9=3-300201113010100310032122010102011002333022232000010001000222100301101110020201022"}, // 12
    {info: "INFO: V33-22-19-07 C00-28-90 D0000000000000100000000000000 T000001 E000 S00.144 #9x9=3-120320010001011220000103030312020112121122120100201000112203211300010022120021003"}, // 13
    {info: "INFO: V33-23-17-08 C00-42-90 D0000001000000000000000000000 T000001 E002 S00.205 #9x9=3-200030132031022000101220101100010320212110013300110200101022131100022000131210122"}, // 14
    {info: "INFO: V36-18-18-09 C00-24-90 D0000000000000001000000000000 T000001 E029 S00.267 #9x9=3-220031022001021010111200213020123120033001020200000001132122320001001001003210203"}, // 15
    {info: "INFO: V31-28-13-09 C00-34-90 D0000000000100000000000000000 T000001 E001 S00.244 #9x9=3-103010000111220030021013301101110212030100102301212131300211100011120202300101201"}, // 16
    {info: "INFO: V33-22-19-07 C04-25-86 D0001000000200222000000000000 T000005 E012 S00.273 #9x9=3-300120311010001011120010200023320321102000002210113213222201200001010200102101212"}, // 17
    {info: "INFO: V34-22-16-09 C00-38-90 D0000000010000000000000000000 T000001 E013 S00.265 #9x9=3-203113000010200130130022210201201203301121000002111110001210203000002032123211001"}, // 18
    {info: "INFO: V32-23-20-06 C01-18-89 D0001000300000000000000000000 T000002 E018 S00.308 #9x9=3-020022100313010221020100101100112120203223030120110012211201220101011010020220030"}, // 19
    {info: "INFO: V34-21-18-08 C00-35-90 D0000000010000000000000000000 T000001 E014 S00.327 #9x9=3-202100312312010002000012101003002212212121203021110000101020102300303211120010030"}, // 20
    {info: "INFO: V34-23-14-10 C04-34-86 D0100000000000303220000000000 T000005 E018 S00.365 #9x9=3-200212130132100003001010230012121100320020001030000202130123111103021021103001110"}, // 21
    {info: "INFO: V35-21-15-10 C00-38-90 D0000000010000000000000000000 T000001 E016 S00.399 #9x9=3-003202011120103002031120010202003202000131031230003000100211102003010121310212110"}, // 22
    {info: "INFO: V38-18-12-13 C00-34-90 D0000010000000000000000000000 T000001 E018 S00.422 #9x9=3-103111003030030220201002100002012010120131033213200030300000213011122000030010130"}, // 23
    {info: "INFO: V32-25-16-08 C00-41-90 D0000001000000000000000000000 T000001 E012 S00.497 #9x9=3-021000302203021120102120101010012001301230331202100201102011011301011220020300111"}, // 24
    {info: "INFO: V30-26-20-05 C06-14-84 D3312030003000000000000000000 T002022 E025 S00.564 #9x9=3-021022103112100300200021030022112001110201122201102112031201020000010111302121102"}, // 25
    {info: "INFO: V32-24-18-07 C00-45-90 D0010000000000000000000000000 T000001 E026 S00.454 #9x9=3-121012112012011021200002000300321211013100102203122210100000023123010300110210210"}, // 26
    {info: "INFO: V29-28-19-05 C00-46-90 D0001000000000000000000000000 T000001 E034 S00.520 #9x9=3-101002012232301001000022112221201011100130001300001211001202121321121100002111212"}, // 27
    {info: "INFO: V31-26-17-07 C11-27-79 D0033333203000000000010000000 T011338 E017 S00.563 #9x9=3-120300010201021220012211203120101013201012200030210011302202111001112013030011100"}, // 28
    {info: "INFO: V34-23-14-10 C05-42-85 D0032303001000000000000000000 T000011 E040 S00.526 #9x9=3-311100120002113101020012121011310201010033202312000010320030201001013132012200000"}, // 29
    {info: "INFO: V27-32-17-05 C05-29-85 D0001220030000000002200000000 T000006 E017 S00.512 #9x9=3-112100101111113022320020110003030212011100201121201011201130212112010100010220211"}, // 30
    {info: "INFO: V31-27-15-08 C04-20-86 D0001000030030030300000000000 T000006 E008 S00.615 #9x9=3-012003011021110301010012120203300112101032111222100020011131121101000010220300032"}, // 31
    {info: "INFO: V29-28-19-05 C04-26-86 D1000000000120031220000000000 T000010 E032 S00.631 #9x9=3-212003201000100110200121122133012111010020021322101201002011101002120130120112102"}, // 32
    {info: "INFO: V20-43-16-02 C08-11-82 D1220302020300003200000000000 T006998 E033 S00.770 #9x9=3-101212022221011010011201201201211112121001010003011001111121322111111101201111111"}, // 33
    {info: "INFO: V33-22-19-07 C00-40-90 D0000000100000000000000000000 T000001 E020 S00.691 #9x9=3-110001212023022301200111000002202302230310031101001003122101000201211220120020101"}, // 34
    {info: "INFO: V35-20-17-09 C08-23-82 D0322233300000000000010000000 T000815 E064 S01.009 #9x9=3-112000120021132011200210120121000030200323201000100212003021011330210030003021021"}, // 35
    {info: "INFO: V27-32-17-05 C05-29-85 D0001000000023000033200000000 T000011 E037 S00.948 #9x9=3-001211111201213210121300011100012012221121110101020211020111002032121100003001023"}, // 36
    {info: "INFO: V28-30-18-05 C01-24-89 D0000100000000200000000000000 T000005 E029 S01.025 #9x9=3-020121112100102110123231020020001030201102001121200211101211103123112002100012110"}, // 37
    {info: "INFO: V30-27-18-06 C05-16-85 D0003303003000000000000000000 T000015 E046 S01.112 #9x9=3-020120130122112010101012203020110010303212200020011021013211112210003001001220111"}, // 38
    {info: "INFO: V33-24-15-09 C11-19-79 D0000033212000001232020100000 T019291 E041 S01.010 #9x9=3-000310203330021103003002000301220110002101113120122010201002101012111102210102103"}, // 39
    {info: "INFO: V27-31-19-04 C07-10-83 D3223200000000000003100000000 T004809 E064 S01.743 #9x9=3-111011110012201023120121200102301210021012012201021011111111220021200020300012103"}, // 40
];


/*****************************************************************************
 * Parse URL options
 *****************************************************************************/
/* Board part like 3x3=4-103130400, sizes 1-9, one digit per cell, cells in threes */
function challengeValid(info) {
    const infoSplit = info.split(/[>$#]/);
    const boardInfo = infoSplit[infoSplit.length - 1].trim();
    const match     = boardInfo.match(/^([1-9])x([1-9])=([1-9][0-9]*)-([0-9]+)$/);

    if (match == null) {
        return false;
    }

    const cells = Number(match[1]) * Number(match[2]);
    return match[4].length == cells && cells % 3 == 0;
}

function parseOptions() {
    /* Replace special characters in url */
    let newUrl = window.location.href;
    newUrl = newUrl.replace("%23", '#'); /* Replace "%23" -> '#' */
    newUrl = newUrl.replace('#', '>');   /* '#' -> '>' */
    newUrl = newUrl.replace("%3E", '>'); /* Replace "%3E" -> '>' */

    /* Create URL */
    const url = new URL(newUrl);

    /* Set option, short "s" or long "set", before level so storage key is right */
    let setOption = url.searchParams.get("s");
    if (setOption == null) {
        setOption = url.searchParams.get("set");
    }
    if (setOption == "debug") {
        options.challenges = debugChallengeSet;
        globals.storage    = globals.storage + "-debug";
    }

    /* Level option, short "l" or long "level" */
    let levelOption = url.searchParams.get("l");
    if (levelOption == null) {
        levelOption = url.searchParams.get("level");
    }
    if (levelOption == null) {
        /* Read from storage */
        try {
            const saved = JSON.parse(localStorage.getItem(globals.storage));

            if (typeof saved == "number") {
                options.level = saved; /* Old save, level only */
            } else if (saved != null) {
                options.level = saved.level;
                options.saved = saved;
            }
        } catch (error) {
            options.level = 0; /* Bad or blocked storage */
        }
    } else {
        options.level = Number(levelOption - 1);
    }

    /* Challenge option, short "c" or long "challenge" */
    let challengeOption = url.searchParams.getAll("c");
    if (challengeOption.length == 0) {
        challengeOption = url.searchParams.getAll("challenge");
    }
    /* Keep only valid challenges */
    const manualChallenges = [];
    for (let index = 0; index < challengeOption.length; index++) {
        if (challengeValid(challengeOption[index])) {
            manualChallenges.push({info: challengeOption[index]});
        }
    }

    /* Set manual challenges to be played, all bad keeps default set */
    if (manualChallenges.length > 0) {
        options.challenges = manualChallenges;
        globals.storage = globals.storage + "-manual";
        options.level   = 0;
    }

    const languageOption = url.searchParams.get("language");
    if (languageOption != null) {
        switch (languageOption) {
            case "FIN":
                options.language = languageOption;
                elements.instructions.innerHTML = "Jaa ruudukko kolmen ruudun kokoisiin alueisiin niin, että jokaisen alueen numeroiden summa on <span id=\"divisium-sum\">3</span>. Ratkaisuja on vain yksi.";
                options.gameOverText            = "Peli ratkaistu!";
                break;
        }
    }
}


/*****************************************************************************
 * Modal window handling (game over and about)
 *****************************************************************************/
/* Tap that closed modal, its click is not used */
let modalDropClick = false;

function modalVisible() {
    return elements.modal.style.visibility == "visible";
}

/* Show modal in middle of board, empty text hides second line */
function modalShow(title, text, fadeIn) {
    elements.modalTitle.textContent = title;
    elements.modalText.textContent  = text;
    elements.modal.style.visibility = "visible";

    uiButtonsRedraw(globals.game); /* Gray out buttons */

    /* Fade in, or show at once */
    elements.modal.style.animation = "none";
    if (fadeIn) {
        elements.modal.offsetHeight; /* trigger reflow */
        elements.modal.style.animation = "image-appear 0.6s ease-in 0.2s 1 normal both";
    }
}

/* Hide modal, keep board and history, enable buttons again */
function modalHide() {
    elements.modal.style.visibility = "hidden";

    uiButtonsRedraw(globals.game);
}

/* Tap anywhere closes modal, tap does nothing else */
function modalPointerDown(event) {
    if (!modalVisible()) {
        modalDropClick = false; /* New tap, its click is used */
        return;
    }

    event.preventDefault();
    event.stopPropagation(); /* Keep tap off the board */

    modalHide();
    modalDropClick = true;
}

/* Drop click of closing tap, so buttons do not act */
function modalClick(event) {
    if (modalDropClick) {
        modalDropClick = false;
        event.preventDefault();
        event.stopPropagation();
    }
}

/* Capture, so modal sees taps before board and buttons */
document.addEventListener("pointerdown", modalPointerDown, true);
document.addEventListener("click",       modalClick,       true);


/*****************************************************************************
 * Save and restore game
 *****************************************************************************/
/* Save level, challenge and moves, so reload keeps board */
function gameSave() {
    const game = globals.game;
    const saved = {
        level:     game.level,
        challenge: options.challenges[game.level].info,
        moves:     game.moves
    };

    try {
        localStorage.setItem(globals.storage, JSON.stringify(saved));
    } catch (error) {
        /* Storage blocked, skip save */
    }
}

/* Inner wall on board, same limits as tap, frame never toggles */
function gameMoveValid(board, move) {
    if (move == null || !Number.isInteger(move.x) || !Number.isInteger(move.y)) {
        return false;
    }

    if (move.direction == "vertical") {
        return move.x > 0 && move.x < board.width && move.y >= 0 && move.y < board.height;
    }
    if (move.direction == "horizontal") {
        return move.x >= 0 && move.x < board.width && move.y > 0 && move.y < board.height;
    }
    return false;
}

function gameRestore() {
    const game  = globals.game;
    const saved = options.saved;

    /* No save, or save for other challenge */
    if (saved == undefined ||
        saved.level != game.level ||
        saved.challenge != options.challenges[game.level].info ||
        !Array.isArray(saved.moves)) {
        return;
    }

    /* Replay in order, rebuilds board and undo history */
    for (let index = 0; index < saved.moves.length; index++) {
        const move = saved.moves[index];

        /* Skip broken move */
        if (!gameMoveValid(game.board, move)) {
            continue;
        }

        game.makeMove(move.direction, move.x, move.y);
    }

    uiRedraw();
}


/*****************************************************************************
 * Game initialization
 *****************************************************************************/
function gameStart(level) {
    /* Check level value */
    if (level == undefined || isNaN(level) || level < 0) {
        level = 0;
    }
    if (level >= options.challenges.length) {
        level = options.challenges.length - 1;
    }

    /* Initialize game */
    globals.game.init(level, options.challenges[level].info);

    /* Instructions show this challenge sum */
    document.getElementById("divisium-sum").textContent = globals.game.board.targetSum;

    /* Save game point */
    gameSave();

    /* Debug text, INFO without board part after > */
    if (options.challenges == debugChallengeSet) {
        elements.debug.textContent = options.challenges[level].info.split(/[>$#]/)[0].trim();
    }

    /* Setup board */
    uiBoardSetup(globals.game.board);
}



window.onload = function () {
    options.challenges = defaultChallengeSet;
    globals.storage = "divisium/game-level";

    /* Parse options */
    parseOptions();

    /* Start game */
    globals.game = new Game();
    gameStart(options.level);

    /* Put back saved board */
    gameRestore();

    /* Show window */
    elements.screen.style.visibility = "visible";
}



