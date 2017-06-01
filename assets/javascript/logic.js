var timer = 90
var correct = 0
var incorrect = 0
var unanswered = 0
var intervalId;

function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--
	$("#pageTimer").html(timer);

	if (timer === 0) {
		stop ();
		checkAnswers();
	}
}

function stop() {

	clearInterval(intervalId);
};

$("#start").on("click", function() {

	run();

	$("#buttonUp").html("");

	$("#trivia").html("<br><p>What was the first Hip Hop song ever recorded?</p> <form> <input type='radio' class='choices' value='right'> Rappers Delight<input type='radio' class='choices' value='wrong'> The Breaks<input type='radio' class='choices' value='wrong'> Its Like That<input type='radio' class='choices' value='wrong'> Planet Rock</form><br><br><p>What was LL Cool J's first DJ's name?</p> <form> <input type='radio' class='choices' value='wrong'> Jam Master Jay<input type='radio' class='choices' value='right'> Cut Creator<input type='radio' class='choices' value='wrong'> Bob Cat<input type='radio' class='choices' value='wrong'> Flash</form><br><br><p>What New York borrough is RUN DMC from?</p> <form> <input type='radio' class='choices' value='wrong'> Brooklyn<input type='radio' class='choices' value='wrong'> Bronx<input type='radio' class='choices' value='right'> Queens<input type='radio' class='choices' value='wrong'> Manhattan</form><br><br><p>What record label was Eric B and Rakim on?</p> <form> <input type='radio' class='choices' value='wrong'> Def Jam<input type='radio' class='choices' value='right'> 4th & Broadway<input type='radio' class='choices' value='wrong'> Profile<input type='radio' class='choices' value='wrong'> Jive</form><br><br><p>MC Lyte's brother, Milk, was in what well known Hip Hop group?</p> <form> <input type='radio' class='choices' value='wrong'> Public Enemy<input type='radio' class='choices' value='wrong'> RUN DMC<input type='radio' class='choices' value='wrong'> A Tribe Called Quest<input type='radio' class='choices' value='right'> Audio Two</form><br><br><p>The legendary hip hop collective that consisted of De La Soul, A Tribe Called Quest, Queen Latifah, Black Sheep, Monie Love, The Jungle Brothers and others went by which of the following names?</p> <form> <input type='radio' class='choices' value='wrong'> The Symphony<input type='radio' class='choices' value='wrong'> The Juice Crew<input type='radio' class='choices' value='right'> The Native Tongues<input type='radio' class='choices' value='wrong'> Boogie Down Productions</form><br><br><p>What record label did Run of RUN DMC's brother own?</p> <form> <input type='radio' class='choices' value='wrong'> Jive Records<input type='radio' class='choices' value='wrong'> Uptown Records<input type='radio' class='choices' value='right'> Def Jam Records<input type='radio' class='choices' value='wrong'> Profile Records</form><br><br><p>In the movie, Juice, what was TuPac Shakur's character's name?</p> <form> <input type='radio' class='choices' value='wrong'> King<input type='radio' class='choices' value='right'> Bishop<input type='radio' class='choices' value='wrong'> Knight<input type='radio' class='choices' value='wrong'> Rook</form><br><br><p>The Stop The Violence allstar rap lineup was organized by which of the following rap legends?</p> <form> <input type='radio' class='choices' value='right'> KRS-1<input type='radio' class='choices' value='wrong'> LL Cool J<input type='radio' class='choices' value='wrong'> Reverend Run<input type='radio' class='choices' value='wrong'> Will Smith</form><br><br><p>Ice Cube's debut as rapper turnt actor was in which of the following files?</p> <form> <input type='radio' class='choices' value='wrong'> Friday<input type='radio' class='choices' value='wrong'> Trespass<input type='radio' class='choices' value='wrong'> Menace II Society<input type='radio' class='choices' value='right'> Boys In Da Hood</form>"); 

});

function checkAnswers() {

	 
	$("#pageTimer").html("<br>");
	
	$("#trivia").html('<p>All Done!</p><br><p>Correct Answers: ' + correct + '</p><br><p>Incorrect Answers: ' + incorrect + '</p><br><p>Unanswered Questions: ' + unanswered + '</p>');
}


// $("#startUp").on("click" function () {

// })



// Start function that starts the game



// function start game () {

// }

// #### The questions do not need to be variables. They can be text appended in the web page. The event listener (on click) can determine if the answer is correct or incorrect by (class = "incorrect" vs class = "correct")

 

// Countdown Timer: -- Counts down from 60 seconds, giving players enough time to answer 5 trivia questions. -- when the time expires, the page checks for correct vs. incorrect answers and publishes them on the web page.