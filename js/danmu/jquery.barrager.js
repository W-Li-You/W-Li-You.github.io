/*!
 *@name     jquery.barrager.js
 *@version  1.1
 *@author   yaseng@uauc.net
 *@url      https://github.com/yaseng/jquery.barrager.js
 */
!function(r){r.fn.barrager=function(e){e=r.extend({close:!0,bottom:0,max:10,speed:8,color:"#fff",old_ie_color:"#000000"},e||{});var a="barrage_"+(new Date).getTime(),o="#"+a,i=r("<div class='barrage' id='"+a+"'></div>").appendTo(r(this)),t=r(window).height()-100,n=t>this.height()?this.height():t,d=r(window).width()+500,s=d>this.width()?this.width():d,g=0==e.bottom?Math.floor(Math.random()*n+40):e.bottom;(i.css("bottom",g+"px"),div_barrager_box=r("<div class='barrage_box cl'></div>").appendTo(i),e.img)&&(div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>"),r("<img src='' >").appendTo(o+" .barrage_box .portrait").attr("src",e.img));div_barrager_box.append(" <div class='z p'></div>"),e.close&&div_barrager_box.append(" <div class='close z'></div>");var c=r("<a title='' href='' target='_blank'></a>").appendTo(o+" .barrage_box .p");c.attr({href:e.href,id:e.id}).empty().append(e.info),navigator.userAgent.indexOf("MSIE 6.0")>0||navigator.userAgent.indexOf("MSIE 7.0")>0||navigator.userAgent.indexOf("MSIE 8.0")>0?c.css("color",e.old_ie_color):c.css("color",e.color);i.css("margin-right",0),r(o).animate({right:s},1e3*e.speed,(function(){r(o).remove()})),div_barrager_box.mouseover((function(){r(o).stop(!0)})),div_barrager_box.mouseout((function(){r(o).animate({right:s},1e3*e.speed,(function(){r(o).remove()}))})),r(o+".barrage .barrage_box .close").click((function(){r(o).remove()}))},r.fn.barrager.removeAll=function(){r(".barrage").remove()}}(jQuery);