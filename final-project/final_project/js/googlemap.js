//Google Maps API

$(document).ready(function () {

	var map;

	function initMap() {
		var newyork = {lat: 40.640162, lng: -73.785403};
		var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: newyork
		});

	var contentString1 = '<div id="content">' +
		'<div id="siteNotice">' +
		'</div>' +	
		'<h4 id="firstHeading" class="firstHeading">Beach 92nd Street, Rockaway</h4>' +
		'<div id="bodyContent">' +
		'<p>Lorem ipsum teekay dolor beach blurb</p>';


	var infoWindow1 = new google.maps.InfoWindow({
		content: contentString1

// var contentString2 = '<div id="content">' +
// 		'<div id="siteNotice">' +
// 		'</div>' +	
	// '<h4 id="firstHeading" class="firstHeading">Beach 67th Street, Rockaway</h4>' +
	// '<div id="bodyContent">' +
	// '<p>Lorem ipsum teekay dolor beach blurb</p>';

	// var infoWindow2 = new google.maps.InfoWindow({
	// 	content: contentString2


	});


	var marker1 = new google.maps.Marker( {
			position: {lat: 40.583634, lng: -73.814789},
			map: map,
			title: 'Rockaway Beach'
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

	marker1.addListener('click', function() {
		infoWindow1.open(map, marker1);
	});
	
	marker2.addListener('click', function() {
		infoWindow2.open(map, marker2);
	});

	}



initMap()


})