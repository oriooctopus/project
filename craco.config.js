const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      src: path.resolve(__dirname, './src'),
    },
    module: {
      rules: [
        {
          test: /\.graphql$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
  },
};
