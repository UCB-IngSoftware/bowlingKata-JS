class BowlingGame {
  constructor() {
    this.totalScore = 0;
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }
  score() {
    let result = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      result += this.rolls[i] + this.rolls[i + 1];
      i += 2;
    }
    return result;
  }
}
export default BowlingGame;
