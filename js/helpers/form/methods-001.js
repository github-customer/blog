const {render} = require('./methods-002');

const iterate = (errors) => {
  if (errors.length < 1) return true;
  const {id, text} = errors.shift();
  render(`#${id}`, text);
  return iterate(errors);
};

module.exports = {
  render: errors => iterate(errors),
};
