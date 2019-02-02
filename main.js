var AM = new AssetManager();

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
class Background {
  constructor(game, spriteSheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spriteSheet;
    this.game = game;
    this.ctx = game.ctx;
  }  
  draw(ctx) {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
  }
  update() {

  }
}

class Pirate {
  constructor(game, spriteSheet) {
    this.animation = new Animation(spriteSheet, 55, 73, 7, 0.15, 7, true, 1);
    this.x = 0;
    this.y = 357;
    this.speed = 100;
    this.game = game;
    this.ctx = game.ctx;  
  }
  draw(ctx) {
    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  }

  update() {
    //// mess witht he total time multiplied values
    if (this.animation.elapsedTime < (this.animation.totalTime * 8) / 14) {
      this.x += this.game.clockTick * this.speed;
    }
    if (this.x > 800) {
      this.x = -230;
    }
  }
}
class Zealot {
  constructor(game, spriteSheet, spriteSheet2) {
    this.animation = new Animation(spriteSheet, 60.5, 60, 4, 0.15, 4, true, 1);
    this.animation2 = new Animation(spriteSheet2, 76, 60, 2, 0.10, 2, true, 1);
    this.x = 0;
    this.y = 357;
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
    //// mess witht he total time multiplied values
    if (this.animation.elapsedTime < (this.animation.totalTime * 8) / 14) {
      this.x += this.game.clockTick * this.speed;
    }
    if (this.x > 400) {
      this.x = 400;
    }
  }
}

AM.queueDownload("./img/background.png");
AM.queueDownload("./img/marine_running.png");
AM.queueDownload("./img/marine_shooting.png");
AM.queueDownload("./img/spacepirate_roll.png");

AM.downloadAll(function() {
  var canvas = document.getElementById("gameWorld");
  var ctx = canvas.getContext("2d");

  var gameEngine = new GameEngine();
  gameEngine.init(ctx);
  gameEngine.start();

  gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background.png")));
  gameEngine.addEntity(new Zealot(gameEngine, 
    AM.getAsset("./img/marine_running.png"),
    AM.getAsset("./img/marine_shooting.png")));
  // gameEngine.addEntity(new Pirate(gameEngine, AM.getAsset("./img/spacepirate_roll.png")));

  console.log("All Done!");
});
