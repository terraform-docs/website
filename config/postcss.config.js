const autoprefixer = require('autoprefixer');
// const purgecss = require('@fullhuman/postcss-purgecss');
// const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    // purgecss({
    //   content: [
    //     './layouts/**/*.html',
    //     './content/**/*.md',
    //   ],
    //   safelist: [
    //     'lazyloaded',
    //     'table',
    //     'thead',
    //     'tbody',
    //     'tr',
    //     'th',
    //     'td',
    //     'h5',
    //     'alert-link',
    //     ...whitelister([
    //       './assets/scss/components/_carbonads.scss',
    //       './assets/scss/components/_buttons.scss',
    //       './assets/scss/components/_code.scss',
    //       './assets/scss/common/_dark.scss',
    //       './assets/scss/common/_header.scss',
    //       './assets/scss/components/_diagrams.scss',
    //       './assets/scss/components/_search.scss',
    //       './assets/scss/components/_syntax.scss',
    //       './assets/scss/components/_syntax_dark.scss',
    //       './assets/scss/layouts/_pages.scss',
    //       './assets/scss/layouts/_sidebar.scss',
    //     ]),
    //   ],
    // }),
  ],
}
