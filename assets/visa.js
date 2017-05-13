$(document).ready(function() {

	// Dropdown animations

	// Border color
	$('#search').on('click', function() {
		$('.navbar').toggleClass('borderColor');
	})

	// Sliding Down
	$('.dropdown').on('show.bs.dropdown', function() {
	  	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
	});

    // Sliding up 
    $('.dropdown').on('hide.bs.dropdown', function(e){
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
            // Reset default attributes
            $('.dropdown').removeClass('open');
            $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
        });
    });

})