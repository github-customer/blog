const {make} = require('@greenminds/nf-app-logic').auth;
const proto = require('./proto');
const {logout} = require('./methods-001');

module.exports = (helper) => {
  const {endpoints, link} = helper;
  const real = {
    '': [
      ['click', '.log-out', 'logout'],
    ],
    logout: () => logout(endpoints, link),
  };
  return make(helper, real, proto);
};
