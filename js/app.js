var subject;
var limit = '&limit=12';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var queryUrl;
var respCol;
var i;
var j;
var hasRating;
var displaySubject;
var showButtons;

var shows = [
	'Murder She Wrote',
	'Star Trek Voyager',
	'Star Trek Deep Space Nine',
	'Buffy the Vampire Slayer',
	'Battlestar Galactica',
	'Bones',
	'Quantum Leap',
	'Law and Order',
	'Mad Men',
	'Breaking Bad',
	'The Wire',
	'Xena Warrior Princess'
], j;

function displayButtons() {
	for(j = 0; j < shows.length; j++) {
		showButtons = $('<div class="col col-xs-2 col-btn"><button class="btn btn-default btn-gif" data-subject="' + shows[j] + '">' + shows[j] + '</button></div>');
		$('.row-btn').append(showButtons);
	}

}

function ajaxQuery(event) {
	$('.row-gifs').empty();
	subject = $(this).attr('data-subject');
	queryUrl = ('https://api.giphy.com/v1/gifs/search?q=' + subject + limit + apiKey);
	console.log(queryUrl);
	$.ajax({url: queryUrl, method: 'GET'})
	.done(function(response) {
		console.log(response);
		for(i = 0; i < response.data.length; i++) {

			console.log(response.data[i].images.fixed_height.url);
			respCol = $('<div class="col col-xs-3 col-gif ' + i + '"><img class="gif-thumb" alt="" src="' + response.data[i].images.fixed_height.url + '" /><br /></div>');
			// displaySubject = 
			// respCol.append('' + subject + '');

			hasRating = response.data[i].rating.toUpperCase();
			if(response.data[i].rating === '') {
				respCol.append('<span>rating: NR</span>');
			} else {
				respCol.append('<span>rating: ' + hasRating + '</span>');
			}
			$('.row-gifs').append(respCol);
		}





	});
}

	displayButtons();

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