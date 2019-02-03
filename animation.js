class Animation {
	constructor(
	  spriteSheet,
	  frameWidth,
	  frameHeight,
	  sheetWidth,
	  frameDuration,
	  frames,
	  loop,
	  scale
	) {
	  this.spriteSheet = spriteSheet;
	  this.frameWidth = frameWidth;
	  this.frameDuration = frameDuration;
	  this.frameHeight = frameHeight;
	  this.sheetWidth = sheetWidth;
	  this.frames = frames;
	  this.totalTime = frameDuration * frames;
	  this.elapsedTime = 0;
	  this.loop = loop;
	  this.scale = scale;
	}
  
	drawFrame(tick, ctx, x, y) {
	  this.elapsedTime += tick;
  
	  if (this.isDone()) {
		if (this.loop) {
		  this.elapsedTime = 0;
		}
	  }
  
	  let frame = this.currentFrame();
	  let xIndex = 0;
	  let yIndex = 0;
	  xIndex = frame % this.sheetWidth;
	  yIndex = Math.floor(frame / this.sheetWidth);
  
	  ctx.drawImage(
		this.spriteSheet,
		xIndex * this.frameWidth,
		yIndex * this.frameHeight, // source from sheet
		this.frameWidth,
		this.frameHeight,
		x,
		y,
		this.frameWidth * this.scale,
		this.frameHeight * this.scale
	  );
	}
  
	currentFrame() {
	  return Math.floor(this.elapsedTime / this.frameDuration);
	}
  
	isDone() {
	  return this.elapsedTime >= this.totalTime;
	}
  }