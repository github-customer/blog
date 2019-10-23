const {checkLogin} = require('./form')('login-form');

module.exports = (helper) => {
  const {endpoints, link} = helper;
  return {
    '': [
      ['click', '#login-form-submit', 'login'],
    ],
    login: () => checkLogin(endpoints, link),
  };
};
