class Chick extends MovableObjekt {
    imageWalk = [
        './img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    imageDead = [
        './img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    height = 50;
    width = 40;
    y = this.canvasHeight - this.height - 59;
    level1 = new Level1();
    level2 = new Level2();
    level3 = new Level3();
    currentLevel;
    offsetLeft = 3;
    offsetRight = 5;
    offsetTop = 3;
    offsetBottom = 8;


    constructor(level) {
        super().loadImage('./img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.speed = 0.15 + Math.random() * 0.5;
        this.checkCurrentLevel(level);
        this.x = this.currentLevel.levelStartX + Math.random() * this.currentLevel.howLongLevelX;
        this.loadImages(this.imageWalk);
        this.loadImages(this.imageDead);
        this.animate();
    }
}