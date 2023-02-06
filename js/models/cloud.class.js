class Cloud extends MovableObjekt {
    y = 50;
    width = 500;
    height = 250;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.moveLeft();
    }

    /**
     * the clouds should move to the left
     */
    moveLeft() {
        let moveLeftIntervall = setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}