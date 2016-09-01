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
var gifThumbHeight;
var gifThumbHeightNum;
var imgHeightArr = [];

var shows = [
	'Murder She Wrote',
	'Star Trek Voyager',
	'BeastMaster',
	'Buffy the Vampire Slayer',
	'Battlestar Galactica',
	'Bones',
	'Quantum Leap',
	'CSI',
	'Hercules',
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
	$('.row-gif').empty();
	subject = $(this).attr('data-subject');
	queryUrl = ('https://api.giphy.com/v1/gifs/search?q=' + subject + limit + apiKey);
	console.log(queryUrl);

	$.ajax({url: queryUrl, method: 'GET'})
	.done(function(response) {
		console.log(response);
		$('.col-gif').css({'height': ''});
		imgHeightArr = [];

		for(i = 0; i < response.data.length; i++) {

			console.log(response.data[i].images.original.url);
			respCol = $('<div class="col col-xs-3 col-gif col-' + [i] + '"><img class="gif-thumb img-' + [i] + '" alt="" src="' + response.data[i].images.original.url + '" /><br /></div>');
			// displaySubject = 
			imgHeightArr.push(response.data[i].images.original.height/response.data[i].images.original.width);
			$('.gif-thumb').on('load', imgHeight);
			hasRating = response.data[i].rating.toUpperCase();
			if(response.data[i].rating === '') {
				respCol.append('<span>rating: NR</span>');
			} else {
				respCol.append('<span>rating: ' + hasRating + '</span>');
			}
			$('.row-gif').append(respCol);
		}
		// respCol.append('' + subject + '');
			





	});
}
function imgHeight() {
		imgHeightArr.sort(function(a, b) {
			return b - a;
		});
		newImgHeight = imgHeightArr[0] * 255
		$('.col-gif').css({'height': 'calc(' + newImgHeight + 'px + 30px + 1.5em)'});
}

$(document).ready(function() {

	displayButtons();

	$('.btn-gif').click(ajaxQuery);

});

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