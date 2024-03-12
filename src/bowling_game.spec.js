import BowlingGame from "./bowling_game.js";

describe("Bowling Game", () => {
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
  it("all rolls 0", () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("all rolls 1", () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  /*it("one spare, bonus and all other rolls 0", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(17, 0);
    expect(game.score()).toEqual(16);
  });*/
});
