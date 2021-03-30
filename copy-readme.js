const fs = require('fs');

fs.copyFile('./README.md', './gatsby-plugin-charts-css/README.md', (err) => {
  if (err) {
    throw err;
  }
  console.log('README copied to pluginok!');
});
