$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);


  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }


    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall


    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////


    // TODO 1 - Enable the Grid
    toggleGrid();




    // TODO 2 - Create Platforms


    createPlatform(55, 600, 100, 100, "pink");
    createPlatform(70, 450, 100, 20, "purple");
    createPlatform(x, y, width, height, "sky blue");
    createPlatform(x, y, width, height, "magenta");
    createPlatform(x, y, width, height, "yellow");




    // TODO 3 - Create Collectables
    createCollectable("steve", x, y);
    createCollectable("kennedi", x, y);
    createCollectable("diamond", x, y);




   
    // TODO 4 - Create Cannons
    createCannon("poition", x, y);
    createCannon("poition", x, y);
    createCannon("poition", x, y);


   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }


  registerSetup(setup);
});



