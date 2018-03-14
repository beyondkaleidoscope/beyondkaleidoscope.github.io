/*
 *  Gridder - v1.4.2
 *  A jQuery plugin that displays a thumbnail grid expanding preview similar to the effect seen on Google Images.
 *  http://www.oriongunning.com/
 *
 *  Made by Orion Gunning
 *  Under MIT License
 */
!function(a){window.console=window.console||function(){var a={};return a.log=a.warn=a.debug=a.info=a.error=a.time=a.dir=a.profile=a.clear=a.exception=a.trace=a.assert=function(){},a}(),a.fn.extend(a.easing,{def:"easeInOutExpo",easeInOutExpo:function(a,b,c,d,e){return 0===b?c:b===e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c}}),a(document).keydown(function(b){var c=b.keyCode,d=a(".currentGridder"),e=d.find(".gridder-show");d.length&&(37===c&&(e.prev().prev().trigger("click"),b.preventDefault()),39===c&&(e.next().trigger("click"),b.preventDefault()))}),a.fn.gridderExpander=function(b){var c=a.extend({},a.fn.gridderExpander.defaults,b);return this.each(function(){function b(b){c.scroll&&a("html, body").animate({scrollTop:b.find(".selectedItem").offset().top-c.scrollOffset},{duration:200,easing:c.animationEasing}),g.removeClass("hasSelectedItem"),h=!1,b.find(".selectedItem").removeClass("selectedItem"),b.find(".gridder-show").slideUp(c.animationSpeed,c.animationEasing,function(){b.find(".gridder-show").remove(),c.onClosed(b)}),a(".currentGridder").removeClass("currentGridder")}function d(d){if(a(".currentGridder").removeClass("currentGridder"),g.addClass("currentGridder"),d.hasClass("selectedItem"))return void b(g,c);g.find(".selectedItem").removeClass("selectedItem"),d.addClass("selectedItem"),g.find(".gridder-show").remove(),g.hasClass("hasSelectedItem")||g.addClass("hasSelectedItem");var h=a('<div class="gridder-show loading"></div>');f=h.insertAfter(d);var i="";0===d.data("griddercontent").indexOf("#")?(i=a(d.data("griddercontent")).html(),e(d,i)):a.ajax({type:"GET",url:d.data("griddercontent"),success:function(a){i=a,e(d,i)},error:function(a){i=a.responseText,e(d,i)}})}function e(b,d){var e='<div class="gridder-padding">';if(c.showNav){var g=a(".selectedItem").prev(),i=a(".selectedItem").next().next();e+='<div class="gridder-navigation">',e+='<a href="#" class="gridder-close">'+c.closeText+"</a>",e+='<a href="#" class="gridder-nav prev '+(g.length?"":"disabled")+'">'+c.prevText+"</a>",e+='<a href="#" class="gridder-nav next '+(i.length?"":"disabled")+'">'+c.nextText+"</a>",e+="</div>"}if(e+='<div class="gridder-expanded-content">',e+=d,e+="</div>",e+="</div>",h?(f.html(e),f.find(".gridder-padding").fadeIn(c.animationSpeed,c.animationEasing,function(){h=!0,a.isFunction(c.onContent)&&c.onContent(f)})):f.hide().append(e).slideDown(c.animationSpeed,c.animationEasing,function(){h=!0,a.isFunction(c.onContent)&&c.onContent(f)}),c.scroll){var j="panel"===c.scrollTo?b.offset().top+b.height()-c.scrollOffset:b.offset().top-c.scrollOffset;a("html, body").animate({scrollTop:j},{duration:c.animationSpeed,easing:c.animationEasing})}f.removeClass("loading")}var f,g=a(this),h=!1;c.onStart(g),g.on("click",".gridder-list",function(b){b.preventDefault();var c=a(this);d(c)}),g.on("click",".gridder-nav.next",function(b){b.preventDefault(),a(this).parents(".gridder-show").next().trigger("click")}),g.on("click",".gridder-nav.prev",function(b){b.preventDefault(),a(this).parents(".gridder-show").prev().prev().trigger("click")}),g.on("click",".gridder-close",function(a){a.preventDefault(),b(g)})})},a.fn.gridderExpander.defaults={scroll:!0,scrollOffset:30,scrollTo:"panel",animationSpeed:400,animationEasing:"easeInOutExpo",showNav:!0,nextText:"Next",prevText:"Previous",closeText:"Close",onStart:function(){},onContent:function(){},onClosed:function(){}}}(jQuery);