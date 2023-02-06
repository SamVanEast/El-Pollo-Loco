class Character extends MovableObjekt {
    imagesCharacterWalk = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];
    imagesCharacterJumping = [
        './img/2_character_pepe/3_jump/J-31.png',
        './img/2_character_pepe/3_jump/J-32.png',
        './img/2_character_pepe/3_jump/J-33.png',
        './img/2_character_pepe/3_jump/J-34.png',
        './img/2_character_pepe/3_jump/J-35.png',
        './img/2_character_pepe/3_jump/J-36.png',
        './img/2_character_pepe/3_jump/J-37.png',
        './img/2_character_pepe/3_jump/J-38.png',
        './img/2_character_pepe/3_jump/J-39.png'
    ];
    imagesCharacterDead = [
        './img/2_character_pepe/5_dead/D-51.png',
        './img/2_character_pepe/5_dead/D-52.png',
        './img/2_character_pepe/5_dead/D-53.png',
        './img/2_character_pepe/5_dead/D-54.png',
        './img/2_character_pepe/5_dead/D-55.png',
        './img/2_character_pepe/5_dead/D-56.png',
        './img/2_character_pepe/5_dead/D-57.png'
    ];
    imagesCharacterHurt = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png',
    ];
    imagesCharacterIdle = [
        './img/2_character_pepe/1_idle/idle/I-1.png',
        './img/2_character_pepe/1_idle/idle/I-2.png',
        './img/2_character_pepe/1_idle/idle/I-3.png',
        './img/2_character_pepe/1_idle/idle/I-4.png',
        './img/2_character_pepe/1_idle/idle/I-5.png',
        './img/2_character_pepe/1_idle/idle/I-6.png',
        './img/2_character_pepe/1_idle/idle/I-7.png',
        './img/2_character_pepe/1_idle/idle/I-8.png',
        './img/2_character_pepe/1_idle/idle/I-9.png',
        './img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    imagesCharacterLongIdle = [
        './img/2_character_pepe/1_idle/long_idle/I-11.png',
        './img/2_character_pepe/1_idle/long_idle/I-12.png',
        './img/2_character_pepe/1_idle/long_idle/I-13.png',
        './img/2_character_pepe/1_idle/long_idle/I-14.png',
        './img/2_character_pepe/1_idle/long_idle/I-15.png',
        './img/2_character_pepe/1_idle/long_idle/I-16.png',
        './img/2_character_pepe/1_idle/long_idle/I-17.png',
        './img/2_character_pepe/1_idle/long_idle/I-18.png',
        './img/2_character_pepe/1_idle/long_idle/I-19.png',
        './img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    lastTimeofMovment;
    height = 280;
    width = 100;
    x = -100;
    y = this.canvasHeight - this.height - 50;
    speed = 4;
    endboss = new Endboss();
    offsetLeft = 15;
    offsetRight = 45;
    offsetTop = 110;
    offsetBottom = 124;
    speedY = 0;
    acceleration = 4.5;


    constructor() {
        super();
        this.loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.lastTimeofMovment = new Date().getTime();
        this.loadAllImage()
        this.applyGravity();
        this.animate();
    }

    /**
     * loads all images into the cache
     */
    loadAllImage() {
        this.loadImages(this.imagesCharacterWalk);
        this.loadImages(this.imagesCharacterJumping);
        this.loadImages(this.imagesCharacterDead);
        this.loadImages(this.imagesCharacterHurt);
        this.loadImages(this.imagesCharacterIdle);
        this.loadImages(this.imagesCharacterLongIdle);
    }

    /**
     * calls all animations
     */
    animate() {
        this.movementCharcters();
        this.playCharacterAnimation();
    }

    /**
     * pauses the running noise
     * checks which movements are made
     */
    movementCharcters() {
        setInterval(() => {
            this.clearSound();
            this.checkWalkingRight();
            this.checkWalkingLeft();
            this.checkJump();
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }

    /**
     * pauses the running noise
     */
    clearSound() {
        walkingSound.pause();
    }

    /**
     * checks if it runs to the right
     */
    checkWalkingRight() {
        if (this.world.keyboard.RIGHT && this.x < this.endboss.gameEndX ||
            this.world.keyboard.D && this.x < this.endboss.gameEndX) {
            this.x += this.speed;
            this.otherDirection = false;
            walkingSound.play();
        }
    };

    /**
     * checks if it runs to the left
     */
    checkWalkingLeft() {
        if (this.world.keyboard.LEFT && this.x > 0 ||
            this.world.keyboard.A && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;
            walkingSound.play();
        }
    };

    /**
     * checks if it jumps
     */
    checkJump() {
        if (this.world.keyboard.UP && !this.isAboveGround() ||
            this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.speedY = 40.5;
        }
        if (this.speedY > 0) {
            jumpSound.play();
        }
        if (!this.isAboveGround()) {
            jumpSound.pause();
            jumpSound.currentTime = 0;
        }
    };

    /**
     * depending in which movement he makes, the right pictures are painted
     */
    playCharacterAnimation() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.imagesCharacterDead);
                this.checkDeadAnimation();
            } else if (this.isHurt()) {
                this.playAnimation(this.imagesCharacterHurt);
            } else if (this.isAboveGround()) {
                this.jumpAnimation();
            } else if (this.checkisHeWalking()) {
                this.whenMovment();
                this.playAnimation(this.imagesCharacterWalk);
            } else if (this.howLongWithoutMovment()) {
                this.playAnimation(this.imagesCharacterIdle);
            } else if (!this.howLongWithoutMovment()) {
                this.withoutMovment();
            }
            this.checkWithoutLongMovment();
        }, 150);
    }

    /**
     * check if the dead animation is ready
     */
    checkDeadAnimation() {
        if (this.playAnimation(this.imagesCharacterDead)) {
            youLost();
        }
    }

    /**
     * paint the jump pictures
     */
    jumpAnimation() {
        this.whenMovment();
        this.playAnimation(this.imagesCharacterJumping);
    }

    /**
     * 
     * @returns when the run keys are pressed
     */
    checkisHeWalking() {
        return this.world.keyboard.D && this.x < 13500 ||
            this.world.keyboard.RIGHT && this.x < 13500 ||
            this.world.keyboard.A && this.x > 0 ||
            this.world.keyboard.LEFT && this.x > 0;
    }

    /**
     * when the character does not move
     */
    withoutMovment() {
        this.playAnimation(this.imagesCharacterLongIdle);
        snoreSound.play();
    }

    /**
     * check if the character has not done anything for a long time 
     */
    checkWithoutLongMovment() {
        if (this.world.keyboard.EKeyUp) {
            this.world.keyboard.EKeyUp = false;
            this.whenMovment();
        }
    }

    /**
     * save his last move
     */
    whenMovment() {
        this.lastTimeofMovment = new Date().getTime();
        snoreSound.pause();
        snoreSound.currentTime = 0;
    }

    /**
     * compare since when he has not moved 
     * @returns has not moved for 30s
     */
    howLongWithoutMovment() {
        let timepassed = new Date().getTime() - this.lastTimeofMovment;
        timepassed = timepassed / 1000;
        return timepassed < 30;
    }
}


