var fs = require('fs')
fs.readFile('/home/jsantana/dev/testData/testData.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
