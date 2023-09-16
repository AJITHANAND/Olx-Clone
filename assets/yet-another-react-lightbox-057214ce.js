import{r as o}from"./react-40402f93.js";import{r as Ht}from"./react-dom-8f3747d7.js";const it="carousel",ct="controller",Bt="navigation",Xt="no-scroll",lt="portal",Kt="root",at="toolbar",Ce="loading",Le="error",ye="complete",zt="placeholder",Yt=e=>`active-slide-${e}`,jt="fullsize",ut="flex_center",Gt="no_scroll",dt="no_scroll_padding",q="prev",J="next",Ke="swipe",se="close",ft="onPointerDown",pt="onPointerMove",ht="onPointerUp",mt="onPointerLeave",vt="onPointerCancel",Et="onKeyDown",gt="onKeyUp",_t="onWheel",Qt="Escape",Zt="ArrowLeft",qt="ArrowRight",Jt="button",Re="icon",xt="contain",ze="cover",en="Unknown action type",Te={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[se]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:xt,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullDown:!1,closeOnBackdropClick:!1},portal:{},on:{},styles:{},className:""};function G(e,t){return{name:e,component:t}}function R(e,t){return{module:e,children:t}}function bt(e,t,n){return e.module.name===t?n(e):e.children?[R(e.module,e.children.flatMap(r=>{var s;return(s=bt(r,t,n))!==null&&s!==void 0?s:[]}))]:[e]}function Z(e,t,n){return e.flatMap(r=>{var s;return(s=bt(r,t,n))!==null&&s!==void 0?s:[]})}function tn(e,t=[],n=[]){let r=e;const s=p=>{const h=[...r];for(;h.length>0;){const u=h.pop();if((u==null?void 0:u.module.name)===p)return!0;u!=null&&u.children&&h.push(...u.children)}return!1},c=(p,h)=>{if(p===""){r=[R(h,r)];return}r=Z(r,p,u=>[R(h,[u])])},i=(p,h)=>{r=Z(r,p,u=>[R(u.module,[R(h,u.children)])])},a=(p,h,u)=>{r=Z(r,p,E=>{var _;return[R(E.module,[...u?[R(h)]:[],...(_=E.children)!==null&&_!==void 0?_:[],...u?[]:[R(h)]])]})},f=(p,h,u)=>{r=Z(r,p,E=>[...u?[R(h)]:[],E,...u?[]:[R(h)]])},d=p=>{i(ct,p)},g=(p,h)=>{r=Z(r,p,u=>[R(h,u.children)])},m=p=>{r=Z(r,p,h=>h.children)},b=p=>{n.push(p)};return t.forEach(p=>{p({contains:s,addParent:c,append:i,addChild:a,addSibling:f,addModule:d,replace:g,remove:m,augment:b})}),{config:r,augmentation:p=>n.reduce((h,u)=>u(h),p)}}const K=(...e)=>[...e].filter(t=>!!t).join(" "),Nt="yarl__",L=e=>`${Nt}${e}`,W=e=>`--${Nt}${e}`,ie=(e,t)=>`${e}${t?`_${t}`:""}`,Ae=e=>t=>ie(e,t),nn=(e,t)=>e&&e[t]?e[t]:t,Pt=(...e)=>()=>{e.forEach(t=>{t()})},ee=(e,t,n)=>()=>{const r=o.useContext(n);if(!r)throw new Error(`${e} must be used within a ${t}.Provider`);return r},wt=()=>typeof window<"u";function on(e,t=0){const n=10**t;return Math.round((e+Number.EPSILON)*n)/n}const rn=e=>e.type===void 0||e.type==="image",sn=(e,t)=>e.imageFit===ze||e.imageFit!==xt&&t===ze;function he(e){if(typeof e=="number")return{pixel:e};if(typeof e=="string"){const t=parseInt(e,10);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function cn(e,t){const n=he(t),r=n.percent!==void 0?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}const Ct=(e,t)=>t>0?(e%t+t)%t:0,Lt=e=>e.length>0,ln=(e,t)=>e[Ct(t,e.length)],De=(e,t)=>Lt(e)?ln(e,t):void 0;function an(){const e=t=>{t.stopPropagation()};return{onPointerDown:e,onKeyDown:e,onWheel:e}}const yt=o.createContext(null),ke=ee("useEvents","EventsContext",yt);function un({children:e}){const[t]=o.useState({});o.useEffect(()=>()=>{Object.keys(t).forEach(r=>delete t[r])},[t]);const n=o.useMemo(()=>{const r=(i,a)=>{var f;(f=t[i])===null||f===void 0||f.splice(0,t[i].length,...t[i].filter(d=>d!==a))};return{publish:(...[i,a])=>{var f;(f=t[i])===null||f===void 0||f.forEach(d=>d(a))},subscribe:(i,a)=>(t[i]||(t[i]=[]),t[i].push(a),()=>r(i,a)),unsubscribe:r}},[t]);return o.createElement(yt.Provider,{value:n},e)}const It=o.createContext(null),We=ee("useLightboxProps","LightboxPropsContext",It);function dn({children:e,...t}){return o.createElement(It.Provider,{value:t},e)}const Ot=o.createContext(null),me=ee("useLightboxState","LightboxStateContext",Ot),St=o.createContext(null),fn=ee("useLightboxDispatch","LightboxDispatchContext",St);function pn(e,t){switch(t.type){case"swipe":{const{slides:n}=e,r=(t==null?void 0:t.increment)||0,s=e.globalIndex+r,c=Ct(s,n.length),i=De(n,c),a=r||t.duration?{increment:r,duration:t.duration,easing:t.easing}:void 0;return{slides:n,currentIndex:c,globalIndex:s,currentSlide:i,animation:a}}case"update":return{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:De(t.slides,t.index)};default:throw new Error(en)}}function hn({slides:e,index:t,children:n}){const[r,s]=o.useReducer(pn,{slides:e,currentIndex:t,globalIndex:t,currentSlide:De(e,t)});o.useEffect(()=>{s({type:"update",slides:e,index:t})},[e,t]);const c=o.useMemo(()=>({...r,state:r,dispatch:s}),[r,s]);return o.createElement(St.Provider,{value:s},o.createElement(Ot.Provider,{value:c},n))}const Mt=o.createContext(null),ve=ee("useTimeouts","TimeoutsContext",Mt);function mn({children:e}){const[t]=o.useState([]);o.useEffect(()=>()=>{t.forEach(r=>window.clearTimeout(r)),t.splice(0,t.length)},[t]);const n=o.useMemo(()=>{const r=i=>{t.splice(0,t.length,...t.filter(a=>a!==i))};return{setTimeout:(i,a)=>{const f=window.setTimeout(()=>{r(f),i()},a);return t.push(f),f},clearTimeout:i=>{i!==void 0&&(r(i),window.clearTimeout(i))}}},[t]);return o.createElement(Mt.Provider,{value:n},e)}const Rt=o.forwardRef(function({label:t,className:n,icon:r,renderIcon:s,onClick:c,style:i,...a},f){const{styles:d,labels:g}=We();return o.createElement("button",{ref:f,type:"button","aria-label":nn(g,t),className:K(L(Jt),n),onClick:c,style:{...i,...d.button},...a},s?s():o.createElement(r,{className:L(Re),style:d.icon}))});function vn(e,t){const n=r=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},t);return n.displayName=e,n}function ce(e,t){return vn(e,o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}const En=ce("Close",o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),gn=ce("Previous",o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),_n=ce("Next",o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),xn=ce("Loading",o.createElement(o.Fragment,null,Array.from({length:8}).map((e,t,n)=>o.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),bn=ce("Error",o.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),te=wt()?o.useLayoutEffect:o.useEffect;function Tt(){const[e,t]=o.useState(!1);return o.useEffect(()=>{var n,r;const s=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");t(s==null?void 0:s.matches);const c=i=>t(i.matches);return(r=s==null?void 0:s.addEventListener)===null||r===void 0||r.call(s,"change",c),()=>{var i;return(i=s==null?void 0:s.removeEventListener)===null||i===void 0?void 0:i.call(s,"change",c)}},[]),e}function Nn(e){let t=0,n=0,r=0;const c=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(c){const i=c[1].split(",").map(a=>Number.parseInt(a,10));i.length===6?(t=i[4],n=i[5]):i.length===16&&(t=i[12],n=i[13],r=i[14])}return{x:t,y:n,z:r}}function Ye(e,t){const n=o.useRef(),r=o.useRef(),s=Tt();return te(()=>{var c,i,a;if(e.current&&n.current!==void 0&&!s){const{keyframes:f,duration:d,easing:g,onfinish:m}=t(n.current,e.current.getBoundingClientRect(),Nn(e.current))||{};if(f&&d){(c=r.current)===null||c===void 0||c.cancel(),r.current=void 0;try{r.current=(a=(i=e.current).animate)===null||a===void 0?void 0:a.call(i,f,{duration:d,easing:g})}catch(b){console.error(b)}r.current&&(r.current.onfinish=()=>{r.current=void 0,m==null||m()})}}n.current=void 0}),{prepareAnimation:c=>{n.current=c},isAnimationPlaying:()=>{var c;return((c=r.current)===null||c===void 0?void 0:c.playState)==="running"}}}function Dt(){const[e,t]=o.useState(),n=o.useRef(null),r=o.useRef(),s=o.useCallback(c=>{n.current=c,r.current&&(r.current.disconnect(),r.current=void 0);const i=()=>{if(c){const a=window.getComputedStyle(c),f=d=>parseFloat(d)||0;t({width:Math.round(c.clientWidth-f(a.paddingLeft)-f(a.paddingRight)),height:Math.round(c.clientHeight-f(a.paddingTop)-f(a.paddingBottom))})}else t(void 0)};i(),c&&typeof ResizeObserver<"u"&&(r.current=new ResizeObserver(i),r.current.observe(c))},[]);return o.useMemo(()=>({setContainerRef:s,containerRef:n,containerRect:e}),[s,n,e])}function pe(){const e=o.useRef(),{setTimeout:t,clearTimeout:n}=ve();return o.useCallback((r,s)=>{n(e.current),e.current=t(r,s>0?s:0)},[t,n])}function T(e){const t=o.useRef(e);return te(()=>{t.current=e}),o.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function je(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Ge(e,t){return o.useMemo(()=>e==null&&t==null?null:n=>{je(e,n),je(t,n)},[e,t])}function Pn(e,t=!1){const n=o.useRef();te(()=>{t&&n.current&&(n.current=!1,e())},[t,e]);const r=o.useCallback(()=>{n.current=!0},[]),s=o.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:s}}function $e(){const[e,t]=o.useState(!1);return te(()=>{t(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),e}function wn(){const[e]=o.useState({});return o.useMemo(()=>{const t=(n,r)=>{var s;(s=e[n])===null||s===void 0||s.forEach(c=>{r.isPropagationStopped()||c(r)})};return{registerSensors:{onPointerDown:n=>t(ft,n),onPointerMove:n=>t(pt,n),onPointerUp:n=>t(ht,n),onPointerLeave:n=>t(mt,n),onPointerCancel:n=>t(vt,n),onKeyDown:n=>t(Et,n),onKeyUp:n=>t(gt,n),onWheel:n=>t(_t,n)},subscribeSensors:(n,r)=>(e[n]||(e[n]=[]),e[n].unshift(r),()=>{const s=e[n];s&&s.splice(0,s.length,...s.filter(c=>c!==r))})}},[e])}function Qe(e,t){const n=o.useRef(0),r=pe(),s=T((...c)=>{n.current=Date.now(),e(c)});return o.useCallback((...c)=>{r(()=>{s(c)},t-(Date.now()-n.current))},[t,s,r])}const Ie=Ae("slide"),Oe=Ae("slide_image");function Cn({slide:e,offset:t,render:n,rect:r,imageFit:s,imageProps:c,onClick:i,onLoad:a,style:f}){var d,g,m,b,p,h,u;const[E,_]=o.useState(Ce),{publish:y}=ke(),{setTimeout:S}=ve(),N=o.useRef(null);o.useEffect(()=>{t===0&&y(Yt(E))},[t,E,y]);const w=T(P=>{("decode"in P?P.decode():Promise.resolve()).catch(()=>{}).then(()=>{P.parentNode&&(_(ye),S(()=>{a==null||a(P)},0))})}),C=o.useCallback(P=>{N.current=P,P!=null&&P.complete&&w(P)},[w]),v=o.useCallback(P=>{w(P.currentTarget)},[w]),M=o.useCallback(()=>{_(Le)},[]),x=sn(e,s),D=(P,X)=>Number.isFinite(P)?P:X,I=D(Math.max(...((g=(d=e.srcSet)===null||d===void 0?void 0:d.map(P=>P.width))!==null&&g!==void 0?g:[]).concat(e.width?[e.width]:[]).filter(Boolean)),((m=N.current)===null||m===void 0?void 0:m.naturalWidth)||0),z=D(Math.max(...((p=(b=e.srcSet)===null||b===void 0?void 0:b.map(P=>P.height))!==null&&p!==void 0?p:[]).concat(e.height?[e.height]:[]).filter(Boolean)),((h=N.current)===null||h===void 0?void 0:h.naturalHeight)||0),$=I&&z?{maxWidth:`min(${I}px, 100%)`,maxHeight:`min(${z}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},ne=(u=e.srcSet)===null||u===void 0?void 0:u.sort((P,X)=>P.width-X.width).map(P=>`${P.src} ${P.width}w`).join(", "),Ee=()=>r&&!x&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,B=ne&&r&&wt()?`${Math.round(Math.min(Ee(),r.width))}px`:void 0,{style:Q,className:ae,...ue}=c||{};return o.createElement(o.Fragment,null,o.createElement("img",{ref:C,onLoad:v,onError:M,onClick:i,draggable:!1,className:K(L(Oe()),x&&L(Oe("cover")),E!==ye&&L(Oe("loading")),ae),style:{...$,...f,...Q},...ue,alt:e.alt,sizes:B,srcSet:ne,src:e.src}),E!==ye&&o.createElement("div",{className:L(Ie(zt))},E===Ce&&(n!=null&&n.iconLoading?n.iconLoading():o.createElement(xn,{className:K(L(Re),L(Ie(Ce)))})),E===Le&&(n!=null&&n.iconError?n.iconError():o.createElement(bn,{className:K(L(Re),L(Ie(Le)))}))))}var A;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL_DOWN=2]="PULL_DOWN",e[e.ANIMATION=3]="ANIMATION"})(A||(A={}));function Ln(e,t,n,r,s){o.useEffect(()=>s?()=>{}:Pt(e(ft,t),e(pt,n),e(ht,r),e(mt,r),e(vt,r)),[e,t,n,r,s])}var V;(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL_DOWN=2]="PULL_DOWN"})(V||(V={}));const Se=30;function yn(e,t,n,r,s,c,i,a,f,d,g,m,b){const p=o.useRef(0),h=o.useRef([]),u=o.useRef(),E=o.useRef(0),_=o.useRef(V.NONE),y=o.useCallback(v=>{u.current===v.pointerId&&(u.current=void 0,_.current=V.NONE);const M=h.current;M.splice(0,M.length,...M.filter(x=>x.pointerId!==v.pointerId))},[]),S=o.useCallback(v=>{y(v),v.persist(),h.current.push(v)},[y]),N=T(v=>{S(v)}),w=T(v=>{if(h.current.find(M=>M.pointerId===v.pointerId)&&u.current===v.pointerId){const M=Date.now()-E.current,x=p.current;_.current===V.SWIPE?Math.abs(x)>.3*n||Math.abs(x)>5&&M<r?i(x,M):a(x):_.current===V.PULL_DOWN&&(x>2*Se?m(x,M):b(x)),p.current=0,_.current=V.NONE}y(v)}),C=T(v=>{const M=h.current.find(x=>x.pointerId===v.pointerId);if(M){const x=u.current===v.pointerId;if(v.buttons===0){x&&p.current!==0?w(v):y(M);return}const D=v.clientX-M.clientX,I=v.clientY-M.clientY;if(u.current===void 0){const z=$=>{S(v),u.current=v.pointerId,E.current=Date.now(),_.current=$};Math.abs(D)>Math.abs(I)&&Math.abs(D)>Se&&t(D)?(z(V.SWIPE),s()):f&&Math.abs(I)>Math.abs(D)&&I>Se&&(z(V.PULL_DOWN),d())}else x&&(_.current===V.SWIPE?(p.current=D,c(D)):_.current===V.PULL_DOWN&&(p.current=I,g(I)))}});Ln(e,N,C,w)}const Ze="wheel";function qe(e){(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.ctrlKey)&&e.preventDefault()}function In(){const e=o.useRef(null);return o.useCallback(t=>{var n;t?t.addEventListener(Ze,qe,{passive:!1}):(n=e.current)===null||n===void 0||n.removeEventListener(Ze,qe),e.current=t},[])}function On(e,t,n,r,s,c,i,a,f){const d=o.useRef(0),g=o.useRef(0),m=o.useRef(),b=o.useRef(),p=o.useRef(0),h=o.useRef(0),{setTimeout:u,clearTimeout:E}=ve(),_=o.useCallback(()=>{m.current&&(E(m.current),m.current=void 0)},[E]),y=o.useCallback(()=>{b.current&&(E(b.current),b.current=void 0)},[E]),S=T(()=>{e!==A.SWIPE&&(d.current=0,h.current=0,_(),y())});o.useEffect(S,[e,S]);const N=T(C=>{b.current=void 0,d.current===C&&f(d.current)}),w=T(C=>{if(!C.ctrlKey&&!(Math.abs(C.deltaY)>Math.abs(C.deltaX)))if(e===A.NONE){if(Math.abs(C.deltaX)<=1.2*Math.abs(p.current)){p.current=C.deltaX;return}if(!n(-C.deltaX))return;if(g.current+=C.deltaX,_(),Math.abs(g.current)>30)g.current=0,p.current=0,h.current=Date.now(),c();else{const v=g.current;m.current=u(()=>{m.current=void 0,v===g.current&&(g.current=0)},s)}}else if(e===A.SWIPE){let v=d.current-C.deltaX;if(v=Math.min(Math.abs(v),r)*Math.sign(v),d.current=v,i(v),y(),Math.abs(v)>.2*r){p.current=C.deltaX,a(v,Date.now()-h.current);return}b.current=u(()=>N(v),2*s)}else p.current=C.deltaX});o.useEffect(()=>t(_t,w),[t,w])}const Sn=Ae("container"),At=o.createContext(null),le=ee("useController","ControllerContext",At);function Mn({children:e,...t}){var n;const{carousel:r,animation:s,controller:c,on:i,styles:a,render:f}=t,[d,g]=o.useState(),m=me(),b=fn(),[p,h]=o.useState(A.NONE),u=o.useRef(0),E=o.useRef(0),_=o.useRef(1),{registerSensors:y,subscribeSensors:S}=wn(),{subscribe:N,publish:w}=ke(),C=pe(),v=pe(),M=pe(),{containerRef:x,setContainerRef:D,containerRect:I}=Dt(),z=Ge(In(),D),$=o.useRef(null),ne=Ge($,void 0),Ee=$e(),B=l=>(Ee?-1:1)*(typeof l=="number"?l:1),Q=T(()=>{var l;return(l=x.current)===null||l===void 0?void 0:l.focus()}),ae=T(()=>t),ue=T(()=>m),P=o.useCallback(l=>w(q,l),[w]),X=o.useCallback(l=>w(J,l),[w]),Y=o.useCallback(()=>w(se),[w]),ge=l=>!(r.finite&&(B(l)>0&&m.currentIndex===0||B(l)<0&&m.currentIndex===m.slides.length-1)),Ue=l=>{var O;u.current=l,(O=x.current)===null||O===void 0||O.style.setProperty(W("swipe_offset"),`${Math.round(l)}px`)},_e=c.closeOnPullDown,xe=l=>{var O,k;E.current=l,_.current=(()=>Math.min(Math.max(on(1-l/60*(1-.5),2),.5),1))(),(O=x.current)===null||O===void 0||O.style.setProperty(W("pull_down_offset"),`${Math.round(l)}px`),(k=x.current)===null||k===void 0||k.style.setProperty(W("pull_down_opacity"),`${_.current}`)},{prepareAnimation:Wt}=Ye($,(l,O,k)=>{if($.current&&I)return{keyframes:[{transform:`translate(0, ${l.rect.y-O.y+k.y}px)`,opacity:l.opacity},{transform:"translate(0, 0)",opacity:1}],duration:l.duration,easing:s.easing.fade}}),Ve=(l,O)=>{if(_e){xe(l);let k=0;$.current&&(k=s.fade*(O?2:1),Wt({rect:$.current.getBoundingClientRect(),opacity:_.current,duration:k})),M(()=>{xe(0),h(A.NONE)},k),h(A.ANIMATION),O||Y()}},{prepareAnimation:$t,isAnimationPlaying:Ut}=Ye($,(l,O,k)=>{var F;if($.current&&I&&(!((F=m.animation)===null||F===void 0)&&F.duration)){const U=he(r.spacing),be=(U.percent?U.percent*I.width/100:U.pixel)||0;return{keyframes:[{transform:`translate(${B(m.globalIndex-l.index)*(I.width+be)+l.rect.x-O.x+k.x}px, 0)`},{transform:"translate(0, 0)"}],duration:m.animation.duration,easing:m.animation.easing}}}),oe=T(l=>{var O,k;const F=l.offset||0,U=F?s.swipe:(O=s.navigation)!==null&&O!==void 0?O:s.swipe,be=!F&&!Ut()?s.easing.navigation:s.easing.swipe;let{direction:de}=l;const fe=(k=l.count)!==null&&k!==void 0?k:1;let Ne=A.ANIMATION,H=U*fe;if(!de){const re=I==null?void 0:I.width,Xe=l.duration||0,we=re?U/re*Math.abs(F):U;fe!==0?(Xe<we?H=H/we*Math.max(Xe,we/5):re&&(H=U/re*(re-Math.abs(F))),de=B(F)>0?q:J):H=U/2}let Pe=0;de===q?ge(B(1))?Pe=-fe:(Ne=A.NONE,H=U):de===J&&(ge(B(-1))?Pe=fe:(Ne=A.NONE,H=U)),H=Math.round(H),v(()=>{Ue(0),h(A.NONE)},H),$.current&&$t({rect:$.current.getBoundingClientRect(),index:m.globalIndex}),h(Ne),w(Ke,{type:"swipe",increment:Pe,duration:H,easing:be})});o.useEffect(()=>{var l,O;!((l=m.animation)===null||l===void 0)&&l.increment&&(!((O=m.animation)===null||O===void 0)&&O.duration)&&C(()=>b({type:"swipe",increment:0}),m.animation.duration)},[m.animation,b,C]);const Fe=[S,ge,(I==null?void 0:I.width)||0,s.swipe,()=>h(A.SWIPE),l=>Ue(l),(l,O)=>oe({offset:l,duration:O,count:1}),l=>oe({offset:l,count:0})],Vt=[()=>{_e&&h(A.PULL_DOWN)},l=>xe(l),l=>Ve(l),l=>Ve(l,!0)];yn(...Fe,_e,...Vt),On(p,...Fe);const He=T(()=>{var l;c.focus&&((l=x.current)===null||l===void 0||l.focus())});o.useEffect(He,[He]);const Be=T(()=>{var l;(l=i.view)===null||l===void 0||l.call(i,{index:m.currentIndex})});o.useEffect(Be,[m.globalIndex,Be]),o.useEffect(()=>Pt(N(q,l=>oe({direction:q,...l})),N(J,l=>oe({direction:J,...l})),N(Ke,l=>b(l))),[N,oe,b]),o.useEffect(()=>S(gt,l=>{l.key===Qt&&Y()}),[S,Y]);const Ft=o.useMemo(()=>({prev:P,next:X,close:Y,focus:Q,slideRect:I?cn(I,r.padding):{width:0,height:0},containerRect:I||{width:0,height:0},subscribeSensors:S,containerRef:x,setCarouselRef:ne,toolbarWidth:d,setToolbarWidth:g}),[P,X,Y,Q,S,I,x,ne,d,g,r.padding]);return o.useImperativeHandle(c.ref,()=>({prev:P,next:X,close:Y,focus:Q,getLightboxProps:ae,getLightboxState:ue}),[P,X,Y,Q,ae,ue]),o.createElement("div",{ref:z,className:K(L(Sn()),L(ut)),style:{...p===A.SWIPE?{[W("swipe_offset")]:`${Math.round(u.current)}px`}:null,...p===A.PULL_DOWN?{[W("pull_down_offset")]:`${Math.round(E.current)}px`,[W("pull_down_opacity")]:`${_.current}`}:null,...c.touchAction!=="none"?{[W("controller_touch_action")]:c.touchAction}:null,...a.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...y},I&&o.createElement(At.Provider,{value:Ft},e,(n=f.controls)===null||n===void 0?void 0:n.call(f)))}const Rn=G(ct,Mn);function j(e){return ie(it,e)}function Je(e){return ie("slide",e)}function Me({slide:e,offset:t}){const n=o.useRef(null),{currentIndex:r}=me(),{slideRect:s,close:c}=le(),{render:i,carousel:{imageFit:a,imageProps:f},on:{click:d},controller:{closeOnBackdropClick:g},styles:{slide:m}}=We(),b=()=>{var h,u,E,_;let y=(h=i.slide)===null||h===void 0?void 0:h.call(i,{slide:e,offset:t,rect:s});return!y&&rn(e)&&(y=o.createElement(Cn,{slide:e,offset:t,render:i,rect:s,imageFit:a,imageProps:f,onClick:t===0?()=>d==null?void 0:d({index:r}):void 0})),y?o.createElement(o.Fragment,null,(u=i.slideHeader)===null||u===void 0?void 0:u.call(i,{slide:e}),((E=i.slideContainer)!==null&&E!==void 0?E:({children:S})=>S)({slide:e,children:y}),(_=i.slideFooter)===null||_===void 0?void 0:_.call(i,{slide:e})):null},p=h=>{const u=n.current,E=h.target instanceof HTMLElement?h.target:void 0;g&&E&&u&&(E===u||Array.from(u.children).find(_=>_===E)&&E.classList.contains(L(jt)))&&c()};return o.createElement("div",{ref:n,className:K(L(Je()),t===0&&L(Je("current")),L(ut)),onClick:p,style:m},b())}function et(){const e=We().styles.slide;return o.createElement("div",{className:L("slide"),style:e})}function Tn({carousel:e}){const{slides:t,currentIndex:n,globalIndex:r}=me(),{setCarouselRef:s}=le(),c=he(e.spacing),i=he(e.padding),a=[],f=Math.min(e.preload,Math.max(Math.floor(t.length/2),1));if(Lt(t)){for(let d=n-f;d<n;d+=1){const g=r+d-n;a.push(!e.finite||d>=0?o.createElement(Me,{key:g,slide:t[(d+f*t.length)%t.length],offset:d-n}):o.createElement(et,{key:g}))}a.push(o.createElement(Me,{key:r,slide:t[n],offset:0}));for(let d=n+1;d<=n+f;d+=1){const g=r+d-n;a.push(!e.finite||d<=t.length-1?o.createElement(Me,{key:g,slide:t[d%t.length],offset:d-n}):o.createElement(et,{key:g}))}}return o.createElement("div",{ref:s,className:K(L(j()),a.length>0&&L(j("with_slides"))),style:{[`${W(j("slides_count"))}`]:a.length,[`${W(j("spacing_px"))}`]:c.pixel||0,[`${W(j("spacing_percent"))}`]:c.percent||0,[`${W(j("padding_px"))}`]:i.pixel||0,[`${W(j("padding_percent"))}`]:i.percent||0}},a)}const Dn=G(it,Tn);function tt({label:e,icon:t,renderIcon:n,action:r,onClick:s,disabled:c,style:i}){return o.createElement(Rt,{label:e,icon:t,renderIcon:n,className:L(`navigation_${r}`),disabled:c,onClick:s,style:i,...Pn(le().focus,c)})}function An({carousel:{finite:e},animation:t,render:{buttonPrev:n,buttonNext:r,iconPrev:s,iconNext:c},styles:i}){var a;const{slides:f,currentIndex:d}=me(),{prev:g,next:m,subscribeSensors:b}=le(),p=$e(),h=f.length===0||e&&d===0,u=f.length===0||e&&d===f.length-1,E=((a=t.navigation)!==null&&a!==void 0?a:t.swipe)/2,_=Qe(g,E),y=Qe(m,E),S=T(N=>{N.key===Zt&&!(p?u:h)&&(p?y:_)(),N.key===qt&&!(p?h:u)&&(p?_:y)()});return o.useEffect(()=>b(Et,S),[b,S]),o.createElement(o.Fragment,null,n?n():o.createElement(tt,{label:"Previous",action:q,icon:gn,renderIcon:s,style:i.navigationPrev,disabled:h,onClick:g}),r?r():o.createElement(tt,{label:"Next",action:J,icon:_n,renderIcon:c,style:i.navigationNext,disabled:u,onClick:m}))}const kn=G(Bt,An),nt=L(Gt),Wn=L(dt);function $n(e){return"style"in e}function ot(e,t,n){const r=window.getComputedStyle(e),s=n?"padding-left":"padding-right",c=n?r.paddingLeft:r.paddingRight,i=e.style.getPropertyValue(s);return e.style.setProperty(s,`${(parseInt(c,10)||0)+t}px`),()=>{i?e.style.setProperty(s,i):e.style.removeProperty(s)}}function Un({children:e}){const t=$e();return te(()=>{const n=[],{body:r,documentElement:s}=document,c=Math.round(window.innerWidth-s.clientWidth);if(c>0){n.push(ot(r,c,t));const i=r.getElementsByTagName("*");for(let a=0;a<i.length;a+=1){const f=i[a];$n(f)&&window.getComputedStyle(f).getPropertyValue("position")==="fixed"&&!f.classList.contains(Wn)&&n.push(ot(f,c,t))}}return r.classList.add(nt),()=>{r.classList.remove(nt),n.forEach(i=>i())}},[t]),o.createElement(o.Fragment,null,e)}const Vn=G(Xt,Un);function rt(e){return ie(lt,e)}function st(e,t,n){const r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}function Fn({children:e,animation:t,styles:n,className:r,on:s,portal:c,close:i}){const[a,f]=o.useState(!1),[d,g]=o.useState(!1),m=o.useRef([]),{setTimeout:b}=ve(),{subscribe:p}=ke(),u=Tt()?0:t.fade;o.useEffect(()=>(f(!0),()=>{f(!1),g(!1)}),[]);const E=T(()=>{var N;g(!1),(N=s.exiting)===null||N===void 0||N.call(s),b(()=>{var w;(w=s.exited)===null||w===void 0||w.call(s),i()},u)});o.useEffect(()=>p(se,E),[p,E]);const _=T(N=>{var w,C,v;N.scrollTop,g(!0),(w=s.entering)===null||w===void 0||w.call(s);const M=(v=(C=N.parentNode)===null||C===void 0?void 0:C.children)!==null&&v!==void 0?v:[];for(let x=0;x<M.length;x+=1){const D=M[x];["TEMPLATE","SCRIPT","STYLE"].indexOf(D.tagName)===-1&&D!==N&&(m.current.push(st(D,"inert","true")),m.current.push(st(D,"aria-hidden","true")))}b(()=>{var x;(x=s.entered)===null||x===void 0||x.call(s)},u)}),y=T(()=>{m.current.forEach(N=>N()),m.current=[]}),S=o.useCallback(N=>{N?_(N):y()},[_,y]);return a?Ht.createPortal(o.createElement("div",{ref:S,className:K(r,L("root"),L(rt()),L(dt),d&&L(rt("open"))),role:"presentation","aria-live":"polite",style:{...t.fade!==Te.animation.fade?{[W("fade_animation_duration")]:`${u}ms`}:null,...t.easing.fade!==Te.animation.easing.fade?{[W("fade_animation_timing_function")]:t.easing.fade}:null,...n.root}},e),c.root||document.body):null}const Hn=G(lt,Fn);function Bn({children:e}){return o.createElement(o.Fragment,null,e)}const Xn=G(Kt,Bn);function Kn(e){return ie(at,e)}function zn({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){const{close:s,setToolbarWidth:c}=le(),{setContainerRef:i,containerRect:a}=Dt();te(()=>{c(a==null?void 0:a.width)},[c,a==null?void 0:a.width]);const f=()=>t?t():o.createElement(Rt,{key:se,label:"Close",icon:En,renderIcon:n,onClick:s});return o.createElement("div",{ref:i,style:r.toolbar,className:L(Kn()),...an()},e==null?void 0:e.map(d=>d===se?f():d))}const Yn=G(at,zn);function kt(e,t){var n;return o.createElement(e.module.component,{key:e.module.name,...t},(n=e.children)===null||n===void 0?void 0:n.map(r=>kt(r,t)))}function jn(e,t={}){const{easing:n,...r}=e,{easing:s,...c}=t;return{easing:{...n,...s},...r,...c}}function Zn({carousel:e,animation:t,render:n,toolbar:r,controller:s,on:c,plugins:i,slides:a,index:f,...d}){const{animation:g,carousel:m,render:b,toolbar:p,controller:h,on:u,slides:E,index:_,plugins:y,...S}=Te,{config:N,augmentation:w}=tn([R(Hn,[R(Vn,[R(Rn,[R(Dn),R(Yn),R(kn)])])])],i||y),C=w({animation:jn(g,t),carousel:{...m,...e},render:{...b,...n},toolbar:{...p,...r},controller:{...h,...s},on:{...u,...c},...S,...d});return C.open?o.createElement(dn,{...C},o.createElement(hn,{slides:a||E,index:f||_},o.createElement(mn,null,o.createElement(un,null,kt(R(Xn,N),C))))):null}export{Zn as L};