$(document).ready(function () {

    $(window).scroll(function () {

        var offset = $(window).scrollTop();
        console.log(offset);
        
        if (offset > 150) {
          $('header').addClass('header-offset')
      } else {
        $('header').removeClass('header-offset')
      }
})
})
