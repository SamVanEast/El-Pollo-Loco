class MovableObjekt extends DrawableObject {
    speed = .1;
    otherDirection = false;
    speedY = 0;
    acceleration = .9;
    energy = 100;
    lastHit = 0;
    currentLevel;
    dead = false;
    gravityInterval;

    /**
     * calculates the gravity
     */
    applyGravity() {
        this.gravityInterval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    /**
     * 
     * @returns is the character across the ground
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 150;
        }
    }

    /**
     * generate a random direction
     */
    generateRandonDirection() {
        let randomNumber = Math.floor(Math.random() * 11);
        if (randomNumber > 5) {
            this.moveLeft();
        }
        if (randomNumber <= 5) {
            this.moveRight();
        }
    }

    /**
     * run in direction right
     */
    moveRight() {
        this.otherDirection = true;
        let moveRightIntervall = setInterval(() => {
            this.x += this.speed;
            if (this.x >= this.currentLevel.levelEndX) {
                clearInterval(moveRightIntervall);
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    /**
     * run in direction left
     */
    moveLeft() {
        this.otherDirection = false;
        let moveLeftIntervall = setInterval(() => {
            this.x -= this.speed;
            if (this.x <= this.currentLevel.levelStartX) {
                clearInterval(moveLeftIntervall);
                this.moveRight();
            }
        }, 1000 / 60);
    }

    /**
     * checks which level is current
     * @param {string} level current level
     */
    checkCurrentLevel(level) {
        if (level == 'level1') {
            this.currentLevel = this.level1;
        }
        if (level == 'level2') {
            this.currentLevel = this.level2;
        }
        if (level == 'level3') {
            this.currentLevel = this.level3;
        }
    }

    /**
     * 
     * @param {class} mo information about the movable object
     * @returns Does the character colide with the object
     */
    isColliding(mo) {
        return this.x + this.width - (this.offsetRight - this.offsetLeft) > mo.x + mo.offsetLeft &&
            this.y + this.height - (this.offsetBottom - this.offsetTop) > mo.y + mo.offsetTop &&
            this.x + this.offsetLeft < mo.x + mo.width - (mo.offsetRight - mo.offsetLeft) &&
            this.y + this.offsetTop < mo.y + mo.height - (mo.offsetBottom - mo.offsetTop);
    }

    /**
     * Drains some life from the character
     */
    hit() {
        this.energy -= .5;
        hurtSound.play();
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * 
     * @returns last injury was over a second ago
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    /**
     * 
     * @returns it no longer has a life
     */
    isDead() {
        return this.energy == 0
    }

    /**
     * Displays the animation on dead or running
     */
    animate() {
        this.generateRandonDirection();
        setInterval(() => {
            if (this.dead) {
                this.playAnimation(this.imageDead);
            } else {
                this.playAnimation(this.imageWalk);
            }
        }, 200);
    }

    /**
     * plays the sound of a breaking bottle
     */
    splashBottleSound() {
        if (splashBottleSound.currentTime > .5) {
            splashBottleSound.pause();
            splashBottleSound.currentTime = 0;
        }
        if (splashBottleSound.currentTime < .5) {
            splashBottleSound.play();
        }
    }
}