$(document).ready(function() {

	// Dropdown animations

	// Sliding Down
	$('.dropdown').on('show.bs.dropdown', function() {
	  	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
	  	$('nav.navbar').toggleClass('borderColor'); // navbar border color
	  	$('.glyphicon-triangle-top').toggleClass('carrot'); // add carrot
	});

    // Sliding up 
    $('.dropdown').on('hide.bs.dropdown', function(e){
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
            // Reset default attributes
            $('.dropdown').removeClass('open');
            $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
        });
        $('nav.navbar').toggleClass('borderColor'); // navbar border color
        $('.glyphicon-triangle-top').toggleClass('carrot'); // remove carrot
    });

})