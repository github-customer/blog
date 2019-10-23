# nullFront example blog

Assumed you have actual `node`, `npm` and `gulp` installed globally.

First of all, install `nullFront`:

- clone [nullfront-dev](https://github.com/greenminds/nullfront-dev);

- `cd` into its folder, then `npm run keep` there.

Then add this project to your `nullfront-dev`:

- `mkdir projects` there;

- `cd projects`, clone this repo there, get it in `projects/nf-example-blog` by default;

- `cd ..` back to `nullfront-dev` folder;

- `gulp build -p projects/nf-example-blog`;

- `gulp -p projects/nf-example-blog`;

- `gulp` and `browser-sync` will guide your further.

You may want to run local `gulp` by `./node_modules/gulp/bin/gulp.js` with the same parameters as `gulp`.

Every commit here is checkoutable, `gulp` buildable and startable.

Every commit here solves some specific task and makes some meaningful difference. Notes on every commit will be added here shortly.

