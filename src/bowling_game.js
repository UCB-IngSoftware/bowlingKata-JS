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
      if (this.rolls[i] + this.rolls[i + 1] === 10) {
        //spare
        result += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        result += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }
    return result;
  }
}
export default BowlingGame;
