(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4197,2032],{51318:function(e,t,r){"use strict";r.d(t,{WF:function(){return a},vs:function(){return i},xo:function(){return l}});var n=r(94508),s=r(99376);let a="64c80972260cd90e91e9ac28",l=async e=>{let{filter:t,limit:r=200}=e;try{let e="".concat(n.T5,"/api2/library/products?").concat(new URLSearchParams({...t,limit:r.toString()})),a=await fetch(e,{cache:"no-store"}),l=await a.json();return(!l||l.length<=0)&&(0,s.notFound)(),l||[]}catch(e){console.error("Error:",e),(0,s.notFound)()}};async function i(e){try{let t=await fetch("".concat(n.T5,"/api2/library/products/").concat(e,"/assetPacks"));return(await t.json()).docs}catch(e){return console.error("Error:",e),[]}}},72354:function(e,t,r){"use strict";r.d(t,{AuthProvider:function(){return i},a:function(){return o}});var n=r(57437),s=r(2265),a=r(14438);let l=(0,s.createContext)(void 0);function i(e){let{children:t}=e,[r,i]=(0,s.useState)(null),[o,c]=(0,s.useState)(!0);(0,s.useEffect)(()=>{u()},[]);let u=async()=>{try{let e=await fetch("".concat("https://dashboard.shopar.ai","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let t=await e.json();i(t.user)}}catch(e){console.error("Auth check failed:",e)}finally{c(!1)}},d=async()=>{let e=await fetch("".concat("https://dashboard.shopar.ai","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}}),t=await e.json();(0,a.Am)(t.message),i(null)},f=async(e,t)=>{let r=await fetch("".concat("https://dashboard.shopar.ai","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:e,password:t})}),n=await r.json();return(null==n?void 0:n.user)?(a.Am.success("Welcome back! \uD83D\uDE0E"),i(n.user),n.user):(a.Am.error("Could not sign in",{description:"Please check your email and password and try again."}),null)};return(0,n.jsx)(l.Provider,{value:{user:r,setUser:i,isLoading:o,signOut:d,login:f},children:t})}function o(){let e=(0,s.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},23746:function(e,t,r){"use strict";var n=r(57437),s=r(2265),a=r(26110),l=r(53696),i=r(27648),o=r(95186),c=r(14438),u=r(72354),d=r(94508),f=r(99376);t.default=()=>{let[e,t]=(0,s.useState)(!1),[r,m]=(0,s.useState)(!1),{user:h,login:p}=(0,u.a)(),v=(0,f.useRouter)(),x=async e=>{e.preventDefault();let r=new FormData(e.target),n=r.get("email"),s=r.get("password");try{m(!0),await p(n,s)&&(t(!1),v.push("/dashboard"))}catch(e){c.Am.error("Could not sign in",{description:"Please check your email and password and try again."}),console.error("Login error:",e)}finally{m(!1)}};return(0,n.jsxs)(n.Fragment,{children:[!h&&(0,n.jsx)(l.z,{className:"whitespace-nowrap",onClick:()=>t(!0),children:"Sign in"}),h&&(0,n.jsx)(i.default,{className:(0,d.cn)((0,l.d)({variant:"secondary"})),href:"/dashboard",children:"Dashboard"}),(0,n.jsx)(a.Vq,{open:e,onOpenChange:t,children:(0,n.jsxs)(a.cZ,{className:"z-[1000000] flex min-h-[40vh] min-w-[50vw] overflow-hidden p-0 shadow-2xl",children:[(0,n.jsxs)("div",{className:"flex flex-1 flex-col justify-between",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center p-6",children:[(0,n.jsx)("h2",{className:"mb-4 text-xl font-bold",children:"Sign in"}),(0,n.jsx)("p",{className:"mb-6 text-center text-sm leading-tight text-muted-foreground",children:"Create instant product photos and add 3D and AR tryon onto your website."}),(0,n.jsxs)("form",{className:"flex w-full flex-col gap-2",onSubmit:x,children:[(0,n.jsx)(o.I,{placeholder:"Email",className:"h-10",name:"email"}),(0,n.jsx)(o.I,{placeholder:"Password",className:"h-10",name:"password",type:"password"}),(0,n.jsx)(l.z,{className:"w-full",loading:r,disabled:r,children:"Sign in"})]})]})}),(0,n.jsx)("div",{className:"p-6",children:(0,n.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Don't have an account?"," ",(0,n.jsx)(i.default,{href:"/contact",className:"text-blue-500",children:"Contact us to get started"})]})})]}),(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsx)("img",{className:"h-full w-full object-cover",src:"/images/f50_stadium.webp",alt:"Adidas F50s in stadium"})})]})})]})}},98735:function(e,t,r){"use strict";r.r(t);var n=r(57437),s=r(2265),a=r(72079),l=r(94508),i=r(48874),o=r(26902),c=r(53696),u=r(90097),d=r(94858),f=r(98311),m=r(51318),h=r(33145);t.default=e=>{var t;let{className:r,...a}=e,[i,o]=s.useState(0),c=null===(t=e.productItems)||void 0===t?void 0:t[i],u=s.useRef(null);return(0,s.useEffect)(()=>{u.current&&(null==c?void 0:c.videoUrl)&&(u.current.load(),u.current.play())},[null==c?void 0:c.videoUrl]),(0,n.jsxs)("div",{className:(0,l.cn)("absolute inset-0 flex flex-col items-center",r),style:{background:"linear-gradient(to top, ".concat((null==c?void 0:c.color1)||"#ffffff",", ").concat((null==c?void 0:c.color2)||"#ffffff",")")},children:[c.imgUrl&&(0,n.jsx)("img",{src:c.imgUrl,alt:"",className:"absolute inset-0 z-0 h-full w-full object-cover brightness-75"}),(null==c?void 0:c.videoUrl)&&(0,n.jsx)("video",{ref:u,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,className:"absolute inset-0 z-0 h-full w-full object-cover brightness-75",children:(0,n.jsx)("source",{src:null==c?void 0:c.videoUrl,type:"video/mp4"})}),e.title&&(0,n.jsx)("h1",{className:"w-full text-center text-[3rem] font-black uppercase leading-[3rem] opacity-90 md:text-[5rem] md:leading-[5rem]",style:{zIndex:0,color:e.inverted||(null==c?void 0:c.inverted)?"black":"white"},children:e.title}),e.productItems.length&&(0,n.jsx)(f.default,{rootMargin:"300px",children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)("div",{className:"pointer-events-none absolute inset-0 z-20"}),children:(0,n.jsx)("div",{className:"absolute inset-0 duration-1000 animate-in fade-in",children:(0,n.jsx)(p,{...a,activeIndex:i,setActiveIndex:o,currentProduct:c,animation:e.animation})})})})]})};let p=(0,s.memo)(e=>{let{productItems:t,activeIndex:r,setActiveIndex:a,currentProduct:f,animation:p,alwaysTransparentBackground:v=!0}=e,x=s.useMemo(()=>(0,i.detectOS)(),[]);s.useMemo(()=>"Android"===x||"tablet"===x||"iOS"===x,[x]);let g=s.useMemo(()=>t.map((e,t)=>(0,n.jsx)(o.q,{className:"flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg",children:(0,n.jsx)(h.default,{src:e.thumbnailUrl,alt:e.name||"product",className:"h-[100%] w-[100%] object-contain",width:100,height:100})},t)),[t]);return(0,n.jsxs)("div",{className:"absolute inset-0",children:[(0,n.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 z-50 flex w-full flex-col items-center",children:[(null==f?void 0:f.name)&&(0,n.jsxs)("div",{className:"mx-4 mb-2 flex max-w-[90%] items-center gap-4 rounded-full bg-white/50 p-3 pl-5 shadow-xl backdrop-blur-sm ".concat((null==f?void 0:f.tryonUrl)?"w-[400px]":"min-h-[64px] w-fit px-5"),children:[(0,n.jsx)("div",{className:"flex-1 font-semibold leading-none ".concat((null==f?void 0:f.tryonUrl)?"text-left":"text-center"),children:null==f?void 0:f.name}),(null==f?void 0:f.tryonUrl)&&(0,n.jsxs)("a",{href:f.tryonUrl,target:"_blank",className:(0,l.cn)((0,c.d)({variant:"default"}),"flex items-center gap-2 whitespace-nowrap bg-gradient-to-tr from-[#5FB9EC] to-[#773CD8] text-white"),children:[(0,n.jsx)(d.Z,{size:"1.2rem",color:"#FFF",category:f.category||"Shoes"}),"Try on"]})]}),t.length>1&&(0,n.jsx)(o.Z,{activeIndex:r,onChange:e=>{a(e)},className:"mb-2 min-h-[60px] lg:mb-8",children:g})]}),(0,n.jsx)(u.default,{apiKey:m.WF,sku:null==f?void 0:f.sku,defaultUI:!1,initialState:"3D",initialStateHack:!0,initialAnimation:(null==f?void 0:f.animation)||p,alwaysTransparentBackground:v})]})});p.displayName="Model",a.CtF.enabled=!1},98311:function(e,t,r){"use strict";var n=r(57437),s=r(2265);t.default=e=>{let{children:t,rootMargin:r="0px"}=e,[a,l]=s.useState(!1),i=s.useRef(null);return s.useEffect(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(l(!0),e.disconnect())})},{threshold:.1,rootMargin:r});return i.current&&e.observe(i.current),()=>{e.disconnect()}},[i.current,r]),(0,n.jsx)("div",{ref:i,children:a?t:null})}},90097:function(e,t,r){"use strict";r.r(t);var n=r(57437),s=r(94508),a=r(2265),l=r(94362);r(91988);let i=(0,a.memo)(e=>{let{className:t,sku:r,apiKey:i,children:o,defaultUI:c=!0,initialState:u,initialStateHack:d,initialAnimation:f,alwaysTransparentBackground:m,interactive:h=!0,zoomEnabled:p=!1}=e,v=(0,a.useRef)(null),x=(0,a.useRef)(null);return(0,a.useEffect)(()=>(v.current&&r&&i&&(async()=>{try{let t=await l.plugin.setup({apiKey:i,sku:r,targetElement:v.current,defaultUI:c,initialState:d?void 0:u,initialAnimation:f,zoomEnabled:p,alwaysTransparentBackground:m,interactive:h});if("3D"===u&&d){var e;await (null==t?void 0:null===(e=t.launch3D)||void 0===e?void 0:e.call(t))}x.current={close:t.close}}catch(e){console.error(e)}})(),()=>{let e=async()=>{var e,t;await (null===(t=x.current)||void 0===t?void 0:null===(e=t.close)||void 0===e?void 0:e.call(t))};try{e()}catch(e){console.error(e)}}),[v.current,r,i,c,f]),(0,n.jsx)("div",{id:"shopAR",ref:v,className:(0,s.cn)("relative inset-0 flex h-full w-full justify-center",t),children:o})});i.displayName="ShopARPlugin",t.default=i},26902:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(57437),s=r(94508),a=r(15863),l=r(2265);let i=e=>{let{children:t,className:r}=e;return(0,n.jsx)("div",{className:"".concat(r," cursor-pointer overflow-hidden"),children:t})};t.Z=e=>{let{activeIndex:t,loading:r,className:i,children:o=[],onChange:c,onActiveClick:u,onActiveHoldStart:d,onActiveHoldEnd:f}=e,m=(0,l.useRef)(null),h=(0,l.useRef)(null),p=(0,l.useRef)(null),v=(0,l.useRef)(0),x=(0,l.useRef)(0),g=(0,l.useRef)(0),b=(0,l.useRef)(0),y=(0,l.useRef)(!1),w=(0,l.useRef)(!1),j=(0,l.useRef)(!1),N=(0,l.useRef)(null),E=(0,l.useRef)(!1),[k,T]=(0,l.useState)(!1),R=(0,l.useRef)(!1),L=e=>{x.current=e.clientX,g.current=e.clientY,"touchstart"===e.type?(x.current=e.touches[0].clientX,g.current=e.touches[0].clientY):e.preventDefault(),y.current=!0,h.current.style.transition="none",F()},C=e=>{if(!y.current||E.current)return;w.current=!0,U();let t=e.clientX,r=e.clientY;"touchmove"===e.type&&(t=e.touches[0].clientX,r=e.touches[0].clientY);let n=t-x.current,s=r-g.current;"touchmove"===e.type&&Math.abs(s)>Math.abs(n)||(e.preventDefault(),Math.abs(n)>2&&(j.current=!0),x.current=t,b.current+=n,h.current.style.transform="translateX(".concat(b.current,"px)"))},S=()=>{j.current&&(clearTimeout(N.current),h.current.style.transition="all 0.5s",D(),I()),P(),w.current=!1,y.current=!1,j.current=!1},A=()=>{j.current&&(clearTimeout(N.current),h.current.style.transition="all 0.5s",D(),I()),P(),w.current=!1,j.current=!1},z=e=>{w.current||(h.current.style.transition="all 0.5s",D(e),I()),w.current=!1,y.current=!1,j.current=!1,P()};(0,l.useEffect)(()=>{let e=v.current===t;v.current=t||0,e||I()},[t]);let D=e=>{let t=h.current,r=m.current;if(void 0!==e)(e&&v.current!==e||!e)&&(null==c||c(e)),v.current=e;else{let e=r.getBoundingClientRect().width/2,n=Array.from(t.children),s=n.reduce((t,r)=>{let n=r.getBoundingClientRect(),s=n.left+n.width/2;return Math.abs(s-e)<Math.abs(t-e)?s:t},1/0),a=n.findIndex(e=>{let t=e.getBoundingClientRect();return t.left+t.width/2===s});a!==v.current&&(null==c||c(a)),v.current=a}},I=()=>{var e,t;(!v.current||v.current<0)&&(v.current=0);let r=h.current,n=m.current,s=null===(t=r.children)||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.getBoundingClientRect().width,a=n.getBoundingClientRect().width/2,l=r.children[v.current].getBoundingClientRect().left;b.current+=a-l-s/2,r.style.transform="translateX(".concat(b.current,"px)")},F=()=>{clearTimeout(N.current),N.current=setTimeout(()=>{w.current&&(T(!0),null==d||d(v.current),E.current=!0)},500)},P=()=>{E.current&&(clearTimeout(N.current),T(!1),E.current=!1,f&&(null==f||f()))},U=()=>{clearTimeout(N.current),T(!1),E.current=!1};return(0,l.useEffect)(()=>{var e,t;m.current.addEventListener("mousedown",L,{passive:!1}),m.current.addEventListener("mousemove",C,{passive:!1}),m.current.addEventListener("mouseup",S,{passive:!1}),m.current.addEventListener("mouseleave",A,{passive:!1}),m.current.addEventListener("touchstart",L,{passive:!1}),m.current.addEventListener("touchmove",C,{passive:!1}),m.current.addEventListener("touchend",S,{passive:!1}),m.current.addEventListener("touchcancel",S,{passive:!1});let r=e=>{var t;let r=e.target;for(e.preventDefault();r&&r.parentNode!==h.current;)r=r.parentNode;if(r&&(null===(t=h.current)||void 0===t?void 0:t.contains(r))){let e=Array.from(h.current.children).indexOf(r);-1===e||j.current||z(e)}};return null===(e=h.current)||void 0===e||e.addEventListener("mouseup",r),null===(t=h.current)||void 0===t||t.addEventListener("touchend",r),()=>{var e,t,n,s,a,l,i,o,c,u;null===(e=m.current)||void 0===e||e.removeEventListener("mousedown",L),null===(t=m.current)||void 0===t||t.removeEventListener("mousemove",C),null===(n=m.current)||void 0===n||n.removeEventListener("mouseup",S),null===(s=m.current)||void 0===s||s.removeEventListener("mouseleave",S),null===(a=m.current)||void 0===a||a.removeEventListener("touchstart",L),null===(l=m.current)||void 0===l||l.removeEventListener("touchmove",C),null===(i=m.current)||void 0===i||i.removeEventListener("touchend",S),null===(o=m.current)||void 0===o||o.removeEventListener("touchcancel",S),null===(c=h.current)||void 0===c||c.removeEventListener("mouseup",r),null===(u=h.current)||void 0===u||u.removeEventListener("touchend",r)}},[o.length]),(0,l.useEffect)(()=>{m.current&&o.length&&(R.current||(I(),R.current=!0))},[o,m.current]),(0,l.useEffect)(()=>{let e=()=>{m.current&&o.length&&(h.current.style.transition="none",I(),requestAnimationFrame(()=>{h.current&&(h.current.style.transition="all 0.5s")}))};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[o]),(0,n.jsxs)("div",{ref:m,className:(0,s.cn)("relative mb-4 w-full overflow-x-hidden py-3",i),children:[(0,n.jsx)("div",{ref:h,className:(0,s.cn)("flex space-x-4","min-h-[60px]"),children:o.map((e,t)=>(0,n.jsx)("div",{className:"inline-block",children:e},t))}),(0,n.jsx)("div",{ref:p,className:"absolute left-[50%] top-[50%] z-50 flex h-20 w-20 translate-x-[-50%] translate-y-[-50%] transform items-center justify-center rounded-full border-[6px] border-white drop-shadow",children:r&&(0,n.jsx)(a.Z,{className:"h-16 w-16 animate-spin"})})]})}},94858:function(e,t,r){"use strict";var n=r(57437),s=r(46308),a=r(80222),l=r(45564);t.Z=e=>{let{category:t,size:r="32px",color:i}=e;switch(t){case"Glasses":return(0,n.jsx)(l.Z,{size:r,color:i});case"Watches":return(0,n.jsx)(a.Z,{size:r,color:i});default:return(0,n.jsx)(s.Z,{size:r,color:i})}}},95186:function(e,t,r){"use strict";r.d(t,{I:function(){return l}});var n=r(57437),s=r(2265),a=r(94508);let l=s.forwardRef((e,t)=>{let{className:r,type:l,startIcon:i,endIcon:o,inputClassName:c,wrapperProps:u,...d}=e,[f,m]=s.useState(!1);return(0,n.jsxs)("div",{className:(0,a.cn)("flex h-8 overflow-hidden rounded-md border border-input bg-background ring-offset-background hover:border-primary/25 hover:bg-primary-foreground",f&&"ring-2 ring-ring",r),...u,children:[i&&(0,n.jsx)("div",{className:"flex items-center justify-center",children:i}),(0,n.jsx)("input",{type:l,className:(0,a.cn)("flex-1 bg-inherit py-1 pl-1 pr-3 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:bg-inherit focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",c),ref:t,onFocus:()=>m(!0),onBlur:()=>m(!1),...d}),o&&(0,n.jsx)("div",{className:"flex items-center justify-center",children:o})]})});l.displayName="Input"},69304:function(e,t,r){"use strict";r.d(t,{Tu:function(){return p},aM:function(){return u},bC:function(){return v},ue:function(){return h},yo:function(){return c}});var n=r(57437),s=r(2265),a=r(49027),l=r(90535),i=r(32489),o=r(94508);let c=a.fC,u=a.xz;a.x8;let d=e=>{let{...t}=e;return(0,n.jsx)(a.h_,{...t})};d.displayName=a.h_.displayName;let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s,ref:t})});f.displayName=a.aV.displayName;let m=(0,l.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),h=s.forwardRef((e,t)=>{let{side:r="right",className:s,children:l,...c}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(f,{}),(0,n.jsxs)(a.VY,{ref:t,className:(0,o.cn)(m({side:r}),s),...c,children:[l,(0,n.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,n.jsx)(i.Z,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=a.VY.displayName;let p=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};p.displayName="SheetHeader";let v=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold text-foreground",r),...s})});v.displayName=a.Dx.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(a.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...s})}).displayName=a.dk.displayName},40257:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(44227)},44227:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function l(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(e){r=l}}();var o=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?o=n.concat(o):u=-1,o.length&&f())}function f(){if(!c){var e=i(d);c=!0;for(var t=o.length;t;){for(n=o,o=[];++u<t;)n&&n[u].run();u=-1,t=o.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];o.push(new m(e,t)),1!==o.length||c||i(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.prependListener=h,s.prependOnceListener=h,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}},l=!0;try{t[e](a,a.exports,n),l=!1}finally{l&&delete r[e]}return a.exports}n.ab="//";var s=n(229);e.exports=s}()},91988:function(){},39055:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/shopar-logo-inverted-simple.6096a004.svg",height:50,width:120,blurWidth:0,blurHeight:0}}}]);