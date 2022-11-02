const game = new Game();
let gameIsStarted = false;
let time = 3600;


function preload(){
    game.preload();    
}

function setup(){
    createCanvas(800, 450);
    frameRate(60); 
}

function draw(){
    console.log(gameIsStarted);
    if (gameIsStarted){ 
        clear();   
        game.draw();
        if(keyIsDown(RIGHT_ARROW)){game.player.x += game.player.direction;}
        if(keyIsDown(LEFT_ARROW)){game.player.x -= game.player.direction;}
        
        /*
        if(frameCount >= time ){
            game.gameOver();
        } 
        */

        if(game.player.score < -200) {
            game.gameOver();
        }
        
        if(game.player.score > 50){
            noLoop();
            fill(255, 0, 0);
            textSize(32);
            text('YOU WON!', 400, 225);
            game.sound.stop();
        }

        document.querySelector("#score span").innerText = game.player.score;
        
    } else {  
        button = createButton('Play');
        button.position(100, 180);
        button.mousePressed(startGame);
        background(0,181,226);
        background(game.landingImage);
        image(game.landingPlayer, 340, 320, 100, 100);
        fill(0, 100, 0);
        textSize(100);
        text('Ever Is Over All', 50, 200);
    }      
}


function keyPressed(){
    if(keyCode === 32){      
        game.player.jump();    
    }
}

function startGame(){
    game.gameStart();
    gameIsStarted = true;

    button = createButton('End');
    button.position(380, 180);
    button.mousePressed(endGame);

    button = createButton('Restart');
    button.position(660, 180);
    button.mousePressed(restartGame);
}

function endGame(){
    game.gameOver();
    image(game.gameoverImage, 0, 0, 800, 450);
    //gameIsStarted = false;
}

function restartGame(){
    location.reload();
}
