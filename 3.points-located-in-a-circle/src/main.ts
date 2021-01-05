// setup
const canvasHtmlNode: HTMLCanvasElement = document.querySelector('#canvas'),
    ctx: CanvasRenderingContext2D = canvasHtmlNode.getContext("2d"),
    canvasWidth: number = canvasHtmlNode.width = 600,
    canvasHeight: number = canvasHtmlNode.height = 600;

const cursorPos: { x: number, y: number } = {
    x: 0,
    y: 0
}
document.querySelector('body').addEventListener('mousemove', (event: MouseEvent): void => {

    console.log(event.offsetX, event.offsetY)

    canvasHtmlNode.offsetTop
    canvasHtmlNode.offsetLeft

});

class Dot {
    private currentX: number;
    private currentY: number;

    constructor(private originalX: number,
                private originalY: number,
                private radius: number,
                private ctx: CanvasRenderingContext2D
    ) {

    }

    draw() {
        ctx.fillStyle = "#fd0202";
        ctx.beginPath();
        ctx.arc(
            this.originalX,
            this.originalY,
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

let dotsCount = 10;

for (let y = 1; y < 10; y++) {
    dotsCount = y * 6;
    for (let i = 0; i < dotsCount; i++) {
        const distanceFromCenter = dotsCount * 2
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

    // center
    ctx.strokeStyle = "#4be314";
    ctx.beginPath();

    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);

    ctx.moveTo(0, canvasHeight / 2);
    ctx.lineTo(canvasWidth, canvasHeight / 2);
    ctx.stroke();
    //center-end

    // dots
    dots.forEach(el => el.draw())
}

requestAnimationFrame(mainDraw)





