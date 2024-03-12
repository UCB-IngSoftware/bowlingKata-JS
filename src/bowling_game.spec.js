import BowlingGame from "./bowling_game.js";

describe("Bowling Game", () => {
  let game = new BowlingGame();
  function rollMany(pins) {
    for (let i = 0; i < 20; i++) {
      game.roll(pins);
    }
  }
  it("all rolls 0", () => {
    rollMany(0);
    expect(game.score()).toEqual(0);
  });

  it("all rolls 1", () => {
    rollMany(1);
    expect(game.score()).toEqual(20);
  });
});
