class StatusBar extends DrawableObject{
    imagesStatusBar;
    x = 10
    height = 60;
    width = 230;
    oneHundred = 100;
    percentage = 100;
    howManyAsNumber = 0;

    /**
     * calculate the percentage part
     */
    calcNumberOfItemsInPercent() {
        this.percentage = (this.oneHundred / this.howManyAsNumber) * this.howManyCollected;
        this.setPercentage();
    }

    /**
     * loads a picture 
     */
    setPercentage(){
        let path = this.imagesStatusBar[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * 
     * @returns which image should be loaded
     */
    resolveImageIndex(){
        if (this.percentage == 100){
            return 5
        }else if (this.percentage >= 80){
            return 4
        }else if (this.percentage >= 60){
            return 3
        }else if (this.percentage >= 40){
            return 2
        }else if (this.percentage > 20){
            return 1
        }else {
            return 0
        }
    }


}