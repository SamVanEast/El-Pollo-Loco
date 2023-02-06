class StatusBarBottle extends StatusBar{
    imagesStatusBar = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',

    ];
    y = 100;
    classItem = new SetBottle();
    howManyCollected = 0;
    howManyAsNumber = 7;

    
    constructor() {
        super().loadImages(this.imagesStatusBar);
        this.calcNumberOfItemsInPercent();
    };
}