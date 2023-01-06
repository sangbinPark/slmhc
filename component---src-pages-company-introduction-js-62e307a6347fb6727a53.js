"use strict";(self.webpackChunkjungwon_electronics_homepage=self.webpackChunkjungwon_electronics_homepage||[]).push([[978],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,i=0;i<e.length;i++){var c=e[i];t&&/[a-zA-Z]/.test(c)&&c.toUpperCase()===c?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=a,a=!0,i++):a&&n&&/[a-zA-Z]/.test(c)&&c.toLowerCase()===c?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=a,a=!1,t=!0):(t=c.toLowerCase()===c&&c.toUpperCase()!==c,n=a,a=c.toUpperCase()===c&&c.toLowerCase()!==c)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return x},P:function(){return v},S:function(){return W},_:function(){return s},a:function(){return r},b:function(){return d},g:function(){return l},h:function(){return o}});var n=a(7294),i=(a(4811),a(5697)),c=a.n(i);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t.indexOf(a=c[n])>=0||(i[a]=e[a]);return i}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,a,n,i){return void 0===i&&(i={}),r({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:r({},i,{opacity:t?1:0})})}function l(e,t,a,n,i,c,s,o){var d={};c&&(d.backgroundColor=c,"fixed"===a?(d.width=n,d.height=i,d.backgroundColor=c,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),s&&(d.objectFit=s),o&&(d.objectPosition=o);var l=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return l}var u,p=["children"],m=function(e){var t=e.layout,a=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,p);return n.createElement(n.Fragment,null,n.createElement(m,r({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,a=e.srcSet,i=e.loading,c=e.alt,o=void 0===c?"":c,d=e.shouldLoad,l=s(e,g);return n.createElement("img",r({},l,{decoding:"async",loading:i,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?a:void 0,"data-srcset":d?void 0:a,alt:o}))},w=function(e){var t=e.fallback,a=e.sources,i=void 0===a?[]:a,c=e.shouldLoad,o=void 0===c||c,d=s(e,h),l=d.sizes||(null==t?void 0:t.sizes),u=n.createElement(b,r({},d,t,{sizes:l,shouldLoad:o}));return i.length?n.createElement("picture",null,i.map((function(e){var t=e.media,a=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),u):u};b.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var y=["fallback"],v=function(e){var t=e.fallback,a=s(e,y);return t?n.createElement(w,r({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",r({},a))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(u=w.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(w,r({},e)),n.createElement("noscript",null,n.createElement(w,r({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var E,S,_=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),r=3;r<n;r++)i[r-3]=arguments[r];return e.alt||""===e.alt?c().string.apply(c(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:c().object.isRequired,alt:_},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],z=new Set,I=function(e){var t=e.as,i=void 0===t?"div":t,c=e.image,d=e.style,l=e.backgroundColor,u=e.className,p=e.class,m=e.onStartLoad,f=e.onLoad,g=e.onError,h=s(e,k),b=c.width,w=c.height,y=c.layout,v=function(e,t,a){var n={},i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(b,w,y),x=v.style,_=v.className,C=s(v,L),I=(0,n.useRef)(),N=(0,n.useMemo)((function(){return JSON.stringify(c.images)}),[c.images]);p&&(u=p);var O=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(y,b,w);return(0,n.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=I.current.querySelector("[data-gatsby-image-ssr]");return n&&o()?(n.complete?(null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void z.add(N)):S&&z.has(N)?void 0:(E.then((function(a){var n=a.renderImageToString,i=a.swapPlaceholderImage;I.current&&(I.current.innerHTML=n(r({isLoading:!0,isLoaded:z.has(N),image:c},h)),z.has(N)||(e=requestAnimationFrame((function(){I.current&&(t=i(I.current,N,z,d,m,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[c]),(0,n.useLayoutEffect)((function(){z.has(N)&&S&&(I.current.innerHTML=S(r({isLoading:z.has(N),isLoaded:z.has(N),image:c},h)),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}))}),[c]),(0,n.createElement)(i,r({},C,{style:r({},x,d,{backgroundColor:l}),className:_+(u?" "+u:""),ref:I,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},N=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));N.propTypes=C,N.displayName="GatsbyImage";var O,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?c().number.apply(c(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),A={src:c().string.isRequired,alt:_,width:P,height:P,sizes:c().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},W=(O=N,function(e){var t=e.src,a=e.__imageData,i=e.__error,c=s(e,T);return i&&console.warn(i),a?n.createElement(O,r({image:a},c)):(console.warn("Image not loaded",t),null)});W.displayName="StaticImage",W.propTypes=A},1329:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),i=a(6283),c=a(9692),r=c.default.div.withConfig({displayName:"ParagraphStyled__Wrapper",componentId:"sc-vyk7c5-0"})(["margin:30px 0;display:flex;align-items:center;justify-content:center;"]),s=c.default.div.withConfig({displayName:"ParagraphStyled__ParagraphStyle",componentId:"sc-vyk7c5-1"})(["line-height:2;"]),o=function(e){var t=e.sentences;return n.createElement(r,null,n.createElement(s,null,t.map((function(e,t){return n.createElement(n.Fragment,{key:"Paragraph_"+t},n.createElement(i.Z,{id:e}),n.createElement("br",null))}))))}},5385:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),i=a(7059),c=a(376),r=a(1329),s=a(6449),o=a(6283),d=a(9692),l=d.default.div.withConfig({displayName:"ProductIntroductionStyled__Wrapper",componentId:"sc-adfyri-0"})(["width:100%;"]),u=d.default.p.withConfig({displayName:"ProductIntroductionStyled__Title",componentId:"sc-adfyri-1"})(["color:",";font-weight:700;margin-bottom:15px;"],(function(e){return e.theme.palette.primary.main})),p=d.default.div.withConfig({displayName:"ProductIntroductionStyled__ImageArea",componentId:"sc-adfyri-2"})(["display:flex;margin-top:10px;"]),m=d.default.div.withConfig({displayName:"ProductIntroductionStyled__ImageWrapper",componentId:"sc-adfyri-3"})(["display:flex;margin-right:5px;"]),f=function(e){var t=e.title,a=e.introduction,i=e.images,c=(0,s.Z)();return n.createElement(l,null,n.createElement(u,{theme:c},n.createElement("span",null,n.createElement(o.Z,{id:t}))),n.createElement("span",null,"- ",n.createElement(o.Z,{id:a})),n.createElement(p,null,i.map((function(e,t){return n.createElement(m,{key:t},e)}))))},g=function(e){var t=e.pageContext;return n.createElement(c.Z,{pageTitle:"about_us",pageContext:t},n.createElement("div",null,n.createElement(r.Z,{sentences:["company_product_0"]})),n.createElement(f,{title:"company_product_1",introduction:"company_product_2",images:[n.createElement(i.S,{alt:"picture 1",src:"../../images/introduction1.png",__imageData:a(9906)}),n.createElement(i.S,{alt:"picture 2",src:"../../images/introduction2.png",__imageData:a(3062)}),n.createElement(i.S,{alt:"picture 3",src:"../../images/introduction3.png",__imageData:a(4674)})]}),n.createElement(f,{title:"company_product_3",introduction:"company_product_4",images:[n.createElement(i.S,{alt:"picture 4",src:"../../images/introduction4.png",__imageData:a(8088)}),n.createElement(i.S,{alt:"picture 5",src:"../../images/introduction5.png",__imageData:a(5805)}),n.createElement(i.S,{alt:"picture 6",src:"../../images/introduction6.png",__imageData:a(8132)})]}),n.createElement(f,{title:"company_product_5",introduction:"company_product_6",images:[n.createElement(i.S,{alt:"picture 7",src:"../../images/introduction7.png",__imageData:a(1009)}),n.createElement(i.S,{alt:"picture 8",src:"../../images/introduction8.png",__imageData:a(7570)}),n.createElement(i.S,{alt:"picture 9",src:"../../images/introduction9.png",__imageData:a(8297)})]}),n.createElement("div",{style:{width:"100%"}},n.createElement("p",null,n.createElement(o.Z,{id:"company_product_7"}))))}},3062:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#188828","images":{"fallback":{"src":"/slmhc/static/005d2b830752792d8c3afde16a22ce65/f34b3/introduction2.png","srcSet":"/slmhc/static/005d2b830752792d8c3afde16a22ce65/eda09/introduction2.png 96w,\\n/slmhc/static/005d2b830752792d8c3afde16a22ce65/24533/introduction2.png 192w,\\n/slmhc/static/005d2b830752792d8c3afde16a22ce65/f34b3/introduction2.png 383w","sizes":"(min-width: 383px) 383px, 100vw"},"sources":[{"srcSet":"/slmhc/static/005d2b830752792d8c3afde16a22ce65/0f098/introduction2.webp 96w,\\n/slmhc/static/005d2b830752792d8c3afde16a22ce65/c23ad/introduction2.webp 192w,\\n/slmhc/static/005d2b830752792d8c3afde16a22ce65/c4407/introduction2.webp 383w","type":"image/webp","sizes":"(min-width: 383px) 383px, 100vw"}]},"width":383,"height":510}')},8088:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a8a8a8","images":{"fallback":{"src":"/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/9315e/introduction4.png","srcSet":"/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/bb353/introduction4.png 110w,\\n/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/90fce/introduction4.png 220w,\\n/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/9315e/introduction4.png 440w","sizes":"(min-width: 440px) 440px, 100vw"},"sources":[{"srcSet":"/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/017c5/introduction4.webp 110w,\\n/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/8a924/introduction4.webp 220w,\\n/slmhc/static/dc85e256379e0170c7ed49ee52d6bbd0/4cc2f/introduction4.webp 440w","type":"image/webp","sizes":"(min-width: 440px) 440px, 100vw"}]},"width":440,"height":392.00000000000006}')},8297:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b89868","images":{"fallback":{"src":"/slmhc/static/29c3fb5d9f81f62471774f7c904af881/d1876/introduction9.png","srcSet":"/slmhc/static/29c3fb5d9f81f62471774f7c904af881/41555/introduction9.png 108w,\\n/slmhc/static/29c3fb5d9f81f62471774f7c904af881/867f9/introduction9.png 217w,\\n/slmhc/static/29c3fb5d9f81f62471774f7c904af881/d1876/introduction9.png 433w","sizes":"(min-width: 433px) 433px, 100vw"},"sources":[{"srcSet":"/slmhc/static/29c3fb5d9f81f62471774f7c904af881/67fdd/introduction9.webp 108w,\\n/slmhc/static/29c3fb5d9f81f62471774f7c904af881/96d57/introduction9.webp 217w,\\n/slmhc/static/29c3fb5d9f81f62471774f7c904af881/e3933/introduction9.webp 433w","type":"image/webp","sizes":"(min-width: 433px) 433px, 100vw"}]},"width":433,"height":371}')},9906:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#081808","images":{"fallback":{"src":"/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/37cd1/introduction1.png","srcSet":"/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/69961/introduction1.png 95w,\\n/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/ad85e/introduction1.png 191w,\\n/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/37cd1/introduction1.png 381w","sizes":"(min-width: 381px) 381px, 100vw"},"sources":[{"srcSet":"/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/3ca06/introduction1.webp 95w,\\n/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/49a22/introduction1.webp 191w,\\n/slmhc/static/7b4de6e2fa3e27c71fab293e2e1eaea1/ed816/introduction1.webp 381w","type":"image/webp","sizes":"(min-width: 381px) 381px, 100vw"}]},"width":381,"height":508}')},1009:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#987848","images":{"fallback":{"src":"/slmhc/static/71b6985efaa24dc77dcfd701c8548431/f982b/introduction7.png","srcSet":"/slmhc/static/71b6985efaa24dc77dcfd701c8548431/8abb2/introduction7.png 111w,\\n/slmhc/static/71b6985efaa24dc77dcfd701c8548431/63f4b/introduction7.png 223w,\\n/slmhc/static/71b6985efaa24dc77dcfd701c8548431/f982b/introduction7.png 445w","sizes":"(min-width: 445px) 445px, 100vw"},"sources":[{"srcSet":"/slmhc/static/71b6985efaa24dc77dcfd701c8548431/d67a5/introduction7.webp 111w,\\n/slmhc/static/71b6985efaa24dc77dcfd701c8548431/22793/introduction7.webp 223w,\\n/slmhc/static/71b6985efaa24dc77dcfd701c8548431/87733/introduction7.webp 445w","type":"image/webp","sizes":"(min-width: 445px) 445px, 100vw"}]},"width":445,"height":371}')},5805:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a89878","images":{"fallback":{"src":"/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/c4dec/introduction5.png","srcSet":"/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/c4e4b/introduction5.png 113w,\\n/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/ccf5c/introduction5.png 225w,\\n/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/c4dec/introduction5.png 450w","sizes":"(min-width: 450px) 450px, 100vw"},"sources":[{"srcSet":"/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/2b73a/introduction5.webp 113w,\\n/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/9825d/introduction5.webp 225w,\\n/slmhc/static/4c53aeb719e92d31618df3a0d2c4b042/b4271/introduction5.webp 450w","type":"image/webp","sizes":"(min-width: 450px) 450px, 100vw"}]},"width":450,"height":391.99999999999994}')},7570:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a89868","images":{"fallback":{"src":"/slmhc/static/011d0480697e55073f0688280657e84c/4e5f2/introduction8.png","srcSet":"/slmhc/static/011d0480697e55073f0688280657e84c/64f2a/introduction8.png 107w,\\n/slmhc/static/011d0480697e55073f0688280657e84c/f67e7/introduction8.png 214w,\\n/slmhc/static/011d0480697e55073f0688280657e84c/4e5f2/introduction8.png 427w","sizes":"(min-width: 427px) 427px, 100vw"},"sources":[{"srcSet":"/slmhc/static/011d0480697e55073f0688280657e84c/8ac98/introduction8.webp 107w,\\n/slmhc/static/011d0480697e55073f0688280657e84c/0755e/introduction8.webp 214w,\\n/slmhc/static/011d0480697e55073f0688280657e84c/c404b/introduction8.webp 427w","type":"image/webp","sizes":"(min-width: 427px) 427px, 100vw"}]},"width":427,"height":371}')},4674:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/da397/introduction3.png","srcSet":"/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/82585/introduction3.png 94w,\\n/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/8c15f/introduction3.png 189w,\\n/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/da397/introduction3.png 377w","sizes":"(min-width: 377px) 377px, 100vw"},"sources":[{"srcSet":"/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/da5a9/introduction3.webp 94w,\\n/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/f6b80/introduction3.webp 189w,\\n/slmhc/static/7fba614bc1e548415518c5b7b091a1ec/0c3b4/introduction3.webp 377w","type":"image/webp","sizes":"(min-width: 377px) 377px, 100vw"}]},"width":377,"height":503}')},8132:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/slmhc/static/05624160933f089a95c3d717baadc676/ac14a/introduction6.png","srcSet":"/slmhc/static/05624160933f089a95c3d717baadc676/78334/introduction6.png 103w,\\n/slmhc/static/05624160933f089a95c3d717baadc676/03c23/introduction6.png 207w,\\n/slmhc/static/05624160933f089a95c3d717baadc676/ac14a/introduction6.png 413w","sizes":"(min-width: 413px) 413px, 100vw"},"sources":[{"srcSet":"/slmhc/static/05624160933f089a95c3d717baadc676/4251f/introduction6.webp 103w,\\n/slmhc/static/05624160933f089a95c3d717baadc676/e8873/introduction6.webp 207w,\\n/slmhc/static/05624160933f089a95c3d717baadc676/63180/introduction6.webp 413w","type":"image/webp","sizes":"(min-width: 413px) 413px, 100vw"}]},"width":413,"height":389}')}}]);
//# sourceMappingURL=component---src-pages-company-introduction-js-62e307a6347fb6727a53.js.map