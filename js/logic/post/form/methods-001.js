const {render} = require('./methods-002');

module.exports = {
  request: (endpoints, link, formData) => endpoints.addComment({link, formData}),
  render: (hasErrors, clearForm) => (data) => {
    if (hasErrors(data)) return;
    render(data);
    clearForm();
  },
};
