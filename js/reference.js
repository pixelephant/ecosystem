$(document).ready(function(){

	$("#extra-bar a").click(function(){
		var $this = $(this);
		var t = $(this).attr("href");
		var $t = $(t);

		if($this.hasClass("opened")){
			$this.removeClass("opened");
			$t.slideUp();
		}
		else{
			$(this).addClass("opened").siblings().removeClass("opened");
			$t.siblings(".arrow_box").slideUp().end().slideDown();
		}
		return false;
	});

});