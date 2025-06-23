class PlayLogic {
  constructor() {
    this.categoryData = [];
    this.excludedCards = [];
  }

  set categoryInfo(categoryData) {
    this.categoryData = categoryData;
  }

  get categoryInfo() {
    return this.categoryData;
  }

  generateRandomNumber() {
    return Math.floor(Math.random() * this.categoryData.words.length);
  }

}

const letsPlay = new PlayLogic();

export { letsPlay };
