class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	}
	playMove(rowIndex, columnIndex) {
		this._board.flipTile(rowIndex, columnIndex);
		if(this._board.playerBoard[rowIndex][columnIndex] === "B") {
			console.log("Game over!");
		} else if(!hasSafeTiles) {
			console.log("User has won!");
		} else {
			console.log("Current Board:");
			this._board.print();
		}
	}
}

class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = numberOfRows * numberOfColumns;
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
	}
	get playerBoard() {
			return this._playerBoard;
	}
	flipTile(rowIndex, columnIndex) {
		if(this._playerBoard[rowIndex][columnIndex] != " ") {
			console.log("Diese Kachel wurde schon gedreht!");
		}
		else if(this._bombBoard[rowIndex][columnIndex]==="B") {
			this._playerBoard[rowIndex][columnIndex] = "B";
		}
		else {
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighorBombs(rowIndex, columnIndex);
		}
		this._numberOfTiles--;
	}
	getNumberOfNeighorBombs(rowIndex, columnIndex) {
		neighborOffsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
		numberOfRows = this._bombBoard.length;
		numberOfColumns = this._bombBoard[0].length;
		numberOfBombs = 0;
		neighborOffsets.forEach((offset) => {
			neighborRowIndex = rowIndex + offset[0];
			neighborColumnIndex = columnIndex + offset[1];
			if(neighborRowIndex >= 0 && neighborColumnIndex < numberOfColumns && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
				if(bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
					numberOfBombs++;
				}
			}
		});
		return numberOfBombs;
	}
	hasSafeTiles() {
		return this._numberOfBombs != this._numberOfTiles
	}
	print() {
		console.log(this._playerBoard.map(row => row.join(" | ")).join("\n"));
	}
	static generatePlayerBoard(numberOfRows, numberOfColumns) {
		let board = [];
		for(let rIndex=0;rIndex<numberOfRows;rIndex++) {
			let row = [];
			for(let cIndex=0;cIndex<numberOfColumns;cIndex++) {
				row.push(" ");
			}
			board.push(row);
		}
		return board;
	}

	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {

	}
}
g = new Game(3,3,3);
g.playMove(0,0);
