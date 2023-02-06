class World {
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    drawableObject = new DrawableObject();
    character = new Character();
    cloud = new Cloud('./img/5_background/layers/4_clouds/1.png', -1000);
    level1 = level1;
    level2 = level2;
    level3 = level3;
    endboss = new Endboss(this.character);
    statusBarHealth = new StatusBarHealth();
    statusBarCoin = new StatusBarCoin();
    statusBarBottle = new StatusBarBottle();
    statusBarHealthEndboss = new StatusBarHealthEndboss();
    setCoin = new SetCoin('loadCoinsGo');
    setBottle = new SetBottle('loadBottlesGo');
    throwableObject = [];
    backgroundObjekts = [];
    clouds = [];
    beginningBackground = -1438;
    howLongLevels = this.level1.howLongLevel + this.level2.howLongLevel + this.level3.howLongLevel;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.loadBackgroundServalTimes();
        this.loadClouds();
        this.draw();
        this.run();
        this.setWorld();
        backgroundSound.play();
    }

    /**
     * loads the background several times
     */
    loadBackgroundServalTimes() {
        let xForBackground = this.beginningBackground;
        for (let i = 0; i < this.howLongLevels; i++) {
            this.pushFirstBackground(xForBackground);
            xForBackground += 719;
            this.pushSecondBackground(xForBackground);
            xForBackground += 719;
        }
    }

    /**
     * Loads the first part from background
     * @param {number} xForBackground x-coordinate
     */
    pushFirstBackground(xForBackground) {
        this.backgroundObjekts.push(
            new BackgroundObjekt('./img/5_background/layers/air.png', xForBackground),
            new BackgroundObjekt('./img/5_background/layers/3_third_layer/1.png', xForBackground),
            new BackgroundObjekt('./img/5_background/layers/2_second_layer/1.png', xForBackground),
            new BackgroundObjekt('./img/5_background/layers/1_first_layer/1.png', xForBackground)
        )

    }

    /**
     * Loads the second part from the background
     * @param {number} xForBackgroundc
     */
    pushSecondBackground(xForBackground) {
        this.backgroundObjekts.push(
            new BackgroundObjekt('./img/5_background/layers/air.png', xForBackground),
            new BackgroundObjekt('./img/5_background/layers/3_third_layer/2.png', xForBackground),
            new BackgroundObjekt('./img/5_background/layers/2_second_layer/2.png', xForBackground),
            new BackgroundObjekt('./img/5_background/layers/1_first_layer/2.png', xForBackground)
        )
    }

    /**
     * load all clouds, depending on how long the background is
     */
    loadClouds() {
        let forEachBackground = this.beginningBackground;
        for (let i = 0; i < this.howLongLevels; i++) {
            for (let j = 0; j < 1; j++) {
                let xCloud = forEachBackground + Math.random() * 1438;
                this.clouds.push(
                    new Cloud('./img/5_background/layers/4_clouds/1.png', xCloud),
                    new Cloud('./img/5_background/layers/4_clouds/2.png', xCloud + this.cloud.width + Math.random() * 200)
                )
            }
            forEachBackground += 1438;
        }
    }

    /**
     * draws the canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addBackgroundToMap();
        this.addItemsToMap();
        this.addEnemiesToMap();
        this.addStatusBars();
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.requestAnimationDraw();
    }

    /**
     * Draws the background
     */
    addBackgroundToMap() {
        this.addObjectsToMap(this.backgroundObjekts);
        this.addObjectsToMap(this.clouds);
    }

    /**
     * Draws the items
     */
    addItemsToMap() {
        this.addObjectsToMap(this.setBottle.howMany);
        this.addObjectsToMap(this.setCoin.howMany);
        this.addObjectsToMap(this.throwableObject);
    }

    /**
     * draws the enemies
     */
    addEnemiesToMap() {
        this.addObjectsToMap(this.level1.enemies);
        this.addObjectsToMap(this.level2.enemies);
        this.addObjectsToMap(this.level3.enemies);
        this.addToMap(this.endboss);
    }

    /**
     * Draws all status bars
     */
    addStatusBars() {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);
    }

    /**
     * repeats the sign as often as possible
     */
    requestAnimationDraw() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * draws all individual classes from the array
     * @param {array} object With Classen
     */
    addObjectsToMap(object) {
        object.forEach((o, i) => {
            this.checkCloud(object, o, i);
            this.addToMap(o);
        });

    }

    /**
     * checks if the cloud flies out of the map
     * @param {array} object array with all clouds
     * @param {class} o the single cloud
     * @param {number} i the position in the array
     */
    checkCloud(object, o, i) {
        if (o.constructor.name == 'Cloud' && o.x < -1483) {
            object.splice(i, 1)
            let xCloud = this.howOften * 1438;
            this.checkCloudSrc(object, xCloud, o);
        }
    }

    /**
     * checks which cloud flies out of the map and inserts the same one again
     * @param {array} object array with all clouds
     * @param {number} xCloud array with all clouds
     * @param {class} o the single cloud
     */
    checkCloudSrc(object, xCloud, o) {
        //////////////////// PC version \\\\\\\\\\\\\\\\\\\\

        // if (o.img.src == 'http://127.0.0.1:5500/img/5_background/layers/4_clouds/1.png') {
        //     object.push(
        //         new Cloud('./img/5_background/layers/4_clouds/1.png', xCloud)
        //     )
        // }
        // if (o.img.src == 'http://127.0.0.1:5500/img/5_background/layers/4_clouds/2.png') {
        //     object.push(
        //         new Cloud('./img/5_background/layers/4_clouds/2.png', xCloud)
        //     )
        // }

        ///////////////////  !!server vision!!   \\\\\\\\\\\\\\\\\\\\\\\

        if (o.img.src == 'https://samuel-haas.developerakademie.net/Modul-11/El-Pollo-Locco/img/5_background/layers/4_clouds/1.png') {
            object.push(
                new Cloud('./img/5_background/layers/4_clouds/1.png', xCloud)
            )
        }
        if (o.img.src == 'https://samuel-haas.developerakademie.net/Modul-11/El-Pollo-Locco/img/5_background/layers/4_clouds/2.png') {
            object.push(
                new Cloud('./img/5_background/layers/4_clouds/2.png', xCloud)
            )
        }
    }

    /**
     * draws the class on the canvas
     * @param {class} mo 
     */
    addToMap(mo) {
        this.checkMirrorImage(mo);
        try {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        } catch (error) {
            console.log('Funktionier nicht ', mo.img.src);
        }
        this.checkRestoreMirrorImage(mo);
    }

    /**
     * check if the image should be drawn mirror-inverted
     * @param {class} mo 
     */
    checkMirrorImage(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
    }

    /**
     * check if the image is mirrored and needs to be restored 
     * @param {class} mo 
     */
    checkRestoreMirrorImage(mo) {
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

    /**
     * Invite the class World into the class Character
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * starts to query the collisions
     */
    run() {
        setInterval(() => {
            this.checkBottleCollision();
            this.checkThrowableObjects();
            this.checkEnemyCollision();
            this.checkEndbossCollision();
            this.checkItemsCollision();
        }, 1000 / 60);
    }

    /**
     * checks whether the bottle should be thrown or extinguished
     */
    checkThrowableObjects() {
        if (this.keyboard.EKeyDown &&
            this.keyboard.EKeyUp && this.statusBarBottle.howManyCollected > 0) {
            this.bottleIsThrown();
        }
        this.throwableObject.forEach((bottle, i) => {
            if (!bottle.throw) {
                this.throwableObject.splice(i, 1);
            }
        })
    }

    /**
     * bottle is thrown
     */
    bottleIsThrown() {
        this.statusBarBottle.howManyCollected--;
        this.statusBarBottle.calcNumberOfItemsInPercent();
        let bottle = new ThrowableObject(this.character);
        this.throwableObject.push(bottle);
        this.keyboard.EKeyDown = false;
        this.keyboard.EKeyUp = false;
        this.flyingBottleSound();
    }

    flyingBottleSound() {
        if (flyingBottleSound.currentTime > .001) {
            flyingBottleSound.pause();
            flyingBottleSound.currentTime = 0;
        }
        if (flyingBottleSound.currentTime < .001) {
            flyingBottleSound.play();
        }
    }

    /**
     * checks if the bottle collades
     */
    checkBottleCollision() {
        this.withEndboss();
        this.withEnemy();
    }

    /**
     * checks if the bottle collides with the endboss
     */
    withEndboss() {
        this.throwableObject.forEach((bottle) => {
            if (bottle.isColliding(this.endboss)) {
                bottle.hitEndboss = true;
                this.endboss.hurt = true;
            }
            if (bottle.hitEndboss && !bottle.splash) {
                this.endboss.isHit++;
            }
        });
    };

    /**
     * checks if the bottle collides with an enemy
     */
    withEnemy() {
        let allLevel = [this.level1, this.level2, this.level3]
        allLevel.forEach((level) => {
            level.enemies.forEach(enemy => {
                this.throwableObject.forEach((bottle) => {
                    if (bottle.isColliding(enemy)) {
                        bottle.hitEnemy = true;
                        enemy.speed = 0;
                        this.enemyIsDead(enemy);
                    }
                });
            });
        })
    };

    /**
     * checks if the character collides with an enemy
     */
    checkEnemyCollision() {
        let allLevel = [this.level1, this.level2, this.level3]
        for (let i = 0; i < allLevel.length; i++) {
            allLevel[i].enemies.forEach(enemy => {
                if (this.checkKillEnemy(enemy)) {
                    this.enemyIsDead(enemy);
                } if (this.character.isColliding(enemy) && !enemy.dead) {
                    this.charcterIsHit();
                }
            });
        }
    };

    /**
     * the enemy is dead
     * @param {class} enemy 
     * @returns is the charackter above the ground and falling down
     */
    checkKillEnemy(enemy) {
        return this.character.isColliding(enemy) &&
            this.character.speedY < 0 &&
            this.character.speedY > -45;
    };

    /**
     * the enemy is dead
     * @param {class} enemy 
     */
    enemyIsDead(enemy) {
        if (deadChickenSound.currentTime > 0.001) {
            deadChickenSound.pause();
            deadChickenSound.currentTime = 0;
        }
        enemy.speed = 0;
        enemy.dead = true;
        if (deadChickenSound.currentTime < 0.001) {
            deadChickenSound.play();
        }
    }

    /**
     * the character was hit
     */
    charcterIsHit() {
        this.character.hit();
        this.statusBarHealth.percentage = this.character.energy;
        this.statusBarHealth.setPercentage();
    }

    /**
     * check if the character collides with the Endboss
     */
    checkEndbossCollision() {
        if (this.character.isColliding(this.endboss)) {
            this.charcterIsHit();
        }
    };

    /**
     * check if the character collides with an item
     */
    checkItemsCollision() {
        let allSetItems = [this.setCoin, this.setBottle];
        let allStatusItems = [this.statusBarCoin, this.statusBarBottle];
        for (let i = 0; i < allSetItems.length; i++) {
            allSetItems[i].howMany.forEach((item, j) => {
                if (this.character.isColliding(item)) {
                    allStatusItems[i].howManyCollected++;
                    allStatusItems[i].calcNumberOfItemsInPercent();
                    allSetItems[i].howMany.splice(j, 1);
                    this.checkWichItemSoundShouldPlay(allStatusItems, i);
                }
            })
        }
    }

    /**
     * checks which music should be played
     */
    checkWichItemSoundShouldPlay(allStatusItems, i) {
        if (allStatusItems[i] == allStatusItems[1]) {
            collectBottleSound.pause();
            collectBottleSound.currentTime = 0;
            collectBottleSound.play();

        }
        if (allStatusItems[i] == allStatusItems[0]) {
            collectCoinSound.pause();
            collectCoinSound.currentTime = 0;
            collectCoinSound.play();
        }
    }
};