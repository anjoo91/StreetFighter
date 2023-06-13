export class Stage {
    constructor() {
        this.image = document.querySelector("img[alt='background']");
    }
    update() {
        //empty for now; exists so we don't get an error
    }
    draw(context) {
        context.drawImage(this.image, 0, 0);
    }
}