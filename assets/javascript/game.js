//global variables go here


var word = ["cat","horse","mood"];
var showSpace = [];
var letterPush = [];
// var replace = showLetter[0].replace(showLetter[0],letter[0]);
// var replace1 = showLetter[1].replace(showLetter[1],letter[1]);
// var replace2 = showLetter[2].replace(showLetter[2],letter[2]);
var userGuess = 8;
var guessList = [];
var win = 0;

var wordRandom = word[Math.floor(Math.random() * word.length)];

console.log(wordRandom);


document.body.onkeyup = function (e) {

	var showUnderscore = " _ ";

	if (e.keyCode == 32) {

		var wordLength = wordRandom.length;

		console.log(wordLength);

			for (var i = 0; i < wordLength; i++) {

				showSpace.push(showUnderscore);

				document.getElementById("guess").textContent = showSpace;
			}


//slices the randomly chosen word into it's individuals character's 
			for (var j = 0; j < wordLength; j++) {

				var letter = [wordRandom.slice(j,j + 1)];

				letterPush.push(letter);


		

//As letters are pressed they are pushed and replaced into their appropriate position
				document.onkeyup = function(event) {

					var userPress = String.fromCharCode(event.keyCode).toLowerCase();

					var guessList = [];

					for (var k = 0; k < wordLength; k++) {

						if (userPress == letterPush[k]) {

							letterPush.push(userPress);

							document.getElementById("word").textContent = letterPush;

							letterPush--; 
						}

						else if (userPress != letterPush[k]) {
						
							if (guessList > userGuess)  {
							guessList.push(userPress);

							document.getElementById("lettersGuessed").textContent = guessList;
							}

						}						

					}

				}			
	
			}

	}

}

// placeholder to track number of wins out here//

	// if (letterPush == wordRandom) {
	// 	win++;
	// 	document.getElementById("wins").textContent = win;
	// }



//UNUSED CODE//

// console.log("test 1: "+ letter[0], letter[1], letter[2]);
// console.log("test 2: "+ letter[0] + letter[1] + letter[2]);
// console.log("test 3: "+ replace + replace1 + replace2);
// console.log(showLetter);



