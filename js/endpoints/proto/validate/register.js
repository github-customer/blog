const isInvalid = (email) => {
  const reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
};

module.exports = (data) => {
  const {link, formData} = data;
  if (formData['register-form-name'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/register/name`,
    };
  }
  if (isInvalid(formData['register-form-email'])) {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/register/email`,
    };
  }
  if (formData['register-form-password'] === '') {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/validate/error/register/password`,
    };
  }
  return {
    method: 'POST',
    url: `${link}/api/proto/v1/validate/ok`,
  };
};
