


module.exports = {
  Letter: function(letter) {
    this.letter = letter;
    this.hidden = true;

    //using .text to get true if exists, otherwise false

    if (!(/^[a-zA-Z]/.test(letter))) {
    	this.hidden = false;
    }
  },
}