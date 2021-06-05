const MCEP = require('mini-css-extract-plugin');
const path = require("path");
const BASE_JS = "./src/client/js/"

module.exports = {
  entry: {
    main: BASE_JS + "main.js",
  },
  plugins: [new MCEP({
    filename: "css/styles.css",
  })],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "defaults"
              }]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        //마지막에 사용될 로더 부터  처음 사용할 로더 까지 반대 순서로 적어야 한다.(웹팩은 아래부터 읽어나감.)
        use: [MCEP.loader, "css-loader", "sass-loader"]
      },
    ]
  }
};