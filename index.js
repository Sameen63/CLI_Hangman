var theWord = require("random-word");
var inquirer = require("inquirer");
var Word = require("./word.js").challenge;

function play() {
  var random = new Word(theWord());
  var chances = 8;
  var userGuess = [];
  random.print();

  function userMark() {
    var userStuff = [{
      name: "userMark",
      message: "Guess This word. Enter a letter",
      type: "text",
      
      //.test method returns true if it finds a match, otherwise it returns false
      //to check user is entring one letter

      validate: function (userInput) {
      	if (typeof userInput === "string" && userInput.length === 1 && /^[a-zA-Z]/.test(userInput)){
      		return true;
      	} else {
      		return "Wrong entary. Please enter a letter";
      	}
      }
    }];

    //run propmt and see if letter matches
    //decrement in cnaces if wrong

    inquirer.prompt(userStuff).then(function(response) {
      var latter = response.userMark[0].toLowerCase();
      if (userGuess.indexOf(latter) === -1) {
        userGuess.push(latter);
        if (random.match(latter)) {
          console.log("\nRight answer. chances remaining= " + chances);
        } else {
          chances--;
          console.log("\nWrong. chances remaining= " + chances);
        }
      } else {
      	console.log("\nAlready Guessed");
      }
      random.print();
      if (chances > 0 && !random.revealed) {
        userMark();
      } else {
        console.log("You lost!");
        console.log("\nCorrect answer: " + random.correct + "\n");
        reset();
      }

    }).error;

  }
  userMark();
}
play();
    
    //give user option st restart or quit.

function reset() {
  var again = [{
    name: "newgame",
    message: "Play Again? ",
    type: "confirm",
    default: false
  }];
  inquirer.prompt(again).then(function(response) {
    if (response.newgame) {
      play();
    } else {
      console.log("\nBye. Comeback again");
    }
  })
}