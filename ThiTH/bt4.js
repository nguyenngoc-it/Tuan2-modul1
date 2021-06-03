class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render() {
        pen.beginPath();
        pen.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        pen.fillStyle = this.color;
        pen.fill();
    }
}
