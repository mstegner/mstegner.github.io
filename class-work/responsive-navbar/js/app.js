$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
    var width = $(window).width()

    if (width >='880px') {
      $('#small-nav').hide ()

		  console.log($(window).width())
    }
	})

  $(window).scroll(function () {
    var offset = $(window).scrollTop();
    console.log(offset);
     
  })

$('#burger').click(function () {
  $('#small-nav').slideToggle();
  })

})
