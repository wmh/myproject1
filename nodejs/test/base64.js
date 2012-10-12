var fs = require('fs');

fs.readFile("./favicon.ico", function (err, original_data) {
    console.log("readFile callback");
    //fs.writeFile('favicon.ico', original_data, function(err) {});

    var base64Image = original_data.toString('base64');
    fs.writeFile('favicon.ico.txt', base64Image, function(err) {});

    //var decodedImage = new Buffer(base64Image, 'base64');
    //fs.writeFile('favicon_decode.ico', decodedImage, function(err) {});

});
console.log("after readFile");

