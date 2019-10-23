module.exports = {
  setRecent: (comment) => Object.assign(comment, {isRecent: true}),
  specifyPostedAt: (comment) => Object.assign(comment, {postedAt: 'just now'}),
};
