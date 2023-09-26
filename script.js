let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const messageElement = document.getElementById('message');
const cells = document.querySelectorAll('.cell');

function makeMove(cellIndex) {
    if (gameBoard[cellIndex] === '' && !checkWinner()) {
        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateMessage();
        checkWinner();
    }
}

function updateMessage() {
    messageElement.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            messageElement.textContent = `Player ${gameBoard[a]} wins!`;
            return true;
        }
    }

    if (!gameBoard.includes('')) {
        messageElement.textContent = "It's a draw!";
        return true;
    }

    return false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    messageElement.textContent = "Player X's turn";
    cells.forEach(cell => cell.textContent = '');
}

updateMessage();
