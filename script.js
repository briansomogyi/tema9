// Define a Pawn class
class Pawn {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, 20, 20); // Draw the pawn as a circle for simplicity
    }
}

let pawns = [];
let boardSize = 8;
let cellSize;

function setup() {
    createCanvas(400, 400);
    cellSize = width / boardSize;
    // Create 16 random pawns
    for (let i = 0; i < 16; i++) {
        let x = floor(random(boardSize)) * cellSize + cellSize / 2;
        let y = floor(random(boardSize)) * cellSize + cellSize / 2;
        let color = (i < 8) ? 'white' : 'black'; // First 8 pawns are white, rest are black
        pawns.push(new Pawn(x, y, color));
    }
}

function draw() {
    background(220);
    // Draw the chessboard
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if ((i + j) % 2 == 0) {
                fill(255);
            } else {
                fill(0);
            }
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
    // Display the pawns
    for (let pawn of pawns) {
        pawn.display();
    }
}
