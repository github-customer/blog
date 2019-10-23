const formHelper = require('../../../../helpers/form');
const {request, render} = require('./methods-001');

module.exports = (formID) => {
  const {
    getFormData,
    hasErrors,
    removeErrors,
  } = formHelper(formID);
  return {
    createAccount: (endpoints, link) => {
      removeErrors();
      $.ajax(request(endpoints, link, getFormData())).done(render(hasErrors, link));
      return false;
    },
  };
};
