// JavaScript Document
{
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
        greeting = "Good Day";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("js").innerHTML = greeting;
}

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}

document.getElementById("day").innerHTML = "It's " + day;


var time = Math.random();
	if (time < 18) {
		write = "It's after noon, time for a beer!";
	} else {
		write = "It's never too early for a beer!";
	}
document.getElementById("time").innerHTML = write;
