
/*****************************************************************************
 * Game levels
 *****************************************************************************/
const defaultChallengeSet = [
    {info: "INFO: N03-04-01-01 C00-00-06 D0000 T000001 #3x3=3-021113100"},
    {info: "INFO: N06-00-00-03 C00-00-06 D0000 T000001 #3x3=3-330000300"},
    {info: "INFO: N03-03-03-00 C00-00-06 D0000 T000001 #3x3=3-022211010"},

    {info: "INFO: N18-06-06-06 C00-00-36 D0000000000000000000000000000 T000001 #6x6=3-010012230102213231000003301300020000"},
    {info: "INFO: N12-12-12-00 C00-00-36 D0000000000000000000000000000 T000001 #6x6=3-122010001120120112202012011211220200"},
    {info: "INFO: N21-03-03-09 C00-15-36 D0001000000000000000000000000 T000001 #6x6=3-301220300010000000003303000300332103"},

    {info: "INFO: V40-16-10-15 C00-16-90 D0000000000000000000100000000 T000001 E000 S00.016 #9x9=3-033000102302021103030100200000031120102001013021303201030033000320200130010101130"}, // 7     1/7
    {info: "INFO: V39-17-11-14 C00-39-90 D0000001000000000000000000000 T000001 E001 S00.067 #9x9=3-021020111033313000000000103021031100213330103000002021302112211303002020000001300"}, // 8     1/7
    {info: "INFO: V42-12-12-15 C00-27-90 D0000001000000000000000000000 T000001 E001 S00.076 #9x9=3-100230001321300322021003100002100000210000333012233300210010030102030000201030300"}, // 9     1/7
    {info: "INFO: V29-28-19-05 C00-11-90 D0000000000000010000000000000 T000001 E009 S00.085 #9x9=3-010100220212131013202021020111000210002211101210311220110001300202311212012101001"}, // 10    2/7
    {info: "INFO: V31-25-19-06 C00-00-90 D0000000000000000000000000000 T000001 E023 S00.110 #9x9=3-210230202201001030112102021203121102100110121000100000302212112301031101020002211"}, // 11 ^  1/7
    {info: "INFO: V25-36-15-05 C04-29-86 D0000001000000032010201000000 T000010 E000 S00.122 #9x9=3-110022102121103001003001010033011122210111121111111003110220010120102211102201111"}, // 12 v  3/7
    {info: "INFO: V29-29-17-06 C00-17-90 D0000000000000100000000000000 T000001 E000 S00.146 #9x9=3-102101111221211202110011020100201011232112300100101001010202312232133011000000012"}, // 13 v  3/7
    {info: "INFO: V34-22-16-09 C00-00-90 D0000000000000000000000000000 T000001 E002 S00.198 #9x9=3-012303211000030100121000102211303123021011110001020200132002120231321102000000102"}, // 14 ^  2/7
    {info: "INFO: V30-27-18-06 C00-09-90 D0000000000000001000000000000 T000001 E034 S00.244 #9x9=3-121301012100020101111210223210101120002111010120222000012001031310301122003021020"}, // 15    3/7
    {info: "INFO: V36-21-12-12 C00-24-90 D0000000000000001000000000000 T000001 E002 S00.245 #9x9=3-102230000330000230000102121322201300000130011011003021011210303302010110011113020"}, // 16 ^  2/7
    {info: "INFO: V40-14-14-13 C01-10-89 D0000000000300000000000000000 T000005 E012 S00.254 #9x9=3-000121203323003000000121233012120100120032000031000120300201011001302200030230030"}, // 17    3/7
    {info: "INFO: V27-32-17-05 C00-13-90 D0000000000000000000010000000 T000001 E017 S00.271 #9x9=3-102111023002111120210311000101002121302031201020011002111110101131221201000220121"}, // 18    3/7
    {info: "INFO: V29-27-21-04 C01-06-89 D0000000030000000000000000000 T000002 E014 S00.289 #9x9=3-202021010110121022121211021100211101212010123001012200100201133022002000121310200"}, // 19    3/7
    {info: "INFO: V45-09-09-18 C00-44-90 D0010000000000000000010000000 T000001 E014 S00.316 #9x9=3-300300133030030200010203000002103030331002303000200120102031000221300003010003030"}, // 20    3/7
    {info: "INFO: V25-34-19-03 C02-14-88 D0000010000030000000000000000 T000004 E017 S00.390 #9x9=3-112122001102001212101211011020110121202121112112020101011101103210032203101201000"}, // 21 vv 5/7
    {info: "INFO: V38-16-16-11 C00-33-90 D0000010000000000000000000000 T000001 E021 S00.392 #9x9=3-102030211201300102312003020000230013302101000020102322001321001100000310230012002"}, // 22    4/7
    {info: "INFO: V27-33-15-06 C00-16-90 D0000000000000000000100000000 T000001 E017 S00.415 #9x9=3-111100211010321312223003001110010011200210301110022021121111002022101011101302110"}, // 23 ^  3/7
    {info: "INFO: V29-31-13-08 C00-06-90 D0000000000000000000000001000 T000001 E013 S00.462 #9x9=3-301102110012011123011121110132000120200111102100100300230130120112101112020031003"}, // 24    4/7
    {info: "INFO: V27-28-25-01 C02-08-88 D1200030000000000000000000000 T001717 E028 S00.499 #9x9=3-212010221001221100111101022210110201201012100102220132121102201000212010212020120"}, // 25 vv 5/7
    {info: "INFO: V31-24-21-05 C00-12-90 D0000000000000010000000000000 T000001 E024 S00.521 #9x9=3-211010012011223021120003001012320102021021030210201100102121320020100001021102212"}, // 26 ^  3/7
    {info: "INFO: V33-21-21-06 C00-36-90 D0100000000000000000000000000 T000001 E027 S00.527 #9x9=3-212030303102000300010102003121220102201012211102201002220120100101002030012211102"}, // 27 ^  3/7
    {info: "INFO: V22-39-18-02 C13-17-77 D0032232332000100202330000000 T028844 E024 S00.550 #9x9=3-110110211022121111201100011201122010102001330012210211210111011021112121102112001"}, // 28    5/7
    {info: "INFO: V23-37-19-02 C04-34-86 D0000000010030310010000000000 T000016 E042 S00.562 #9x9=3-210220210101101120021111021102121211111100110111210111210001202133222101000100122"}, // 29    5/7
    {info: "INFO: V43-11-11-16 C02-36-88 D0001000302000000100000000000 T000006 E017 S00.568 #9x9=3-022000033210130300121300100002002213001031200331303003000000302002003012303000001"}, // 30    5/7
    {info: "INFO: V29-25-25-02 C01-31-89 D0100000000000020000000000000 T000005 E009 S00.581 #9x9=3-021212120120102100012020013210211210102002100201112222002110021300212010002101212"}, // 31 ^  4/7
    {info: "INFO: V24-34-22-01 C01-13-89 D0100000001300000000000000000 T000014 E045 S00.657 #9x9=3-110212012111201202021110211201011012111210211020021020103120202202101110102012011"}, // 32 ^^ 3/7
    {info: "INFO: V22-38-20-01 C07-05-83 D0003300000000003020000000000 T005698 E041 S00.693 #9x9=3-210112121012200210111021201112010111110102211111220101103011010220011201011212022"}, // 33    6/7
    {info: "INFO: V43-12-09-17 C00-33-90 D0000000010000000000010000000 T000001 E037 S00.738 #9x9=3-003110130100202000230323103030000020001031200302300303031230000000000030111303210"}, // 34 ^  5/7
    {info: "INFO: V44-11-08-18 C05-09-85 D0012220000000000000000000000 T000402 E064 S00.934 #9x9=3-030003120003210000000030032330030001000000031330333002000211031301201102021030030"}, // 35 ^^ 4/7
    {info: "INFO: V45-10-07-19 C04-37-86 D0100000000000030012300000000 T000011 E051 S00.978 #9x9=3-230002133000311000100011300213032012000030003303321000030001200030003303300030000"}, // 36 ^  5/7
    {info: "INFO: V28-32-14-07 C02-14-88 D0000000000010032010000000000 T000005 E032 S01.005 #9x9=3-102012010121211002110211131202011102110101031021103020111110033032100200001210310"}, // 37    6/7
    {info: "INFO: V25-34-19-03 C09-06-81 D0000323203003220000000000000 T000019 E055 S01.030 #9x9=3-010212012211001021111022100122310121001011012211101210031121113011001200202102120"}, // 38    6/7
    {info: "INFO: V22-40-16-03 C09-21-81 D3302320000001000023300000000 T026199 E041 S01.093 #9x9=3-210111111022012011101211101012031112210001210103001202120031111121002011101212111"}, // 39 v  7/7
    {info: "INFO: V23-36-21-01 C06-08-84 D0320322000000000000000000000 T010880 E067 S02.004 #9x9=3-120110201002111122212010220110202012111120210112010111011112001311021022011201210"}, // 40 ^^ 5/7
];


/*****************************************************************************
 * Parse URL options
 *****************************************************************************/
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
    if (challengeOption.length > 0) {
        options.challenges = [];
        for (let index = 0; index < challengeOption.length; index++) {
            /* Convert URL special characters */
            challengeOption[index] = challengeOption[index].replace("%3E",'>');

            /* Insert it to manual challenges table */
            options.challenges.push({info: challengeOption[index]});
        }

        /* Set manual challenges to be played */
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



