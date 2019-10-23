const {render} = require('./methods-001');
const getFormData = require('./get-form-data');

const $ = window.jQuery;

module.exports = (formID) => ({
  getFormData: () => getFormData(formID),
  hideForm: () => $(`#${formID}`).modal('hide'),
  removeErrors: () => {
    $(`#${formID}`).find('.is-invalid').removeClass('is-invalid');
    $(`#${formID}`).find('small').text('');
  },
  hasErrors: (data) => {
    const {status, errors} = data;
    if (`${status}` === 'ok') return false;
    render(errors);
    return true;
  },
  clearForm: () => $(`#${formID}`).find('input, select, textarea').val(''),
});
