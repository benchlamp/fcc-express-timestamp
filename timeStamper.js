var chrono = require("chrono-node");


var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";



function timeStamper(timeString) {
    //console.log("passed string = " + timeString);
    var natural = "",
    unix = "",
    result = {};
    timeString = timeString.slice(1, timeString.length);
    
    if (isNaN(timeString)) {
        timeString = decodeURIComponent(timeString);
        timeString = chrono.parseDate(timeString); 
        unix = String(timeString.getTime() / 1000);
        natural = month[timeString.getMonth()] + " " + timeString.getDate() + ", " + timeString.getFullYear();
    } else {
        unix = timeString;
        timeString = new Date(timeString * 1000);
        console.log(timeString);
        //timeString = chrono.parseDate(timeString); 
        natural = month[timeString.getMonth()] + " " + timeString.getDate() + ", " + timeString.getFullYear();
    }
    

    result.unix = unix;
    result.natural = natural;
    return result;
}

module.exports = timeStamper;