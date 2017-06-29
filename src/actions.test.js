import {
  newGame,
  makeGuess,
  toggleInfoModal,
  NEW_GAME,
  MAKE_GUESS,
  TOGGLE_INFO_MODAL
} from "./actions";

describe("newGame", () => {
  it("should return the action and should contain a number", () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
    expect(typeof action.correctAnswer).toBe("number");
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });
});

describe("makeGuess", () => {
  it("should have the action and should contain a guess", () => {
    const guess = 34;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(action.guess).toEqual(guess);
  });
});

describe("toggleInfoModal", () => {
  it("should have the action", () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
  });
});

