window.onload = function(){
    var game = new Phaser.Game(720, 480, Phaser.AUTO, '', 
        { preload: preload, create: create, update: update});

    var argbie;

    var spaceKey;
    var leftKey;
    var rightKey;
    var downKey;
    var upKey;

    var map;
    var layer;

    function preload(){
        game.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('Platform', 'assets/sprites/tiles/basic.png');
        game.load.spritesheet('argbie', 'assets/sprites/argbie/argbie.png', 16, 16);
        game.load.image('sky', 'assets/sprites/background/normal_background.png', 720, 480);
    }

    function create(){
        //Set up game world.
        game.stage.backgroundColor = '#8e8e8e';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.add.sprite(0, 0, 'sky');

        //Set up main character
        // argbie = game.add.sprite(game.world.centerX,game.world.centerY, 'argbie');
        // game.add.existing(argbie);
        // game.physics.arcade.enable(argbie);
        // argbie.body.gravity.y = 800;
        // argbie.body.collideWorldBounds = true;

        //Set up tilemap.
        map = game.add.tilemap('level1');
        map.addTilesetImage('Platform');
        layer = map.createLayer('Tile Layer 1');
        
        map.setCollisionBetween(1, 1350, true, 'Tile Layer 1');
        
        //Set up keyboard controls.
        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    }

    function update(){  
        game.physics.arcade.collide(argbie, layer);
    }
};