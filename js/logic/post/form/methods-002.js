const render = require('../../../../pug/components/common/comment/_item.pug');

module.exports = {
  render: (data) => {
    const {comment} = data;
    $('#comments').append(render({comment}));
  },
};
