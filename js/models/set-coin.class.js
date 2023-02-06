class SetCoin extends DrawableObject {
    images = [
        './img/8_coin/coin_1.png',
        './img/8_coin/coin_2.png'
    ];
    x = 50;
    y = this.canvasHeight - this.height - 50;
    height = 130;
    width = 100;
    offsetLeft = 45;
    offsetRight = 90;
    offsetTop = 60;
    offsetBottom = 120;


    constructor(loadCoinsGo) {
        super().loadImages(this.images)
        this.loadHowManyCoins(loadCoinsGo);
        this.loadImageCoin();
        this.animation();
    };

    /**
     * load all coins
     * @param {string} loadCoinsGo gives permission to load the coins
     */
    loadHowManyCoins(loadCoinsGo) {
        if (loadCoinsGo == 'loadCoinsGo') {
            this.howMany = this.allCoins();
        }
    };

    /**
     * 
     * @returns coins who should be loaded
     */
    allCoins() {
        return [
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin(),
            new SetCoin()
        ];
    }

    /**
     * load the image at a random position
     */
    loadImageCoin() {
        let areaX = (this.howLongLevels - 3) * 1438;
        let areaY = 270;
        this.x = 100 + Math.random() * areaX;
        this.y = 40 + Math.random() * areaY;
        this.loadImage(this.images[0]);
    }
}