class Background {
	constructor(game) {
	  this.x = 0;
	  this.y = 0;
	  this.game = game;
	  this.ctx = game.ctx;
	}  
	draw(ctx) {
	  this.ctx.drawImage(AM.getAsset("./img/ninjaArcade.png"), this.x, this.y);
	}
	update() {
  
	}
  }