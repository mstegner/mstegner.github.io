$(document).ready(function () {


// keeps track of window width for responsive navbar

$(window).resize(function () {
    var width = $(window).width()

    if (width >='768px') {
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

//nav bar text color change on mouseenter/mouseleave

	$('#navbar a').mouseenter(function () {

		$(this).css('color', '#03b73f');
	});

	$('#navbar a').mouseleave(function() {

		$(this).css('color', 'white');
		
	});

//lingo definitions reveal on mouseenter/mouseleave

	$('.lingo').mouseenter(function (){
		$(this).css('border', '0');
		$(this).find('h4').css('display', 'none');
		$(this).find('p').css('display', 'block')
				.css('background', '#03b73f')
				.css('width', '100%')
				.css('padding', '25px');
		$(this).find('img').css('width', '20%')
				.css('margin', '10px auto 0 auto')
				.css('display', 'block');
	})

	$('.lingo').mouseleave(function (){
		$(this).find('h4').css('display', 'block');
		$(this).find('p').css('display', 'none')
		$(this).find('img').css('width', '20%')
				.css('margin', '10px auto 0 auto')
				.css('display', 'none');
	})



//scroll reveal effect on surf terms... went a bit crazy with it
//the first time, and now I'm commenting out a few of these :O

	window.sr = ScrollReveal({ reset: false });

	sr.reveal('.pagetitle', { duration: 2000 }, 50);

	sr.reveal('.pagetitle2', { duration: 2000 }, 50);

	sr.reveal('.whitebox img', { duration: 2000 }, 50);

	sr.reveal('.beachbutton', { duration: 2000 }, 50);

	sr.reveal('.knewavewhite h2', { duration: 2000 }, 50);

	sr.reveal('.knewavewhite p', { duration: 2000 }, 75);

	sr.reveal('.school', { duration: 2000 }, 50);

	sr.reveal('.photogallery img', { duration: 2000 }, 100);

	sr.reveal('.surfboards h2', { duration: 2000 }, 100);

	sr.reveal('.surfboards h4', { duration: 2000 }, 100);

	sr.reveal('.surfboards h2', { duration: 2000 }, 100);

	sr.reveal('.boardicon', { duration: 2000}, 75);

	sr.reveal('.blackbox h2', { duration: 2000}, 75);

	sr.reveal('#longboard_size img', { duration: 2000}, 75);

	sr.reveal('.movies h2', { duration: 2000}, 50);

	sr.reveal('.instabox', { duration: 2000 }, 50);

	sr.reveal('.surfterms img', { duration: 2000 }, 100);

	sr.reveal('.lingo', { duration: 2000 }, 50);

	sr.reveal('.icons', { duration: 2000 }, 100);

	sr.reveal('footer p', { duration: 2000 }, 150);


// ANIMATE.CSS PULSE EFFECT ON TEMP BUTTONS ON GEAR PAGE

// $('tempbutton').addClass('animated infinite pulse');


// CLICK ACTIVATED ANIMATION ON SURFICON

$('.trigger').on('click', function() {
	$(this).toggleClass('.clicked');
	});



//lessons blurb link color change on mouseenter/mouseleave

	$('.lessonsblurb a').mouseenter(function () {

		$(this).css('color', '#03b73f');

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



//surf school images change from black-and-white version to color version
//on mouseenter and mouseleave


	$('.skool').mouseenter(function() {
		var src = $(this).attr("src").match(/[^\.]+/) + "_color.jpg";
	            $(this).attr("src", src);
	        })
	        .mouseleave(function() {
	            var src = $(this).attr("src").replace("_color.jpg", ".jpg"); 
	            $(this).attr("src", src);
	});


//surfboard graphic color change on mouseenter/mouseleave

	$(".board").hover(function(){
	    $(this).attr("src", function(index, attr){
	        return attr.replace(".svg", "_active.svg");
	    });
	}, function(){
	    $(this).attr("src", function(index, attr){
	        return attr.replace("_active.svg", ".svg");
	    });
	});



// surfboard click function to display text for each type of surfboard


	$('.board').click(function () {
		$(this).siblings('p').toggle();
	});


// surfboard sizing calculator - thanks for your help Chandler!

//board size ranges

var range1 = '8ft or 8ft 6in'
var range2 = '8ft 6in or 9ft'
var range3 = '9ft or 9ft 6in'
var range4 = '9ft 6in or 10ft'
var range5 = '10ft'

//boards object
var boards = {
	h1: [range1, range1, range2, range4, range4],
	h2: [range2, range2, range3, range3, range3],
	h3: [range2, range3, range3, range4, range5],
	h4: [range3, range3, range4, range5, range5]
}

// click for board
// get height and weight values from DOM

$('.whitebutton').click(function () {	

height = $('#height').val() // "h3"
weight = parseInt($('#weight').val()) // "3" => 3

var myBoard = boards[height][weight]
console.log(myBoard);

$('#boardsize p').text(myBoard)

});


// MOUSE CLICK EVENT TO SHOW WHICH WETSUIT TO WEAR BASED ON TEMP

$('#warm').click(function () {
	$('.wetsuitdetail1 img').css('opacity', 1);
	$('.wetsuitdetail2 img').css('opacity', .3);
	$('.wetsuitdetail3 img').css('opacity', .3);
});

$('#chilly').click(function () {
	$('.wetsuitdetail2 img').css('opacity', 1);
	$('.wetsuitdetail1 img').css('opacity', .3);
	$('.wetsuitdetail3 img').css('opacity', .3);
});

$('#arctic').click(function () {
	$('.wetsuitdetail3 img').css('opacity', 1);
	$('.wetsuitdetail1 img').css('opacity', .3);
	$('.wetsuitdetail2 img').css('opacity', .3);
});




}) //end of js script file