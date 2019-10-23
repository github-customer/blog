const {setToken} = require('@greenminds/nf-app-logic');

module.exports = {
  save: token => setToken(token),
};
