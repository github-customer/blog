const $ = window.jQuery;

module.exports = {
  render: (selector, errorText) => {
    $(selector).addClass('is-invalid');
    $(selector).next().text(errorText);
  },
};
