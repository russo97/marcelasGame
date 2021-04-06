
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@sass': path.resolve(__dirname, 'src', 'assets', 'scss'),
        '@images': path.resolve(__dirname, 'src', 'assets', 'images'),
        '@components': path.resolve(__dirname, 'src', 'components')
      }
    },

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            // 'sass-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `
                  @import '@sass/_reset.scss';
                  @import '@sass/global.scss';
                `
              }
            },
          ],
        },
      ],
    },
  },
}
