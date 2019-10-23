module.exports = {
  request: (endpoints, link, formData) => endpoints.register({link, formData}),
  render: (hasErrors, link) => (data) => {
    if (hasErrors(data)) return;
    window.location = `${link}/signed-up`;
  },
};
