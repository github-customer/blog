const {link, asset} = require('@greenminds/nf-dev-server/server');
const faker = require('faker/locale/en');
const {
  name,
  desc,
  date,
  body,
  postedAt,
  author,
  comments,
  comment,
} = require('./methods-001')(faker);

const iterate = (count, total, posts) => {
  if (count > total) return posts;
  const postID = count;
  const photoNum = Math.ceil(Math.random() * 9);
  const imageNum = Math.ceil(Math.random() * 6);
  const commentsCount = Math.ceil(Math.random() * 10);
  posts.push({
    id: postID,
    url: link(`/posts/${postID}`),
    name: name(),
    desc: desc(),
    photo: asset(`/images/blog-${photoNum}.jpg`),
    body: body(asset(`/images/image_${imageNum}.jpg`)),
    date: date(),
    postedAt: postedAt(),
    author: author(),
    comments: comments(commentsCount),
  });
  return iterate(++count, total, posts);
};

module.exports = {
  posts: (total) => iterate(1, total, []),
  comments: (count) => comments(count),
  comment: () => comment(),
};
