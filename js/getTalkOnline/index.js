const getTalkJson={requestJsonAPI(t,e,n){let a=10;!function l(){return new Promise(((s,i)=>{let o=0,r=setTimeout((()=>{0===o&&(o=2,r=null,i("请求超时"),0==a&&n())}),5e3);fetch(t).then((function(t){if(2!==o&&(clearTimeout(r),s(t),r=null,o=1),t.ok)return t.json();throw new Error("Network response was not ok.")})).then((function(t){a=0,e(t)})).catch((function(t){a>0?(a-=1,setTimeout((()=>{l()}),5e3)):n()}))}))}()},renderBox(t,e,n,a,l,s="",i=""){let o=a?3:getTalkJson.getRandomRange(2,4,s);s=o;let r=e;e+=o;let d="",c=t.slice(r,e);e>=t.length&&(o=c.length);for(let t=0;t<c.length;t++){let e=c[t].url||c[t].href,n=c[t].text||c[t].content,a=c[t].img||c[t].image,l=c[t].date||c[t].datetime||c[t].time,s=c[t].musicId,i="",o="",r="",g="";e&&(i=`\n\t\t\t\t\t<a class="link" href="${e}" rel="external nofollow" target="_blank" title="跳转到链接">\n\t\t\t\t\t\t<i class="fa-solid fa-link"></i>\n\t\t\t\t\t\t链接\n\t\t\t\t\t</a>`),s&&(o=`\n          <div class="music">\n            <meting-js  \n              class=""\n              server="netease"\n              type="song"\n              id="${s}"\n              fixed=false\n              autoplay='false'\n              theme='#42b983'\n              loop='all'\n              order='list'\n              preload='auto'\n              volume='0.7'\n              list-folded=true\n              hideLrc=false\n          >\n        </div>\n          `),l&&(r=`\n\t\t\t\t<div class="time">\n\t\t\t\t\t<i class="fa-solid fa-calendar-days"></i>\n\t\t\t\t\t<time class="datatime" datetime="${l}">${l}</time>\n\t\t\t\t</div>`),a&&(g=`\n\t\t\t\t<div class="img">\n\t\t\t\t\t<div class="fancybox">\n\t\t\t\t\t\t<a href="${a}" class="fancybox" data-fancybox="images">\n\t\t\t\t\t\t\t<img src="${a}" alt="${a}">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t`),d+=`\n        <div class="talk-card">\n          <div class="talk-content">\n              <p>${n}</p>\n              ${g}\n\t\t\t\t\t\t\t${o}\n          </div>\n          <div class="hr"></div>\n          <div class="talk-bottom">\n              <div class="date-info">\n                  ${r}\n\t\t\t\t\t\t\t\t\t${i}\n              </div>\n          </div>\n      </div>\n      `}let g=`${d}`;return $(l).append(g),i+=g,e<t.length?getTalkJson.renderBox(t,e,n,a,l,s,i):i},getRandomRange(t,e,n){let a=Math.floor(Math.random()*(e-t+1))+t;return n===a?getTalkJson.getRandomRange(t,e,n):a},getJsonAPIForTalk(t){const e=$(t.el)[0];$(e).append('<div class="loading"><i class="fas fa-cog fa-2x fa-spin"></i><p>正在加载</p></div>'),this.requestJsonAPI(t.api,(function(n){$(e).find(".loading").remove();const a=n.slice(0,30);if(a.length>0){let n=t.isRegular||null;getTalkJson.renderBox(a,0,t.api,n,e);waterfall(e)}else $(e).append(`<p style="color:red">${t.api} 没有图片链接</p>`)}),(function(){$(e).find(".loading i").remove(),$(e).find(".loading p").text("加载失败，请稍后重试。")}))},request(){const t=document.getElementsByClassName("getJsonTalk-api");for(var e=0;e<t.length;e++){const a=t[e],l=a.getAttribute("api"),s=a.getAttribute("isRegular");var n=new Object;n.class=a.getAttribute("class"),n.el=a,n.api=l,n.isRegular=s,this.getJsonAPIForTalk(n)}}};getTalkJson.request(),document.addEventListener("pjax:complete",(function(){getTalkJson.request()}));