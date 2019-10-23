const {logout} = require('./methods-001');

module.exports = (helper) => {
  const {endpoints, link} = helper;
  return {
    '': [
      ['click', '.log-out', 'logout'],
    ],
    logout: () => logout(endpoints, link),
  };
};
