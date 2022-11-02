class Friend {
    constructor(image){
        this.image = image;
        this.x = width + Math.random() * 800;
        this.y = 345;
        this.width = 80;
        this.height = 80;
        this.speed = 2;
    }

    draw(){
        this.x -= this.speed;    
        //let index = Math.floor(Math.random()*this.obstacleImages.length);
        image(this.image, this.x, this.y, this.width, this.height);
    }
    
    greet(playerInfo){
        let playerX = playerInfo.x + playerInfo.width/2;
        let playerY = playerInfo.y + playerInfo.height;
        let friendX = this.x + this.width/2;
        let friendY = this.y + this.height/2;

        if(dist(playerX, playerY, friendX, friendY) < 50 ){
            return true;     
        } else {
            return false;
        }
    }
    
}  