const isInvalid = (email) => {
  const reg = /\S+@\S+\.\S+/;
  return !reg.test(email);
};

const emails = ['a@a.a', 'b@b.b', 'c@c.c', 'd@d.d'];

module.exports = (data) => {
  const {link, formData} = data;
  const email = formData['login-form-email'];
  if (isInvalid(email)) return {url: `${link}/api/proto/v1/validate/error/login`};
  if (formData['login-form-password'] === '') return {url: `${link}/api/proto/v1/validate/error/login`};
  if (emails.includes(email)) return {url: `${link}/api/proto/v1/login/${emails.indexOf(email)}`};
  return {url: `${link}/api/proto/v1/login/none`};
};
