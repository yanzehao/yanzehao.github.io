// build time:Sat Mar 02 2019 11:34:51 GMT+0800 (GMT+08:00)
(function(e,t){var s=t.body,a=t.querySelector.bind(t),n=t.querySelectorAll.bind(t),o=a("html"),l=a("#gotop"),r=a("#menu"),c=a("#header"),d=a("#mask"),h=a("#menu-toggle"),f=a("#menu-off"),u=a("#loading"),v=e.requestAnimationFrame,m=200/(1e3/60),g=Array.prototype.forEach,p="ontouchstart"in e&&/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)?"touchstart":"click",L=/micromessenger/i.test(navigator.userAgent),y=function(){},w=function(e){var t=e.offsetLeft,i=e.offsetTop;if(e.offsetParent){var s=arguments.callee(e.offsetParent);t+=s.x;i+=s.y}return{x:t,y:i}},x=function(){return t.documentElement.scrollTop||t.body.scrollTop};var $={goTop:function(t){var i=x();var s=arguments.length>2?arguments[1]:Math.abs(i-t)/m;if(i&&i>t){e.scrollTo(0,Math.max(i-s,0));v(arguments.callee.bind(this,t,s))}else if(t&&i<t){e.scrollTo(0,Math.min(i+s,t));v(arguments.callee.bind(this,t,s))}else{this.toc.actived(t)}},toggleGotop:function(t){if(t>e.innerHeight/2){l.classList.add("in")}else{l.classList.remove("in")}},toggleMenu:function(t){var i=a("#main");if(t){r.classList.remove("hide");if(e.innerWidth<1241){d.classList.add("in");r.classList.add("show");if(L){var s=x();i.classList.add("lock");i.scrollTop=s}else{o.classList.add("lock")}}}else{r.classList.remove("show");d.classList.remove("in");if(L){var s=i.scrollTop;i.classList.remove("lock");e.scrollTo(0,s)}else{o.classList.remove("lock")}}},fixedHeader:function(e){if(e>c.clientHeight){c.classList.add("fixed")}else{c.classList.remove("fixed")}},toc:function(){var e=a("#post-toc");if(!e||!e.children.length){return{fixed:y,actived:y}}var t=a(".post-header").clientHeight,s=c.clientHeight,n=a("#post-content").querySelectorAll("h1, h2, h3, h4, h5, h6");e.querySelector('a[href="#'+n[0].id+'"]').parentNode.classList.add("active");var o=e.querySelectorAll(".post-toc-child");for(i=0,len=o.length;i<len;i++){o[i].classList.add("post-toc-shrink")}var l=e.querySelector('a[href="#'+n[0].id+'"]').nextElementSibling;if(l){l.classList.add("post-toc-expand");l.classList.remove("post-toc-shrink")}e.classList.remove("post-toc-shrink");var r=function(e,t){e.classList.remove("active");t.classList.add("active");var i=t.parentElement.querySelectorAll(".post-toc-child");for(j=0,len1=i.length;j<len1;j++){i[j].classList.remove("post-toc-expand");i[j].classList.add("post-toc-shrink")}var s=t.querySelector(".post-toc-child");if(s){s.classList.remove("post-toc-shrink");s.classList.add("post-toc-expand")}};return{fixed:function(i){i>=t-s?e.classList.add("fixed"):e.classList.remove("fixed")},actived:function(t){for(i=0,len=n.length;i<len;i++){if(t>w(n[i]).y-s-5){var a=e.querySelector("li.active");var o=e.querySelector('a[href="#'+n[i].id+'"]').parentNode;r(a,o)}}if(t<w(n[0]).y){r(e.querySelector("li.active"),e.querySelector('a[href="#'+n[0].id+'"]').parentNode)}}}}(),hideOnMask:[],modal:function(e){this.$modal=a(e);this.$off=this.$modal.querySelector(".close");var t=this;this.show=function(){d.classList.add("in");t.$modal.classList.add("ready");setTimeout(function(){t.$modal.classList.add("in")},0)};this.onHide=y;this.hide=function(){t.onHide();d.classList.remove("in");t.$modal.classList.remove("in");setTimeout(function(){t.$modal.classList.remove("ready")},300)};this.toggle=function(){return t.$modal.classList.contains("in")?t.hide():t.show()};$.hideOnMask.push(this.hide);this.$off&&this.$off.addEventListener(p,this.hide)},share:function(){var e=a("#pageShare"),i=a("#shareFab");var s=new this.modal("#globalShare");a("#menuShare").addEventListener(p,s.toggle);if(i){i.addEventListener(p,function(){e.classList.toggle("in")},false);t.addEventListener(p,function(t){!i.contains(t.target)&&e.classList.remove("in")},false)}var o=new this.modal("#wxShare");o.onHide=s.hide;g.call(n(".wxFab"),function(e){e.addEventListener(p,o.toggle)})},search:function(){var e=a("#search-wrap");function t(){e.classList.toggle("in")}a("#search").addEventListener(p,t)},reward:function(){var e=new this.modal("#reward");a("#rewardBtn").addEventListener(p,e.toggle);var t=a("#rewardToggle");var i=a("#rewardCode");if(t){t.addEventListener("change",function(){i.src=this.checked?this.dataset.alipay:this.dataset.wechat})}},waterfall:function(){if(e.innerWidth<760)return;g.call(n(".waterfall"),function(e){var t=e.querySelectorAll(".waterfall-item");var i=[0,0];g.call(t,function(e){var t=i[0]<=i[1]?0:1;e.style.cssText="top:"+i[t]+"px;left:"+(t>0?"50%":0);i[t]+=e.offsetHeight});e.style.height=Math.max(i[0],i[1])+"px";e.classList.add("in")})},tabBar:function(e){e.parentNode.parentNode.classList.toggle("expand")},page:function(){var e=n(".fade, .fade-scale");var t=false;return{loaded:function(){g.call(e,function(e){e.classList.add("in")});t=true},unload:function(){g.call(e,function(e){e.classList.remove("in")});t=false},visible:t}}(),lightbox:function(){function i(i){this.$img=i.querySelector("img");this.$overlay=i.querySelector("overlay");this.margin=40;this.title=this.$img.title||this.$img.alt||"";this.isZoom=false;var a,n,o,l,r;this.calcRect=function(){l=s.clientWidth;r=s.clientHeight;var e=r-this.margin*2;var t=a;var i=n;var c=this.margin;var d=0;var h=t>l?l/t:1;var f=i>e?e/i:1;var u=Math.min(h,f);t=t*u;i=i*u;return{w:t,h:i,t:(r-i)/2-o.top,l:(l-t)/2-o.left+this.$img.offsetLeft}};this.setImgRect=function(e){this.$img.style.cssText="width: "+e.w+"px; max-width: "+e.w+"px; height:"+e.h+"px; top: "+e.t+"px; left: "+e.l+"px"};this.setFrom=function(){this.setImgRect({w:o.width,h:o.height,t:0,l:(i.offsetWidth-o.width)/2})};this.setTo=function(){this.setImgRect(this.calcRect())};this.addTitle=function(){if(!this.title){return}this.$caption=t.createElement("div");this.$caption.innerHTML=this.title;this.$caption.className="overlay-title";i.appendChild(this.$caption)};this.removeTitle=function(){this.$caption&&i.removeChild(this.$caption)};var c=this;this.zoomIn=function(){a=this.$img.naturalWidth||this.$img.width;n=this.$img.naturalHeight||this.$img.height;o=this.$img.getBoundingClientRect();i.style.height=o.height+"px";i.classList.add("ready");this.setFrom();this.addTitle();this.$img.classList.add("zoom-in");setTimeout(function(){i.classList.add("active");c.setTo();c.isZoom=true},0)};this.zoomOut=function(){this.isZoom=false;i.classList.remove("active");this.$img.classList.add("zoom-in");this.setFrom();setTimeout(function(){c.$img.classList.remove("zoom-in");c.$img.style.cssText="";c.removeTitle();i.classList.remove("ready");i.removeAttribute("style")},300)};i.addEventListener("click",function(e){c.isZoom?c.zoomOut():e.target.tagName==="IMG"&&c.zoomIn()});t.addEventListener("scroll",function(){c.isZoom&&c.zoomOut()});e.addEventListener("resize",function(){c.isZoom&&c.zoomOut()})}g.call(n(".img-lightbox"),function(e){new i(e)})}(),loadScript:function(e){e.forEach(function(e){var i=t.createElement("script");i.src=e;i.async=true;s.appendChild(i)})}};e.addEventListener("load",function(){u.classList.remove("active");$.page.loaded();e.lazyScripts&&e.lazyScripts.length&&$.loadScript(e.lazyScripts)});e.addEventListener("DOMContentLoaded",function(){$.waterfall();var e=x();$.toc.fixed(e);$.toc.actived(e);$.page.loaded()});var E=false;var S=a('a[href^="mailto"]');if(S){S.addEventListener(p,function(){E=true})}e.addEventListener("beforeunload",function(e){if(!E){$.page.unload()}else{E=false}});e.addEventListener("pageshow",function(){!$.page.visible&&$.page.loaded()});e.addEventListener("resize",function(){e.BLOG.even=p="ontouchstart"in e?"touchstart":"click";$.toggleMenu();$.waterfall()});l.addEventListener(p,function(){v($.goTop.bind($,0))},false);h.addEventListener(p,function(e){$.toggleMenu(true);e.preventDefault()},false);f.addEventListener(p,function(){r.classList.add("hide")},false);d.addEventListener(p,function(e){$.toggleMenu();$.hideOnMask.forEach(function(e){e()});e.preventDefault()},false);t.addEventListener("scroll",function(){var e=x();$.toggleGotop(e);$.fixedHeader(e);$.toc.fixed(e);$.toc.actived(e)},false);if(e.BLOG.SHARE){$.share()}if(e.BLOG.REWARD){$.reward()}$.noop=y;$.even=p;$.$=a;$.$$=n;Object.keys($).reduce(function(e,t){e[t]=$[t];return e},e.BLOG);if(e.Waves){Waves.init();Waves.attach(".global-share li",["waves-block"]);Waves.attach(".article-tag-list-link, #page-nav a, #page-nav span",["waves-button"])}else{console.error("Waves loading failed.")}})(window,document);
//rebuild by neat 