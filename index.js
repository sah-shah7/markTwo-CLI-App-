//Reading the line and user input

var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name ? ');
let chalk = require("chalk");

//Instructions

console.log('Hello '+ chalk.cyan.bold.underline(userName) + ' ! You have choosen to prove yourself in the How well do you know SAHIL? quiz.');
console.log('*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*-*--*');
console.log("\n");
console.log(chalk.red.bold('Some Rules to keep in mind\n'));
console.log("Not case sensitive");
console.log('+5 for correct answer,-3 for wrong answer(sorry, its a game after all :)');
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
  question: "How old am I? ",
  answer: "22"
}, {
  question: "Which is my favourite sport to play? ",
  answer: "football"
}, {
  question: "Which is my favourite football club? Type the whole name ",
  answer: "manchester united"
}, {
  question: "what do i prefer more? Tea or Coffee ",
  answer: "tea"
},{
  question: "What do i prefer more? Pizza or Pasta ",
  answer: "pizza"
}]

//Looping through Questons
for(var i=0; i<quizQuestions.length; i++ ){
  
  play(quizQuestions[i].question,quizQuestions[i].answer)

}
console.log("Uff that was quite intense! You scored: " + score);
if(score >= scoreInfo[0].score){
  console.log(chalk("One more thing.....\n"));
  console.log(chalk("Congratulations! Your knowledge on Sahil is tiptop. You have secured the highest score\nSend me a screenshot of your triumph!"));
  console.log(chalk("New HighScore: "+ score));
}
else{
  console.log(chalk.red.bold("Sorry! You are not the highest Scorer!"));
  console.log(("Current Highest Scorer: Name: "+ scoreInfo[0].name +" Score: " + scoreInfo[0].score ));
}