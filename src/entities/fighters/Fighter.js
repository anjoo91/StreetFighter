export class Fighter{
    //initial variable values
    constructor(name, x, y, velocity) {
        this.name = name;
        this.image = new Image();
        this.position = {x,y};
        this.velocity = velocity;
    }

    //methods
    update(secondsPassed, context) {
        //update position
        this.position.x += this.velocity * secondsPassed;

        //set boundaries of movement
        if (this.position.x > context.canvas.width - this.image.width || this.position.x < 0) {
            //reverse direction when at boundaries
            this.velocity = -this.velocity;
        }
    }

    draw(context) {
            context.drawImage(this.image, this.position.x, this.position.y);
        }
    }