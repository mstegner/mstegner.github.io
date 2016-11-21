$(document).ready(function () {

//nav bar text color change on mouseenter/mouseleave

$('.navbar a').mouseenter(function () {

	$(this).css('color', '#03b73f');
});

$('.navbar a').mouseleave(function() {

	$(this).css('color', 'white');
	
});

//link button color change on mouseenter/mouseleave

$('.linkbutton').mouseenter(function () {

	$(this).css('background-color', 'white');

	$('linkbutton a').css('color', 'black');

});


$('.linkbutton').mouseleave(function () {

	$(this).css('background-color', 'black');

	$('linkbutton a').css('color', 'white');

});

//lessons blurb link color change on mouseenter/mouseleave

$('.lessonsblurb a').mouseenter(function () {

	$(this).css('color', '##03b73f');

});


$('.lessonsblurb a').mouseleave(function () {

	$(this).css('color', 'black');

});

// home page icons hover and focus state color change


$(".iconbubble").mouseenter(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_focus.svg";
            $(this).attr("src", src);
        })
        .mouseleave(function() {
            var src = $(this).attr("src").replace("_focus.svg", ".svg");
            $(this).attr("src", src);
        });


//surfboard graphic color change on mouseenter/mouseleave

$(".board").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "_active.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("_active.png", ".png");
    });
});

$('.board #gun').click(function(){
	$('.boardicons').append('<p>' + 'Gun: This is the gun board.' + '</p>');

});


// surfboard sizing calculator

var heights = {
	height1: [["/images/eight.png","/images/eightsix.png"],["/images/eight.png","/images/eightsix.png"],["/images/eightsix.png","/images/nine.png"],["/images/ninesix.png","/images/ten.png"],["/images/ninesix.png","/images/ten.png"]],
	height2: [],
	height3: [],
	height4: []
};
function findBoards (height, weight){
	var obj = heights[height][weight];
	console.log(obj);
	for (i=0; i < obj.length; i++){
		$('body').prepend('<img src="' + obj[i] + '">');
	}
}

//Google Maps API

var map;

function initMap() {
	var uluru = {lat: 40.640162, lng: -73.785403};
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 11,
	center: uluru
	});
	var marker1 = new google.maps.Marker( {
		position: {lat: 40.583634, lng: -73.814789},
		map: map
	});
	var marker2 = new google.maps.Marker( {
		position: {lat: 40.5909, lng: -73.7969},
		map: map
	});
	var marker3 = new google.maps.Marker( {
		position: {lat: 40.582857, lng: -73.652380},
		map: map
	});
	var marker4 = new google.maps.Marker( {
		position: {lat: 40.583659, lng: -73.666846},
		map: map
	});
};


initMap()

// beach thumbnails to bigger image

$('.thumb').click(function () {
   	var newSrc = $(this).attr('src');
  $('#bigimage').attr('src', newSrc);


})

function appendItem (item) {
		$('#list').append('<li>' + item + '</li>');
	}


})