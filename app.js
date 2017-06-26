///December%2015,%202015

var express = require("express"),
    url = require("url"),
    app= express();
    
    
app.use(function(req, res) {
    res.send(timeStamper(req.url));
})


function timeStamper(timeString) {
    var result = "";
    timeString = timeString.slice(1, timeString.length);
    result = timeString;
    return result;
}

app.listen(process.env.PORT);