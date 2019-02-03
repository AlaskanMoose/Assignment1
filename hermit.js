class Hermit {
	constructor(game) {
	  this.animation = new Animation(AM.getAsset("./img/hermit_firing_left.png"), 229, 209, 3, 0.10, 12, true, 1);
	  this.x = 700;
	  this.y = 100;
	  this.speed = 100;
	  this.game = game;
	  this.ctx = game.ctx;  
	}
	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	}
  
	update() {
		this.x -= this.game.clockTick * this.speed;
		if (this.x < -200) {
			this.x = 1000;
	  }
	}
  }