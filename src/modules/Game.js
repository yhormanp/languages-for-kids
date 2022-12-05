import data from '../data/words.json';
import { myRouter } from './router/router';

const INITIAL_HASH = '#all-categories';

class Game {
  constructor(
    mode = 'train',
    sourceLanguage = 'es',
    targetLanguage = 'en',
    currentCategory = 'none',
    onCourse = false
  ) {
    this.currentCategory = currentCategory;
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

  set category(categoryName) {
    this.currentCategory = categoryName;
  }

  get category() {
    return this.currentCategory;
  }

  initMode = () => {
    const playSwitcher = document.querySelector('#checkbox-mode');
    const startRepeatbtn = document.getElementById('play-repeat-btn');

    playSwitcher.addEventListener('click', (event) => {
      const currentLocation = myRouter.getCurrentPage();
      console.log('checking what cr', currentLocation);

      if (myGame.getMode() === 'train') {
        this.setMode('play');
        if (currentLocation !== INITIAL_HASH) {
          startRepeatbtn.style.display = 'block';
        }
      } else {
        this.setMode('train');
        if (currentLocation !== INITIAL_HASH) {
          startRepeatbtn.style.display = 'none';
        }
      }
    });

    startRepeatbtn.addEventListener('click', () => {
      this.getARandomCard();
    });
  };

  getARandomCard() {
    // const categoryData = getContentCategory(this.category);
    console.log('test', categoryData);
    const randomNumber = Math.floor(Math.random() * categoryData.words.length);
    this.excludedCards.push(randomNumber);

    const cardInfo = this.categoryData.words[randomNumber];

    // if (myGame.getMode() === 'play') {
    const audioPath = `./data/audio/${cardInfo[this.targetLanguage]}.mp3`;
    console.log('checking audio path');
    playAudio(audioPath);
    // }

    console.log('checking random card', cardInfo);
    console.log('testing random number', randomNumber);
  }

  getAllData (){
    return data;
  }
}

getContentCategory = (categoryName) => {
  const categoryClean = categoryName.replace('#category-', '');
  const categoryData = data.filter((info) => {
    return info.name.es === categoryClean;
  });

  if (categoryData.length > 0) {
    return categoryData[0];
  }
  return [];
};

const myGame = new Game();


export { myGame };
