export default class Player {
  constructor(game, sprite) {
    this.game = game;
    this.x = 20;
    this.y;
    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.width = 0;
    this.height = 0;
    this.speedY;
    this.flapSpeed;
    this.direction = 1;
    this.scale = 2;
    this.sprite = sprite ?? {
      image: "",
      x: 0,
      y: 0,
      width: this.spriteWidth,
      height: this.spriteHeight,
    };
  }

  draw() {
    this.game.ctx.fillStyle = "blue";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.drawImage(
      this.sprite.image,
      this.sprite.x,
      this.sprite.y,
      this.sprite.width,
      this.sprite.height,
      this.x,
      this.y,
      this.width,
      this.height,
    );
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
    this.width = this.spriteWidth * this.scale;
    this.height = this.spriteHeight * this.scale;
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
