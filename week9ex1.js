var start= new Date();

var startMilli = start.getTime();



function stopTime()
{

var stop= new Date();

var stopMilli = stop.getTime();


var difMilli = stopMilli - startMilli;


var difSeconds = difMilli/1000;

console.log(difSeconds);
alert("the number of seconds passed is"+difSeconds)

}
