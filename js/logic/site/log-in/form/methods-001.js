const {save} = require('./methods-002');

module.exports = {
  request: (endpoints, link, formData) => endpoints.login({link, formData}),
  render: (hasErrors, link) => (data) => {
    if (hasErrors(data)) return;
    const {token, user} = data;
    save(token, user);
    window.location = `${link}/dashboard`;
  },
};
