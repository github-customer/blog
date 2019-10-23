const recents = require('../_core/posts/recents');
const posts = require('../_core/posts/all');

const post = posts.slice(1, 2)[0];
const title = post.name;
const view = 'post/single';

module.exports = {
  '': {
    view,
  },
  title,
  recents,
  post,
};
