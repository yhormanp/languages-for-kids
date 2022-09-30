import { Card } from './Card';

// Class card: represent Single category
class Category extends Card {
  constructor(name, image) {
    super(name, image);
    this.className = 'card card-category';
  }
}
export default class Categories {
  constructor() {
    this.category = {};
  }
  newCategory(name, image) {
    let category = new Category(name, image);
    this.category = { ...this.category, [name]: category };
    return category;
  }
  get allCategories() {
    return this.category;
  }
}

export { Category, Categories };
