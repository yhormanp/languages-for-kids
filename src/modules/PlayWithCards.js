// import { myGame } from "./Game";

class PlayWithCards {
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
  

  getARandomCard() {
    console.log('test', this.categoryInfo);
    const randomNumber = Math.floor(
      Math.random() * this.categoryInfo.words.length
    );
    this.excludedCards.push(randomNumber);

    const cardInfo = this.categoryData.words[randomNumber];

    // if (myGame.getMode() === 'play') {
    // const audioPath = `./data/audio/${cardInfo[myGame.targetLanguage]}.mp3`;
    // console.log('checking audio path');
    // playAudio(audioPath);
    // }

    console.log('checking random card', cardInfo);
    console.log('testing random number', randomNumber);
  }


  // start() {
  //   this.categoryData = myGame.category;

  //   letsPlayAGame.getARandomCard();

  //   const startRepeatbtn = document.getElementById('play-repeat-btn');
  //   startRepeatbtn.innerText = 'Repeat';

  // }
} 

const letsPlayWithCards = new PlayWithCards();

export { letsPlayWithCards };
