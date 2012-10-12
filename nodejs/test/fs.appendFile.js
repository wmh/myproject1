var fs = require('fs'),
    util = require('util');

fs.appendFile("test.txt", util.inspect(process, true, null), 'utf8', function () {
    console.log("complete appendFile");
});
console.log("after appendFile");

