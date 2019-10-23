module.exports = (data) => {
  const {link, formData} = data;
  if (formData['add-post-form-name'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/add-post/name`,
    };
  }
  if (formData['add-post-form-content'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/add-post/content`,
    };
  }
  return {
    method: 'POST',
    url: `${link}/api/proto/v1/validate/ok`,
  };
};
