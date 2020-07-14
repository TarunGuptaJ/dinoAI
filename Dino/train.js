class Train{
    constructor(){
        this.r = 50;
        this.x = width;
        this.y = height - this.r;

    }

    move(){
        this.x -= 6;
    }

    show(){
        rect(this.x,this.y,this.r,this.r);
    }
}