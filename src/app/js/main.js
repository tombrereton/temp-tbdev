import Player from "./player.js";

export default class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.ctx = context;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.baseHeight = 640;
    this.rate = this.height / this.baseHeight;
    this.player = new Player(this);
    this.gravity;
    this.speed;
    this.score;
    this.gameOver;
    this.timer;
    this.message1;
    this.message2;

    this.resize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });
    this.canvas.addEventListener("mousedown", (e) => {
      this.player.flap();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") this.player.flap();
    });
    this.canvas.addEventListener("touchstart", (e) => {
      this.player.flap();
    });
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ratio = this.height / this.baseHeight;

    this.gravity = 0.15 * this.ratio;
    this.speed = 0.6 * this.ratio;
    this.player.resize();
  }

  render() {
    this.player.update();
    this.player.draw();
  }
}
