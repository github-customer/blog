const {detect} = require('@greenminds/nf-app-logic/routes');

module.exports = (params) => detect(params, {
  posts: (postParams) => {
    const [model, id] = postParams; // route: /posts/:id
    if (model !== 'posts') return false;
    if (!id) return false; // uses static route /posts
    return {
      '': {
        view: 'post/single',
        endpoint: {
          posts: {'': id},
        },
      },
    };
  },
});
