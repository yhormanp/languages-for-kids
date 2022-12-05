import './app.css';
import { myGame } from './modules/Game';
import { renderCategories } from './modules/Render'
import { myRouter } from './modules/router/router';


function start() {
  renderCategories();
  myGame.initMode();
  // myGame.initMode();
}

start();
