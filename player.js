class Player {
  constructor(image, x, y, w, h, c, xSpeed, yVel, rate, imgMode) {
    this.image = image
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.xSpeed = xSpeed;
    this.yVel = yVel;
    this.rate = rate;
    this.imgMode = imgMode;
  }

  drawimgs() {
    canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h);
  }

  changeGravity() {
    console.log(this.rate);
    holding = true;
    if (this.rate = -1) { // what one is down or up and then add this.y += 3; for a mini jump to unstick it 
      this.y += 3;
      this.yVel = 1; // if postive or negative this.rate = 1 or -1
      this.imgMode = 1;
      console.log(this.imgMode)
    } else {
      this.yVel = 1; // if postive or negative this.rate = 1 or -1
      this.imgMode = 0;
      console.log(this.imgMode)
    }
    this.rate *= -1;
  }

  playerMove() {
    this.y += this.yVel; //Gravity
    this.yVel += this.rate;

    if (this.y > canvas.height) {
      this.y = 0
    }

    if (this.y < 0) {
      this.y = canvas.height - this.h;
    }

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

  plarformHit(item) {
    return (this.x + this.w > player.x && this.x < player.x + player.w &&
      this.y + this.h > player.y && this.y < player.y + player.h);
  }

  hasHitPlatform(platform) {
    return this.plarformHit(platform);
  }

  hasCollided() {
    var self = this;
    var collided = false;

    platforms.forEach(function (platform, i) {
      if (self.hasHitPlatform(platform)) {


        if (self.y + self.h >= platform.y && self.y + self.h < platform.y + platform.h) {
          self.yVel = 0.0;

        } // landing on top of surface bottom of screen

        if (self.y <= platform.y + platform.x && self.y + self.h > platform.y + 1 && self.x < platform.x + platform.w) {
          self.x - 4;
        }

      }

    });

  }
}