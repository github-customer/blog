const {author, postedAt} = require('./methods-002');

const iterate = (count, faker, comments) => {
  if (count < 1) return comments;
  comments.push({
    author: author(faker),
    comment: faker.lorem.paragraph(),
    date: faker.date.recent(),
    postedAt: postedAt(faker.date.recent()),
  });
  return iterate(--count, faker, comments);
};

module.exports = faker => ({
  name: () => faker.lorem.words(),
  desc: () => faker.lorem.sentences(),
  body: image => `<p>${faker.lorem.paragraph()}</p>
    <p><img src="${image}" class="img-fluid"></p>
    <p>${faker.lorem.paragraph()}</p>`,
  date: () => faker.date.recent(),
  postedAt: () => postedAt(faker.date.recent()),
  author: () => author(faker),
  comments: count => iterate(count, faker, []),
  comment: () => iterate(1, faker, [])[0],
});
