$(document).ready(function () {

$('.navbar a').mouseenter(function () {

	$(this).css('color', '#f45409');
});

$('.navbar a').mouseleave(function() {

	$(this).css('color', 'white');
	
});

$('.linkbutton').mouseenter(function () {

	$(this).css('background-color', 'black');

	$('linkbutton p').css('color', 'white');

});


$('.linkbutton').mouseleave(function () {

	$(this).css('background-color', 'white');

	$('linkbutton p').css('color', 'black');

});

$('.lessonsblurb a').mouseenter(function () {

	$(this).css('color', '#f45409');

})


$('.lessonsblurb a').mouseleave(function () {

	$(this).css('color', 'black');

})


















})