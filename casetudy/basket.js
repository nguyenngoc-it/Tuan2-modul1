class basket {
    constructor(width, height, x, y, image  ) {
        this.width= width;
        this.height= height;
        this.x= x;
        this.y= y;
        this.img= image;
    }
    draw(){
        let img= new Image();
        img.src= this.img;
        pen.drawImage(img, this.x, this.y, this.width, this.height);
    }

}