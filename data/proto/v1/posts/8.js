const recents = require('../../../_core/posts/recents');
const posts = require('../../../_core/posts/all');

const [post] = posts.slice(7, 8);
const title = post.name;

module.exports = {
  title,
  recents,
  post,
};
