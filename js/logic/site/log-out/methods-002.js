const {removeToken} = require('@greenminds/nf-app-logic');

module.exports = {
  request: (endpoints, link, token) => endpoints.logout({link, token}),
  render: (data) => {
    const {status} = data;
    if (`${status}` !== 'ok') return;
    removeToken();
    window.location.reload(true);
  },
};
