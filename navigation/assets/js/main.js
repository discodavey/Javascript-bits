$('.hamburger-menu').click(function() {
    $('.menu-block').slideToggle();
});
  
  
  // Screen Detection changes for Main Navigation
  
if (window.matchMedia) {
	var mq = window.matchMedia("(min-width: 750px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

function WidthChange(mq) {
	if (mq.matches) {
		$('.menu-block').show();
    $('.hamburger-menu').hide();
	}
	else {
		$('.menu-block').hide();
    $('.hamburger-menu').show();
	}

}