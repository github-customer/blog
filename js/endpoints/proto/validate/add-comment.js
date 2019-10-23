const isInvalid = (email) => {
  const reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
};

module.exports = (data) => {
  const {link, formData} = data;
  if (formData['add-comment-form-name'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/add-comment/name`,
    };
  }
  if (isInvalid(formData['add-comment-form-email'])) {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/add-comment/email`,
    };
  }
  if (formData['add-comment-form-message'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/add-comment/message`,
    };
  }
  return {
    method: 'POST',
    url: `${link}/api/proto/v1/comment-added`,
  };
};
