const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: { appendTsSuffixTo: [/\.vue$/], transpileOnly: true },
        },
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.resolve.extensions.push(
      '.ts',
      '.tsx',
      '.vue',
      '.css',
      '.less',
      '.scss',
      '.sass',
      '.html'
    );
    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  },
};
