import reducer from './reducer';
import {makeGuess, MAKE_GUESS, toggleInfoModal, TOGGLE_INFO_MODAL, newGame, NEW_GAME} from './actions';

describe("Reducer", () => {

  const makeGuessState = {
      guesses: [],
      feedback: "Make your guess!",
      correctAnswer: 25,
      showInfoModal: false 
    };

  it("should set the initial state when nothing is passed in", ()=> {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.showInfoModal).toEqual(false);
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  });

  it("should return the current state for an unknown action", () =>{
    const currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toEqual(currentState);
  });

  it("newGame", ()=>{
    const currentState = {};
    const state = reducer(currentState, newGame());
    expect(state).not.toEqual(currentState);
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual("Make your guess!");
    expect(state.showInfoModal).toEqual(false);
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  });

  it("toggleInfoModal", () => {
    const currentState = {showInfoModal: false};
    const state = reducer(currentState, toggleInfoModal());
    expect(state).not.toEqual(currentState);
    expect(typeof state.showInfoModal).toBe("boolean");
  });

  it("makeGuess, not a number guess", () => {
    const nanGuess = "your mom";
    const state = reducer(makeGuessState, makeGuess(nanGuess));
    expect(state.feedback).toEqual("Please enter a valid number");
    expect(state.guesses).toEqual(makeGuessState.guesses);
    expect(state.correctAnswer).toEqual(makeGuessState.correctAnswer);
    expect(state.showInfoModal).toEqual(makeGuessState.showInfoModal);
  });

  it("makeGuess, make a valid but incorrect guess", () => {
    const validGuess = 76;
    const state = reducer(makeGuessState, makeGuess(validGuess));
    expect(state.guesses).toEqual([76]);
    expect(state.feedback).toEqual("You're Ice Cold...");
    expect(state.correctAnswer).toEqual(makeGuessState.correctAnswer);
    expect(state.showInfoModal).toEqual(makeGuessState.showInfoModal);
  });

  it("makeGuess, make valid and correct guess", () => {
    const correctGuess = 25;
    const state = reducer(makeGuessState, makeGuess(correctGuess));
    expect(state.guesses).toEqual([25]);
    expect(state.feedback).toEqual("You got it!");
    expect(state.correctAnswer).toEqual(makeGuessState.correctAnswer);
    expect(state.showInfoModal).toEqual(makeGuessState.showInfoModal);
  });

  it("makeGuess, not valid due to range", () => {
    const invalidGuess = 176;
    const state = reducer(makeGuessState, makeGuess(invalidGuess));
    expect(state.guesses).toEqual([176]);
    expect(state.feedback).toEqual("You're Ice Cold...");
    expect(state.correctAnswer).toEqual(makeGuessState.correctAnswer);
    expect(state.showInfoModal).toEqual(makeGuessState.showInfoModal);
  });

});