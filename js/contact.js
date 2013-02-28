$(document).ready(function(){
	
	$("#value-prop a").click(function(){
		var t = $(this).attr("href");
		$('html, body').animate({
         	scrollTop: $(t).offset().top
     	}, 500);
     	return false;
	});
	
});