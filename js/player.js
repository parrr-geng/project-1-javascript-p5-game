class Player{
    constructor(){
        this.width = 350;
        this.height = 350;
        this.x = 0;
        this.y = 420 - this.height;
        this.gravity = 0 ;
        this.yDirection = 0;
        this.direction = 5;
        this.score = 0;
    }

    draw(){
        this.yDirection -= this.gravity;
        this.y -= this.yDirection;     
        if(this.y > 420 - this.height){this.y = 420 - this.height};
        image(game.playerImage, this.x, this.y, this.width, this.height);
    }

    jump(){
        this.gravity = 0.4;
        this.yDirection = 9;
        if (game.player.y < 410 - game.player.height) {
            game.sound.stop();
        } else if(game.player.y >= 410 - game.player.height) {
            game.sound.play();
        }
    }

  
}