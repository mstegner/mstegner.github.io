$(document).ready(function() {

var myMap;
    function initMap () {

      // google.maps.Map(element, options)

      myMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7128, lng: -74.0059},
      zoom: 12
    });

      var marker = new google.maps.Marker({
      position: {lat: 40.7128, lng: -74.0061},
      map: myMap,
      title: 'New York, NY'
    });

      var theMet = new google.maps.Marker({
      map: myMap,
      position: {lat: 40.7794366, lng: -73.9654327},
      title: 'The Met'
    })

// CLICK EVENT LISTENER - NEEDS TO BE EDITED
      marker.addListener('click', function() {
          $('#map')
              .css('height', '50%')
              .css('width', '50%')
          myMap.setZoom(15);
          myMap.setCenter(marker.getPosition());
        });
      }


// TUN ON MY MAP!
initMap();

})
