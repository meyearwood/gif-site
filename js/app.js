var subject;
var limit = '&limit=12';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var queryUrl;

function ajaxQuery(event) {
	subject = $(this).attr('data-subject');
	queryUrl = ('https://api.giphy.com/v1/gifs/search?q=' + subject + limit + apiKey);
	console.log(queryUrl);
	$.ajax({url: queryUrl, method: 'GET'})
	.done(function(response) {
		console.log(response);
	});
	$('.btn-gif').off();
}

	$('.btn-gif').click(ajaxQuery);

// page loads with header and start button
// on click start button, load first question, start timer set interval
// if on click answer before timer runs out, freeze timer.  
	//if correct, display well done photo frozen timer.  
	// if wrong, display sorry correct answer photo frozen timer.
	// if timer runs out, display time's up correct answer photo frozen 0 timer.
// set timeout to load next question and reset timer.
// loop through all questions until finished.
	// hide timer
	// correct answers, incorrect answers, timed out
	// start over button resets game