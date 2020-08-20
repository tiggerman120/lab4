'use script'

function greeting() {
var userName = prompt('Please Enter your Name');
alert('Hello ' + userName);
if (userName === 'Garrett')
{document.write('<h2>' + 'Your name is toby, ' + userName + '</h2>')}
else {document.write('<h2>' + userName + ' Leave now or else' + '</h2>')}
}

function chickenNumber() {
var chickenCount = prompt('Please tell us how much chicken you eat');
if (chickenCount = 'none')
    {document.write('eat more chickens!')}
    else {document.write('<p> eat more chicken!</p>')};
}
function takeMeHome() {
var ownership = prompt('Do you want to be a chicken farmer? yes/no')
if (ownership = 'yes')
document.write('You should buy our chickens and be a birbma!');
}
greeting()
chickenNumber()
takeMeHome()
