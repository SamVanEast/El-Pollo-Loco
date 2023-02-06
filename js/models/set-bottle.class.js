class SetBottle extends DrawableObject {
    images = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
    x = 50;
    y = this.canvasHeight - this.height + 20;
    height = 70;
    width = 40;
    offsetLeft = 20;
    offsetRight = 30;
    offsetTop = 25;
    offsetBottom = 35;


    constructor(loadBottlesGo) {
        super().loadImages(this.images);
        this.loadHowManyBottles(loadBottlesGo);
        this.loadImageBottle();
    };

    /**
     *  all bottles are loaded
     * @param {string} loadBottlesGo gives permission to load the bottles
     */
    loadHowManyBottles(loadBottlesGo) {
        if (loadBottlesGo == 'loadBottlesGo') {
            this.howMany = [
                new SetBottle(),
                new SetBottle(),
                new SetBottle(),
                new SetBottle(),
                new SetBottle(),
                new SetBottle(),
                new SetBottle()
            ]
        }
    };

    /**
     * load the image of the bottle
     */
    loadImageBottle() {
        let area = (this.howLongLevels - 3) * 1438;
        this.x = 100 + Math.random() * area;
        this.generateRandomBottleImage();
    }


    /**
     * generate a random image
     */
    generateRandomBottleImage() {
        let randomNumber = Math.floor(Math.random() * 11);
        if (randomNumber > 5) {
            this.loadImage(this.images[0]);
        }
        if (randomNumber <= 5) {
            this.loadImage(this.images[1]);
        }
    };

}