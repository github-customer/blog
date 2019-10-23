const {process} = require('./methods-001');

const iterate = (controls, data) => {
  if (controls.length < 1) return data;
  const control = controls.shift();
  return iterate(
    controls,
    process(control, data)
  );
};

const $ = window.jQuery;

module.exports = (formID) => iterate(
  $(`#${formID}`).find('input, select, textarea').get(),
  {}
);
