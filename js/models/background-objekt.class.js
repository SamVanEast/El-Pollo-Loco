class BackgroundObjekt extends MovableObjekt{
    width = 720;
    height = 480;
    y = this.canvasHeight - this.height;

    
    constructor(imagePath, x){
        super(). loadImage(imagePath);
        this.x = x;
    }
}