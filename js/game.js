let canvas;
let ctx;
let world;
let keyboard = new Keyboard;
let throwableObject;


/**
 * start drawing canvas
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    ctx = canvas.getContext('2d');
}

window.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
    }
    if (event.keyCode == 69) {
        keyboard.EKeyDown = true;
    }
    if (event.keyCode == 65) {
        keyboard.A = true;
    }
    if (event.keyCode == 27) {
        keyboard.ESC = true;
    }
});

window.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        keyboard.D = false;
    }
    if (event.keyCode == 69) {
        keyboard.EKeyUp = true;
    }
    if (event.keyCode == 65) {
        keyboard.A = false;
    }
    if (event.keyCode == 27) {
        keyboard.ESC = false;
    }
});

/**
 * he runs to the left
 */
function walkLeftMobile() {
    keyboard.LEFT = true;
};

/**
 * he runs to the right
 */
function walkRightMobile() {
    keyboard.RIGHT = true;

};

/**
 * stops running
 */
function stopWalkingmobile() {
    keyboard.LEFT = false;
    keyboard.RIGHT = false;
}

/**
 * is jumping
 */
function jumpMobile() {
    keyboard.UP = true;
};

/**
 * stops jumping
 */
function stopJumpingMobile() {
    keyboard.UP = false;
}

/**
 * throws bottle
 */
function throwBottleStartMobile() {
    keyboard.EKeyUp = true;
};

/**
 * stops throwing bottle
 */
function throwBottleEndMobile() {
    keyboard.EKeyDown = true;
};

