//Reading the line and user input

var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name ? ');
let chalk = require("chalk");

//Instructions

console.log('Hello '+ chalk.cyan.bold.underline(userName) + " ! Very Brave of you to attempt this Quiz on Manchester United.");
console.log('*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*');
console.log("\n");
console.log(chalk.red.bold('Some Rules to keep in mind\n'));
console.log("Not case sensitive");
console.log('+5 for correct answer,-3 for wrong answer(sorry, its a game after all :)');
console.log("The answers are space sensitive and use full names to score the maximum")
console.log("Looks like you are all set, Best of luck :)")
console.log("\n");
console.log
('-**-*-**-*-**-*-**-*-**-*-**-*-**-*-**-*-**-*-**-*-**-*');

//Main code starts from here

//Variable Declarations
var score = 0;

//Highest Score info
var scoreInfo = [{
  name: "sahshah",
  score: 10
},];

//Function To Read input, check right or wrong
function play(question,answer){
  var userAnswer = readlineSync.question(chalk.yellow.bold(question))//UserINput
  
  if(userAnswer.toLowerCase() === answer){
    console.log(chalk.green.bold("Huzzah! You are correct"));
    score = score+5;
    console.log('Current score : '+ chalk.green.bold(score));
  }
  else{
    console.log(chalk.red.bold("It looks like we may have hit a bump! Right answer was "+ answer));
    score = score-3;
    console.log('Current score : '+ chalk.red.bold(score));
  }
  console.log('-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-')
}

//Questions For the Quiz. JSON
var quizQuestions = [{
  question: "What is name of home stadium of Manchester United? ",
  answer: "old trafford"
}, {
  question: "What is the nickname of Manchester United? ",
  answer: "the red devils"
}, {
  question: "How many Premier League Trophies have united won? ",
  answer: "13"
}, {
  question: "How is the most Successful Manager Of Manchester United? ",
  answer: "Sir Alex Ferguson"
},{
  question: "Who has scored the most goals for Manchester United? ",
  answer: "wayne rooney"
}]

//Looping through Questons
for(var i=0; i<quizQuestions.length; i++ ){
  
  play(quizQuestions[i].question,quizQuestions[i].answer)

}
console.log("Uff that was quite intense! You scored: " + score);
if(score >= scoreInfo[0].score){
  console.log(chalk("One more thing.....\n"));
  console.log(chalk("Congratulations! Your knowledge on Manchester United is tiptop. You have secured the highest score\nSend me a screenshot of your triumph!"));
  console.log(chalk("New HighScore: "+ score));
}
else{
  console.log(chalk.red.bold("Sorry! You are not the highest Scorer!"));
  console.log(("Current Highest Scorer: Name: "+ scoreInfo[0].name +" Score: " + scoreInfo[0].score ));
}