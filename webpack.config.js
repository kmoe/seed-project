module.exports = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  }
}
