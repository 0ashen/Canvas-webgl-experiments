let canvas = document.getElementById('canvas') as HTMLCanvasElement;
let w = canvas.width = 500;
let h = canvas.height = 700;
let ctx = canvas.getContext('2d');
let amount = 200; // количество точек
let speedMax = 1; // максимальная скорость точек
let line = 50; // размер лини между точками

class Dot {
    private x: number;
    private y: number;
    private speed: number;
    private dx: number;
    private dy: number;
    private rad: number;

    constructor(w, h, speedMax) { // конструктор объекта(точки)
        this.x = getRandomInt(0, w);
        this.y = getRandomInt(0, h);
        this.speed = getRandomInt(1, speedMax) / 1;
        this.dx = getRandomInt(-this.speed, this.speed);
        this.dy = getRandomInt(-this.speed, this.speed);
        this.rad = getRandomInt(1, 3);
    }
}

let dots = []; // создаем массив

for (let i = 0; i < amount; i++) { // добавляем в массив объекты(точки) через конструктор
    dots.push(new Dot(w, h, speedMax));
}
function drawline() { // рисуем линии между точками
    dots.forEach(function (item) { // перебираем массив объектов
        dots.forEach(function (item2) { // еще раз перебираем массив объектов
            if (item.x > item2.x - line && item.x < item2.x + line && item.y > item2.y - line && item.y < item2.y + line) { // на line расстояние
                ctx.strokeStyle = "#999"; // цвет линии
                ctx.beginPath();
                ctx.moveTo(item.x, item.y);
                ctx.lineTo(item2.x, item2.y);
                ctx.stroke();
            }
        });
    });
}

function drawDots(): void { // рисуем точки
    dots.forEach(function (dot) {
        if (dot.x >= w) dot.dx = -dot.speed; // ограничиваем полет
        if (dot.x <= 0) dot.dx = dot.speed;
        if (dot.y >= h) dot.dy = -dot.speed;
        if (dot.y <= 0) dot.dy = dot.speed;
        dot.x += dot.dx;
        dot.y += dot.dy;
        ctx.fillStyle = "#999"; // цвет точки
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.rad, 0, Math.PI * 2);
        ctx.fill();
    });
}

function draw(): void { // рисуем холст
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, w, h);
    drawDots();
    // drawline();
}

draw();

function getRandomInt(min: number, max: number): number {
    const rand = min + Math.random() * (max + 1 - min);
    return rand;
}

