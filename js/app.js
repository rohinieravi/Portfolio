/* Using scrollReveal.js for text animation */
$(function() {
	window.sr = ScrollReveal({ reset: true });
	sr.reveal('.animation', { duration: 500 });
});

/* Adding auto-scroll for nav bar links */
$('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    } 
});

/* Responsive nav bar menu */
$('.icon').on('click', function(event) {
	event.preventDefault();
	$('.topnav').toggleClass('responsive');
})

/* Auto close responsive nav bar menu on clicking a link */
$('.topnav').on('click', 'a', function(event) {
	event.preventDefault();
	if($('.topnav').hasClass('responsive')) {
		$('.topnav').toggleClass('responsive');
	}
});