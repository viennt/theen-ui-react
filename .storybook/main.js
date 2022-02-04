module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    'storybook-source-code-addon',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
