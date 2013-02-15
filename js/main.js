/*
 * Swiper 1.8 - Mobile Touch Slider
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2012, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Updated on: January 21, 2013
*/
Swiper=function(f,b){function h(a){return document.querySelectorAll(a)}function g(){var a=v-k*b.slidesPerSlide;b.loop&&(a-=p);b.scrollContainer&&(a=k-p,0>a&&(a=0));return a}function w(c){a.allowLinks||c.preventDefault()}function r(c){if(a.isTouched||b.onlyExternal)return!1;a.isTouched=!0;if(!a.support.touch||1==c.targetTouches.length){a.callPlugins("onTouchStartBegin");b.loop&&a.fixLoop();a.support.touch||(c.preventDefault?c.preventDefault():c.returnValue=!1);var d=a.support.touch?c.targetTouches[0].pageX:c.pageX||c.clientX;c=a.support.touch?c.targetTouches[0].pageY:c.pageY||c.clientY;a.touches.startX=a.touches.currentX=d;a.touches.startY=a.touches.currentY=c;a.touches.start=a.touches.current=j?a.touches.startX:a.touches.startY;a.setTransition(0);a.positions.start=a.positions.current=j?a.getTranslate("x"):a.getTranslate("y");j?a.setTransform(a.positions.start,0,0):a.setTransform(0,a.positions.start,0);a.times.start=(new Date).getTime();s=void 0;if(b.onSlideClick||b.onSlideTouch){var e=a.container,f=e.getBoundingClientRect(),h=document.body;clientTop=e.clientTop||h.clientTop||0;clientLeft=e.clientLeft||h.clientLeft||0;scrollTop=window.pageYOffset||e.scrollTop;scrollLeft=window.pageXOffset||e.scrollLeft;d=d-f.left+clientLeft-scrollLeft;c=c-f.top-clientTop-scrollTop;d=j?d:c;c=-Math.round(a.positions.current/k);d=Math.floor(d/k)+c;b.loop&&(d-=b.slidesPerSlide,0>d&&(d=a.slides.length+d-2*b.slidesPerSlide));a.clickedSlideIndex=d;a.clickedSlide=a.getSlide(d);b.onSlideTouch&&(b.onSlideTouch(a),a.callPlugins("onSlideTouch"))}if(b.onTouchStart)b.onTouchStart(a);a.callPlugins("onTouchStartEnd")}}function C(c){if(a.isTouched&&!b.onlyExternal){var d=a.support.touch?c.targetTouches[0].pageX:c.pageX||c.clientX,e=a.support.touch?c.targetTouches[0].pageY:c.pageY||c.clientY;"undefined"==typeof s&&j&&(s=!!(s||Math.abs(e-a.touches.startY)>Math.abs(d-a.touches.startX)));"undefined"==typeof s&&!j&&(s=!!(s||Math.abs(e-a.touches.startY)<Math.abs(d-a.touches.startX)));if(!s)if(c.assignedToSwiper)a.isTouched=!1;else if(c.assignedToSwiper=!0,b.preventLinks&&(a.allowLinks=!1),b.autoPlay&&a.stopAutoPlay(),!a.support.touch||1==c.touches.length){a.callPlugins("onTouchMoveStart");c.preventDefault?c.preventDefault():c.returnValue=!1;a.touches.current=j?d:e;a.positions.current=(a.touches.current-a.touches.start)*b.ratio+a.positions.start;if(b.resistance){if(0<a.positions.current&&(!b.freeMode||b.freeModeFluid))b.loop?(c=1,0<a.positions.current&&(a.positions.current=0)):c=(2*p-a.positions.current)/p/2,a.positions.current=0.5>c?p/2:a.positions.current*c;if(a.positions.current<-g()&&(!b.freeMode||b.freeModeFluid))b.loop?(c=1,d=a.positions.current,e=-g()-p):(d=(a.touches.current-a.touches.start)*b.ratio+(g()+a.positions.start),c=(p+d)/p,d=a.positions.current-d*(1-c)/2,e=-g()-p/2),a.positions.current=d<e||0>=c?e:d}if(b.followFinger){j?a.setTransform(a.positions.current,0,0):a.setTransform(0,a.positions.current,0);b.freeMode&&a.updateActiveSlide(a.positions.current);if(b.onTouchMove)b.onTouchMove(a);a.callPlugins("onTouchMoveEnd");return!1}}}}function D(){if(!b.onlyExternal&&a.isTouched){a.isTouched=!1;b.preventLinks&&setTimeout(function(){a.allowLinks=!0},10);b.onSlideClick&&(b.onSlideClick(a),a.callPlugins("onSlideClick"));!a.positions.current&&0!==a.positions.current&&(a.positions.current=a.positions.start);j?a.setTransform(a.positions.current,0,0):a.setTransform(0,a.positions.current,0);a.times.end=(new Date).getTime();a.touches.diff=a.touches.current-a.touches.start;a.touches.abs=Math.abs(a.touches.diff);a.positions.diff=a.positions.current-a.positions.start;a.positions.abs=Math.abs(a.positions.diff);var c=a.positions.diff,d=a.positions.abs;5>d&&a.swipeReset();var e=v-k*b.slidesPerSlide;b.scrollContainer&&(e=k-p);0<a.positions.current?a.swipeReset():a.positions.current<-e?a.swipeReset():b.freeMode?(300>a.times.end-a.times.start&&b.freeModeFluid&&(c=a.positions.current+2*a.touches.diff,c<-1*e&&(c=-e),0<c&&(c=0),j?a.setTransform(c,0,0):a.setTransform(0,c,0),a.setTransition(2*(a.times.end-a.times.start)),a.updateActiveSlide(c)),(!b.freeModeFluid||300<=a.times.end-a.times.start)&&a.updateActiveSlide(a.positions.current)):(u=0>c?"toNext":"toPrev","toNext"==u&&300>=a.times.end-a.times.start&&(30>d?a.swipeReset():a.swipeNext(!0)),"toPrev"==u&&300>=a.times.end-a.times.start&&(30>d?a.swipeReset():a.swipePrev(!0)),"toNext"==u&&300<a.times.end-a.times.start&&(d>=0.5*k?a.swipeNext(!0):a.swipeReset()),"toPrev"==u&&300<a.times.end-a.times.start&&(d>=0.5*k?a.swipePrev(!0):a.swipeReset()));if(b.onTouchEnd)b.onTouchEnd(a);a.callPlugins("onTouchEnd")}}function A(){a.callPlugins("onSlideChangeStart");if(b.onSlideChangeStart)b.onSlideChangeStart(a);b.onSlideChangeEnd&&a.transitionEnd(b.onSlideChangeEnd)}window.addEventListener||(window.Element||(Element=function(){}),Element.prototype.addEventListener=HTMLDocument.prototype.addEventListener=addEventListener=function(a,b){this.attachEvent("on"+a,b)},Element.prototype.removeEventListener=HTMLDocument.prototype.removeEventListener=removeEventListener=function(a,b){this.detachEvent("on"+a,b)});if(document.body.__defineGetter__&&HTMLElement){var m=HTMLElement.prototype;m.__defineGetter__&&m.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}window.getComputedStyle||(window.getComputedStyle=function(a){this.el=a;this.getPropertyValue=function(b){var e=/(\-([a-z]){1})/g;"float"==b&&(b="styleFloat");e.test(b)&&(b=b.replace(e,function(a,b,c){return c.toUpperCase()}));return a.currentStyle[b]?a.currentStyle[b]:null};return this});if(document.querySelectorAll&&0!=document.querySelectorAll(f).length){var a=this;a.touches={};a.positions={current:0};a.id=(new Date).getTime();a.container=h(f)[0];a.times={};a.isTouched=!1;a.realIndex=0;a.activeSlide=0;a.previousSlide=null;a.support={touch:a.isSupportTouch(),threeD:a.isSupport3D()};a.use3D=a.support.threeD;m={mode:"horizontal",ratio:1,speed:300,freeMode:!1,freeModeFluid:!1,slidesPerSlide:1,simulateTouch:!0,followFinger:!0,autoPlay:!1,onlyExternal:!1,createPagination:!0,pagination:!1,resistance:!0,scrollContainer:!1,preventLinks:!0,initialSlide:0,slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",paginationClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch"};b=b||{};for(var n in m)n in b||(b[n]=m[n]);a.params=b;b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0);var t=h(f+" ."+b.wrapperClass).item(0),j,k,l,v,u,s,p;a.wrapper=t;j="horizontal"==b.mode;a.touchEvents={touchStart:a.support.touch||!b.simulateTouch?"touchstart":a.ie10?"MSPointerDown":"mousedown",touchMove:a.support.touch||!b.simulateTouch?"touchmove":a.ie10?"MSPointerMove":"mousemove",touchEnd:a.support.touch||!b.simulateTouch?"touchend":a.ie10?"MSPointerUp":"mouseup"};a._extendSwiperSlide=function(c){c.append=function(){a.wrapper.appendChild(c);a.reInit();return c};c.prepend=function(){a.wrapper.insertBefore(c,a.wrapper.firstChild);a.reInit();return c};c.insertAfter=function(d){if(void 0===typeof d)return!1;d=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass+":nth-child("+(d+2)+")")[0];a.wrapper.insertBefore(c,d);a.reInit();return c};c.clone=function(){return a._extendSwiperSlide(c.cloneNode(!0))};c.remove=function(){a.wrapper.removeChild(c);a.reInit()};c.html=function(a){if(void 0==typeof a)return c.innerHTML;c.innerHTML=a;return c};c.index=function(){for(var b,e=a.slides.length-1;0<=e;e--)c==a.slides[e]&&(b=e);return b};c.isActive=function(){return c.index()==a.activeSlide?!0:!1};c.swiperSlideDataStorage||(c.swiperSlideDataStorage={});c.getData=function(a){return c.swiperSlideDataStorage[a]};c.setData=function(a,b){c.swiperSlideDataStorage[a]=b;return c};c.data=function(a,b){return b?(c.setAttribute("data-"+a,b),c):c.getAttribute("data-"+a)};return c};a._calcSlides=function(){var c=a.slides?a.slides.length:!1;a.slides=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass);for(var d=a.slides.length-1;0<=d;d--)a._extendSwiperSlide(a.slides[d]);c&&(c!=a.slides.length&&a.createPagination)&&(a.createPagination(),a.callPlugins("numberOfSlidesChanged"))};a._calcSlides();a.createSlide=function(b,d){d=d||a.params.slideClass;var e=document.createElement("div");e.innerHTML=b||"";e.className=d;return a._extendSwiperSlide(e)};a.appendSlide=function(b,d,e){if(b)return b instanceof HTMLElement?a._extendSwiperSlide(b).append():a.createSlide(b,d,e).append()};a.prependSlide=function(b,d,e){if(b)return b instanceof HTMLElement?a._extendSwiperSlide(b).prepend():a.createSlide(b,d,e).prepend()};a.insertSlideAfter=function(b,d,e,f){return!b?!1:b instanceof HTMLElement?a._extendSwiperSlide(b).insertAfter(b):a.createSlide(d,e,f).insertAfter(b)};a.removeSlide=function(b){return a.slides[b]?(a.slides[b].remove(),!0):!1};a.removeLastSlide=function(){return 0<a.slides.length?(a.slides[a.slides.length-1].remove(),!0):!1};a.removeAllSlides=function(){for(var b=a.slides.length-1;0<=b;b--)a.slides[b].remove()};a.getSlide=function(b){return a.slides[b]};a.getLastSlide=function(){return a.slides[a.slides.length-1]};a.getFirstSlide=function(){return a.slides[0]};a.currentSlide=function(){return a.slides[a.activeSlide]};var x=[],q;for(q in a.plugins)b[q]&&(n=a.plugins[q](a,b[q]))&&x.push(n);a.callPlugins=function(a,b){b||(b={});for(var e=0;e<x.length;e++)if(a in x[e])x[e][a](b)};a.ie10&&!b.onlyExternal&&(j?a.wrapper.classList.add("swiper-wp8-horizontal"):a.wrapper.classList.add("swiper-wp8-vertical"));if(b.loop){l=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass).length;n=q="";for(m=0;m<b.slidesPerSlide;m++)q+=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass).item(m).outerHTML;for(m=l-b.slidesPerSlide;m<l;m++)n+=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass).item(m).outerHTML;t.innerHTML=n+t.innerHTML+q;a._calcSlides();a.callPlugins("onCreateLoop")}var B=!1;a.init=function(c){var d=parseInt(window.getComputedStyle(a.container,null).getPropertyValue("width"),10),e=parseInt(window.getComputedStyle(a.container,null).getPropertyValue("height"),10);isNaN(d)&&(d=a.container.offsetWidth-parseInt(window.getComputedStyle(a.container,null).getPropertyValue("padding-left"),10)-parseInt(window.getComputedStyle(a.container,null).getPropertyValue("padding-right"),10));isNaN(e)&&(e=a.container.offsetHeight-parseInt(window.getComputedStyle(a.container,null).getPropertyValue("padding-top"),10)-parseInt(window.getComputedStyle(a.container,null).getPropertyValue("padding-bottom"),10));if(c||!(a.width==d&&a.height==e)){(c||B)&&a._calcSlides();a.width=d;a.height=e;var g=j?1:b.slidesPerSlide,e=j?b.slidesPerSlide:1;l=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass).length;b.scrollContainer?(c=h(f+" ."+b.slideClass).item(0).offsetWidth,d=h(f+" ."+b.slideClass).item(0).offsetHeight,p=j?a.width:a.height,k=j?c:d,e=c,g=d):(c=a.width/e,d=a.height/g,k=p=j?a.width:a.height,e=j?l*a.width/e:a.width,g=j?a.height:l*a.height/g);v=j?e:g;for(var m=0;m<l;m++){var n=h(f+" > ."+b.wrapperClass+" > ."+b.slideClass).item(m);n.style.width=c+"px";n.style.height=d+"px";if(b.onSlideInitialize)b.onSlideInitialize(a,n)}t.style.width=e+"px";t.style.height=g+"px";0<b.initialSlide&&b.initialSlide<l&&(a.realIndex=a.activeSlide=b.initialSlide,a.params.loop&&(a.activeSlide=a.realIndex-b.slidesPerSlide),j?(a.positions.current=-b.initialSlide*c,a.setTransform(a.positions.current,0,0)):(a.positions.current=-b.initialSlide*d,a.setTransform(0,a.positions.current,0)));b.slidesPerSlide&&1<b.slidesPerSlide&&(k/=b.slidesPerSlide);B?a.callPlugins("onInit"):a.callPlugins("onFirstInit");B=!0}};a.init();a.reInit=function(){a.init(!0)};a.updatePagination=function(){if(!(2>a.slides.length)){var c=h(b.pagination+" ."+b.paginationActiveClass);if(c){for(var d=0;d<c.length;d++)0<=c.item(d).className.indexOf("active")&&(c.item(d).className=c.item(d).className.replace(b.paginationActiveClass,""));for(var c=h(b.pagination+" ."+b.paginationClass).length,d=b.loop?a.realIndex-b.slidesPerSlide:a.realIndex,e=d+(b.slidesPerSlide-1);d<=e;d++){var f=d;f>=c&&(f-=c);0>f&&(f=c+f);f<l&&(h(b.pagination+" ."+b.paginationClass).item(f).className=h(b.pagination+" ."+b.paginationClass).item(f).className+" "+b.paginationActiveClass)}}}};a.createPagination=function(){if(b.pagination&&b.createPagination){for(var c="",d=a.slides.length,d=b.loop?d-2*b.slidesPerSlide:d,e=0;e<d;e++)c+='<span class="'+b.paginationClass+'"></span>';h(b.pagination)[0].innerHTML=c;a.updatePagination();a.callPlugins("onCreatePagination")}};a.createPagination();a.resizeEvent="resize";"onorientationchange"in window&&(a.resizeEvent="orientationchange");a.resizeFix=function(){a.callPlugins("beforeResizeFix");a.init();if(b.scrollContainer){if((j?a.getTranslate("x"):a.getTranslate("y"))<-g()){var c=j?-g():0,d=j?0:-g();a.setTransition(0);a.setTransform(c,d,0)}}else a.swipeTo(a.activeSlide,0,!1);a.callPlugins("afterResizeFix")};b.disableAutoResize||window.addEventListener(a.resizeEvent,a.resizeFix,!1);var y;a.startAutoPlay=function(){b.autoPlay&&!b.loop?y=setInterval(function(){var b=a.realIndex+1;b==l&&(b=0);a.swipeTo(b)},b.autoPlay):b.autoPlay&&b.loop&&(y=setInterval(function(){a.swipeNext()},b.autoPlay));a.callPlugins("onAutoPlayStart")};a.stopAutoPlay=function(){y&&clearInterval(y);a.callPlugins("onAutoPlayStop")};b.autoPlay&&a.startAutoPlay();t.addEventListener(a.touchEvents.touchStart,r,!1);var z=a.support.touch?t:document;z.addEventListener(a.touchEvents.touchMove,C,!1);z.addEventListener(a.touchEvents.touchEnd,D,!1);a.destroy=function(b){(!1===b?b:1)&&window.removeEventListener(a.resizeEvent,a.resizeFix,!1);t.removeEventListener(a.touchEvents.touchStart,r,!0);z.removeEventListener(a.touchEvents.touchMove,C,!0);z.removeEventListener(a.touchEvents.touchEnd,D,!0);a.callPlugins("onDestroy")};a.allowLinks=!0;if(b.preventLinks){q=a.container.querySelectorAll("a");for(n=0;n<q.length;n++)q[n].addEventListener("click",w,!1)}a.swipeNext=function(c){!c&&b.loop&&a.fixLoop();a.callPlugins("onSwipeNext");c=j?a.getTranslate("x"):a.getTranslate("y");c=Math.floor(Math.abs(c)/Math.floor(k))*k+k;if(c!=v&&(!(c>g())||b.loop))return b.loop&&c>=g()+p&&(c=g()+p),j?a.setTransform(-c,0,0):a.setTransform(0,-c,0),a.setTransition(b.speed),a.updateActiveSlide(-c),A(),!0};a.swipePrev=function(c){!c&&b.loop&&a.fixLoop();a.callPlugins("onSwipePrev");c=j?a.getTranslate("x"):a.getTranslate("y");c=(Math.ceil(-c/k)-1)*k;0>c&&(c=0);j?a.setTransform(-c,0,0):a.setTransform(0,-c,0);a.setTransition(b.speed);a.updateActiveSlide(-c);A();return!0};a.swipeReset=function(){a.callPlugins("onSwipeReset");var c=j?a.getTranslate("x"):a.getTranslate("y"),d=0>c?Math.round(c/k)*k:0,e=-g();b.scrollContainer&&(d=0>c?c:0,e=p-k);d<=e&&(d=e);b.scrollContainer&&p>k&&(d=0);"horizontal"==b.mode?a.setTransform(d,0,0):a.setTransform(0,d,0);a.setTransition(b.speed);a.updateActiveSlide(d);if(b.onSlideReset)b.onSlideReset(a);return!0};var E=!0;a.swipeTo=function(c,d,e){c=parseInt(c,10);a.callPlugins("onSwipeTo",{index:c,speed:d});if(!(c>l-1)&&(!(0>c)||b.loop))return e=!1===e?!1:e||!0,d=0===d?d:d||b.speed,b.loop&&(c+=b.slidesPerSlide),c>l-b.slidesPerSlide&&(c=l-b.slidesPerSlide),c=-c*k,E&&(b.loop&&0<b.initialSlide&&b.initialSlide<l)&&(c-=b.initialSlide*k,E=!1),j?a.setTransform(c,0,0):a.setTransform(0,c,0),a.setTransition(d),a.updateActiveSlide(c),e&&A(),!0};a.updateActiveSlide=function(c){a.previousSlide=a.realIndex;a.realIndex=Math.round(-c/k);b.loop?(a.activeSlide=a.realIndex-b.slidesPerSlide,a.activeSlide>=l-2*b.slidesPerSlide&&(a.activeSlide=l-2*b.slidesPerSlide-a.activeSlide),0>a.activeSlide&&(a.activeSlide=l-2*b.slidesPerSlide+a.activeSlide)):a.activeSlide=a.realIndex;a.realIndex==l&&(a.realIndex=l-1);0>a.realIndex&&(a.realIndex=0);b.pagination&&a.updatePagination()};a.fixLoop=function(){if(a.realIndex<b.slidesPerSlide){var c=l-3*b.slidesPerSlide+a.realIndex;a.swipeTo(c,0,!1)}a.realIndex>l-2*b.slidesPerSlide&&(c=-l+a.realIndex+b.slidesPerSlide,a.swipeTo(c,0,!1))};b.loop&&a.swipeTo(0,0,!1)}};Swiper.prototype={plugins:{},transitionEnd:function(f){var b=this,h=b.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(f)for(var w=function(){f(b);for(var r=0;r<g.length;r++)h.removeEventListener(g[r],w,!1)},r=0;r<g.length;r++)h.addEventListener(g[r],w,!1)},isSupportTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},isSupport3D:function(){var f=document.createElement("div");f.id="test3d";var b=!1;"webkitPerspective"in f.style&&(b=!0);"MozPerspective"in f.style&&(b=!0);"OPerspective"in f.style&&(b=!0);"MsPerspective"in f.style&&(b=!0);"perspective"in f.style&&(b=!0);if(b&&"webkitPerspective"in f.style){var h=document.createElement("style");h.textContent="@media (-webkit-transform-3d), (transform-3d), (-moz-transform-3d), (-o-transform-3d), (-ms-transform-3d) {#test3d{height:5px}}";document.getElementsByTagName("head")[0].appendChild(h);document.body.appendChild(f);b=5===f.offsetHeight;h.parentNode.removeChild(h);f.parentNode.removeChild(f)}return b},getTranslate:function(f){var b=this.wrapper,h,b=(window.WebKitCSSMatrix?new WebKitCSSMatrix(window.getComputedStyle(b,null).webkitTransform):window.getComputedStyle(b,null).MozTransform||window.getComputedStyle(b,null).OTransform||window.getComputedStyle(b,null).MsTransform||window.getComputedStyle(b,null).msTransform||window.getComputedStyle(b,null).transform||window.getComputedStyle(b,null).getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(",");"x"==f&&(h=16==b.length?parseInt(b[12],10):parseInt(b[4],10));"y"==f&&(h=16==b.length?parseInt(b[13],10):parseInt(b[5],10));return h},setTransform:function(f,b,h){var g=this.wrapper.style;f=f||0;b=b||0;h=h||0;this.support.threeD?g.webkitTransform=g.MsTransform=g.msTransform=g.MozTransform=g.OTransform=g.transform="translate3d("+f+"px, "+b+"px, "+h+"px)":(g.webkitTransform=g.MsTransform=g.msTransform=g.MozTransform=g.OTransform=g.transform="translate("+f+"px, "+b+"px)",this.ie8&&(g.left=f+"px",g.top=b+"px"));this.callPlugins("onSetTransform",{x:f,y:b,z:h})},setTransition:function(f){var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=f/1E3+"s";this.callPlugins("onSetTransition",{duration:f})},ie8:function(){var f=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(f=parseFloat(RegExp.$1));return-1!=f&&9>f}(),ie10:window.navigator.msPointerEnabled};if(window.jQuery||window.Zepto)(function(f){f.fn.swiper=function(b){b=new Swiper(f(this).selector,b);f(this).data("swiper",b);return b}})(window.jQuery||window.Zepto);

/**
  *
  * jPanelMenu 1.3.0 (http://jpanelmenu.com)
  * By Anthony Colangelo (http://acolangelo.com)
  *
* */
(function(e){e.jPanelMenu=function(t){if(typeof t=="undefined"||t==null)t={};var n={options:e.extend({menu:"#menu",trigger:".menu-trigger",excludedPanelContent:"style, script",direction:"left",openPosition:"250px",animated:!0,closeOnContentClick:!0,keyboardShortcuts:[{code:27,open:!1,close:!0},{code:37,open:!1,close:!0},{code:39,open:!0,close:!0},{code:77,open:!0,close:!0}],duration:150,openDuration:t.duration||150,closeDuration:t.duration||150,easing:"ease-in-out",openEasing:t.easing||"ease-in-out",closeEasing:t.easing||"ease-in-out",before:function(){},beforeOpen:function(){},beforeClose:function(){},after:function(){},afterOpen:function(){},afterClose:function(){},beforeOn:function(){},afterOn:function(){},beforeOff:function(){},afterOff:function(){}},t),settings:{transitionsSupported:"WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"msTransition"in document.body.style||"OTransition"in document.body.style||"Transition"in document.body.style,shiftFixedChildren:!1,panelPosition:"relative",positionUnits:"px"},menu:"#jPanelMenu-menu",panel:".jPanelMenu-panel",fixedChildren:[],timeouts:{},clearTimeouts:function(){clearTimeout(n.timeouts.open);clearTimeout(n.timeouts.afterOpen);clearTimeout(n.timeouts.afterClose)},setPositionUnits:function(){var e=!1,t=["%","px","em"];for(unitID in t){var r=t[unitID];if(n.options.openPosition.toString().substr(-r.length)==r){e=!0;n.settings.positionUnits=r}}e||(n.options.openPosition=parseInt(n.options.openPosition)+n.settings.positionUnits)},checkFixedChildren:function(){n.disableTransitions();var t={position:e(n.panel).css("position")};t[n.options.direction]=e(n.panel).css(n.options.direction)=="auto"?0:e(n.panel).css(n.options.direction);e(n.panel).find("> *").each(function(){e(this).css("position")=="fixed"&&e(this).css(n.options.direction)=="auto"&&n.fixedChildren.push(this)});if(n.fixedChildren.length>0){var r={position:"relative"};r[n.options.direction]="1px";n.setPanelStyle(r);parseInt(e(n.fixedChildren[0]).offset().left)==0&&(n.settings.shiftFixedChildren=!0)}n.setPanelStyle(t)},setjPanelMenuStyles:function(){var t="#fff",r=e("html").css("background-color"),i=e("body").css("background-color");i!="transparent"&&i!="rgba(0, 0, 0, 0)"?t=i:r!="transparent"&&r!="rgba(0, 0, 0, 0)"?t=r:t="#fff";e("#jPanelMenu-style-master").length==0&&e("body").append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;'+n.options.direction+":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;"+n.options.direction+":0;top:0;z-index:2;width:100%;min-height:100%;background:"+t+"}</style>")},setMenuState:function(t){var n=t?"open":"closed";e("body").attr("data-menu-position",n)},getMenuState:function(){return e("body").attr("data-menu-position")},menuIsOpen:function(){return n.getMenuState()=="open"?!0:!1},setMenuStyle:function(t){e(n.menu).css(t)},setPanelStyle:function(t){e(n.panel).css(t)},showMenu:function(){n.setMenuStyle({display:"block"});n.setMenuStyle({"z-index":"1"})},hideMenu:function(){n.setMenuStyle({"z-index":"-1"});n.setMenuStyle({display:"none"})},enableTransitions:function(t,r){var i=t/1e3,s=n.getCSSEasingFunction(r);n.disableTransitions();e("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{-webkit-transition: all '+i+"s "+s+"; -moz-transition: all "+i+"s "+s+"; -o-transition: all "+i+"s "+s+"; transition: all "+i+"s "+s+";}</style>")},disableTransitions:function(){e("#jPanelMenu-style-transitions").remove()},enableFixedTransitions:function(t,r,i,s){var o=i/1e3,u=n.getCSSEasingFunction(s);n.disableFixedTransitions(r);e("body").append('<style id="jPanelMenu-style-fixed-'+r+'">'+t+"{-webkit-transition: all "+o+"s "+u+"; -moz-transition: all "+o+"s "+u+"; -o-transition: all "+o+"s "+u+"; transition: all "+o+"s "+u+";}</style>")},disableFixedTransitions:function(t){e("#jPanelMenu-style-fixed-"+t).remove()},getCSSEasingFunction:function(e){switch(e){case"linear":return e;case"ease":return e;case"ease-in":return e;case"ease-out":return e;case"ease-in-out":return e;default:return"ease-in-out"}},getJSEasingFunction:function(e){switch(e){case"linear":return e;default:return"swing"}},openMenu:function(t){if(typeof t=="undefined"||t==null)t=n.options.animated;n.clearTimeouts();n.options.before();n.options.beforeOpen();n.setMenuState(!0);n.setPanelStyle({position:"relative"});n.showMenu();var r={none:t?!1:!0,transitions:t&&n.settings.transitionsSupported?!0:!1};if(r.transitions||r.none){r.none&&n.disableTransitions();r.transitions&&n.enableTransitions(n.options.openDuration,n.options.openEasing);var i={};i[n.options.direction]=n.options.openPosition;n.setPanelStyle(i);n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),i=t.replace(" ","."),t=t.replace(" ","-");r.none&&n.disableFixedTransitions(t);r.transitions&&n.enableFixedTransitions(i,t,n.options.openDuration,n.options.openEasing);var s={};s[n.options.direction]=n.options.openPosition;e(this).css(s)});n.timeouts.afterOpen=setTimeout(function(){n.disableTransitions();n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),t=t.replace(" ","-");n.disableFixedTransitions(t)});n.options.after();n.options.afterOpen();n.initiateContentClickListeners()},n.options.openDuration)}else{var s=n.getJSEasingFunction(n.options.openEasing),o={};o[n.options.direction]=n.options.openPosition;e(n.panel).stop().animate(o,n.options.openDuration,s,function(){n.options.after();n.options.afterOpen();n.initiateContentClickListeners()});n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t={};t[n.options.direction]=n.options.openPosition;e(this).stop().animate(t,n.options.openDuration,s)})}},closeMenu:function(t){if(typeof t=="undefined"||t==null)t=n.options.animated;n.clearTimeouts();n.options.before();n.options.beforeClose();n.setMenuState(!1);var r={none:t?!1:!0,transitions:t&&n.settings.transitionsSupported?!0:!1};if(r.transitions||r.none){r.none&&n.disableTransitions();r.transitions&&n.enableTransitions(n.options.closeDuration,n.options.closeEasing);var i={};i[n.options.direction]=0+n.settings.positionUnits;n.setPanelStyle(i);n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),i=t.replace(" ","."),t=t.replace(" ","-");r.none&&n.disableFixedTransitions(t);r.transitions&&n.enableFixedTransitions(i,t,n.options.closeDuration,n.options.closeEasing);var s={};s[n.options.direction]=0+n.settings.positionUnits;e(this).css(s)});n.timeouts.afterClose=setTimeout(function(){n.setPanelStyle({position:n.settings.panelPosition});n.disableTransitions();n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),t=t.replace(" ","-");n.disableFixedTransitions(t)});n.hideMenu();n.options.after();n.options.afterClose();n.destroyContentClickListeners()},n.options.closeDuration)}else{var s=n.getJSEasingFunction(n.options.closeEasing),o={};o[n.options.direction]=0+n.settings.positionUnits;e(n.panel).stop().animate(o,n.options.closeDuration,s,function(){n.setPanelStyle({position:n.settings.panelPosition});n.hideMenu();n.options.after();n.options.afterClose();n.destroyContentClickListeners()});n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t={};t[n.options.direction]=0+n.settings.positionUnits;e(this).stop().animate(t,n.options.closeDuration,s)})}},triggerMenu:function(e){n.menuIsOpen()?n.closeMenu(e):n.openMenu(e)},initiateClickListeners:function(){e(document).on("click",n.options.trigger,function(){n.triggerMenu(n.options.animated);return!1})},destroyClickListeners:function(){e(document).off("click",n.options.trigger,null)},initiateContentClickListeners:function(){if(!n.options.closeOnContentClick)return!1;e(document).on("click",n.panel,function(e){n.menuIsOpen()&&n.closeMenu(n.options.animated)});e(document).on("touchend",n.panel,function(e){n.menuIsOpen()&&n.closeMenu(n.options.animated)})},destroyContentClickListeners:function(){if(!n.options.closeOnContentClick)return!1;e(document).off("click",n.panel,null);e(document).off("touchend",n.panel,null)},initiateKeyboardListeners:function(){var t=["input","textarea"];e(document).on("keydown",function(r){var i=e(r.target),s=!1;e.each(t,function(){i.is(this.toString())&&(s=!0)});if(s)return!0;for(mapping in n.options.keyboardShortcuts)if(r.which==n.options.keyboardShortcuts[mapping].code){var o=n.options.keyboardShortcuts[mapping];o.open&&o.close?n.triggerMenu(n.options.animated):o.open&&!o.close&&!n.menuIsOpen()?n.openMenu(n.options.animated):!o.open&&o.close&&n.menuIsOpen()&&n.closeMenu(n.options.animated);return!1}})},destroyKeyboardListeners:function(){e(document).off("keydown",null)},setupMarkup:function(){e("html").addClass("jPanelMenu");e("body > *").not(n.menu+", "+n.options.excludedPanelContent).wrapAll('<div class="'+n.panel.replace(".","")+'"/>');e(n.options.menu).clone().attr("id",n.menu.replace("#","")).insertAfter("body > "+n.panel)},resetMarkup:function(){e("html").removeClass("jPanelMenu");e("body > "+n.panel+" > *").unwrap();e(n.menu).remove()},init:function(){n.options.beforeOn();n.initiateClickListeners();Object.prototype.toString.call(n.options.keyboardShortcuts)==="[object Array]"&&n.initiateKeyboardListeners();n.setjPanelMenuStyles();n.setMenuState(!1);n.setupMarkup();n.setMenuStyle({width:n.options.openPosition});n.checkFixedChildren();n.setPositionUnits();n.closeMenu(!1);n.options.afterOn()},destroy:function(){n.options.beforeOff();n.closeMenu();n.destroyClickListeners();Object.prototype.toString.call(n.options.keyboardShortcuts)==="[object Array]"&&n.destroyKeyboardListeners();n.resetMarkup();var t={};t[n.options.direction]="auto";e(n.fixedChildren).each(function(){e(this).css(t)});n.fixedChildren=[];n.options.afterOff()}};return{on:n.init,off:n.destroy,trigger:n.triggerMenu,open:n.openMenu,close:n.closeMenu,isOpen:n.menuIsOpen,menu:n.menu,getMenu:function(){return e(n.menu)},panel:n.panel,getPanel:function(){return e(n.panel)}}}})(jQuery);

/*! jRespond.js v 0.9 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
(function(b,a,c){b.jRespond=function(l){var e=[];var g=[];var o=l;var s="";var n;var d=0;var m=100;var p=500;var j=p;var i=function(){var t=0;if(!window.innerWidth){if(!(document.documentElement.clientWidth===0)){t=document.documentElement.clientWidth}else{t=document.body.clientWidth}}else{t=window.innerWidth}return t};var h=function(v){var u=v.breakpoint;var t=v.enter||c;e.push(v);g.push(false);if(k(u)){if(t!==c){t.call()}g[(e.length-1)]=true}};var q=function(){var A=[];var z=[];for(var y=0;y<e.length;y++){var v=e[y]["breakpoint"];var t=e[y]["enter"]||c;var x=e[y]["exit"]||c;if(v==="*"){if(t!==c){A.push(t)}if(x!==c){z.push(x)}}else{if(k(v)){if(t!==c&&!g[y]){A.push(t)}g[y]=true}else{if(x!==c&&g[y]){z.push(x)}g[y]=false}}}for(var w=0;w<z.length;w++){z[w].call()}for(var u=0;u<A.length;u++){A[u].call()}};var r=function(u){var v=false;for(var t=0;t<o.length;t++){if(u>=o[t]["enter"]&&u<=o[t]["exit"]){v=true;break}}if(v&&s!==o[t]["label"]){s=o[t]["label"];q()}else{if(!v&&s!==""){s="";q()}}};var k=function(t){if(typeof t==="object"){if(t.join().indexOf(s)>=0){return true}}else{if(t==="*"){return true}else{if(typeof t==="string"){if(s===t){return true}}}}};var f=function(){var t=i();if(t!==d){j=m;r(t)}else{j=p}d=t;setTimeout(f,j)};f();return{addFunc:function(t){h(t)},getBreakpoint:function(){return s}}}}(this,this.document));

$(document).ready(function(){

	//nagyon sajnálom

	var ua = navigator.userAgent;
	if( ua.indexOf("Android") >= 0 ){
		var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
		if (androidversion < 2.3){
			// do whatever
		}
		else{
			var mySwiper = $('.swiper-container').swiper({
				slidesPerSlide: 1,
			});
			$(".fadeInDown,.fadeInUp").addClass("animated");
		}
	}
	else{
		var mySwiper = $('.swiper-container').swiper({
			slidesPerSlide: 1,
		});
		$(".fadeInDown,.fadeInUp").addClass("animated");
	}

	$(".disabled").click(function(){
		return false;
	});

	

	var jPM = $.jPanelMenu({
	    menu: '#main-nav',
	    trigger: '.menu-trigger',
	    afterOpen: function(){
	    	$(".telephone").addClass("disabled");
	    	//alert("opened");
	    },
	    afterClose: function(){
	    	setTimeout(function(){
	    		$(".telephone").removeClass("disabled");	
	    	},100);
	    }
	});
	
	var jRes = jRespond([
	    {
	        label: 'handheld',
	        enter: 0,
	        exit: 767
	    },{
	        label: 'tablet',
	        enter: 768,
	        exit: 979
	    },{
	        label: 'laptop',
	        enter: 980,
	        exit: 1199
	    },{
	        label: 'desktop',
	        enter: 1200,
	        exit: 10000
	    }
	]);

	jRes.addFunc({
	    breakpoint: 'handheld',
	    enter: function() {
	        jPM.on();
	    },
	    exit: function() {
	        jPM.off();
	    }
	});	

});