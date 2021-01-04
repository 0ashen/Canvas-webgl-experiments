let canvas = document.getElementById('canvas') as HTMLCanvasElement;
let w = canvas.width = 1000;
let h = canvas.height = 1000;
let ctx = canvas.getContext('2d');
let amount = 100;
let speedMax = 1;
let dots = [];

class Dot {
    private x: number;
    private y: number;
    private speed: number;
    private dx: number;
    private dy: number;
    private rad: number;
    private ctx: CanvasRenderingContext2D;

    constructor(w, h, speedMax, ctx) {
        this.x = getRandomInt(0, w);
        this.y = getRandomInt(0, h);
        this.speed = getRandomInt(1, speedMax) / 1;
        this.dx = getRandomInt(-this.speed, this.speed);
        this.dy = getRandomInt(-this.speed, this.speed);
        this.rad = getRandomInt(1, 3);
        this.ctx = ctx;
    }

    public calculationNewPos() {
        if (this.x >= w) {
            this.dx = -this.speed;
        }
        if (this.x <= 0) {
            this.dx = this.speed;
        }
        if (this.y >= h) {
            this.dy = -this.speed;
        }
        if (this.y <= 0) {
            this.dy = this.speed;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.ctx.fillStyle = "#06661C"; // цвет точки
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

for (let i = 0; i < amount; i++) {
    dots.push(new Dot(w, h, speedMax, ctx));
}
function draw(): void {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, w, h);

    dots.forEach((dot) => dot.calculationNewPos()); // draw dots
}

draw();

function getRandomInt(min: number, max: number): number {
    const rand = min + Math.random() * (max + 1 - min);
    return rand;
}


