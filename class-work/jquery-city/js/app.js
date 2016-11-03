// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// 3. target elements as a group

$('.thumb').click(function () {
   var newSrc = $(this).attr('src');
  $('#bigimage').attr('src', newSrc);

})