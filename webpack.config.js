const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  entry: "./src/index.js",
  output: {
    // NEW
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  }, // NEW Ends
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.txt$/, 
            use: 'raw-loader',
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
            extensions: [".js", ".jsx"],
            },
            use: {
            loader: "babel-loader",
            },
        test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
        test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
