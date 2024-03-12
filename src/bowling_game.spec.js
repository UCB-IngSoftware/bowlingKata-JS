import BowlingGame from "./bowling_game.js";

describe("Bowling Game", () => {
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  it("all rolls 0", () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("all rolls 1", () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  it("one spare, bonus and all other rolls 0", () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toEqual(16);
  });

  it("one strike, bonus and all other rolls 0", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toEqual(24);
  });

  function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
