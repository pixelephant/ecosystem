$(document).ready(function(){$("#value-prop a").click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},500);return!1});$(".filter-bar a").click(function(){var e=$(this),t=$(this).attr("href"),n=$(t);if(e.hasClass("filter-all")){$(this).addClass("opened").siblings().removeClass("opened");$(".arrow_box").slideUp(300,function(){$(".reference").removeClass("hide");$(".filter-options li").removeClass("active")})}else if(e.hasClass("opened")){e.removeClass("opened");n.slideUp()}else{$(this).addClass("opened").siblings().removeClass("opened");n.siblings(".arrow_box").slideUp().end().slideDown()}return!1});$(".filter-options li").click(function(){$(".filter-options li").removeClass("active");$(this).addClass("active");var e=$(this).attr("class").split(" ")[0];$("#finished-projects .reference").each(function(){$(this).hasClass(e)?$(this).removeClass("hide"):$(this).addClass("hide")})})});