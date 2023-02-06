class ThrowableObject extends MovableObjekt {
    imagesThrow = [
        './img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    imagesSplash = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    height = 100;
    width = 50;
    offsetLeft = 20;
    offsetRight = 30;
    offsetTop = 25;
    offsetBottom = 35;
    splash = true;
    throw = true;
    speed = 0;
    speedX = 20;
    speedY = 0;
    acceleration = 2;
    hitEndboss = false;
    hitEnemy = false;
    character;
    imageInterval;


    constructor(character) {
        super().character = character;
        this.x = character.x + character.width - (character.offsetRight - character.offsetLeft);
        this.y = character.y + this.height;
        if (character.otherDirection) {
            this.x = character.x;
        }
        this.loadImage(this.imagesThrow[0]);
        this.loadImages(this.imagesThrow);
        this.loadImages(this.imagesSplash);
        this.throwBottle(character);
    };

    /**
     * The bottle is thrown
     */
    throwBottle() {
        this.speedY = 20;
        this.applyGravity();
        if (this.character.otherDirection) {
            setInterval(() => {
                this.x -= this.speedX;
            }, 80);
        } else {
            setInterval(() => {
                this.x += this.speedX;
            }, 80);
        }
        this.checkWhatBottleHit();
    };

    /**
     * check if the bottle has hit something
     */
    checkWhatBottleHit() {
        this.imageInterval = setInterval(() => {
            if (this.y >= 330 || this.hitEndboss || this.hitEnemy) {
                clearInterval(this.gravityInterval);
                this.speedX = 0;
                splashBottleSound.pause();
                splashBottleSound.currentTime = 0;
                this.checkSplashImagesAreLoaded();
            } else {
                this.playAnimation(this.imagesThrow);
            }
        }, 100);
    };

    /**
     * checks if all images from the broken bottle have been loaded
     */
    checkSplashImagesAreLoaded() {
        if (this.playAnimation(this.imagesSplash)) {
            clearInterval(this.imageInterval);
            this.splash = false;
            this.throw = false;
            this.splashBottleSound();
        }
    }
}