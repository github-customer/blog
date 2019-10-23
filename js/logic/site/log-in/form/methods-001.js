const {save} = require('./methods-002');

module.exports = {
  request: (endpoints, link, formData) => endpoints.login({link, formData}),
  render: (hasErrors, link) => (data) => {
    if (hasErrors(data)) return;
    const {token} = data;
    save(token);
    window.location = `${link}/dashboard`;
  },
};
