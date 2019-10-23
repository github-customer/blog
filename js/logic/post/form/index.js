const formHelper = require('../../../helpers/form');
const {request, render} = require('./methods-001');

module.exports = (formID) => {
  const {
    getFormData,
    clearForm,
    hasErrors,
    removeErrors,
  } = formHelper(formID);
  return ({
    saveComment: (endpoints, link) => {
      removeErrors();
      $.ajax(request(endpoints, link, getFormData())).done(render(hasErrors, clearForm));
      return false;
    },
  });
};
