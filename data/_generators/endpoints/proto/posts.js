const {get} = require('@greenminds/nf-app-logic/routes');

const fakePost = (data) => {
  if (typeof data[''] !== 'string') return data;
  const postRequested = Number.parseInt(data[''], 10) || 1;
  data[''] = `${(postRequested - 1) % 9 + 1}`;
  return data;
};

module.exports = (data) => {
  const {link, ...postData} = data;
  return get(`${link}/api/proto/v1/posts`, fakePost({...postData}));
};
