class BowlingGame {
  constructor() {
    this.totalScore = 0;
  }

  roll(n) {
    this.totalScore += n;
  }
  score() {
    return this.totalScore;
  }
}
export default BowlingGame;
