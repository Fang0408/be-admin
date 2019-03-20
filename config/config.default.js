const path = require('path');
module.exports = appInfo => {
  return {
    keys: appInfo.name + '_31415926_2019',
    assets: {
      publicPath: '/public/'
    },
    view: {
      defaultViewEngine: 'ejs',
      root: path.join(appInfo.baseDir, 'app/view'),
      defaultExtension: '.html'
    }
  }
  
};
