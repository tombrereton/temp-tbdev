export default class Player {
  constructor(game) {
    this.game = game;
    this.x = 20;
    this.y;
    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.width = 50;
    this.height = 50;
    this.speedY;
    this.flapSpeed;
    this.direction = 1;
  }

  draw() {
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += this.speedY;
    this.collisionY = this.y + this.height * 0.5;
    if (!this.isTouchingBottom()) {
      this.speedY += this.game.gravity;
    }
    if (this.isTouchingBottom()) {
      this.y = this.game.height - this.height;
    }
    if (this.x + this.width / 2 > this.game.width) {
      this.direction = -1;
    }
    if (this.x + this.width / 2 < 0) {
      this.direction = 1;
    }
    this.x += this.direction * this.game.speed;
  }

  isTouchingTop() {
    return this.y <= 0;
  }

  isTouchingBottom() {
    return this.y >= this.game.height - this.height;
  }

  resize() {
    this.width = this.spriteWidth * this.game.ratio;
    this.height = this.spriteHeight * this.game.ratio;
    this.y = this.game.height * 0.5 - this.height * 0.5;
    this.speedY = -5 * this.game.ratio;
    this.flapSpeed = 5 * this.game.ratio;
  }

  flap() {
    if (this.isTouchingBottom()) {
      this.speedY = -this.flapSpeed;
    }
  }
}
