const {savePost} = require('./form')('add-post-form');

module.exports = (helper) => {
  const {endpoints, link} = helper;
  return {
    '': [
      ['click', '#add-post-form-submit', 'addPost'],
    ],
    addPost: () => savePost(endpoints, link),
  };
};
