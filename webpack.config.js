const path = require('path');
const plugin = require('html-webpack-plugin'); 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins:[
    new plugin({
      template: './src/index.html'
    })
  ]
};