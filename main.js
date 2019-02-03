var AM = new AssetManager();


AM.queueDownload("./img/ninjaArcade.png");
AM.queueDownload("./img/marine_running.png");
AM.queueDownload("./img/marine_shooting.png");
AM.queueDownload("./img/buff_run_right.png");
AM.queueDownload("./img/abdul_surrender.png");
AM.queueDownload("./img/hermit_firing_left.png");

AM.downloadAll(function() {
  var canvas = document.getElementById("gameWorld");
  var ctx = canvas.getContext("2d");

  var gameEngine = new GameEngine();
  gameEngine.init(ctx);
  gameEngine.start();

  gameEngine.addEntity(new Background(gameEngine));
  gameEngine.addEntity(new Zealot(gameEngine));
  gameEngine.addEntity(new BuffMan(gameEngine));
  gameEngine.addEntity(new Abdul(gameEngine));
  gameEngine.addEntity(new Hermit(gameEngine));


  console.log("All Done!");
});
