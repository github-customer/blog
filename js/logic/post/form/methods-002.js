const {prepare} = require('./methods-003');
const render = require('../../../pug/comment_item.pug');

module.exports = {
  render: (data) => {
    const comment = prepare(data);
    $('#comments').append(render({comment}));
  },
};
