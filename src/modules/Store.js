import data from '../data/words.json';

export default class Store {
  static addData() {
    localStorage.setItem('data', JSON.stringify(data));
  }

  // Get / Set categories from/ to LocalStorage
  static getData() {
    console.log('all the words', data);
    return data;
  }
}
