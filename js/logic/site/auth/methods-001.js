const {request, render} = require('./methods-002');

module.exports = {
  logout: (endpoints, link) => {
    $.ajax(request(endpoints, link)).done(render);
  },
};
