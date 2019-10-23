const {setAuth, setToken} = require('@greenminds/nf-app-logic').auth;

module.exports = {
  save: (token, user) => {
    setAuth(user);
    setToken(token);
  },
};
