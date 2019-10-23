const {removeAuth, removeToken} = require('@greenminds/nf-app-logic').auth;

module.exports = {
  request: (endpoints, link, token) => endpoints.logout({link, token}),
  render: (data) => {
    const {status} = data;
    if (`${status}` !== 'ok') return;
    removeAuth();
    removeToken();
    window.location.reload(true);
  },
};
