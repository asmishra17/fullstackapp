var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res){
    // send something back to browser
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/all", function (req, res) {
    console.log("data");
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// app.get("/path")
// put
// post
// delete