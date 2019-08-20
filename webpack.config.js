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
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules'],
  },
  target: 'node',
};

module.exports = config;
