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

//image slideshow
$('.carousel').carousel({
    interval: 2000
})