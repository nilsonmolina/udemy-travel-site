//console.log(2+2);

var fileSystem = require('fs');
var https = require('https');

fileSystem.writeFile(__dirname + "/index.html","<h1>node ROCKS!</h1>");

var dogUrl = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
var dogFile = fileSystem.createWriteStream(__dirname + "/node-dog.jpg");
var request = https.get(dogUrl, function(response) {
    response.pipe(dogFile);
});