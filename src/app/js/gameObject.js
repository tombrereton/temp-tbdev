export default class GameObject {
  constructor(game, sprite) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.spriteWidth = 24;
    this.spriteHeight = 24;
    this.width = 0;
    this.height = 0;
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
    // this.game.ctx.drawImage(this.sprite.image, this.sprite.x, this.sprite.y);
    this.game.ctx.drawImage(
      this.sprite.image,
      this.sprite.x * this.sprite.width,
      this.sprite.y * this.sprite.height,
      this.sprite.width,
      this.sprite.height,
      0,
      0,
      24,
      24,
      // this.sprite.width,
      // this.sprite.height,
    );
  }

  update() {}

  resize() {
    this.width = this.spriteWidth * this.scale;
    this.height = this.spriteHeight * this.scale;
  }
}
