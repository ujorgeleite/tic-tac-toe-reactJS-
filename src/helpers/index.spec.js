import { isAvailableField, isPlayerWinner } from "./index";

describe("Tic tac toe", () => {
  it("should not allow choosen field to be choosed", () => {
    const board = [0, 1, 2, "X", 4, 5, 6, 7, 8];
    const boardPosition = 3;
    const idPlayer = "X";

    expect(isAvailableField(board, boardPosition, idPlayer)).toBeFalsy();
  });

  it("should set as winner player with one column fulfilled", () => {
    const board = ["X", 1, "O", "O", "O", 5, "X", 7, 8];
    const idPlayer = "X";

    const winner = isPlayerWinner(board);

    expect(winner).toBe("X");
  });

  // it("should set as winner player with one line fulfilled", () => {});

  // it("should set as winner player with one diagonal line fulfilled", () => {});

  // it("should finish the game on a completely filled board", () => {});

  // it("should finish the game on no sequence found", () => {});

  // it("should show winner message on finish", () => {});

  // it("should restart the game on restart button click", () => {});

  // it("should draw symbol on section click", () => {});
});
