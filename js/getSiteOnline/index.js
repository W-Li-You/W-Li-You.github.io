const getSiteJson={requestJsonAPI(e,t,n){let s=10;!function i(){return new Promise(((r,a)=>{let o=0,l=setTimeout((()=>{0===o&&(o=2,l=null,a("请求超时"),0==s&&n())}),5e3);fetch(e).then((function(e){if(2!==o&&(clearTimeout(l),r(e),l=null,o=1),e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){s=0,t(e)})).catch((function(e){s>0?(s-=1,setTimeout((()=>{i()}),5e3)):n()}))}))}()},filterData:(e,t)=>t.filter((e=>{let t=e.img||e.url||e.imgurl,n=t.substring(t.lastIndexOf(".")+1);if(["bmp","jpg","png","tif","gif","pcx","tga","exif","fpx","psd","cdr","pcd","dxf","ufo","eps","ai","raw","WMF","webp","jpeg"].includes(n))return e})),renderBox(e,t,n,s,i,r="",a=""){let o=s?4:getSiteJson.getRandomRange(2,4,r);r=o;let l=t;t+=o;let c="",g=e.slice(l,t);t>=e.length&&(o=g.length);for(let e=0;e<g.length;e++){let t=g[e].url||g[e].href,n=g[e].title||g[e].name,s=g[e].avatar||g[e].touxiang;c+=`\n            <a class="site-card" href="${t}" target="_blank">\n                <div class="img"><img src="${g[e].screenshot||g[e].cover}" onerror="javascript:this.src='https://picx.zhimg.com/80/v2-d7666d074ec59ca4cf14f15c5f891643_1440w.webp';" /></div>\n                <div class="info">\n                    <img src="${s}"/>\n                    <span class="title">${n}</span><span class="desc">${g[e].description||g[e].desc}</span>\n                </div>\n            </a>`}let d=`<div class="site-card-group">${c}</div>`;return $(i).append(d),a+=d,t<e.length?getSiteJson.renderBox(e,t,n,s,i,r,a):a},getRandomRange(e,t,n){let s=Math.floor(Math.random()*(t-e+1))+e;return n===s?getSiteJson.getRandomRange(e,t,n):s},getJsonAPIForSites(e){const t=$(e.el)[0];$(t).append('<div class="loading"><i class="fas fa-cog fa-2x fa-spin"></i><p>正在加载</p></div>'),this.requestJsonAPI(e.api,(function(n){$(t).find(".loading").remove();const s=n;if(s.length>0){let n=e.isRegular||null;getSiteJson.renderBox(s,0,e.api,n,t)}else $(t).append(`<p style="color:red">${e.api} 没有图片链接</p>`)}),(function(){$(t).find(".loading i").remove(),$(t).find(".loading p").text("加载失败，请稍后重试。")}))},request(){const e=document.getElementsByClassName("getJsonSite-api");for(var t=0;t<e.length;t++){const s=e[t],i=s.getAttribute("api"),r=s.getAttribute("isRegular");var n=new Object;n.class=s.getAttribute("class"),n.el=s,n.api=i,n.isRegular=r,this.getJsonAPIForSites(n)}}};getSiteJson.request(),document.addEventListener("pjax:complete",(function(){getSiteJson.request()}));