import { Words } from './Word';
import { Categories } from './Category';
import Store from './Store';
import { Import } from './Imports';
import { myRouter } from './router/router';
import { getContentCategory } from './Render';

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

  setCategory (categoryName){
    this.currentCategory = categoryName
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
      this.start();
    });
  }

  start() {
    //getting the data of the rendered category
    const currentInfoRendered = getContentCategory(this.currentCategory);
    console.log('checking currentINfoRendered', currentInfoRendered);
  }
}

const myGame = new Game();

export { myGame };
