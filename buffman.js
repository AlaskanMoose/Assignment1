class BuffMan {
	constructor(game) {
	  this.animation = new Animation(AM.getAsset("./img/buff_run_right.png"), 83, 49, 2, 0.20, 10, true, 1);
	  this.x = 0;
	  this.y = 200;
	  this.speed = 100;
	  this.game = game;
	  this.ctx = game.ctx;  
	}
	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	}
  
	update() {
		this.x += this.game.clockTick * this.speed;
	  if (this.x > 1000) {
			this.x = -100;
	  }
	}
  }