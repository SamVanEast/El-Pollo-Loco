let isFullScreen = false;
let closeFullScreenInterval;

/**
 * checks the width of the screen 
 */
function howIsInnerSize() {
    checkTurnMobile();
    if (window.innerHeight < 480 || window.innerWidth < 720) {
        document.getElementById('start-screen-fullscreen').style = 'display: none';
        document.getElementById('game-screen-fullscreen').style = 'display: none';
        document.getElementById('button-mobile').style = '';
    }
}

/**
 * start the game
 */
function startGame() {
    gameStarted = true;
    hideAll();
    init();
    document.getElementById('start-screen').style = 'display: none';
    document.getElementById('game-screen').style = '';
}

/**
 * hides all divs
 */
function hideAll() {
    document.getElementById('start-screen').style = 'display: none';
    document.getElementById('game-screen').style = 'display: none';
    document.getElementById('description').style = 'display: none';
    document.getElementById('end-screen').style = 'display: none';
}

/**
 * switches the music to mute or loud
 */
function soundOffOrOn() {
    let soundStart = document.getElementById('sound-icon');
    let soundGame = document.getElementById('sound-icon-game');
    /////////////////////////// PC version \\\\\\\\\\\\\\\ß

    // if (soundStart.src == 'http://127.0.0.1:5500/img/icons/audio-remove.png' ||
    //     soundGame.src == 'http://127.0.0.1:5500/img/icons/audio-remove.png') {
    //     soundStart.src = './img/icons/audio-add.png';
    //     soundGame.src = './img/icons/audio-add.png';
    //     muteAllSounds();
    // } else {
    //     soundStart.src = './img/icons/audio-remove.png';
    //     soundGame.src = './img/icons/audio-remove.png';
    //     entmuteAllSounds();
    // }

    /////////// server vision \\\\\\\\\\\\\\

    if (soundStart.src == 'https://samuel-haas.developerakademie.net/Modul-11/El-Pollo-Locco/img/icons/audio-remove.png' ||
        soundGame.src == 'https://samuel-haas.developerakademie.net/Modul-11/El-Pollo-Locco/img/icons/audio-remove.png') {
        soundStart.src = './img/icons/audio-add.png';
        soundGame.src = './img/icons/audio-add.png';
        muteAllSounds();
    } else {
        soundStart.src = './img/icons/audio-remove.png';
        soundGame.src = './img/icons/audio-remove.png';
        entmuteAllSounds();
    }
}

/**
 * show the description
 */
function openDescription() {
    document.getElementById('description').style = '';
}

/**
 * hide the description
 */
function closeDescription() {
    document.getElementById('description').style = 'display: none';
}

/**
 * check if it should be fullsreen or not and change the image
 */
function fullscreenOrNot() {
    let fullscreenStart = document.getElementById('start-screen-fullscreen-img');
    let fullscreenGame = document.getElementById('game-screen-fullscreen-img');
    /////////////////////////// PC version \\\\\\\\\\\\\\\ß

    // if (fullscreenStart.src == 'http://127.0.0.1:5500/img/icons/fullscreen.png' ||
    //     fullscreenGame.src == 'http://127.0.0.1:5500/img/icons/fullscreen.png') {
    //     fullscreenStart.src = './img/icons/minimize.png';
    //     fullscreenGame.src = './img/icons/minimize.png';
    //     openFullScreen();
    // } else {
    //     fullscreenStart.src = './img/icons/fullscreen.png';
    //     fullscreenGame.src = './img/icons/fullscreen.png';
    //     closeFullScreen();
    // }

    /////////// server vision \\\\\\\\\\\\\\

    if (fullscreenStart.src == 'https://samuel-haas.developerakademie.net/Modul-11/El-Pollo-Locco/img/icons/fullscreen.png' ||
        fullscreenGame.src == 'https://samuel-haas.developerakademie.net/Modul-11/El-Pollo-Locco/img/icons/fullscreen.png') {
        fullscreenStart.src = './img/icons/minimize.png';
        fullscreenGame.src = './img/icons/minimize.png';
        openFullScreen();
    } else {
        fullscreenStart.src = './img/icons/fullscreen.png';
        fullscreenGame.src = './img/icons/fullscreen.png';
        closeFullScreen();
    }
}

/**
 * open the full screen
 */
async function openFullScreen() {
    if (!isFullScreen) {
        let canvas = document.getElementById('canvas');
        let divCanvas = document.getElementById('div-canvas');
        document.getElementById('headline').style = 'display: none';
        enterFullscreen(divCanvas);
        closeFullScreenWithEsc();
        canvas.style = 'width: 100%; height: 100vh;';
        setTimeout(() => {
            isFullScreen = true;
        }, 100);
    }
}

/**
 * open the full screen for canvas
 * @param {div} element 
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * close the full screen
 */
function closeFullScreen() {
    if (isFullScreen) {
        clearInterval(closeFullScreenInterval);
        let canvas = document.getElementById('canvas');
        canvas.style = '';
        exitFullscreen();
        isFullScreen = false;
        document.getElementById('headline').style = '';
    }
}

/**
 * close the full screen for canvas
 */
function exitFullscreen() {
    if (document.exitFullscreen && !document.fullscreenElement == null) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

/**
 * displays the won image
 */
function gameOver() {
    let endScreen = document.getElementById('end-screen');
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    stopAllSound();
    winSound.play();
    endScreen.style = '';
    endScreen.innerHTML = `
    <img src="img/5_background/first_half_background.png" alt="">
    <span class="end_screen_win">You Win</span>
    <div class="restart_button" onclick="restartGame()">Restart</div>
    `;
}

/**
 * displays the lost image
 */
function youLost() {
    let endScreen = document.getElementById('end-screen');
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    stopAllSound();
    loseSound.play();
    endScreen.style = '';
    endScreen.innerHTML = `
    <img src="img/5_background/first_half_background.png" alt="">
    <img src="./img/9_intro_outro_screens/game_over/you lost.png" alt="">
    <div class="restart_button" onclick="restartGame()">Restart</div>
    `;
}

/**
 * load the page new
 */
function restartGame() {
    window.location.href = './index.html';
}

window.addEventListener("resize", function () {
    checkWidthToSmall();
    widthIsHighEnough();
    checkTurnMobile();
});

/**
 * checks if the screen is too small
 */
function checkWidthToSmall() {
    if (window.innerWidth < 720 || window.innerHeight < 640) {
        document.getElementById('start-screen-fullscreen').style = 'display: none';
        document.getElementById('game-screen-fullscreen').style = 'display: none';
        document.getElementById('button-mobile').style = '';
    }
}

/**
 * checks if the screen is wide enough
 */
function widthIsHighEnough() {
    if (window.innerWidth > 720 && window.innerHeight > 640) {
        document.getElementById('start-screen-fullscreen').style = '';
        document.getElementById('game-screen-fullscreen').style = '';
        document.getElementById('button-mobile').style = 'display: none';
    }
}

/**
 * check if the phone is rotated
 */
function checkTurnMobile() {
    if (window.innerWidth < window.innerHeight && window.innerWidth < 720) {
        document.getElementById('turn-mobile').style = '';
    } else {
        document.getElementById('turn-mobile').style = 'display: none';
    }
}

/**
 * if the fullscreen mode is active, it is closed with ESC again
 */
function closeFullScreenWithEsc() {
    closeFullScreenInterval = setInterval(() => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement && isFullScreen) {
            fullscreenOrNot();
        }
    }, 1000 / 60);
}