const {
  exclude,
  checkbox,
  other,
} = require('./methods-002');

module.exports = {
  process: (control, data) => {
    if (exclude(control)) return data;
    if (control.type === 'checkbox') return checkbox(control, data);
    return other(control, data);
  },
};
