const config = {
  devtool: 'inline-source-map',
  entry: `${__dirname}/src/index.js`,
  externals: {
    react: 'react',
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  output: {
    path: `${__dirname}/bin`,
    filename: 'index.min.js',
    library: 'use-fetch-hooks',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  resolve: {
    extensions: ['.json', '.js'],
    modules: ['node_modules'],
  },
  target: 'node',
};

module.exports = config;
