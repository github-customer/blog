const recents = require('../_core/posts/recents');
const posts = require('../_core/posts/all');

const post = posts.slice(6, 7)[0];
const view = 'post/single';

module.exports = {
  '': {
    view,
  },
  recents,
  post,
};
