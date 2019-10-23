const {saveComment} = require('./form')('add-comment-form');

module.exports = (helper) => {
  const {endpoints, link} = helper;
  return {
    '': [
      ['click', '#add-comment-form-submit', 'addComment'],
    ],
    addComment: () => saveComment(endpoints, link),
  };
};
