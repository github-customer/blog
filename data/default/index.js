const featured = require('../_core/posts/featured');
const recents = require('../_core/posts/recents');

const recent = recents.shift();

const view = 'main/index';

module.exports = {
  '': {
    view,
  },
  featured,
  recents,
  recent,
};
