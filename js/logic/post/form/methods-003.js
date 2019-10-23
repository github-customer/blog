const {
  setRecent,
  specifyPostedAt,
} = require('./methods-004');

module.exports = {
  prepare: (data) => {
    const comment = setRecent(data.comment);
    return specifyPostedAt(comment);
  },
};
