const path = require('path');

const config = {
  entry: {
    index: path.join(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js'
  }
};

module.exports = config;
