'use script'

var userName = prompt('Please Enter your Name');

alert('Hello ' + userName);

if (userName === 'Garrett'){
    document.write('<h2>' + 'Your name is toby,' + userName + </h2>)}
else {document.write('<h2>' + userName + 'Leave now or else' + </h2>)}


document.write('<h2>' + "Welcome " + userName + '</h2>')

window.onload = digitized();function digitized() {var dt = newDate();var hrs = dt.getHours();var min = dt.getminutes();var sec = dt.getSeconds();min = Ticking(min);sec = Ticking(sec);document.getElementById('clock').innerHTML = hrs + ":" + min;document.getElementById('second').innerHTML = sec; if (hrs > 12)}
{document.getElementById('hour').innerHTML = 'PM'; } else {document.getElementById('hour').innerHTML = 'AM'; }
var time;time = setTimeout('digitized()', 1000);}
function Ticking(ticVal) {if (ticVal < 10) {ticVal = "0" + ticVal;}return ticVal;}
