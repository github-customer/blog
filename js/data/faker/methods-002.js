const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

module.exports = {
  author: faker => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: faker.image.avatar(),
    bio: faker.lorem.sentences(),
  }),
  postedAt: dt => `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`,
};
