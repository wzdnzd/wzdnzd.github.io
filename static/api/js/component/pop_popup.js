// build time:Wed Sep 19 2018 15:34:31 GMT+0800 (中国标准时间)
window._bd_share_main.F.module("component/pop_popup",function(e,o){var t=e("base/tangram").T,i=e("base/class").Class,n=e("conf/const"),a=e("component/pop_base"),p={btn:""},s,r,d,u,c=i.create(function(){function e(e,i){var n=i.bdMini||2,a=i.bdMiniList||o._partnerSort.slice(0,8*n),p=[];t.each(a,function(e,t){p[e]='<li><a href="#" onclick="return false;" class="popup_'+t+'" data-cmd="'+t+'">'+o._partners[t].name+"</a></li>"}),u.html(p.join("")),r.width(n*110+6),d.height(r.outerHeight()),d.width(r.outerWidth())}var o=this;o._poptype=1,o._hide=function(){d&&d.hide(),r&&r.hide()},o._show=function(i,n){e(o._container,n);var a=o._getPosition(i.element,n);t.each([r,d],function(e,o){o.css({top:a.top,left:a.left}).show()}),t(i.element).one("mouseout",function(){var e=!1;r.one("mouseover",function(){e=!0}),setTimeout(function(){!e&&o.hide()},300)})},o._getPosition=function(e,o){var i=t(e).offset(),n=i.top+t(e).height()+5,a=i.left,p=r.outerHeight(),s=t(window).scrollTop();if(n+p>t("body").height()&&n+p>t(window).height()||n+p>s+t(window).height())n=i.top-p-5,n=n<s?s:n;var d=o.bdPopupOffsetLeft,u=o.bdPopupOffsetTop;if(d||u)n+=u|0,a+=d|0;return{top:n,left:a}},o._init=function(){var e="bdSharePopup_"+ +new Date,i=['<iframe frameborder="0" id="'+e+'bg" class="bdshare_popup_bg" style="display:none;"></iframe>'].join(""),n=['<div class="bdshare_popup_box" id="'+e+'box" style="display:none;">','<div class="bdshare_popup_top">',"分享到","</div>",'<ul class="bdshare_popup_list"></ul>','<div class="bdshare_popup_bottom">','<a href="#" onclick="return false;" class="popup_more"  data-cmd="more" target="_blank;">更多...</a>',"</div>","</div>"].join("");t("body").insertHTML("beforeEnd",i+n),o._container=r=t("#"+e+"box"),u=r.find(".bdshare_popup_list"),d=t("#"+e+"bg"),r.mouseleave(o.hide)}},a.PopBase);o.Popup=function(){return s||(s=new c,s.init()),s}()});
//rebuild by neat 