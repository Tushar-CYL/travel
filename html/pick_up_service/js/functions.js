// PRELOADER ===============================================================================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
		
// WIZARD  ===============================================================================
jQuery(function($) {
		'use strict';
				// Basic wizard with validation
				$('form#wrapped').attr('action', 'booking_send.php');
				$("#form_container").wizard({
					stepsWrapper: "#wrapped",
					submit: ".submit",
					beforeSelect: function( event, state ) {
						if ($('input#website').val().length != 0) {
							return false;
						} 
						if (!state.isMovingForward)
  						 return true;
						var inputs = $(this).wizard('state').step.find(':input');
						return !inputs.length || !!inputs.valid();
					}
			}).validate({
					errorPlacement: function(error, element) { 
					
						if ( element.is(':radio') || element.is(':checkbox') ) {
							error.insertBefore( element.next() );
						} 
						else { 
							error.insertAfter( element );
						}
					}
				});
				//  progress bar
				$("#progressbar").progressbar();

				$("#form_container").wizard({
					afterSelect: function( event, state ) {
						$("#progressbar").progressbar("value", state.percentComplete);
						$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
					}
				});
			});
	
// QUANTITY INPUT  ===============================================================================
jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('name');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('name');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});

// MODAL WINDOWS  ===============================================================================
jQuery(document).ready(function(){
		'use strict';
		$('#modal-cars-open').on('click', function(e) {
			var mod = $('#main'),
				modal = $('#modal-offers');
				mod.animate({ opacity: 0 }, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('modal-active').fadeIn(400);
			});
			e.preventDefault();

			$('.modal-close').on('click', function(e) {
				modal.removeClass('modal-active').fadeOut(400, function(){
					mod.animate({ opacity: 1 }, 400);
				});
				e.preventDefault();
			});
		});
		
		$('#modal-about-open').on('click', function(e) {
			var mod = $('#main'),
				modal = $('#modal-about');
				mod.animate({ opacity: 0 }, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('modal-active').fadeIn(400);
			});
			e.preventDefault();

			$('.modal-close').on('click', function(e) {
				modal.removeClass('modal-active').fadeOut(400, function(){
					mod.animate({ opacity: 1 }, 400);
				});
				e.preventDefault();
			});
		});
		
		$('#modal-blog-open').on('click', function(e) {
			var mod = $('#main'),
				modal = $('#modal-blog');
				mod.animate({ opacity: 0 }, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('modal-active').fadeIn(400);
			});
			e.preventDefault();

			$('.modal-close').on('click', function(e) {
				modal.removeClass('modal-active').fadeOut(400, function(){
					mod.animate({ opacity: 1 }, 400);
				});
				e.preventDefault();
			});
		});
		
		$('#modal-contacts-open').on('click', function(e) {
			var mod = $('#main'),
				modal = $('#modal-contacts');
 				mod.animate({ opacity: 0 }, 400, function(){
				$('html,body').scrollTop(0);
				modal.addClass('modal-active').fadeIn(400);
			//set up markers: add you lat and long
			var myMarkers = {"markers": [
				{"latitude": "51.511732", "longitude":"-0.123270", "icon": "img/map_marker.png"}
			]
		};
		
		//set up map options and center the map by adding your address in the center param (where uou see Covent Garden London)
		$("#map").mapmarker({
			zoom	: 14,
			center	: 'Covent Garden London',
			markers	: myMarkers
		});
			});
			e.preventDefault();
			$('.modal-close').on('click', function(e) {
				modal.removeClass('modal-active').fadeOut(400, function(){
					mod.animate({ opacity: 1 }, 400);
				});
				e.preventDefault();
			});
		});
		});

// OTHERS ===============================================================================
$('.tooltip-1').tooltip({html:true});

$("select.ddslick").each(function(){
            $(this).ddslick({
				  selectText: "ciao",
                showSelectedHTML: true 
            });
        });
	
  //Fullscreen background images
  $('#slides').superslides({
	  play: 7000,
	  pagination:false,
	  animation_speed: 800,
      animation: 'fade'
    });
	
	//Carousel
		$(".carousel").owlCarousel({
		items : 1,
		singleItem:true,
		responsive:true,
		autoHeight : true,
		transitionStyle:"fade"
	});
	
	//Placeholder
	$('input, textarea').placeholder();
	
	//Datepicker
	$('.date-pick').datepicker()
	.on('changeDate', function(ev){                 
    $('.date-pick').datepicker('hide');
	});
	
	//Time picker
	 $('input.time-pick').timepicker({
    minuteStep: 15,
    showInpunts: false
	})