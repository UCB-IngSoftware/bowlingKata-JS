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
    for (let i = 0; i < this.rolls.length; i++) {
      result += this.rolls[i];
    }
    return result;
  }
}
export default BowlingGame;
