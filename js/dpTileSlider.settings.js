$j213(function ( $ ) {

	$( '#dp-slider' ).dpTileSlider({

		 /**
		* Time delay before start animation on each slide.
		* This support you to setup your additional content before animation started
		*/
		timeout: 50,

		// If set to true the slider will auto play
		auto: 'true',

		// Toggle on/off the slider navigation and/or pager
		nav: 'true',
		pager: 'true',

		// Callback function fire when slider first start
		start: function () {},

		// Callback function fire before/after each slide start to animate
		animBefore: function () {},
		animAfter: function () {}

	});	
});