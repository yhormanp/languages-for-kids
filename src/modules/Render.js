import data from '../data/words.json';
import { Card } from './Card';
import { myGame } from './game';

export const getContentCategory = (categoryName) => {
  const categoryClean = categoryName.replace('#category-', '');
  const categoryData = data.filter((info) => {
    return info.name.es === categoryClean;
  });

  if (categoryData.length > 0) {
    return categoryData[0];
  }
  return [];
};

const cleanContent = () => {
  const container = document.querySelector('#cards-container');
  container.innerHTML = '';
};

export const renderCategories = () => {
  //getting categories
  cleanContent();
  data.forEach((info) => {
    const categoryCard = new Card();
    categoryCard.displayCategoryCard(info.name, info.icon);
  });
};

export const renderContentCategory = (categoryName) => {
  cleanContent();
  const contentCategory = getContentCategory(categoryName);
  myGame.setCategory(categoryName);
  window.location.hash = categoryName
  contentCategory.words.forEach((wordsInfo) => {
    const contentCard = new Card();
    contentCard.displaySingleCard(wordsInfo.es, wordsInfo.en);
  });
};
