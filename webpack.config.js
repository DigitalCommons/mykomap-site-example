var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var CopyPlugin = require('copy-webpack-plugin');

const buildDir = path.join(__dirname, "/build/out/");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  devtool: debug ? "inline-source-map" : false,
  output: {
    path: buildDir,
    filename: "map-app/map-app.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash].[ext][query]',
        },
      },
      {
        test: /\.php/,
        type: 'asset/resource',
        generator: {
          filename: 'service/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "config", to: `${buildDir}/configuration`,
          globOptions: { ignore: ["**/*~"] },
        },
      ],
    }),
  ],
}
