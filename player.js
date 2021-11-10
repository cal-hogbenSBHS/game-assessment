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
    canvasContext.drawImage(this.image, this.x, this.y, this.w, this.h); //draws palyer image
  }

  changeGravity() {
    console.log(this.rate);
    holding = true;
    if (this.rate >= 0) {
      this.y += 2;
      this.yVel = 1; // if postive or negative this.rate = 1 or -1
      this.rate = 1;
      this.imgMode = 1;
    } else {
      this.y += -2;
      this.yVel = -1; // if postive or negative this.rate = 1 or -1
      this.imgMode = 0;
      this.rate = -1;
    }
    this.rate *= -1;
  }

  playerMove() {
    this.y += this.yVel; //Gravity
    this.yVel += this.rate;

    if (this.y > canvas.height) {
      this.y = 0

      lives--;
    }

    if (this.y < 0) {
      this.y = canvas.height - this.h;
      lives--;
    }

    if (rightPressed) {
      this.x += this.xSpeed;
      if (this.x > canvas.width) { // once out of right screen wrap to left 
        this.x = 0;
        lives--;
      }
    }

    if (leftPressed) {
      this.x -= this.xSpeed;
      if (this.x < 0) { // once out of left side of screen wrap to right
        this.x = canvas.width - this.w;
        lives--;
      }

    }



  }

  plarformHit(item) {
    return (this.x <= (item.x + item.w) && (this.x + this.w) >= item.x) &&
      (this.y <= (item.y + item.h) && (this.y + this.h) >= item.y);

  }

  hasHitPlatform(platform) {
    return this.plarformHit(platform);
  }

  hasCollided() {
    var self = this;
    var collided = true;

    platforms.forEach(function (platform, i) {
      if (self.hasHitPlatform(platform)) {

        if (self.y + self.h >= platform.y && self.y + self.h < platform.y + platform.h) {
          if (self.y > canvas.height / 2) {
            self.y -= 1;
            self.yVel = -0.1;
            console.log('feet land')
            score += 5; // resposnsible for increase in score
          }
        } // onscreen

        if (self.y <= platform.y + platform.h && self.y < canvas.height / 2) { // if moving down to get the character to move up until not touching platform
          self.y += 1;
          self.yVel = 0.1;
          console.log('head land');
          score += 5;
        }

        if (self.x + self.w >= platform.x - 1 && self.y > platform.y + platform.h / 2 &&
          self.x > platform.x) {
          self.x -= 4;
        }

      }

    }); // end func
    score--;
  }
}