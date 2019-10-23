const isInvalid = (email) => {
  const reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
};

module.exports = (data) => {
  const {link, formData} = data;
  if (isInvalid(formData['login-form-email'])) {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/login`,
    };
  }
  if (formData['login-form-password'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/login`,
    };
  }
  return {
    method: 'POST',
    url: `${link}/api/proto/v1/login/ok`,
  };
};
