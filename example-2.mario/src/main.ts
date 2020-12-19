import {InitialMarioConfig, KeyArrowDirections} from "./main.interface";

// setup
const canvasHtmlNode: HTMLCanvasElement = document.querySelector('#canvas') as HTMLCanvasElement,
    ctx: CanvasRenderingContext2D = canvasHtmlNode.getContext("2d"),
    canvasWidth: number = canvasHtmlNode.width = 300,
    canvasHeight: number = canvasHtmlNode.height = 224;

class MarioSingleton {
    private static instance: MarioSingleton;

    private ctx: CanvasRenderingContext2D;
    private posY: number;
    private posX: number;
    private canvasWidth: number;
    private canvasHeight: number;
    private gravitation: number = 5;

    private constructor({ctx, canvasHeight, canvasWidth, posX, posY}: InitialMarioConfig) {
        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.posX = posX;
        this.posY = posY;

        document.addEventListener('keydown', this.move);
    }

    private move = (e: KeyboardEvent) => {
        const {key} = e;
        if (key === KeyArrowDirections.ArrowUp) {
            // this.posX -= 5;
        }
        if (key === KeyArrowDirections.ArrowDown) {

        }
        if (key === KeyArrowDirections.ArrowLeft) {
            this.posX -= 15;
        }
        if (key === KeyArrowDirections.ArrowRight) {
            this.posX += 15;
        }
        if (key === KeyArrowDirections.space) {
            this.posY -= 50;
        }
    }

    public static getInstance(config: InitialMarioConfig): MarioSingleton {
        if (!MarioSingleton.instance) {
            MarioSingleton.instance = new MarioSingleton(config);
        }

        return MarioSingleton.instance;
    }

    private gravitationCalculate() {
        if (this.posY < this.canvasHeight - 50) {
            this.posY += this.gravitation;
        }
    }

    public draw() {
        this.gravitationCalculate();

        this.ctx.fillStyle = "red";
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, 50, 50);
        this.ctx.fill();
    }
}

const initialMarioConfig: InitialMarioConfig = {
    ctx,
    posX: canvasWidth / 2,
    posY: canvasHeight / 2,
    canvasWidth: canvasWidth,
    canvasHeight: canvasHeight,
}

function draw(): void {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // background
    ctx.fillStyle = "#5e96fe";
    ctx.beginPath();
    ctx.rect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();


    // mario
    MarioSingleton.getInstance(initialMarioConfig).draw();
}

draw();




