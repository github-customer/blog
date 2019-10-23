const register = require('./validate/register');
const login = require('./validate/login');
const logout = require('./validate/logout');
const addPost = require('./validate/add-post');

module.exports = {
  register,
  login,
  logout,
  addPost,
};
