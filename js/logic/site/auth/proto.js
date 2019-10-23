const nav = require('../../../pug/nav.pug');
const userDashboard = require('../../../pug/user_dashboard.pug');

module.exports = (protoAuth) => {
  const {getAuth, isGuest, patch} = protoAuth;
  return {
    auth: {
      notify: () => ((isGuest()) ? window.location.href = '/401' : true), // eslint-disable-line
    },
    render: () => {
      const user = getAuth();
      $('#auth-nav').html(patch(nav, {user}));
      $('#user-dashboard').html(patch(userDashboard, {user}));
    },
  };
};
