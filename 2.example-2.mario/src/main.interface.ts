export interface InitialMarioConfig {
    ctx: CanvasRenderingContext2D,
    posX: number,
    posY: number,
    canvasWidth: number,
    canvasHeight: number
}

export enum KeyArrowDirections {
    'ArrowUp' = 'ArrowUp',
    'ArrowLeft' = 'ArrowLeft',
    'ArrowRight' = 'ArrowRight',
    'ArrowDown' = 'ArrowDown',
    'space' = ' ',
}