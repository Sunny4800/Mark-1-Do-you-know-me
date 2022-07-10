var readlineSync = require('readline-sync');

const chalk = require('chalk'); 

console.log(chalk.bgCyanBright("Welcome To My Intro Quiz")); 

var score=0;
var userName = readlineSync.question(chalk.red("Please !! Enter Your Name: "));

console.log(chalk.green('Bonjour !! ' + userName ));

console.log(chalk.bgRed.underline("\nWelcome To Round One !!"));
console.log(chalk.yellow.italic("\nAnswer the Question Correctly and Advance to Next Round"));

function Ques(ques1,ans1){
  var useranswer = readlineSync.question(ques1);
  
  if(useranswer.toLowerCase()===ans1){
  console.log(chalk.blue("\nYou are Absolutely Correct !!"));
    score=score+1;
    console.log(chalk.bgGreen("Your score is " + score));
  }
  else{
    console.log(chalk.red("\nYou are wrong !!"));
    score=score-1;
    console.log(chalk.bgGreen("Your score is " + score ));
  }
}
  Ques("\nWhat is My Age?\n","22") 
  if(score==1){
    console.log(chalk.bgBlack.underline("\nWelcome To Round Two !!"));
  Ques("\nWhich is my favourite color ?\n","green") 
  }
  if(score==2){
  Ques("\nWhich Company I want to join?\n","microsoft") 
  }
  if(score==3){
    console.log(chalk.bgMagenta.underline("\nWelcome To Final Round !!"));
  Ques("\nWhich is my favourite Superhero?\n","spiderman") 
  }
  if(score==4){
  Ques("\nWhat is my favourite food ? \n","dosa")
  }
  if(score==5){
    console.log(chalk.bgBlueBright("\nYou Have Cleared All the Rounds , Congratulations !!"));
    console.log(chalk.red.underline("You score is " + score));
  }
   
