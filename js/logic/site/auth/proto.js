const nav = require('../../../pug/nav.pug');

module.exports = (protoAuth) => {
  const {isGuest, patch} = protoAuth;
  return {
    auth: {
      notify: () => ((isGuest()) ? window.location.href = '/401' : true), // eslint-disable-line
    },
    render: () => {
      $('#auth-nav').html(patch(nav, {isGuest: isGuest()}));
    },
  };
};
