//global variables go here


var word = "cat";
var letter = [word.slice(0,1), word.slice(1,2), word.slice(2,3)] 
var showLetter = ["_", "_", "_"];
var replace = showLetter[0].replace(showLetter[0],letter[0]);
var replace1 = showLetter[1].replace(showLetter[1],letter[1]);
var replace2 = showLetter[2].replace(showLetter[2],letter[2]);
var userGuess = 8;
var guessList = [];

// console.log("test 1: "+ letter[0], letter[1], letter[2]);
// console.log("test 2: "+ letter[0] + letter[1] + letter[2]);
// console.log("test 3: "+ replace + replace1 + replace2);
// console.log(showLetter);

document.onkeyup = function(event) {

	var userPress = String.fromCharCode(event.keyCode).toLowerCase();

	var wordLength = word.length;

	if (wordLength) {
		for (var i = 0; i < wordLength; i++) {

			if (userPress == letter[0] || userPress == letter[1] || userPress == letter[2]) {
				console.log(letter[0]);	
			}
		
		}
	}



}