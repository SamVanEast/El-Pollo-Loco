class DrawableObject {
    x = 100;
    y = 250;
    height = 150;
    width = 100;
    canvasHeight = 480;
    canvasWidth = 720;
    howMany = [];
    howManyCollected;
    img;
    imageCache = {};
    currentImage = 0;
    offsetLeft = 0;
    offsetRight = 0;
    offsetTop = 0;
    offsetBottom = 0;
    animationImages;
    level1 = new Level1();
    level2 = new Level2();
    level3 = new Level3();
    howLongLevels = this.level1.howLongLevel + this.level2.howLongLevel + this.level3.howLongLevel;

    /**
     * loads the first image
     * @param {string} path link to the image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * loads all images from the array into the cache
     * @param {array} array withimages
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

/**
 * loads a sequence of images 
 * @param {array} images with images
 * @returns  all images have been loaded once
 */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        return i == (images.length -1);
    }

    /**
     * lets load images in interval 
     */
    animation() {
        this.animationImages = setInterval(() => {
            this.playAnimation(this.images);
        }, 400);
    }

}