// Create Secret Number
var secretNumber = 4;

// Guess right
var guessRight = 0;
var guess;

while(guessRight==0)
{
	// Ask user for guess
	guess = prompt("Guess a number");
	console.log(guess);
	// check guess
	if(Number(guess)===secretNumber)
	{
		alert("You guessed it");
		guessRight = 1;
	}
	else if (guess>secretNumber)
	{
		alert("Too big");
	}
	else
	{
		alert("Too small");
	}
}
