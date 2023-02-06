class Chicken extends MovableObjekt {
    imageWalk = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    imageDead = [
        './img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];
    height = 60;
    width = 40;
    y = this.canvasHeight - this.height - 59;
    level1 = new Level1();
    level2 = new Level2();
    level3 = new Level3();
    offsetLeft = 2;
    offsetRight = 5;
    offsetTop = 5;
    offsetBottom = 10;

    constructor(level) {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.speed = 0.15 + Math.random() * 0.5;
        this.checkCurrentLevel(level);
        this.x = this.currentLevel.levelStartX + Math.random() * this.currentLevel.howLongLevelX;
        this.loadImages(this.imageWalk);
        this.loadImages(this.imageDead);
        this.animate();
    }
}
