$(function() {
	window.sr = ScrollReveal({ reset: true });;
	sr.reveal('.foo', { duration: 500 })
});

$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });

$(".icon").on("click", function(event) {
	event.preventDefault();
	$(".topnav").toggleClass("responsive");
})

$(".topnav").on('click', 'a', function(event) {
	event.preventDefault();
	if($(".topnav").hasClass("responsive")) {
		$(".topnav").toggleClass("responsive");
	}
});