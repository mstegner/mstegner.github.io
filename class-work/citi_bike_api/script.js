$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  dataType: 'jsonp',
  success: function (response) {

    response.forEach(function (station) {

      var name = station.name;
      var bikes = station.bikes;
      var free = station.free;
      
      $('#container').append('<p>' + name + '</p>')
      $('#container').append('<p>Spaces Free: ' + free + '</p>')
      $('#container').append('<p>Bikes available' + bikes + '</p>')
      $('#container').append('<hr>')

      })
  },
})