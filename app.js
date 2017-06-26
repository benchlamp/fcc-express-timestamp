///December%2015,%202015
//1450137600

var express = require("express"),
    url = require("url"),
    app= express(),
    timeStamp = require("./timeStamper");
    
    
app.use(function(req, res) {
    res.send(timeStamp(req.url));
})




app.listen(process.env.PORT);