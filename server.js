/*Define dependencies.*/

var express = require("express");
var app = express();

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/img", express.static(__dirname + '/img'));

/*Handling routes.*/
app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

/*Run the server.*/
app.listen(4404, function() {
    console.log("Working on port 4404");
});

