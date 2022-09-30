import data from '../../data/words.json';

const ROUTE_ALL_CATEGORIES = {
  title: 'All Categories',
  href: '#all-categories',
};

const ROUTE_STATISTICS = {
  title: 'Show Stats',
  href: '#stats',
};

const ROUTE_REPEAT_DIFFICULT = {
  title: 'Repeat difficult words',
  href: '#category-repeat-difficult',
  hidden: true,
};

const ROUTE_KINDS = {
  ALL: 'all-route',
  CATEGORY: 'category-route',
  STATS: 'stats-route',
};

const CATEGORY_PREFIX = 'category-';

const routes = data.map(({ name, icon }) => ({
  href: `#${CATEGORY_PREFIX}${name.en}`,
  icon,
}));

// console.log('routes generated', routes)

routes.unshift(ROUTE_ALL_CATEGORIES);
routes.push(ROUTE_STATISTICS);
routes.push(ROUTE_REPEAT_DIFFICULT);

export {
  routes, CATEGORY_PREFIX, ROUTE_ALL_CATEGORIES,
  ROUTE_STATISTICS, ROUTE_REPEAT_DIFFICULT, ROUTE_KINDS,
};
