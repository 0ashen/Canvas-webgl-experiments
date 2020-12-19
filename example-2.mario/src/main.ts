const canvasHtmlNode: HTMLCanvasElement = document.querySelector('#canvas') as HTMLCanvasElement,
    ctx: CanvasRenderingContext2D = canvasHtmlNode.getContext("2d"),
    w = canvasHtmlNode.width = 900,
    h = canvasHtmlNode.height = 500;

class Mario {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx, posX = h / 2, posY = w / 2) {
        this.ctx = ctx;
    }

    draw() {

    }
}

const mario: Mario = new Mario(ctx);

function draw(): void {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, w, h);
    mario.draw();
}

draw();




