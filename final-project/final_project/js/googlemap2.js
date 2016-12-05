//Google Maps API

$(document).ready(function () {

	// function initMap() {
	// 	var newyork = {lat: 40.640162, lng: -73.785403};
	// 	var map = new google.maps.Map(document.getElementById('map'), {
	// 	zoom: 11,
	// 	center: newyork
	// 	});


	var locations = [
		['Beach 92nd Street, Rockaway', 40.583634, -73.814789],
		['Beach 67th Street, Rockaway', 40.5909, -73.7969],
		['Lincoln Boulevard, Long Beach', 40.582857, -73.652380],
		['National Boulevard, Long Beach', 40.583659, -73.666846],
	];


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(40.640162, -73.785403),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }






})