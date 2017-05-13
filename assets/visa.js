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

    $('.nav > li').on('click', function(event) {
    	console.log(event.target) // test to see what click hits (event is a tag)
    	$(event.target).children().toggleClass('glyphicon-menu-down');
    	$(event.target).children().toggleClass('glyphicon-menu-right');
    })

    $('.navbar-toggle').on('click', function() {
    	$('.icon-bar').toggleClass('open');
    	$('.glyphicon-remove').toggleClass('open');
    })

})

// Used Vanilla JS to determine if category did not have sub-categories (menu span means it does)
var categories = document.getElementsByClassName('category')

for(var i = 0; i < categories.length; i++) {
	if(categories[i].children.length === 0) {
		categories[i].className += ' noSubs';
	}
}