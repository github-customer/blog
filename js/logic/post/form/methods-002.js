const {prepare} = require('./methods-003');
const render = require('../../../../pug/components/common/comment/_item.pug');

module.exports = {
  render: (data) => {
    const comment = prepare(data);
    $('#comments').append(render({comment}));
  },
};
