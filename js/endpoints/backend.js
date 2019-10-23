const {ajaxObject} = require('@greenminds/nf-app-logic');

const apiVersion = 1;

module.exports = host => ajaxObject(host, apiVersion, {
  register: ['post', 'register'],
  login: ['post', 'login'],
});
