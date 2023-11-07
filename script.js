(function(window, document, $, undefined) {
	var $slides, $btnArr;
  
	function onClick(e) {
	  var $target = $(e.target);
	  if ($target.hasClass('slide') && !$target.hasClass('active') && !$target.siblings().hasClass('active')) {
		$target.removeClass('anim-in last-viewed').addClass('active');
		$target.siblings().removeClass('anim-in last-viewed').addClass('anim-out');
		
		// Show the description for the clicked slide
		$target.find('.description').show();
		// Show the text-center for the clicked slide
		$target.find('.text-center').show();
	  }
	}
  
	function closeSlide(e) {
	  var $slide = $(e.target).parent();
	  $slide.removeClass('active anim-in').addClass('last-viewed');
	  $slide.siblings().removeClass('anim-out').addClass('anim-in');
	  
	  // Hide the description for the closed slide
	  $slide.find('.description').hide();
	  // Hide the text-center for the closed slide
	  $slide.find('.text-center').hide();
	}
  
	$(function() {
	  $slides = $('.slide');
	  $btnArr = $slides.find('.btn-close');
	  $slides.on('click', onClick);
	  $btnArr.on('click', closeSlide);
	});
  })(this, document, jQuery);
  