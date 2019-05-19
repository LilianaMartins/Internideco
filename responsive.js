$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $('.navbar').css({'background-color':'#ffffff','opacity':'1'});
      $('.nav-item').css('color','black');
      $('.nav-link').css('color','black');
      $('.navbar').css('box-shadow', '4px 2px 5px #404040');
    //  $('.nav').css({'box-shadow':'0', '4px', '2px', '-2px', 'rgba(0,0,0.2)'});

	  }

	  else {
		  $('.navbar').css({'background':'transparent'});
      $('.nav-link').css('color','white');
      $('.navbar').css('box-shadow', 'none');
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




// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        $('.backToTop').fadeIn(200);    // Fade in the arrow
    } else {
        $('.backToTop').fadeOut(200);   // Else fade out the arrow
    }
});
$('.backToTop').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
