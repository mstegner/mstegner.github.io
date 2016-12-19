//Google Maps API

$(document).ready(function () {

  // function initMap() {
  //  var newyork = {lat: 40.640162, lng: -73.785403};
  //  var map = new google.maps.Map(document.getElementById('map'), {
  //  zoom: 11,
  //  center: newyork
  //  });

  var beach1info = $('#beach1text').text();
  var beach2info = $('#beach2text').text();
  var beach3info = $('#beach3text').text();
  var beach4info = $('#beach4text').text();


  var locations = [
    [beach1info, 40.583634, -73.814789],
    [beach2info, 40.5909, -73.7969],
    [beach3info, 40.582857, -73.652380],
    [beach4info, 40.583659, -73.666846],
  ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(40.640162, -73.785403),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, index;

    for (index = 0; index < locations.length; index++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[index][1], locations[index][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, index) {
        return function() {
          infowindow.setContent(locations[index][0]);
          infowindow.open(map, marker);
        }
      })(marker, index));
    }





// END OF GOOGLE MAPS API js file

})