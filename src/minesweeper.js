const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	const board = [];
	for(let rIndex=0;rIndex<numberOfRows;rIndex++) {
		let row = [];
		for(let cIndex=0;cIndex<numberOfColumns;cIndex++) {
			row.push(" ");
		}
		board.push(row);
	}
	return board;

}

const generateBombBoard =  (numberOfRows, numberOfColumns, numberOfBombs) => {
	const board = [];
	for(let rIndex=0;rIndex<numberOfRows;rIndex++) {
		let row = [];
		for(let cIndex=0;cIndex<numberOfColumns;cIndex++) {
			row.push(null);
		}
		board.push(row);
	}
	let numberOfBombsPlaced = 0;
	while(numberOfBombsPlaced < numberOfBombs) {
		// On top Problem will be fixed with Control Flow
		const randomRowIndex = Math.floor(Math.random() * numberOfRows);
		const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex]="B";
		numberOfBombsPlaced++;
	}
	return board;
}

const printBoard = board => {
	console.log(board.map(row => row.join(" | ")).join("\n"));
}
console.log("Player Board:");
printBoard(generatePlayerBoard(3,4));
console.log("Bomb Board:");
printBoard(generateBombBoard(3,4,5));
