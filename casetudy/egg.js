class egg {
    constructor(width, height, x, y, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = image;
        // this.display= display;
    }

    draw() {
        let img = new Image();
        img.src = this.img;
        pen.drawImage(img, this.x, this.y, this.width, this.height);


    }

    fall() {
        this.y += 5;
        // eg[i].requestAnimationFrame(arr[i].fall());
    }

}