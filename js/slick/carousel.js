$(function(){
	$('.mod_gallery_list #gallery').removeClass('fixHeight');
	$('.mod_gallery_list #gallery dt + dd').remove();
	// slick
	function carousel() {
		$('.mod_gallery_list #gallery').slick({
			speed: 500,
			slidesToShow: 4,
			adaptiveHeight: true,
			centerPadding: 0,
			responsive: [
				{
					breakpoint: 681,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
	carousel();
});