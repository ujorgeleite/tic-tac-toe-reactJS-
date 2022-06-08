export const isAvailableField = (board, boardPosition, idPlayer) =>
  typeof board[boardPosition] === "number";

export const isPlayerWinner = board => {
  for (let i = 0; i < 3; i++) {
    if (board[i] === board[i + 3] && board[i + 3] === board[i + 6])
      return board[i];
  }
  return false;
};
