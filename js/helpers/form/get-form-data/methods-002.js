module.exports = {
  exclude: control => !control.hasAttribute('id'),
  checkbox: (control, data) => {
    data[control.id] = control.checked;
    return data;
  },
  other: (control, data) => {
    data[control.id] = control.value;
    return data;
  },
};
