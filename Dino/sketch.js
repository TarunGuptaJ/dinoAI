const TOTAL = 350;
let unicorns = [];
let savedUnicorns = [];
let trains = [];
// let cycles = 100;
let slider;

function keyPressed(){
    if(key === 's'){
        let unicornB = unicorns[0];
        // let json = JSON.stringify(unicorn);
        let json = unicornB.brain.serialize();
        saveJSON(unicornB.brain,'unicornB.json');
        console.log(json);
    }
    
}

function setup() {
    createCanvas(800, 450);
    // background(255);
    slider = createSlider(1,100,1);
    for(let i = 0;i<TOTAL;++i){
        unicorns[i] = new Unicorn();
    }
    // unicorn = new Unicorn();
}

function draw() {

    for(let n = 0;n<slider.value();n++){    
        if(random(1) < 0.01){
            let train_append = new Train();
            if(trains.length == 0){
                trains.push(train_append);
            }
            else{
                let d =abs(trains[trains.length-1].x -train_append.x);
                // console.log(d);
                if(d>150){
                    trains.push(train_append);
                } 
                
            }
        }

        
        
        for(let unicorn of unicorns){
            unicorn.think(trains);
            // unicorn.show();
            unicorn.move();
        }

        if(unicorns.length === 0){
            nextGeneration();
            trains = [];
            trains.push(new Train);
        }

        for(let t of trains){
            t.move();
            // t.show();

            for(let j =unicorns.length - 1;j>=0;--j){
                if(unicorns[j].hits(t)){
                    savedUnicorns.push(unicorns.splice(j,1)[0]);
                }
            }
            // if(unicorn.hits(t)){
            //     console.log('game over');
            //     noLoop();
            // }
            
        }
    }
    // All the drawing stuff
    background(0);
    for(let t of trains){
        t.show();
    }
    for(let u of unicorns){
        u.show();
    }
}

// Commenting out for ga
// function keyPressed(){
//     if (key == ' '){
//         unicorn.jump();
//     }
// }