(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9160],{62420:function(e,t,n){Promise.resolve().then(n.bind(n,80917)),Promise.resolve().then(n.bind(n,16521))},51318:function(e,t,n){"use strict";n.d(t,{WF:function(){return a},vs:function(){return s},xo:function(){return o}});var r=n(94508),i=n(99376);let a="64c80972260cd90e91e9ac28",o=async e=>{let{filter:t,limit:n=200}=e;try{let e="".concat(r.T5,"/api2/library/products?").concat(new URLSearchParams({...t,limit:n.toString()})),a=await fetch(e,{cache:"no-store"}),o=await a.json();return(!o||o.length<=0)&&(0,i.notFound)(),o||[]}catch(e){console.error("Error:",e),(0,i.notFound)()}};async function s(e){try{let t=await fetch("".concat(r.T5,"/api2/library/products/").concat(e,"/assetPacks"));return(await t.json()).docs}catch(e){return console.error("Error:",e),[]}}},80917:function(e,t,n){"use strict";n.d(t,{NotFound3D:function(){return d}});var r=n(57437),i=n(30166),a=n(2265),o=n(33145),s=n(98311),l=n(51318),c=n(47987);let u=(0,i.default)(()=>Promise.all([n.e(6768),n.e(1222),n.e(970),n.e(2032)]).then(n.bind(n,90097)),{loadableGenerated:{webpack:()=>[90097]},ssr:!1});function d(){let[e,t]=a.useState({x:0,y:0}),[n,i]=a.useState(c.F[0]),[d,h]=a.useState(!1);return a.useEffect(()=>{h(window.matchMedia("(prefers-reduced-motion: reduce)").matches)},[]),a.useEffect(()=>{i(c.F[Math.floor(Math.random()*c.F.length)])},[]),a.useEffect(()=>{if(d)return;let e=e=>{t({x:Math.max(-1,Math.min(1,(e.clientX/window.innerWidth-.5)*2)),y:Math.max(-1,Math.min(1,(e.clientY/window.innerHeight-.5)*2))})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[d]),(0,r.jsxs)("div",{className:"group relative m-4 flex sm:ml-0 md:my-8 md:mr-8",children:[(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden rounded-xl opacity-40",children:(0,r.jsx)("div",{style:{position:"absolute",inset:"-40px",transform:"translate(".concat(-40*e.x,"px, ").concat(-40*e.y,"px)"),transition:"transform 1s cubic-bezier(0.33, 1, 0.68, 1)"},children:(0,r.jsx)(o.default,{src:"/images/404/sky.webp",alt:"Background",fill:!0,className:"bg-[#BBD7DF] object-cover",priority:!0})})}),(0,r.jsx)("div",{className:"z-1 pointer-events-none absolute inset-0 flex flex-col p-4 opacity-50 md:p-8",children:(0,r.jsx)("p",{className:"mt-auto text-right italic",children:n.name})}),(0,r.jsxs)("svg",{width:"0",height:"0",children:[(0,r.jsxs)("filter",{id:"cloud-filter-1",children:[(0,r.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:".015",numOctaves:"8"}),(0,r.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"180"})]}),(0,r.jsxs)("filter",{id:"cloud-filter-2",children:[(0,r.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:".02",numOctaves:"6"}),(0,r.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"140"})]})]}),(0,r.jsx)("div",{className:"pointer-events-none absolute z-20 group-hover:opacity-0",style:{width:"1px",height:"1px",borderRadius:"50%",filter:"url(#cloud-filter-1)",top:"25%",right:"25%",boxShadow:"0 0 40vmin 20vmin rgba(255,255,255)",transform:"translate(".concat(30*e.x,"px, ").concat(30*e.y,"px)"),transition:"transform 1s cubic-bezier(0.33, 1, 0.68, 1), opacity 2s ease-in-out"}}),(0,r.jsx)("div",{className:"pointer-events-none absolute z-20 opacity-60 group-hover:opacity-0",style:{width:"1px",height:"1px",borderRadius:"50%",filter:"url(#cloud-filter-2)",bottom:"25%",left:"25%",boxShadow:"0 0 40vmin 20vmin rgba(255,255,255)",transform:"translate(".concat(-40*e.x,"px, ").concat(-40*e.y,"px)"),transition:"transform 1s cubic-bezier(0.33, 1, 0.68, 1), opacity 2s ease-in-out"}}),(0,r.jsx)(s.default,{children:(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 z-30"}),children:(0,r.jsx)("div",{className:"absolute -inset-4 z-10 duration-1000 animate-in fade-in md:-inset-8",children:(0,r.jsx)(u,{apiKey:l.WF,sku:n.sku,defaultUI:!1,initialState:"3D",initialStateHack:!0,alwaysTransparentBackground:!0,initialAnimation:d?void 0:f})})})})]})}let f=[{time:0,yaw:-60,pitch:90,fov:18,interpolation:"ease-in-out"},{time:2e3,yaw:88,pitch:0,fov:18,interpolation:"linear"},{time:2500,yaw:92,pitch:0,fov:18,interpolation:"ease-in-out"},{time:3500,yaw:92,pitch:90,fov:18,interpolation:"linear"},{time:4500,yaw:96,pitch:90,fov:18,interpolation:"ease-in-out"},{time:5500,yaw:220,pitch:75,fov:18,interpolation:"linear"},{time:6500,yaw:224,pitch:75,fov:18,interpolation:"ease-in-out"},{time:7500,yaw:270,pitch:180,fov:18,interpolation:"linear"},{time:8500,yaw:264,pitch:180,fov:18,interpolation:"ease-in-out"},{time:1e4,yaw:296,pitch:90,fov:18,interpolation:"linear"},{time:11e3,yaw:300,pitch:90,fov:18,interpolation:"hold"}]},16521:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(57437),i=n(33145),a=n(27648);let o=(0,n(39763).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var s=n(30141),l=n(47987),c=n(99376);function u(){let e=(e=>{switch(!0){case e.includes("/news"):return"news";case e.includes("/product"):return"product";case e.includes("/collection"):return"collection";case e.includes("/library"):return"library";default:return"default"}})((0,c.usePathname)()),t=l.g[e];return(0,r.jsxs)("div",{className:"mx-8 mt-8 flex flex-col sm:my-8 sm:ml-8 md:my-16 md:ml-16",children:[(0,r.jsx)(a.default,{href:"/",className:"w-fit",children:(0,r.jsx)(i.default,{src:s.default,alt:"ShopAR",className:"h-12 w-auto -translate-y-2",priority:!0})}),(0,r.jsxs)("div",{className:"my-auto flex flex-col gap-8 leading-normal",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold md:text-5xl",children:t.heading}),(0,r.jsx)("h2",{children:t.subheading})]}),t.sublinks&&(0,r.jsx)("div",{className:"flex flex-wrap gap-4",children:t.sublinks.map((e,t)=>(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{href:e.href,className:"flex w-fit items-center gap-2 transition hover:opacity-75",children:(0,r.jsx)("p",{children:e.text})}),(0,r.jsx)("p",{className:"text-black/40 last:hidden",children:"|"})]},t))}),(0,r.jsxs)(a.default,{href:t.backLink.href,className:"flex w-fit items-center gap-2 transition hover:opacity-75",children:[(0,r.jsx)(o,{className:"h-4 w-4 stroke-2"}),(0,r.jsx)("p",{children:t.backLink.text})]})]}),(0,r.jsxs)("div",{className:"mt-auto hidden flex-wrap gap-8 sm:flex",children:[(0,r.jsx)(a.default,{href:"/news",className:"transition hover:opacity-75",children:(0,r.jsx)("p",{children:"News"})}),(0,r.jsx)(a.default,{href:"/contact",className:"transition hover:opacity-75",children:(0,r.jsx)("p",{children:"Contact"})})]})]})}},47987:function(e,t,n){"use strict";n.d(t,{F:function(){return i},g:function(){return r}});let r={news:{heading:"Lost Post.",subheading:"There are plenty more posts to explore.",backLink:{text:"All Posts",href:"/news"}},collection:{heading:"Lost Collection.",subheading:"Check out our most popular collections.",sublinks:[{text:"Shoes",href:"/collection/shoes"},{text:"Glasses",href:"/collection/glasses"},{text:"Watches",href:"/collection/watches"}],backLink:{text:"Return Home",href:"/"}},product:{heading:"Lost Product.",subheading:"Check out our most popular 3D models.",sublinks:[{text:"All Shoes",href:"/library/shoes"},{text:"Nike",href:"/library/shoes/nike"},{text:"Jimmy Choo",href:"/library/shoes/jimmy-choo"}],backLink:{text:"Return Home",href:"/"}},library:{heading:"Lost Library.",subheading:"Check out our most popular 3D models.",sublinks:[{text:"All Shoes",href:"/library/shoes"},{text:"Nike",href:"/library/shoes/nike"},{text:"Jimmy Choo",href:"/library/shoes/jimmy-choo"}],backLink:{text:"Return Home",href:"/"}},default:{heading:"404. Lost Sole.",subheading:"There are plenty more 3D models to explore.",backLink:{text:"Return Home",href:"/"}}},i=[{sku:"DZ5485-612",name:"Air Jordan 1 Chicago"},{sku:"Jordan-1-high-FD2596-107",name:"Air Jordan 1 High OG"},{sku:"FD8636-011",name:"Air Jordan 1 High OG"}]},98311:function(e,t,n){"use strict";var r=n(57437),i=n(2265);t.default=e=>{let{children:t,rootMargin:n="0px"}=e,[a,o]=i.useState(!1),s=i.useRef(null);return i.useEffect(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(o(!0),e.disconnect())})},{threshold:.1,rootMargin:n});return s.current&&e.observe(s.current),()=>{e.disconnect()}},[s.current,n]),(0,r.jsx)("div",{ref:s,children:a?t:null})}},94508:function(e,t,n){"use strict";n.d(t,{$h:function(){return l},T5:function(){return o},ak:function(){return s},cn:function(){return a}});var r=n(61994),i=n(71407);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m)((0,r.W)(t))}let o="https://dashboard.shopar.ai",s=e=>e.toLowerCase().trim().replace(/\s/g,"-"),l=e=>e.replace(/-/g," ").replace(/\w\S*/g,e=>e.replace(/^\w/,e=>e.toUpperCase()))},39763:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2265),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(e,t)=>{let n=(0,r.forwardRef)((n,o)=>{let{color:s="currentColor",size:l=24,strokeWidth:c=2,absoluteStrokeWidth:u,children:d,...f}=n;return(0,r.createElement)("svg",{ref:o,...i,width:l,height:l,stroke:s,strokeWidth:u?24*Number(c)/Number(l):c,className:"lucide lucide-".concat(a(e)),...f},[...t.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...(Array.isArray(d)?d:[d])||[]])});return n.displayName="".concat(e),n}},30166:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(55775),i=n.n(r)},33145:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(48461),i=n.n(r)},27648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(72972),i=n.n(r)},99376:function(e,t,n){"use strict";var r=n(35475);n.o(r,"notFound")&&n.d(t,{notFound:function(){return r.notFound}}),n.o(r,"redirect")&&n.d(t,{redirect:function(){return r.redirect}}),n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},55775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(47043);n(57437),n(2265);let i=r._(n(15602));function a(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let a={...r,...t};return(0,i.default)({...a,modules:null==(n=a.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},48461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return s}});let r=n(47043),i=n(55346),a=n(65878),o=r._(n(5084));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=a.Image},81523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let r=n(18993);function i(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},15602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let r=n(57437),i=n(2265),a=n(81523),o=n(70049);function s(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},n=(0,i.lazy)(()=>t.loader().then(s)),c=t.loading;function u(e){let s=c?(0,r.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(i.Suspense,{fallback:s,children:l})}return u.displayName="LoadableComponent",u}},70049:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let r=n(57437),i=n(20544);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,i.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,r.jsx)(r.Fragment,{children:a.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},30141:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/shopar-logo-simple.9fee8f5f.svg",height:406,width:995,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[2972,3579,5878,2971,2117,1744],function(){return e(e.s=62420)}),_N_E=e.O()}]);