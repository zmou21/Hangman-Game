//global variables go here


var word = ["cat","horse"];
var showSpace = [];
var letterPush = [];
// var replace = showLetter[0].replace(showLetter[0],letter[0]);
// var replace1 = showLetter[1].replace(showLetter[1],letter[1]);
// var replace2 = showLetter[2].replace(showLetter[2],letter[2]);
var userGuess = 8;
var guessList = [];

var wordRandom = word[Math.floor(Math.random() * word.length)];


document.body.onkeyup = function (e) {

	var show = " _ ";

	if (e.keyCode == 32) {

		var wordLength = wordRandom.length;

		console.log(wordLength);

			for (var i = 0; i < wordLength; i++) {

				showSpace.push(show);

				document.getElementById("guess").textContent = showSpace;
			}

		document.onkeyup = function(event) {

			var userPress = String.fromCharCode(event.keyCode).toLowerCase();

			console.log(userPress);

			if (userPress == "c" || userPress == "a" ||userPress == "t") {
				
				for (var i = 0; i < wordLength; i++) {

					var letter = [word.slice(i,i + 1)];

					letterPush.push(letter);

					console.log(letterPush);
				}

			}
	
		}

	}

}

// place number of wins out here//



//UNUSED CODE//

// console.log("test 1: "+ letter[0], letter[1], letter[2]);
// console.log("test 2: "+ letter[0] + letter[1] + letter[2]);
// console.log("test 3: "+ replace + replace1 + replace2);
// console.log(showLetter);


// function letterBig(num) {

// 	if (wordRandom) {

// 		if (userPress == wordRandom) {
// 			console.log(letterBig(num));	
// 			// console.log(letter[1]);
// 			// console.log(letter[2]);
// 		}
// 	}
// }