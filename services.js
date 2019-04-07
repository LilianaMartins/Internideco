$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $('.navbar').css({'background-color':'white','opacity':'.8'});

	  }

	  else {
		  $('.navbar').css({'background':'transparent'});

	  }
  })
})
