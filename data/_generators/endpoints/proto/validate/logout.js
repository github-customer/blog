module.exports = (data) => {
  const {link} = data;
  return {
    method: 'POST',
    url: `${link}/api/proto/v1/validate/ok`,
  };
};
