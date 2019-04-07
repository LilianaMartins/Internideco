$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $('.navbar').css({'background-color':'#f0e2a8','opacity':'.9'});
      $('.nav-item').css('color','grey');
      $('.nav-link').css('color','grey');
	  }

	  else {
		  $('.navbar').css({'background':'transparent'});
      $('.nav-link').css('color','white');
	  }
  })
})

// scrollspy Restyling

// $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
//         $('.navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link').css('border-bottom','1px solid grey');
// })

//refresh to top of page

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// smooth scrolling

// Select all links with hashes
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});




