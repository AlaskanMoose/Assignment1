class Abdul {
	constructor(game) {
	  this.animation = new Animation(AM.getAsset("./img/abdul_surrender.png"), 70, 86, 4, 0.10, 11, true, 1);
	  this.x = 500;
	  this.y = 200;
	  this.speed = 100;
	  this.game = game;
	  this.ctx = game.ctx;  
	}
	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	}
  
	update() {

	}
  }