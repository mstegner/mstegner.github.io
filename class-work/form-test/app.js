$(document).ready(function () {

  $('#myForm').submit(function (event) {
      event.preventDefault();

    var name = $('#name-input').val();

    $('#target').text(name);

  })

    $('#name-input').keydown(function (event) {
      event.preventDefault();

      console.log(event)

  })

    $('#social a').click(function (event) {
        event.preventDefault();

        console.log(event);
      })

})
