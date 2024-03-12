import BowlingGame from "./bowling_game.js";

describe("Bowling Game", () => {
  it("all rolls 0", () => {
    let game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("all rolls 1", () => {
    let game = new BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });
});
