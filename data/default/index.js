const featured = require('../_core/posts/featured');
const recents = require('../_core/posts/recents');

const recent = recents.shift();

module.exports = {
  '': {
    view: 'main/index',
  },
  featured,
  recents,
  recent,
};
