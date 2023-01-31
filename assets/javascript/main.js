// Animation on Scroll
!(function(jQuery) {
  // Initialize AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  jQuery(window).on('load', function() {
    aos_init();
  });
})(jQuery);


// Back to top - smooth scroll
const toTop = document.querySelector(".back-to-top");
jQuery(document).ready(function(){
	jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100)  {
				toTop.classList.add("active");
				jQuery('.back-to-top.active').fadeIn();
			} else {
				jQuery('.back-to-top.active').fadeOut();
				toTop.classList.remove("active");
			}
		});
		
		jQuery('.back-to-top').click(function () {
			jQuery('body, html').animate({
				scrollTop: 0
			}, 400);
			return false;
    });
});