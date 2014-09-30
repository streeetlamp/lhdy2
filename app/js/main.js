// remap jQuery to $
(function($){

	"use strict";

	/* trigger when page is ready */
	$(document).ready(function (){

		// set no-mediaqueries class
		if(!Modernizr.mq('only all')) {
    	jQuery('html').addClass('no-mediaqueries');
		}

		// your functions go here

	});


	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);