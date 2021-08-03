class Player {
  constructor(image,x, y, w, h, c, xSpeed, ySpeed) {
    this.image = image
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  drawRect() {
    canvasContext.fillStyle = this.c;
    canvasContext.fillRect(this.x, this.y, this.w, this.h);
  }

  drawimgs(){
    canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
  }

  playerMove() {

    if (rightPressed) {
      this.x += this.xSpeed;
      if (this.x > canvas.width) { // once out of right screen wrap to left 
        this.x = 0;
      }
    }
    if (leftPressed) {
      this.x -= this.xSpeed;
      if (this.x < 0) { // once out of left side of screen wrap to right
        this.x = canvas.width - this.w;
      }
    }
  }


}