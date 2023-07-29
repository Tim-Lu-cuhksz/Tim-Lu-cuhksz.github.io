(function ($) {
"use strict";



$("[data-background]").each(function(){
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})
$("[data-background]").each(function(){
    $(this).css("background", $(this).attr("data-bg-color"))
})


//  header sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll <245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

// head line animated

$(function() {
	$('.slider-content').animatedHeadline({
		animationType: 'clip'
	});
})

// counter up js
$('.counter').counterUp({
    delay: 10,
    time: 1500
});



setTimeout(function(){
	$('.preloader').fadeOut();
	$('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
		$(this).removeClass("visible closing opening").dequeue();
	});
}, 1000);


const navSlide = () => {
	
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.navbar-links');
	const navLinks = document.querySelectorAll('.navbar-links li');

	
	[burger, nav].forEach(item => {
		item.addEventListener("click", () => {
		
		//toggle nav
		nav.classList.toggle('nav-active');
		
		//animate links
		navLinks.forEach((link, index) => {
			if(nav.contains(document.querySelector('.nav-active'))) {
				link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index / 7 + 0.7}s`;
			} else {
				link.style.animation = `navLinkFadeOut 0.8s 1s ease forwards 1s`;
		}
		})
		
		burger.classList.toggle('toggle');
	})

});

}
							
navSlide();





// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav.responsive-nav ul.navbar-links').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


$('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1292,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }]
});


/*back to top*/
$(document).on('click', '.back-to-top', function () {
	$("html,body").animate({
		scrollTop: 0
	}, 1000);
});
$(window).on("scroll", function() {
    var ScrollTop = $('.back-to-top');
    if ($(window).scrollTop() > 500) {
        ScrollTop.fadeIn(1000);
    } else {
        ScrollTop.fadeOut(1000);
    }
});


/* magnificPopup img view */
$('.view').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

// init Isotope
var grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	  // use outer width of grid-sizer for columnWidth
	  columnWidth: '.grid-item'
	}
});

// filter items on button click
$('.portfolio-btn').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-btn button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);