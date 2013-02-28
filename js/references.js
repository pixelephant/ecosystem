

$(document).ready(function(){

	$("#value-prop a").click(function(){
		var t = $(this).attr("href");
		$('html, body').animate({
         	scrollTop: $(t).offset().top
     	}, 500);
     	return false;
	});

	$(".filter-bar a").click(function(){
		var $this = $(this);
		var t = $(this).attr("href");
		var $t = $(t);

		if($this.hasClass("filter-all")){
			$(this).addClass("opened").siblings().removeClass("opened");
			$(".arrow_box").slideUp(300,function(){
				$(".reference").removeClass("hide");
				$(".filter-options li").removeClass("active");
			});
		}

		else{
			if($this.hasClass("opened")){
				$this.removeClass("opened");
				$t.slideUp();
			}
			else{
				$(this).addClass("opened").siblings().removeClass("opened");
				$t.siblings(".arrow_box").slideUp().end().slideDown();
			}
		}
		return false;
	});

	$(".filter-options li").click(function(){
		$(".filter-options li").removeClass("active");
		$(this).addClass("active");
		var fClass = $(this).attr("class").split(" ")[0];
		$("#finished-projects .reference").each(function(){
			
			if(!$(this).hasClass(fClass)){
				$(this).addClass("hide");
			}
			else{
				$(this).removeClass("hide");
			}	
		});
	});

});