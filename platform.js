 class Platform {
   constructor(x, y, w, h, c, xSpeed) {
     //   this.image = image
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     this.c = c;
     this.xSpeed = xSpeed;

   }

   drawPlat() {
     canvasContext.fillStyle = this.c;
     canvasContext.fillRect(this.x, this.y, this.w, this.h);
   }

   movePlat() {
     this.x -= this.xSpeed;

     if (this.x < 0) {
       this.x = canvas.width;
     }
   }




 }