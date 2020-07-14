class Unicorn{
    constructor(){
        this.r = 50;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1.5 ;

        // 4 inputs, 4 hidden layers, 1 output
        this.brain = new NeuralNetwork(4,4,1);
    }

    // Equivalent to up hopefully :)
    jump(){
        if(this.y == height-this.r){
            this.vy = -25;
        }
    }

    hits(train){
        return collideRectRect(this.x,this.y,this.r,this.r,train.x,train.y,train.r,train.r);
    }

    think(trains){
        // Finding the closest obstacle
        let closest;
        let closestDis = Infinity;
        for(let i =0;i<trains.length;++i){
            let d =  trains[i].x - this.x;
            if(d < closestDis && d>0){
                closest = trains[i];
                closestDis = d;
            }
        }

        let inputs =[];
        inputs[0] = this.x/width;
        inputs[1] = this.y/height;
        // inputs[2] = closest.x/width;
        // inputs[3] = closest.y/height;
        // The try catch was added because there doesnt exist a obstacle at every point
        try{
            inputs[2] = closest.x/width;
            inputs[3] = closest.y/height;
        }
        catch{
            inputs[2] = 50/width;
            inputs[3] = 50/height;
        }
        

        // let inputs =[1.0,0.5,0.2,0.3];
        let output = this.brain.predict(inputs);
        if(output>0.5){
            this.jump();
        }
    }

    // Equivalent to update, again hopefully :)
    move(){
        this.y += this.vy;
        this.vy+= this.gravity
        this.y = constrain(this.y,0,height-this.r)
    }

    show(){
        rect(this.x,this.y,this.r,this.r);
    }
}