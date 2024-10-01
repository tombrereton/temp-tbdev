export default class Player {
  constructor(game, sprite) {
    this.game = game;
    this.x = this.game.width * 0.4;
    this.y;
    this.spriteWidth = 32;
    this.spriteHeight = 32;
    this.width = 0;
    this.height = 0;
    this.speedY;
    this.flapSpeed;
    this.direction = 1;
    this.scale = 2;
    this.maxFrame = 8;
    this.flapping = false;
    this.starting = true;
    this.sprite = sprite ?? {
      image: "",
      x: 0,
      y: 0,
      width: this.spriteWidth,
      height: this.spriteHeight,
    };
  }

  draw() {
    this.game.ctx.drawImage(
      this.sprite.image,
      this.sprite.x * this.sprite.width,
      this.sprite.y * this.sprite.height,
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
      this.flapping = true;
    }
    if (this.isTouchingBottom()) {
      this.y = this.game.height - this.height;
      this.flapping = false;
      this.starting = false;
    }
    if (this.isTouchingRight()) {
      this.direction = -1;
      this.sprite.y = 9;
    }
    if (this.isTouchingLeft()) {
      this.direction = 1;
      this.sprite.y = 11;
    }

    if (!this.starting) {
      this.x += this.direction * this.game.speed;
    }
    if (this.game.eventUpdate && !this.flapping) {
      this.sprite.x < this.maxFrame ? this.sprite.x++ : (this.sprite.x = 0);
    }
  }

  isTouchingLeft() {
    return this.x + this.width / 2 < 0;
  }

  isTouchingRight() {
    return this.x + this.width / 2 > this.game.width;
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
    this.y = this.game.height * 0.75;
    this.speedY = -1;
    this.flapSpeed = 4 * this.game.ratio;
  }

  flap() {
    if (this.isTouchingBottom()) {
      this.sprite.x = 0;
      this.speedY = -this.flapSpeed;
    }
  }
}
