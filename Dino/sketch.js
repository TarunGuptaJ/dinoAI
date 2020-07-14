let unicorn;
let trains = [];

function setup() {
    createCanvas(800, 450);
    // background(255);
    unicorn = new Unicorn();
}

function draw() {

    if(random(1) < 0.01){
        trains.push(new Train());
    }

    
    background(0);
    unicorn.think(trains);
    unicorn.show();
    unicorn.move();

    for(let t of trains){
        t.move();
        t.show();
        if(unicorn.hits(t)){
            console.log('game over');
            noLoop();
        }
    }
}

// Commenting out for ga
// function keyPressed(){
//     if (key == ' '){
//         unicorn.jump();
//     }
// }