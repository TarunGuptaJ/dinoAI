class Unicorn{
    constructor(){
        this.r = 50;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1.5 ;
    }

    jump(){
        if(this.y == height-this.r || this.y <= height-this.r-30){
            this.vy = -25;
        }
    }

    hits(train){
        return collideRectRect(this.x,this.y,this.r,this.r,train.x,train.y,train.r,train.r);
    }

    move(){
        this.y += this.vy;
        this.vy+= this.gravity
        this.y = constrain(this.y,0,height-this.r)
    }

    show(){
        rect(this.x,this.y,this.r,this.r);
    }
}