import { Words } from './Word';
import { Categories } from './Category';
import Store from './Store';
import { Import } from './Imports';
import { myRouter } from './router/router';
// import { getContentCategory } from './Render';
import allData from '../data/words.json';
import { letsPlay } from './PlayLogic';
import { playAudio } from './Audio';

const initialHash = '#all-categories';
class Game {
  constructor(
    mode = 'train',
    sourceLanguage = 'es',
    targetLanguage = 'en',
    currentCategory = 'none',
    onCourse = false
  ) {
    this.currentCategory = currentCategory;
    this.categoryData = [];
    this.excludedCards = [];
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.mode = mode;
  }

  setMode(newMode) {
    this.mode = newMode;
  }

  getMode() {
    return this.mode;
  }

  setCategory(categoryName) {
    this.currentCategory = categoryName;
    this.categoryData = this.getContentCategory(this.currentCategory);
  }

  initMode() {
    this.playSwitcher = document.querySelector('#checkbox-mode');
    const startRepeatbtn = document.getElementById('play-repeat-btn');

    this.playSwitcher.addEventListener('click', (event) => {
      const currentLocation = myRouter.getCurrentPage();
      console.log('checking what cr', currentLocation);
      if (this.mode === 'train') {
        this.setMode('play');
        if (currentLocation !== initialHash) {
          startRepeatbtn.style.display = 'block';
        }
      } else {
        this.setMode('train');
        if (currentLocation !== initialHash) {
          startRepeatbtn.style.display = 'none';
        }
      }
    });

    startRepeatbtn.addEventListener('click', () => {
      // const categoryData = this.getContentCategory(this.currentCategory);
      // letsPlay.categoryInfo = categoryData;
      // letsPlay.getARandomCard();
      this.getARandomCard();
    });
  }

  // start() {
  //   //getting the data of the rendered category
  //   const currentInfoRendered = this.getContentCategory(this.currentCategory);
  //   console.log('checking currentINfoRendered', currentInfoRendered);
  // }

  getContentCategory(categoryName) {
    const categoryClean = categoryName.replace('#category-', '');
    const categoryData = allData.filter((info) => {
      return info.name.es === categoryClean;
    });

    if (categoryData.length > 0) {
      return categoryData[0];
    }
    return [];
  }

  generateRandomNumber() {
    // const categoryData = this.categoryData(this.currentCategory)
    return Math.floor(Math.random() * this.categoryData.words.length);
  }

  getARandomCard() {
    let randomNumber = this.generateRandomNumber();
    while (this.excludedCards.includes(randomNumber)) {
      console.log('generating new random number', randomNumber);
      randomNumber = this.generateRandomNumber();
    }
    this.excludedCards.push(randomNumber);
    console.log('number generated', randomNumber);

    const cardInfo = this.categoryData.words[randomNumber];

    const audioPath = `./data/audio/${cardInfo[this.targetLanguage]}.mp3`;
    playAudio(audioPath);
  }
}

const myGame = new Game();

export { myGame };
