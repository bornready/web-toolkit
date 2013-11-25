define("utils/developer-notes-logger",[],function(){function e(){return console&&console.group?(console.group($($("h1").get(0)).text()),$(".wiki-section").each(function(){var e=$(this);e.find("> h2").text()&&console.groupCollapsed(e.find("> h2").text()),t(e),e.find(".sub-section").each(function(){var e=$(this);e.find("> h3").text()&&console.groupCollapsed(e.find("> h3").text()),t(e),e.find(".example").each(function(){var e=$(this);e.find("> h4").text()&&console.groupCollapsed(e.find("> h4").text()),t(e),e.find("> h4").text()&&console.groupEnd()}),e.find("> h3").text()&&console.groupEnd()}),e.find("> h2").text()&&console.groupEnd()}),console.groupEnd(),void 0):(console.log("Please use a real browser for developer notes"),void 0)}function t(e){var t=e.find("> .developer-notes"),o=e.find("> .dependencies").html(),s=e.find("> .init").html();t.each(function(){i($(this).html())}),i(o,"Dependencies"),i(s,"Initialisation"),n(e)}function n(e){var t=e.find("> .demo").attr("data-selector"),n=e.find("> .demo > "+t).not(".developer-notes");n.each(function(){i(this.outerHTML,"'"+this.tagName+"' html")})}function i(e,t){e&&e.trim().length&&(t&&console.groupCollapsed(t),console.log.apply(console,o(e.trim().replace(/&lt;/g,"<").replace(/&gt;/g,">"))),t&&console.groupEnd())}function o(e){var t=null===e.match(/<code>/gi)?0:e.match(/<code>/gi).length,n=e.replace(/<code>/gi,"%c").replace(/<\/code>/gi,"%c"),i=[n];if(n.indexOf("%c")>-1)for(var o=0;t>o;o++)i.push("background: #FDF6E3; color: #777;"),i.push("background:white; color:black;");return i}return e}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function e(){var e,t=document,n=(t.documentElement,t.body),i=!1,o=t.createElement("p"),s=t.createElement("style"),a='#testbefore:before { content: "before"; }';return s.type="text/css",o.id="testbefore",s.styleSheet?s.styleSheet.cssText=a:s.appendChild(t.createTextNode(a)),n.appendChild(s),n.appendChild(o),e=t.getElementById("testbefore").offsetHeight,e>=1&&(i=!0),n.removeChild(s),n.removeChild(o),i}function t(e,t){var n=e.innerHTML,o=i[t];e.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+o+"</span>"+n}function n(){if(!e()){var n,i,o,s=document.getElementsByTagName("*");for(n=0;o=s[n],o;n+=1)i=o.className,i=i.match(/skycon-[^\s'"]+/),i&&t(o,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-sky-plus":"&#xf102;","skycon-tv":"&#xf103;","skycon-twitter-reply":"&#xf104;","skycon-arrow-down-left":"&#xf105;","skycon-chevron-up":"&#xf106;","skycon-chevron":"&#xf107;","skycon-facebook":"&#xf108;","skycon-tick":"&#xf109;","skycon-remote-record":"&#xf10a;","skycon-warning":"&#xf10b;","skycon-carousel-play":"&#xf10c;","skycon-arrow-left":"&#xf10d;","skycon-chevron-left":"&#xf10e;","skycon-on-demand":"&#xf10f;","skycon-user-profile":"&#xf110;","skycon-search":"&#xf111;","skycon-twitter-retweet":"&#xf112;","skycon-volume":"&#xf113;","skycon-twitter-favourite":"&#xf114;","skycon-expand":"&#xf115;","skycon-carousel-pause":"&#xf116;","skycon-mouse":"&#xf117;","skycon-share":"&#xf118;","skycon-never-miss":"&#xf119;","skycon-mail":"&#xf11a;","skycon-sky-go":"&#xf11b;","skycon-twitter-follow":"&#xf11c;","skycon-minify":"&#xf11d;","skycon-twitter":"&#xf11e;","skycon-close":"&#xf11f;","skycon-menu":"&#xf120;","skycon-phone":"&#xf121;","skycon-cloud":"&#xf122;","skycon-video-play":"&#xf123;","skycon-google-plus":"&#xf124;"};return{add:t,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function e(){$(window).on("hashchange",t);var e=document.documentMode,n="onhashchange"in window&&(void 0===e||e>7);n||(a.hash=document.location.hash,setInterval(function(){document.location.hash!==a.hash&&$(window).trigger("hashchange")},200)),a.windowLoaded=!0}function t(e){var t,n;e=s("string"==typeof e?e:location.hash),e?(t=a.globalHashList[e],n="callback",a.lastExecutor=e):a.lastExecutor&&(t=a.globalHashList[a.lastExecutor],n="undo"),t&&"function"==typeof t[n]&&t[n](e)}function n(){var e=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,e.pathname+e.search)):location.hash="!"}function i(e){location.hash="!"+e}function o(e,n,i){var o=a.globalHashList;$(e).each(function(e,r){if(r=s(r),o[r]){var d="hashManager: hash ("+r+") already exists";throw new Error(d)}o[r]={callback:n,undo:i},a.windowLoaded&&r===s(location.hash)&&t(r)})}function s(e){return e.replace(/[#!]/g,"")}var a={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return e(),{register:o,change:i,remove:n,onHashChange:t,cleanHash:s}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function e(e){var t=e.url,n=e.width||400,i=e.height||n,o=e.top||screen.height/2-i/2,s=e.left||screen.width/2-n/2,a=e.title||"Sky";return window.open(t,a,"top="+o+",left="+s+",width="+n+",height="+i)}function t(){$("body").on("click","[data-popup]",function(t){t.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});e(n)})}return{init:t,open:e}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.toggle=function(){function e(e,t){return h&&e.css({height:t,overflow:"hidden",transition:"height 0.5s ease-in-out"}),e.toggleClass("toggle-hidden",0===t),e}function t(e){return void 0===e.data("openHeight")||d||c?($("body").append($('<div id="toggle-tmp-height"></div>').append(e.clone().attr("style","").removeClass("toggle-hidden"))),e.data("openHeight",$("#toggle-tmp-height > div").height()),$("#toggle-tmp-height").remove(),e.data("openHeight")):e.data("openHeight")}function n(e){var t=e.find("span").length>0?e.find("span"):e,n=t.text();t.text(e.attr("data-toggle-text")),e.attr("data-toggle-text",n).attr("data-tracking-label",n)}function i(e){e.find("i").toggleClass("rotate-180")}function o(n){var i=t(n);e(n,i)}function s(t){e(t,0)}function a(e,t){"shown"==e?l[t.selector]={state:e,$elementToToggle:t}:delete l[t.selector]}function r(e){var t=e.$elClicked,r=e.$container||$(t.attr("data-toggle")),d=e.action,l=t&&t.attr("data-toggle-state");c=void 0!==e.contentChanged?e.contentChanged:!1,"shown"===l||"hide"==d?(s(r),l="hidden"):(o(r),l="shown"),a(l,r),t||(t=$('[data-toggle="#'+r.attr("id")+'"]')),t&&l!==t.attr("data-toggle-state")&&(n(t,l),i(t),t.attr("data-toggle-state",l))}var d=!1,c=!1,l={},h=function(){var e=document.body||document.documentElement;return"string"==typeof e.style.transition}();return $(window).on("skycom.resizeend",function(){d=!0;var n,i;for(i in l)if(n=l[i],"shown"===n.state){var o=t(n.$elementToToggle);e(n.$elementToToggle,o)}d=!1}),r}(),"function"==typeof window.define&&window.define.amd&&define("utils/toggle",[],function(){return toolkit.toggle}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function e(e){var n=e.oldRoute,i=e.newRoute;s(),$("a[data-diff]").each(function(){t(n,i,$(this).attr("data-diff"))})}function t(e,t,n){var o,s,a=n.split("/")[n.split("/").length-1],r=t+"/"+n+".html",d=e+"/"+n+".html";o=$.ajax({crossDomain:!0,url:r,cache:!1}),s=$.ajax({crossDomain:!0,url:d,cache:!1}),$.when(o,s).done(function(e,t){var n=$('<div class="togglee" data-toggle="'+a+'"><table id="'+a+'-table"></table></div>');n.append($('<textarea id="'+a+'" class="hidden latest"></textarea>').val(e)).append($('<textarea id="old-'+a+'" class=hidden></textarea>').val(t)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+a+'-header"><span class="toggler" for="'+a+'"></span>'+a+"</h3>").append(n),i(a,t[0].split("\n"),e[0].split("\n"))})}function n(e,t,i,s,a,r){if(a>0&&r>0&&i[r-1]===s[a-1])n(e,t,i,s,a-1,r-1),o(e,a,r," ",i[r-1]);else if(a>0&&(0===r||t[r][a-1]>=t[r-1][a]))n(e,t,i,s,a-1,r),o(e,a,"","+",s[a-1]);else{if(!(r>0&&(0===a||t[r][a-1]<t[r-1][a])))return;n(e,t,i,s,a,r-1),o(e,"",r,"-",i[r-1],"")}}function i(e,t,i){var o,s,a=new Array(t.length+1);for(s=0;s<a.length;s++)for(a[s]=new Array(i.length+1),o=0;o<a[s].length;o++)a[s][o]=0;for(s=1;s<a.length;s++)for(o=1;o<a[s].length;o++)a[s][o]=t[s-1]===i[o-1]?1+a[s-1][o-1]:Math.max(a[s-1][o],a[s][o-1]);try{n(e,a,t,i,o-1,s-1)}catch(r){alert(r)}}function o(e,t,n,i,o){var s=document.getElementById(e+"-table"),a=document.getElementById(e+"-header"),r=document.createElement("tr"),d=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),h=document.createTextNode(n),u=document.createTextNode(t),f=document.createTextNode(i+" "+o);"+"===i?(r.className="add",$(a).addClass("add")):"-"===i&&(r.className="del",$(a).addClass("del")),d.className="codekolom",c.className="codekolom",l.className="bredecode",d.appendChild(h),c.appendChild(u),l.appendChild(f),r.appendChild(d),r.appendChild(c),r.appendChild(l),s.appendChild(r)}function s(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return e}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.inPageNav=function(e){function t(e){this.$tabContainer=e,this.$tabs=e.find("li[role=tab]"),this.$tabTargets=e.find("div[role=tabpanel]"),this.$showMore=e.find(".dropdown-tab-select > a"),this.$moreTabsContainer=e.find(".dropdown-tab-select"),this.$moreTabsLink=e.find(".more-tabs"),this.numberOfTabsToShow=0,this.saveTabOrder(),this.bindEvents(),this.initTabs()}function n(e){var t=[];e.find("li").each(function(){t.push($(this).attr("data-position"))}),t.sort(),$.each(t,function(){e.find('li[data-position="'+this+'"]').appendTo(e)})}t.prototype={bindEvents:function(){var t=this;e.register(this.getHashList(),this.changeTab.bind(t)),this.$tabs.on("click",function(){t.changeTab($(this).find("a").attr("href"))}),this.$showMore.on("click",this.toggleShowMore.bind(t)),$("body").on("click",this.hideMore.bind(t)),$(window).bind("skycom.resizeend",this.initTabs.bind(t))},getHashList:function(){var e=[];return this.$tabs.each(function(){e.push($(this).attr("aria-controls"))}),e},saveTabOrder:function(){this.$tabs.each(function(e){$(this).attr("data-position",e)})},initTabs:function(){this.moveTabsToList(),this.moveTabsToDropdown()},changeTab:function(e){e=e.replace("#!","");var t=$("#"+e+"-tab"),n=$("#"+e);this.$tabTargets.add(this.$tabs).removeClass("selected"),t.add(n).addClass("selected"),this.initTabs()},hideMore:function(e){$(e.target).closest(this.$showMore).length||this.toggleShowMore("hide")},toggleShowMore:function(e){var t=this.$moreTabsLink.hasClass("dropdown-tab-selected")||"hide"===e?"remove":"add";this.$showMore.add(this.$moreTabsLink)[t+"Class"]("dropdown-tab-selected")},getNumberOfTabsToShow:function(){var e=this.$tabContainer.outerWidth(!0)-this.$moreTabsContainer.show().outerWidth(!0)-this.$tabs.filter(".selected").outerWidth(!0),t=0,n=0;return this.$tabs.not(".selected").attr("style","float:left").each(function(){t+=$(this).outerWidth(!0),t>e||n++}),this.$tabs.add(this.$moreTabsContainer).removeAttr("style"),n},moveTabsToList:function(){var e=this;this.$tabs.each(function(){$(this).appendTo(e.$tabContainer.find(".tabs"))}),n(this.$tabContainer.find(".tabs")),this.numberOfTabsToShow=this.getNumberOfTabsToShow()},moveTabsToDropdown:function(){var e=this;this.$tabs.not(".selected").each(function(t){t<e.numberOfTabsToShow||($(this).appendTo(e.$moreTabsLink),e.$moreTabsContainer.show())}),n(this.$moreTabsLink)}},$.fn.inPageNav=function(e){return this.each(function(){new t($(this),e)})}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/inPageNav",["utils/hashmanager"],function(){return toolkit.inPageNav}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.accordion=function(e){function t(e){this.$container=e,this.$headings=e.find(".accordion-heading"),this.bindEvents()}return t.prototype={bindEvents:function(){this.$headings.on("click",this.toggleContent.bind(this))},toggleContent:function(t){t.preventDefault();var n=e(t.currentTarget);toolkit.toggle({$elClicked:n})}},e.fn.accordion=function(){return this.each(function(){new t(e(this))})},t}(jQuery,toolkit.toggle),"function"==typeof window.define&&window.define.amd&&define("modules/accordion",["utils/toggle"],function(){return toolkit.accordion}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function e(){i.shareCount.on("click keypress",t)}function t(e){e.preventDefault();var t=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===e.type||"touchend"===e.type||"keypress"===e.type&&13===e.which)&&(t.toggleClass("active"),i.document.on(n,function o(e){$.contains(t[0],e.target)||(t.removeClass("active"),i.document.off(n,o))}))}function n(){e()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.video=function(e,t){function n(e,t){e.attr("data-video-id")&&(this.$container=e,this.options={token:t.token,freewheel:t.displayAdverts,animationSpeed:void 0!==t.animationSpeed?t.animationSpeed:500,autoplay:!1,videoId:e.attr("data-video-id"),onPlay:t.onPlay,closeCallback:t.closeCallback},this.bindEvents())}return n.prototype={bindEvents:function(){var e=this;e.$container.on("click",".play-video",function(t){e.createWrapper(),e.play(t)})},bindWrapperEvents:function(){var e=this;t("body").one("keydown",e.stopOnEscape.bind(e)),e.$wrapper.one("click touchstart",".close",e.stop.bind(e)),e.$player.one("ended webkitendfullscreen",e.stop.bind(e))},createWrapper:function(){this.$container.append('<div class="video-wrapper"><a href="#!" class="close"><i class="skycon-close" aria-hidden=true></i><span class="speak">Close</span></a><div class="videocontrolcontainer"><video></video><img class="posterFrame"/></div></div>'),this.$container.find(".posterFrame").on("error",function(){this.src=options.placeHolderImage}),this.$container.append('<div class="video-overlay"></div>'),this.$player=this.$container.find("video"),this.$wrapper=this.$container.find(".video-wrapper"),this.$wrapper.attr("id","video-"+this.options.videoId),this.bindWrapperEvents()},removeWrapper:function(){this.$wrapper.removeClass("playing-video").remove(),this.$container.find(".video-overlay").remove()},play:function(e){e&&e.preventDefault();var t=this;t.options.onPlay&&t.options.onPlay(),this.showCanvas(function(){t.$player.sky_html5player(t.options),setTimeout(function(){sky.html5player.play()},1333)})},stopOnEscape:function(e){27===e.keyCode&&(e.preventDefault(),this.stop())},stop:function(n){n&&n.preventDefault();var i=this;t(e).off("skycom.resizeend",i.resizeContainer),sky.html5player.close(this.$wrapper),this.hideCanvas()},showCanvas:function(n){var i,o=this.$container,s=o.find(".video-overlay"),a=o.find(".video-wrapper"),r=o.find(".play-video"),d=o.find(".video-wrapper .close"),c=0===this.options.animationSpeed?0:this.options.animationSpeed||500,l=this;this.originalHeight=o.height(),a.addClass("playing-video"),s.fadeIn(c,function(){r.fadeOut(c),i=l.calculateHeight(),o.animate({height:i},c,function(){t(e).on("skycom.resizeend",t.proxy(l.resizeContainer,l)),a.show(),s.fadeOut(c,function(){d.addClass("active")}),n()})})},calculateHeight:function(){return Math.round(9*(this.$container.width()/16))},resizeContainer:function(){this.$container.animate({height:this.calculateHeight()},250)},hideCanvas:function(){var e=this,t=this.$container,n=t.find(".video-overlay"),i=t.find(".video-wrapper"),o=t.find(".play-video"),s=t.find(".video-wrapper .close"),a=0===this.options.animationSpeed?0:this.options.animationSpeed||500,r=this.originalHeight;n.fadeIn(a,function(){s.removeClass("active"),t.animate({height:r},a,function(){t.css({height:"auto"}),e.options.closeCallback&&e.options.closeCallback(),o.fadeIn(a),n.hide(),i.fadeOut(a,e.removeWrapper.bind(e))})})}},t.fn.video=function(e){return this.each(function(){new n(t(this),e)})},n}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/video",[],function(){return toolkit.video}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(e,t){function n(e,t){this.options=t,this.$viewport=e,this.$slideContainer=e.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents(),this.initialiseVideos()}var i=function(){return"WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix}(),o=function(){var e=document.body.style;return void 0!==e.transform||void 0!==e.WebkitTransform||void 0!==e.MozTransform||void 0!==e.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(e,t){var n=this.$slideContainer.removeClass("animate");return t&&n.addClass("animate"),i?n.css("transform","translate3d("+e+"%,0,0) scale3d(1,1,1)"):o?n.css("transform","translate("+e+"%,0)"):t?n.animate({left:2*e+"%"},600):n.css({left:2*e+"%"}),this},toggleTermsContent:function(){this.pause();var e=0===this.$viewport.next(".terms-content").find(".terms").length;this[e?"showTermsContent":"hideTermsContent"]()},showTermsContent:function(){this.hideTermsContent();var e=t(this.$slides[this.currentIndex]).find(".terms");e.length&&this.$viewport.next(".terms-content").append(e.clone(!0).removeClass("speak").attr("aria-hidden","true")).fadeIn(200)},hideTermsContent:function(){this.$viewport.next(".terms-content").fadeOut(200,function(){t(this).find(".terms").remove()})},showTermsLink:function(e){this.hideTermsLink();var n=t(this.$slides[e]).find(".terms");n.length&&this.$viewport.find(".terms-link").removeClass("hidden").fadeIn(200)},hideTermsLink:function(){this.$viewport.find(".terms-link").fadeOut(200),this.hideTermsContent()},initialiseVideos:function(){var e=this;this.$slides.video({token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",displayAdverts:!1,onPlay:function(){e.pause(),e.$viewport.find(".actions, .indicators, .terms-link").fadeOut(500)},closeCallback:function(){e.$viewport.find(".actions, .indicators, .terms-link").fadeIn(500)}})},moveSlide:function(e){var t,n,i=this,o=this.$slides;return n=e.index>=this.slideCount?0:e.index<0?this.slideCount-1:e.index,t=e.index>this.currentIndex&&!e.reverse?"left":"right",o.filter(":not(:eq("+this.currentIndex+"))").hide(),o.eq(this.currentIndex).css("float",t),o.eq(n).show().css("float","left"==t?"right":"left"),this.setOffset(e.start,!1),"undefined"!=typeof e.end&&(setTimeout(function(){i.setOffset(e.end,!0),i.showTermsLink(n),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof e.callback&&e.callback(n)),n},"goto":function(e,t,n){return t!==!1&&this.pause(),e!==this.currentIndex?(e>this.currentIndex?this.moveSlide({index:e,start:0,end:-50,callback:n}):this.moveSlide({index:e,start:-50,end:0,callback:n}),this):void 0},next:function(e,t){return this.goto(this.currentIndex+1,e,t),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(e,t){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function e(){n.next(!1,function(){n.timerId=setTimeout(e,i)})},i)},t||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof e&&e(),this},pause:function(e){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof e&&e(),this},touchstart:function(e){var t=e.originalEvent.touches[0];this.pause(),this.swipe.start={x:t.pageX,y:t.pageY}},touchmove:function(e){var t,n=this.swipe,i=e.originalEvent.touches[0],o=i.pageX-n.start.x,s=i.pageY-n.start.y,a=Math.abs(o)>Math.abs(s),r=0>o?this.currentIndex+1:this.currentIndex-1;n.start&&a!==!1&&(e.preventDefault(),t=100*(o/this.$slideContainer.outerWidth(!0)),o>0&&(t-=50),this.swipe.positionAsPercentage=t,this.moveSlide({index:r,start:t}))},touchend:function(e){if(this.swipe.start){var t=this.swipe,n=t.positionAsPercentage,i=e.originalEvent.changedTouches[0],o=i.pageX-t.start.x,s=null,a=75;if(Math.abs(o)>a&&(s=0>o?"left":"right"),"left"===s)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===s)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=o>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},t.fn.skycom_carousel=function(e){var i=t.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel",icon:"carousel-play"},{id:"pause",label:"Pause Carousel",icon:"carousel-pause"},{id:"previous",label:"Previous",icon:"chevron-left",speak:!0},{id:"next",label:"Next",icon:"chevron",speak:!0}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3}},e),o={actions:function(e,n){var i,o,s,a,r,d,c="",l=n.actions,h=n.onclick;if(n.count<=1)return this;for(s in l)d=l[s],i=d.id,a="next"==i||"previous"==i?" hidden-touch ":"",r="skycon-"+d.icon,o=d.speak?'<span class="speak">'+d.label+"</span>":d.label,c+='<a href="#" class="skycom-internal supportive '+a+i+'" >',c+='<span class="semi-circle"><i class="'+r+'" aria-hidden="true"></i></span>'+o,c+="</a>";return e.find(".skycom-carousel-container").before('<div class="actions">'+c+"</div>"),e.find("> .actions > *").each(function(e){t(this).attr("data-action",l[e].id).on("click",function(t){h(l[e].id),t.preventDefault()})}),this},indicators:function(e,n){var i,o,s=n.count,a=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=s)return this;for(o=s;o--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return i=t(r+"</div></div>").on("click","span",function(e){a(t(e.currentTarget).index())}),e.append(i),this},terms:function(e){var n=t('<a href="#!" class="terms-link carousel-content cushioned hidden black internal-link supportive" aria-hidden="true">Terms and Conditions</a>'),i=t('<div class="terms-content carousel-content  cushioned hidden"></div>');return e.find(".terms").length&&(e.append(n),e.after(i),e.addClass("has-terms")),this},video:function(e){return e.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var e=t(this),s=new n(e,i.carousel),a=function(t){o.indicators(e,{count:t.slideCount,onclick:function(e){t.goto(e)}}).terms(e).actions(e,{count:t.slideCount,actions:i.carousel.actions,onclick:function(e){t[e]()}})};a(s),e.on("click",".terms-link",function(){s.toggleTermsContent()}).on("change",function(t,n){n=n||0,e.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){e.removeClass("paused").addClass("playing")}).on("paused",function(){e.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(t,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,e.find(".indicators").remove(),e.find(".actions").remove(),e.find(".video-overlay").remove(),a(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(e){switch(e.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),s.goto(i.carousel.startSlideIndex,!1),s.showTermsLink(0),e.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery,toolkit.video),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",["modules/video"],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function e(){var e=function(){$(document.body).addClass("window-loaded")},t=setTimeout(e,5e3);$(window).load(function(){clearTimeout(t),e()})}e()}(),toolkit.modules=function(){var e=function(e){var t,n=$.extend({skycons:!1,share:!1,popup:!1,inPageNav:!1,accordion:!1,datepicker:!1},e);for(t in n)(n[t]||!e)&&toolkit[t]&&toolkit[t].init&&toolkit[t].init()};return{init:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/toggle","utils/diff","modules","modules/inPageNav","modules/accordion","modules/share","modules/video","modules/carousel"],function(e,t,n,i,o,s,a,r,d,c,l){return{modules:s,skycons:e,hashmanager:t,popup:n,diff:o,inPageNav:a,accordion:r,share:d,video:c,carousel:l}}),define("wiki",["utils/developer-notes-logger","toolkit"],function(e,t){function n(){$(document).on("click",".toggler",s),$("#check").on("click",i)}function i(e){e.preventDefault();var n=$("#version").val(),i=$(".wiki-header small").text().replace("v",""),o="http://web-toolkit.global.sky.com";(n.split(".").length<3||n.split(".")[0]<1)&&$(".sky-form .error").text("The version number is required, and must be '1.0.0' or higher"),(1===parseFloat(n,10)||"0"===n.split(".")[0])&&(n="0.6.9"),t.diff({oldRoute:o+"/"+n+"/_site/_includes/",newRoute:o+"/"+i+"/_site/_includes/"})}function o(){$("#hero").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),$("#hero-skinny").skycom_carousel({carousel:{autoplay:!0,videoAds:!1}}),$("#demo-classc-tabs").inPageNav(),$("#demo-inpage-nav-tabs").inPageNav(),$("#demo-video .video").video({token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",freewheel:!1}),$(".accordion").accordion(),t.modules.init()}function s(){var e=$(this),t=$("div[data-toggle="+e.attr("for")+"]");t.hasClass("open")?(e.removeClass("open"),t.removeClass("open")):(e.addClass("open"),t.addClass("open"))}e(),o(),n()});