module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/src/index.ts`,
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
    filename: 'index.js',
    libraryTarget: 'commonjs',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules'],
  },
};
