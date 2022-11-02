class Game {
    constructor(){
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.obstaclesEnd = [];
        this.friends = [];
        this.landingPlayer;
        this.landingImage;
        this.backgroundImages;
        this.playerImage;
        this.obstacleImage;
        this.gameoverImage;
        this.sound;
        this.seconds = 60;
        //this.soundfile
    }


    preload(){
        this.landingPlayer = loadImage("assets/player/ChikBoyFreePack_idle.gif");
        this.landingImage = loadImage("assets/background/Hills_Free_full.png");
        this.backgroundImages = [
            {src: loadImage("assets/background/Hills_Layer_01.png"), x:0, speed:0},
            {src: loadImage("assets/background/Hills_Layer_02.png"), x:0, speed:1},
            {src: loadImage("assets/background/Hills_Layer_03.png"), x:0, speed:2},
            {src: loadImage("assets/background/Hills_Layer_04.png"), x:0, speed:3},
            {src: loadImage("assets/background/Hills_Layer_05.png"), x:0, speed:4},
            //{src: loadImage("assets/background/Hills_Layer_06.png"), x:0, speed:3}
        ];

        this.playerImage = loadImage("assets/player/ChikBoyFreePack_run.gif");
        this.obstacleImage = loadImage("assets/obstacle/car.png");
        this.friendImage = loadImage("assets/friend/Pink_Monster_Walk_6.gif");
        this.gameoverImage = loadImage("assets/ui/gameover_scaled.gif");
        this.sound = loadSound("assets/sound/running_step_sound.mp4");
    }

    gameStart(){       
        this.sound.play();
        this.sound.loop();
    }

    draw(){
        this.background.draw();
        if (frameCount % 150 === 0) {
			this.obstacles.push(new Obstacle(this.obstacleImage));
        }
        if (frameCount % 200 === 0) {
            this.friends.push(new Friend(this.friendImage));
        }

        this.obstacles.forEach(obstacle => {
            obstacle.draw();
            if(obstacle.collision(this.player)){this.player.score++};
        });
        this.friends.forEach(friend => {
            friend.draw();
            if(friend.greet(this.player)){
                this.player.score -= 5};
        })

        this.player.draw();        
        //console.log(frameCount);
        
    } 

    gameOver(){
        game.sound.stop();
        noLoop();
        image(this.gameoverImage, 0, 0, 800, 450);
        /*
        fill(255);
        textSize(32);
        text('Game Over', 400, 225);
        textAlign(CENTER, CENTER);
        */
          
    }


  

    
}