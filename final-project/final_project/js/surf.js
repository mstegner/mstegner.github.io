$(document).ready(function () {

//nav bar text color change on mouseenter/mouseleave

$('.navbar a').mouseenter(function () {

	$(this).css('color', '#f45409');
});

$('.navbar a').mouseleave(function() {

	$(this).css('color', 'white');
	
});

//link button color change on mouseenter/mouseleave

$('.linkbutton').mouseenter(function () {

	$(this).css('background-color', 'black');

	$('linkbutton p').css('color', 'white');

});


$('.linkbutton').mouseleave(function () {

	$(this).css('background-color', 'white');

	$('linkbutton p').css('color', 'black');

});

//lessons blurb link color change on mouseenter/mouseleave

$('.lessonsblurb a').mouseenter(function () {

	$(this).css('color', '#f45409');

});


$('.lessonsblurb a').mouseleave(function () {

	$(this).css('color', 'black');

});


//surfboard graphic color change on mouseenter/mouseleave


$(".board").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "_active.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("_active.png", ".png");
    });
});

$('.board #gun').click(function(){
	$('.boardicons').append('<p>Gun: This is the gun board.</p>');


});


// surfboard sizing calculator

var heights = {
	height1: [["/images/eight.png","/images/eightsix.png"],["/images/eight.png","/images/eightsix.png"],["/images/eightsix.png","/images/nine.png"],["/images/ninesix.png","/images/ten.png"],["/images/ninesix.png","/images/ten.png"]],
	height2: [],
	height3: [],
	height4: []
};
function findBoards (height, weight){
	var obj = heights[height][weight];
	console.log(obj);
	for (i=0; i < obj.length; i++){
		$('body').prepend('<img src="' + obj[i] + '">');
	}
}










})