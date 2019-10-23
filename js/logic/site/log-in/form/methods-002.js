const {setToken} = require('@greenminds/nf-app-logic').auth;

module.exports = {
  save: token => setToken(token),
};
