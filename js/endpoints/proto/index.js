const register = require('./validate/register');
const login = require('./validate/login');
const logout = require('./validate/logout');
const addPost = require('./validate/add-post');
const addComment = require('./validate/add-comment');

module.exports = {
  register,
  login,
  logout,
  addPost,
  addComment,
};
