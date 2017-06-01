var timer = 30
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

$("#trivia").html('<p>What was the first Hip Hop song ever recorded?</p> <form> <input type="radio" name="choices" value="true"> Rappers Delight<input type="radio" name="choices" value="false"> The Breaks<input type="radio" name="choices" value="false"> Its Like That<input type="radio" name="choices" value="false"> Planet Rock</form>');

});

function checkAnswers() {
	$("#pageTimer").html("<br>");
	$("#trivia").html('<p>All Done!</p><br><p>Correct Answers: ' + correct + '</p><br><p>Incorrect Answers: ' + incorrect + '</p><br><p>Unanswered Questions: ' + unanswered + '</p');
	
}


// $("#startUp").on("click" function () {

// })



// Start function that starts the game



// function start game () {

// }

// #### The questions do not need to be variables. They can be text appended in the web page. The event listener (on click) can determine if the answer is correct or incorrect by (class = "incorrect" vs class = "correct")

 

// Countdown Timer: -- Counts down from 60 seconds, giving players enough time to answer 5 trivia questions. -- when the time expires, the page checks for correct vs. incorrect answers and publishes them on the web page.