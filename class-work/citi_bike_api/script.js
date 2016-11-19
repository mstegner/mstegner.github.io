var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 40.7128, lng: -74.0059},
  zoom: 12
  });
}

// function renderMarkers () {
//   var marker = new google.maps.Marker( {
//     position: {lat: 40.7128, lng: -74.0059},
//     map: map
//   });

// }


initMap()
// renderMarkers()

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  dataType: 'jsonp',
  success: function (response) {

      console.log(response);

    response.forEach(function (station) {

      var lat = station.lat/1000000;
      var lng = station.lng/1000000;
      var name = station.name;

      console.log(lat, lng, name);

      var marker = new google.maps.Marker( {
      position: {lat: lat, lng: lng},
      map: map,
      title: name
   });

      // var name = station.name;
      // var bikes = station.bikes;
      // var free = station.free;
      
      // $('#container').append('<p>' + name + '</p>')
      // $('#container').append('<p>Spaces Free: ' + free + '</p>')
      // $('#container').append('<p>Bikes available' + bikes + '</p>')
      // $('#container').append('<hr>')

      })
  },
})