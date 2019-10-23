const isInvalid = (email) => {
  const reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
};

const emails = ['a@a.a', 'b@b.b', 'c@c.c', 'd@d.d'];

module.exports = (data) => {
  const {link, formData} = data;
  const email = formData['login-form-email'];
  if (isInvalid(email)) {
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
  if (emails.includes(email)) {
    return {
      method: 'POST',
      url: `${link}/api/proto/v1/login/${emails.indexOf(email)}`,
    };
  }
  return {
    method: 'POST',
    url: `${link}/api/proto/v1/login/none`,
  };
};
