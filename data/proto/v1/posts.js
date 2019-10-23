const featured = require('../../_core/posts/featured');
const allRecents = require('../../_core/posts/recents');

const [recent, ...recents] = allRecents;

module.exports = {
  featured,
  recents,
  recent,
};
