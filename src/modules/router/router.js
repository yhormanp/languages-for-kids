import { myGame } from '../Game';
import { renderCategories, renderContentCategory } from '../Render';
import {
  routes,
  //   ROUTE_ALL_CATEGORIES,
  //   ROUTE_STATISTICS,
  //   ROUTE_KINDS,
} from './routes';
class Router {
  constructor() {
    console.log('Router starting', routes);
    // this.paths = this.paths;
    this.currentPage = null;
    this.initRouter();
    window.addEventListener('hashchange', () => this.hashChange());
  }

  initRouter() {
    const {
      location: { pathname = '/' },
    } = window;

    const URL =
      pathname === '/' ? '#all-categories' : pathname.replace('/', '');
    window.location.hash = URL;
    this.loadPage(URL);
  }

  getCurrentPage (){
    console.log('returning current page', this.currentPage)
    return this.currentPage
  }

  hashChange() {
    const newPage = window.location.hash;
    console.log('detecting change', this.currentPage, 1, newPage);
    if (this.currentPage !== newPage) {
      this.loadPage(newPage);
    }
  }

  loadPage(page = 'all-categories') {
    // window.history.pushState({}, 'done', page);
    console.log('testing loadpage', page, 2);
    this.currentPage = page;
    console.log('testing loadpage', page, 3);

    switch (page) {
      case '#all-categories':
        renderCategories();
        break;

      default:
        renderContentCategory(page);
        break;
    }
    // if (page != '#all-categories') {
    //   renderContentCategory(page);
    // }
  }
}

const myRouter = new Router();

export {myRouter}
