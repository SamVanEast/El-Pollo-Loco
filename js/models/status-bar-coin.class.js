class StatusBarCoin extends StatusBar {
    imagesStatusBar = [
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];
    y = 45;
    classItem = new SetCoin();
    howManyCollected = 0;
    howManyAsNumber = 26;


    constructor() {
        super().loadImages(this.imagesStatusBar);
        this.calcNumberOfItemsInPercent();
    };
}