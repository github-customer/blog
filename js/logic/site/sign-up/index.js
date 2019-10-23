const {createAccount} = require('./form')('register-form');

module.exports = (helper) => {
  const {endpoints, link} = helper;
  return {
    '': [
      ['click', '#register-form-submit', 'register'],
    ],
    register: () => createAccount(endpoints, link),
  };
};
