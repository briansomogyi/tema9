let pawns = [];
let boardSize = 8;
let cellSize;

function setup() {
    createCanvas(700, 700);
    cellSize = width / boardSize;
    // Create 16 random pawns
    for (let i = 0; i < 16; i++) {
        let x = floor(random(boardSize)) * cellSize + cellSize / 2;
        let y = floor(random(boardSize)) * cellSize + cellSize / 2;
        let color = (i < 8) ? 'white' : 'gray'; // First 8 pawns are white, rest are black
        let eyeColor = (i < 8) ? 'black' : 'white'; // We draw high contrast eyes and mouth
        pawns.push({
            objectX: x,
            objectY: y,
            objectColor: color,
            objectEyeColor: eyeColor,
            display: function () {
                fill(this.objectColor);
                ellipse(this.objectX, this.objectY, 70, 70); // Draw the pawn as a circle for simplicity
                fill(this.objectEyeColor);
                ellipse(this.objectX - 20, this.objectY - 10, 15, 15); // Draw the left eye
                ellipse(this.objectX + 20, this.objectY - 10, 15, 15); // Draw the right eye
                arc(this.objectX, this.objectY + 20, 50, 20, 0, Math.PI, CHORD); // Draw the mouth
            }
        });
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
