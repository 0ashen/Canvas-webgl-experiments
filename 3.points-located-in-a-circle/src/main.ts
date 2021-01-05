// setup
const canvasHtmlNode: HTMLCanvasElement = document.querySelector('#canvas') as HTMLCanvasElement,
    ctx: CanvasRenderingContext2D = canvasHtmlNode.getContext("2d"),
    canvasWidth: number = canvasHtmlNode.width = 600,
    canvasHeight: number = canvasHtmlNode.height = 600;

class Dot {
    constructor(private x: number,
                private y: number,
                private radius: number,
                private ctx: CanvasRenderingContext2D
    ) {

    }

    draw() {
        ctx.fillStyle = "#fd0202";
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }

}

// generate dots

const dots: Dot[] = [],
    center = canvasHeight / 2;

let dotsCount = 50,
    distanceFromCenter = dotsCount * 2;

for (let i = 0; i < 1; i++) {
    for (let i = 0; i < dotsCount; i++) {
        const getPos = (mathMethod: ('sin' | 'cos')): number =>
            center + Math[mathMethod](i * Math.PI / (dotsCount / 2)) * distanceFromCenter

        dots.push(new Dot(
            getPos('sin'),
            getPos('cos'),
            5,
            ctx
        ))
    }
}


function mainDraw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // background
    ctx.fillStyle = "#5e96fe";
    ctx.beginPath();
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();


    // dots
    dots.forEach(el => el.draw())
}

requestAnimationFrame(mainDraw)





