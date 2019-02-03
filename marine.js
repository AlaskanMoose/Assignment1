class Zealot {
	constructor(game, spriteSheet, spriteSheet2) {
	  this.animation = new Animation(AM.getAsset("./img/marine_running.png"), 60.5, 60, 4, 0.15, 4, true, 1);
	  this.animation2 = new Animation(AM.getAsset("./img/marine_shooting.png"), 76, 60, 2, 0.10, 2, true, 1);
	  this.x = 0;
	  this.y = 250;
	  this.speed = 100;
	  this.game = game;
	  this.ctx = game.ctx;  
	}
	draw(ctx) {
	  if (this.x < 400) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	  } else {
		this.animation2.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	  }
	}
  
	update() {
	  if (this.animation.elapsedTime < (this.animation.totalTime * 8) / 14) {
		this.x += this.game.clockTick * this.speed;
	  }
	  if (this.x > 400) {
		this.x = 400;
	  }
	}
  }