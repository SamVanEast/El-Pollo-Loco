class StatusBarHealthEndboss extends StatusBar{
    imagesStatusBar = [
        './img/7_statusbars/2_statusbar_endboss/green.png'
    ]
    x = 200;
    y = 100;

    
    constructor(){
        super().loadImage(this.imagesStatusBar[0]);
    }
}