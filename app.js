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
// create number guessing game
// give the user 5 chances to guess the correct answer
// if they get the wrong answer tell them high/low
// if they get the wrong answer tell the answer
// after 5 incorrect answers give them the answer
function numberGuessingGame() {
    var correctAnswer = 37;
    var playGame = prompt('Do you want to play a game?');
    while(playGame === 'yes'){
        for (var i = 0; i < 5; i = i + 1){
            var userGuess = parseInt(prompt("Please Enter a number 1-100"));
            if(userGuess === correctAnswer){
                alert('You guessed correct!')
                break;
            } else if (userGuess < correctAnswer){
                alert('You guessed to low')
            } else if (userGuess > correctAnswer){
                alert('You guessed to high')
            }
            if(i === 4){
                alert('The correct answer is ' + correctAnswer);
            }
        }
        playGame = prompt('Do you want to play another game?');
    }
}

numberGuessingGame()
