class Obstacle {
    constructor(image){
        this.image = image;
        this.x = width + Math.random() * 200;
        this.y = 294;
        this.width = 30 + Math.random() * 300;
        this.height = 200;
        this.speed = 4 + Math.floor(Math.random() * 5);
    }

    draw(){
        this.x -= this.speed;    
        //let index = Math.floor(Math.random()*this.obstacleImages.length);
        image(this.image, this.x, this.y, this.width, this.height);
    }
    
    collision(playerInfo){
        let playerX = playerInfo.x + playerInfo.width/2;
        let playerY = playerInfo.y + playerInfo.height;
        let obstacleX = this.x + this.width/2;
        let obstacleY = this.y + this.height/2;

        if(dist(playerX, playerY, obstacleX, obstacleY) < 30 ){
            return true;     
        } else {
            return false;
        }
    }
    
}  