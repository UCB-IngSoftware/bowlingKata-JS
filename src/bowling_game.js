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
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(frameIndex)) {
        //spare
        result += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        result += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return result;
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }
}
export default BowlingGame;
