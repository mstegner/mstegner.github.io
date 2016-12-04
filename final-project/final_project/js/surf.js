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
		$(this).css('border', '.5px solid white');
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

	// sr.reveal('.main', { duration: 2000 }, 50);

	// sr.reveal('.main p', { duration: 2000 }, 100);

	// sr.reveal('#map', { duration: 2000 }, 100);

	// sr.reveal('.beachdetail', { duration: 2000 }, 100);

	sr.reveal('.whitebox img', { duration: 2000 }, 50);

	// sr.reveal('.whitebox h2', { duration: 2000 }, 50);

	// sr.reveal('.conditions', { duration: 2000 }, 50);

	sr.reveal('.beachbutton', { duration: 2000 }, 50);

	sr.reveal('.knewavewhite h2', { duration: 2000 }, 50);

	sr.reveal('.knewavewhite p', { duration: 2000 }, 75);

	sr.reveal('.school', { duration: 2000 }, 50);

	sr.reveal('.photogallery img', { duration: 2000 }, 100);

	sr.reveal('.surfboards h2', { duration: 2000 }, 100);

	sr.reveal('.surfboards h4', { duration: 2000 }, 100);

	sr.reveal('.surfboards h2', { duration: 2000 }, 100);

	sr.reveal('.boardicon', { duration: 2000}, 75);

	sr.reveal('.movies h2', { duration: 2000}, 50);

	sr.reveal('.instabox', { duration: 2000 }, 50);

	sr.reveal('.surfterms img', { duration: 2000 }, 100);

	sr.reveal('.lingo', { duration: 2000 }, 50);

	sr.reveal('.icons', { duration: 2000 }, 100);

	sr.reveal('footer p', { duration: 2000 }, 150);


// CLICK ACTIVATED ANIMATION ON SURFICON which is not working!

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


// surfboard sizing calculator - need to finish this!!

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


// var heights = {
// 	height1: [["/images/eight.png","/images/eightsix.png"],["/images/eight.png","/images/eightsix.png"],["/images/eightsix.png","/images/nine.png"],["/images/ninesix.png","/images/ten.png"],["/images/ninesix.png","/images/ten.png"]],
// 	height2: [],
// 	height3: [],
// 	height4: []
// };
// function findBoards (height, weight){
// 	var obj = heights[height][weight];
// 	console.log(obj);
// 	for (i=0; i < obj.length; i++){
// 		$('body').prepend('<img src="' + obj[i] + '">');
// 	}
// }

// MOUSE CLICK EVENT TO SHOW WHICH WETSUIT TO WEAR BASED ON TEMP

$('#warm').click(function () {
	$('.wetsuitdetail1 img').css('opacity', 1);
});


//Google Maps API

	var map;

	function initMap() {
		var uluru = {lat: 40.640162, lng: -73.785403};
		var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: uluru
		});

		var marker1 = new google.maps.Marker( {
			position: {lat: 40.583634, lng: -73.814789},
			map: map,
			// icon: { url: 'images/map_marker1.svg'}
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
	  	document.querySelector('#marker1').scrollIntoView( {
	  		behavior: 'smooth'
	  	})
	    // your custom code to add text to each beach marker
	    // $('#mydiv').text('some beach')
	  });

	marker2.addListener('click', function() {
	  	document.querySelector('#marker2').scrollIntoView( {
	  		behavior: 'smooth'
	  	})
	    // your custom code to add text to each beach marker
	    // $('#mydiv').text('some beach')
	  });
	};



initMap()


}) //end of js script file