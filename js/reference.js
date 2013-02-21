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

	$("a[href='#extra-interesting']").one("click",function(){
		$("#extra-interesting p strong").each(function(index){
			var $this = $(this);
			var start = $this.data("start");
			var end = $this.data("end");

			$({someValue: start}).delay(1000*index).animate({someValue: end}, {
			duration: 1000,
			easing:'swing',
			step: function() { 
				$this.text(Math.ceil(this.someValue));
			}
		});

		});

	});

});