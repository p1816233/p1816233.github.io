$j213(function(u){u.fn.dpTileSlider=function(a){var d=this,o=a||{};o={timeout:a&&a.timeout?a.timeout:50,auto:a&&a.auto?a.auto:"false",nav:a&&a.nav?a.nav:"true",pager:a&&a.pager?a.pager:"true",start:a&&a.start?a.start:function(){},animBefore:a&&a.animBefore?a.animBefore:function(){},animAfter:a&&a.animAfter?a.animAfter:function(){}};var n,e=d.children(),t=u('<a class="next">Next<span></span></a>'),i=u('<a class="prev">Previous<span></span></a>'),l=function(){var a=u("<ul/>").addClass("dp-pager"),n=0;for(n=0;n<e.length;n++){var t=u("<li></li>"),i=u('<a href="#"></a>');i.attr("data-slide",""+n),0===n&&(i.addClass("active"),e.eq(n).addClass("active")),t.append(i),a.append(t),e.eq(n).attr("data-slide",""+n)}return a}(),c={scale:"scale-anim",translate:"translate-clockwise-anim",split:"split-anim",split2:"split-anim-sync",fall:"fall-anim",rotate3D:"rotate3D-anim",rotate3D2:"rotate3D-anim-sync",rotate:"rotate-anim"},f=!1;function s(a){a.each(function(){var a=d.width(),n=d.height();this.width/this.height<a/n?u(this).addClass("is-landscape"):u(this).removeClass("is-landscape")})}function r(a,n){if(!f){f=!0;var t,i=d.children(".dp-slide.active"),e=i.data("anim"),s=Math.round(Math.random()*(function(a){var n,t=0;for(n in a)a.hasOwnProperty(n)&&t++;return t}(c)-1)),r=c.hasOwnProperty(e)?c[e]:function(a,n){var t,i=0,e=!1;for(t in a)if(a.hasOwnProperty(t)){if(i===n){e=a[t];break}i++}return e}(c,s);o.animBefore.call(i),setTimeout(function(){"next"===a?t=function(a){var n=a.next(".dp-slide");n.length<=0&&(n=a.siblings(".dp-slide").first());return n}(i):"prev"===a?t=function(a){var n=a.prev(".dp-slide");n.length<=0&&(n=a.siblings(".dp-slide").last());return n}(i):"shuff"===a&&n&&(t=n),i.is(t)?f=!1:(i.removeClass("active").addClass("animated "+r).find(".dp-tile .dp-img").last().one("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend",function(){f=!1,i.removeClass("animated "+r),o.animAfter.call(t)}),t.addClass("active").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){var a=l.find("a");a.filter("[data-slide="+i.data("slide")+"]").removeClass("active"),a.filter("[data-slide="+t.data("slide")+"]").addClass("active")}))},o.timeout)}}return u(window).on("load",function(){var a=e.find("img[role=banner]");s(a),a.each(function(){u(this).show()})}),n=e,d.hasClass("dp-tile-slider")||d.addClass("dp-tile-slider"),n.each(function(){u(this).hasClass("dp-slide")||u(this).addClass("dp-slide");var a=u(this).children("img[role=banner]").eq(0),n=u('<div class="dp-tile"></div>'),t=u('<div class="dp-img"></div>');t.append(a),n.append(t);for(var i=0;i<4;i++)n.clone().prependTo(u(this))}),"true"===o.nav&&d.append(t,i),"true"===o.pager&&d.append(l),u(window).on("resize",function(){e.find("img[role=banner]").each(function(){s(u(this))})}),o.start.call(e.filter(".active")),t.on("click",function(a){a.preventDefault(),r("next")}),i.on("click",function(a){a.preventDefault(),r("prev")}),l.each(function(){u(this).find("a").each(function(){u(this).on("click",function(a){a.preventDefault();var n=u(this).data("slide");r("shuff",e.filter("[data-slide="+n+"]"))})})}),("true"===o.auto||"false"===o.nav&&"false"===o.pager)&&function a(){setTimeout(function(){r("next"),setTimeout(function(){a()},2e3)},2e3)}(),d}});