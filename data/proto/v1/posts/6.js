const recents = require('../../../_core/posts/recents');
const posts = require('../../../_core/posts/all');

const [post] = posts.slice(5, 6);
const title = post.name;

module.exports = {
  title,
  recents,
  post,
};
