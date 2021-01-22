
$(document).ready(function(){
  var largest = 0;
  //loop through all title elements
  var height = 0;
  $('h5').each(function(){
     var currentHeight= $(this).height();
      height = currentHeight > height ? currentHeight : height; 
  });
  $('h5').css('height', height); 

});