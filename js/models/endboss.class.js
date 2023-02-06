class Endboss extends MovableObjekt {
    imageEndbossWalk = [
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    imageEndbossAlert = [
        './img/4_enemie_boss_chicken/2_alert/G5.png',
        './img/4_enemie_boss_chicken/2_alert/G6.png',
        './img/4_enemie_boss_chicken/2_alert/G7.png',
        './img/4_enemie_boss_chicken/2_alert/G8.png',
        './img/4_enemie_boss_chicken/2_alert/G9.png',
        './img/4_enemie_boss_chicken/2_alert/G10.png',
        './img/4_enemie_boss_chicken/2_alert/G11.png',
        './img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    imageEndbossAttack = [
        './img/4_enemie_boss_chicken/3_attack/G13.png',
        './img/4_enemie_boss_chicken/3_attack/G14.png',
        './img/4_enemie_boss_chicken/3_attack/G15.png',
        './img/4_enemie_boss_chicken/3_attack/G16.png',
        './img/4_enemie_boss_chicken/3_attack/G17.png',
        './img/4_enemie_boss_chicken/3_attack/G18.png',
        './img/4_enemie_boss_chicken/3_attack/G19.png',
        './img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    imageEndbossHurt = [
        './img/4_enemie_boss_chicken/4_hurt/G21.png',
        './img/4_enemie_boss_chicken/4_hurt/G22.png',
        './img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    imageEndbossDead = [
        './img/4_enemie_boss_chicken/5_dead/G24.png',
        './img/4_enemie_boss_chicken/5_dead/G25.png',
        './img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    speed = 25;
    height = 300;
    width = 200;
    y = this.canvasHeight - this.height - 50;
    x = 12942;
    gameEndX = 13500;
    offsetLeft = 0;
    offsetRight = 10;
    offsetTop = 60;
    offsetBottom = 75;
    character;
    hurt = false;
    dead = false;
    currentNumber = 0;
    isHit = 0;


    constructor(character) {
        super().loadImage('./img/4_enemie_boss_chicken/2_alert/G5.png');
        if (character !== undefined) {
            this.character = character;
            this.loadImages(this.imageEndbossWalk);
            this.loadImages(this.imageEndbossAlert);
            this.loadImages(this.imageEndbossAttack);
            this.loadImages(this.imageEndbossHurt);
            this.loadImages(this.imageEndbossDead);
            this.animation();
        }
    }

    /**
     * starts the animation of the endboss
     */
    animation() {
        setInterval(() => {
            this.distanceChracterToEndboss = (this.x + this.offsetLeft) - (this.character.x + this.character.width - (this.character.offsetRight - this.character.offsetLeft));
            this.checkOtherDirection();
            this.checkEndbossDead();
            this.checkEndbossAttack();
            this.checkOtherDirection();
        }, 100);
    }

    /**
     * check if the endboss should turn
     */
    checkOtherDirection() {
        if (this.distanceChracterToEndboss < -100) {
            this.otherDirection = true;
        } else {
            this.otherDirection = false;
        }
    }

    /**
     * checks if the character is too close and goes into attack mode
     */
    checkEndbossAttack() {
        if (this.distanceChracterToEndboss > 500 && !this.hurt && !this.dead) {
            this.playAnimation(this.imageEndbossAlert);
            endbossSound.pause();
            backgroundSound.play();
            endbossSound.currentTime = 0;
        } else if (this.checkIfShouldWalk()) {
            this.endbossIsWalking();
        } else if (this.distanceChracterToEndboss <= 10 && !this.hurt && !this.dead ||
            this.distanceChracterToEndboss <= -10 && !this.hurt && !this.dead ) {
            this.endbossAttack();
        }
    }

    /**
     * 
     * @returns Whether the character is close enough to run
     */
    checkIfShouldWalk() {
        return this.distanceChracterToEndboss <= 500 && this.distanceChracterToEndboss > 10 && !this.hurt && !this.dead ||
            this.distanceChracterToEndboss >= -500 && this.distanceChracterToEndboss < -210 && !this.hurt && !this.dead;
    }

    /**
     * invites the running pictures and the music to it
     */
    endbossIsWalking() {
        backgroundSound.pause();
        endbossSound.play();
        this.playAnimation(this.imageEndbossWalk);
        if (this.otherDirection) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }

    }

    /**
     * attack animation and attack direction
     */
    endbossAttack() {
        this.playAnimation(this.imageEndbossAttack);
        if (this.distanceChracterToEndboss <= 10 && this.distanceChracterToEndboss >= -80) {
            if (this.otherDirection) {
                this.x += (this.speed + 20);
            } else {
                this.x -= (this.speed + 20);
            }
        }
    }

    /**
     * check if the boss has been injured and if he is dead
     */
    checkEndbossDead() {
        if (this.hurt && !this.dead) {
            this.playSoundWhenHit();
            this.showHurt();
        } else if (this.isHit >= 3 && this.dead) {
            this.hurt = false;
            this.speed = 0
            if (this.playAnimation(this.imageEndbossDead)) {
                for (let i = 1; i < 9999; i++) window.clearInterval(i);
                setTimeout(() => {
                    gameOver();
                }, 1000);
            }
        }
    }

    /**
     * load the hurt animation and check if he is dead
     */
    showHurt() {
        this.playAnimation(this.imageEndbossHurt);
        setTimeout(() => {
            this.hurt = false;
        }, 1000);
        if (this.isHit >= 3) {
            this.dead = true;
        }
    };

    /**
     * play the music when the bottle breaks down
     */
    playSoundWhenHit() {
        if (this.isHit > 0 && this.isHit < this.currentNumber) {
            this.currentNumber++;
            this.splashBottleSound();
        }
    }
}