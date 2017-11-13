var board = [
  null, null, null,
  null, null, null,
  null, null, null
];

var isWinner = player => {
  var count = 0;

  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      if (board[i][j] === player) {
        count++;
      }
    }
    if (count === 3) {
      return true;
    }
    count = 0;
  }
  for (var k = 0; k <= 2; k++) {
    for (var l = 0; l <= 2; l++) {
      if (board[l][k] === player) {
        count++;
      }
    }
    if (count === 3) {
      return true;
    }
    count = 0;
  }
  if (board[1][1] === player) {

    if ((board[0][0] === player
      && board[2][2] === player)
      || (board[2][0] === player
        && board[0][2] === player)) {
      return true;
    }
  }
  return false;
};

var makeMove(player, coordinates) {

}

var play = function() {
  var playerX = 'X';
  var playerO = 'O';

  currentPlayer = playerX;
  moveCount = 0;

  while (!(isWinner('X') || isWinner('O')) && moveCount < 9) {
    makeMove(currentPlayer);
    currentPlayer = currentPlayer === playerX ? playerY : playerX;
    moveCount++;
  }
}
