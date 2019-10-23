module.exports = {
  request: (endpoints, link, formData) => endpoints.addPost({link, formData}),
  render: (hasErrors, link) => (data) => {
    if (hasErrors(data)) return;
    window.location = `${link}/post-was-published`;
  },
};
