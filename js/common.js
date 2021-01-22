var matchHeight = function () {
	
	function init() {
		eventListeners();
		matchHeight();
	}
	
	function eventListeners(){
		$(window).on('resize', function() {
			matchHeight();
		});
	}
	
	function matchHeight(){
		var groupName = $('h5');
		var groupHeights = [];
		
		groupName.css('min-height', 'auto');
		
		groupName.each(function() {
			groupHeights.push($(this).outerHeight());
		});
		
		var maxHeight = Math.max.apply(null, groupHeights);
		groupName.css('min-height', maxHeight);
	};
	
	return {
		init: init
	};
	
} ();

$(document).ready(function() {
	matchHeight.init();
});




// $(document).ready(function(){
//   var largest = 0;
//   //loop through all title elements
//   var height = 0;
//   $('h5').each(function(){
//      var currentHeight= $(this).height();
//       height = currentHeight > height ? currentHeight : height; 
//   });
//   $('h5').css('height', height); 

// });