var Letter = require("./letter.js").Letter;

module.exports = {
  challenge: function(challenge) {
    this.correct = challenge;
    this.challenge = [];
    this.revealed = false;
    for (i = 0; i < challenge.length; i++) {
      this.challenge.push(new Letter(challenge[i]));
    }

    this.match = function(letter) {
      var check = false;
      for (var i = 0; i < this.challenge.length; i++) {
        if (letter[0].toLowerCase() === this.challenge[i].letter.toLowerCase()) {
          this.challenge[i].hidden = false;
          check = true;
        }
      }
      return check;
    };

    this.print = function() {
      var spaces = '';
      var show = 0;
      for (var i = 0; i < this.challenge.length; i++) {
        if (this.challenge[i].hidden) {
          spaces += "- ";
        } else {
          spaces += this.challenge[i].letter + " ";
          show++;
        }
      }
      console.log("\n" + spaces + "\n");
      if (show >= this.challenge.length) {
        this.revealed = true;
      }
    };
  },
}