let backgroundSound = new Audio('./audio/backgroundmusic.mp3');//
let collectBottleSound = new Audio('./audio/bottle.mp3');//
let collectCoinSound = new Audio('./audio/coin.mp3');//
let deadChickenSound = new Audio('./audio/dead-chicken.mp3');//
let endbossSound = new Audio('./audio/endboss_sound.mp3');//
let flyingBottleSound = new Audio('./audio/flyingBottles.mp3');//
let hurtSound = new Audio('./audio/hurt.mp3');//
let jumpSound = new Audio('./audio/jump.mp3');// 
let loseSound = new Audio('./audio/lose.mp3');
let snoreSound = new Audio('./audio/snore.mp3');//
let splashBottleSound = new Audio('./audio/splashBottle.mp3');//
let walkingSound = new Audio('./audio/walk.mp3');//
let winSound = new Audio('./audio/win_sound.mp3');

/**
 * puts all the music on mute
 */
function muteAllSounds() {
    backgroundSound.muted = true;
    collectBottleSound.muted = true;
    collectCoinSound.muted = true;
    deadChickenSound.muted = true;
    endbossSound.muted = true;
    flyingBottleSound.muted = true;
    hurtSound.muted = true;
    jumpSound.muted = true;
    loseSound.muted = true;
    snoreSound.muted = true;
    splashBottleSound.muted = true;
    walkingSound.muted = true;
    winSound.muted = true;
}


/**
 * puts all the music on loud
 */
function entmuteAllSounds() {
    backgroundSound.muted = false;
    collectBottleSound.muted = false;
    collectCoinSound.muted = false;
    deadChickenSound.muted = false;
    endbossSound.muted = false;
    flyingBottleSound.muted = false;
    hurtSound.muted = false;
    jumpSound.muted = false;
    loseSound.muted = false;
    snoreSound.muted = false;
    splashBottleSound.muted = false;
    walkingSound.muted = false;
    winSound.muted = false;
}


/**
 * interrupts all the music 
 */
function stopAllSound(){
    backgroundSound.pause();
    collectBottleSound.pause();
    collectCoinSound.pause();
    deadChickenSound.pause();
    endbossSound.pause();
    flyingBottleSound.pause();
    hurtSound.pause();
    jumpSound.pause();
    loseSound.pause();
    snoreSound.pause();
    splashBottleSound.pause();
    walkingSound.pause();
    winSound.pause();
}