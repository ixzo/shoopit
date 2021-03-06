// Sets the require.js configuration for your application.
require.config( {
// 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
	paths: {
		// Core Libraries
		"jquery": "/assets/js/vendors/jquery-1.10.2.min",
		"jquerymobile": "/assets/js/vendors/jquery.mobile-1.3.1.min",
		"underscore": "/assets/js/vendors/underscore-min",
		"backbone": "/assets/js/vendors/backbone-min",
		"localstorage": "/assets/js/vendors/backbone.localStorage-min"
	},
	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {
		"backbone": {
			"deps": [ "underscore", "jquery" ],
			"exports": "Backbone" //attaches "Backbone" to the window object
		}
	} // end Shim Configuration
});
// Includes File Dependencies
require([ "jquery", "backbone", "/assets/js/app/ShoopitRouter.js", "localstorage" ], function($, Backbone, ShoopitRouter) {
	$(document).on("mobileinit",
		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function() {
			// Prevents all anchor click handling including the addition of active button state and alternate link bluring.
			$.mobile.linkBindingEnabled = false;
			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;
			// set the default transition
			$.mobile.defaultPageTransition = 'none';
			// Remove the active state for buttons
			$.mobile.activeBtnClass = 'unused';
		}
	);
	//hide application until it is completly loaded
	$('#shoopit-page-container').one('pageinit', function() {
		$('body').show();
	});

	require(["jquerymobile"], function() {
		// Instantiates a new Backbone.js Mobile Router
		this.router = new ShoopitRouter();
	});
});
