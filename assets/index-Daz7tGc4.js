import{r as $,R as f}from"./index-BwDkhjyp.js";import{c as be,j as S,P as Y,u as _e,a as re,b as Fe,d as Ne,e as le,f as He}from"./index-BAe4MwBu.js";var De=$.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),xe=function(t,r,n){var i=n.get(t);return i?i(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function ce(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var ne=$.forwardRef(function(e,t){var r=e.alt,n=e.color,i=e.size,o=e.weight,c=e.mirrored,s=e.children,a=e.renderPath,u=ce(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=$.useContext(De),g=h.color,l=g===void 0?"currentColor":g,p=h.size,b=h.weight,y=b===void 0?"regular":b,k=h.mirrored,m=k===void 0?!1:k,v=ce(h,["color","size","weight","mirrored"]);return f.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i??p,height:i??p,fill:n??l,viewBox:"0 0 256 256",transform:c||m?"scale(-1, 1)":void 0},v,u),!!r&&f.createElement("title",null,r),s,f.createElement("rect",{width:"256",height:"256",fill:"none"}),a(o??y,n??l))});ne.displayName="IconBase";var O=new Map;O.set("bold",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return f.createElement(f.Fragment,null,f.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});O.set("light",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Ve=function(t,r){return xe(t,r,O)},ke=$.forwardRef(function(e,t){return f.createElement(ne,Object.assign({ref:t},e,{renderPath:Ve}))});ke.displayName="Check";var _=new Map;_.set("bold",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return f.createElement(f.Fragment,null,f.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});_.set("light",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return f.createElement(f.Fragment,null,f.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),f.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Ge=function(t,r){return xe(t,r,_)},ye=$.forwardRef(function(e,t){return f.createElement(ne,Object.assign({ref:t},e,{renderPath:Ge}))});ye.displayName="User";var oe="Avatar",[Ue,pr]=be(oe),[Ye,Se]=Ue(oe),$e=$.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[i,o]=$.useState("idle");return S.jsx(Ye,{scope:r,imageLoadingStatus:i,onImageLoadingStatusChange:o,children:S.jsx(Y.span,{...n,ref:t})})});$e.displayName=oe;var ve="AvatarImage",Ce=$.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:i=()=>{},...o}=e,c=Se(ve,r),s=Ke(n),a=_e(u=>{i(u),c.onImageLoadingStatusChange(u)});return re(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?S.jsx(Y.img,{...o,ref:t,src:n}):null});Ce.displayName=ve;var we="AvatarFallback",ze=$.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...i}=e,o=Se(we,r),[c,s]=$.useState(n===void 0);return $.useEffect(()=>{if(n!==void 0){const a=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(a)}},[n]),c&&o.imageLoadingStatus!=="loaded"?S.jsx(Y.span,{...i,ref:t}):null});ze.displayName=we;function Ke(e){const[t,r]=$.useState("idle");return re(()=>{if(!e){r("error");return}let n=!0;const i=new window.Image,o=c=>()=>{n&&r(c)};return r("loading"),i.onload=o("loaded"),i.onerror=o("error"),i.src=e,()=>{n=!1}},[e]),t}var Ze=$e,qe=Ce,Je=ze,x="colors",E="sizes",d="space",Ee={gap:d,gridGap:d,columnGap:d,gridColumnGap:d,rowGap:d,gridRowGap:d,inset:d,insetBlock:d,insetBlockEnd:d,insetBlockStart:d,insetInline:d,insetInlineEnd:d,insetInlineStart:d,margin:d,marginTop:d,marginRight:d,marginBottom:d,marginLeft:d,marginBlock:d,marginBlockEnd:d,marginBlockStart:d,marginInline:d,marginInlineEnd:d,marginInlineStart:d,padding:d,paddingTop:d,paddingRight:d,paddingBottom:d,paddingLeft:d,paddingBlock:d,paddingBlockEnd:d,paddingBlockStart:d,paddingInline:d,paddingInlineEnd:d,paddingInlineStart:d,top:d,right:d,bottom:d,left:d,scrollMargin:d,scrollMarginTop:d,scrollMarginRight:d,scrollMarginBottom:d,scrollMarginLeft:d,scrollMarginX:d,scrollMarginY:d,scrollMarginBlock:d,scrollMarginBlockEnd:d,scrollMarginBlockStart:d,scrollMarginInline:d,scrollMarginInlineEnd:d,scrollMarginInlineStart:d,scrollPadding:d,scrollPaddingTop:d,scrollPaddingRight:d,scrollPaddingBottom:d,scrollPaddingLeft:d,scrollPaddingX:d,scrollPaddingY:d,scrollPaddingBlock:d,scrollPaddingBlockEnd:d,scrollPaddingBlockStart:d,scrollPaddingInline:d,scrollPaddingInlineEnd:d,scrollPaddingInlineStart:d,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:E,minBlockSize:E,maxBlockSize:E,inlineSize:E,minInlineSize:E,maxInlineSize:E,width:E,minWidth:E,maxWidth:E,height:E,minHeight:E,maxHeight:E,flexBasis:E,gridTemplateColumns:E,gridTemplateRows:E,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Xe=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const i=(o=>JSON.stringify(o,Xe))(t);return i in e?e[i]:e[i]=r(t,...n)}},M=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),de=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Qe}=Object.prototype,te=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),et=/\s+(?![^()]*\))/,N=e=>t=>e(...typeof t=="string"?String(t).split(et):[t]),ue={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:N((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:N((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:N((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:N((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:N((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:N((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},ee=/([\d.]+)([^]*)/,tt=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(i)?`:is(${n})`:n):n+" "+i)),r),[]):t,rt=(e,t)=>e in nt&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,i,o)=>n+(i==="stretch"?`-moz-available${o};${te(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${te(e)}:${n}fit-content`)+o):String(t),nt={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},W=e=>e?e+"-":"",je=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,i,o,c,s)=>c=="$"==!!o?n:(i||c=="--"?"calc(":"")+"var(--"+(c==="$"?W(t)+(s.includes("$")?"":W(r))+s.replace(/\$/g,"-"):s)+")"+(i||c=="--"?"*"+(i||"")+(o||"1")+")":"")),ot=/\s*,\s*(?![^()]*\))/,it=Object.prototype.toString,H=(e,t,r,n,i)=>{let o,c,s;const a=(u,h,g)=>{let l,p;const b=y=>{for(l in y){const v=l.charCodeAt(0)===64,z=v&&Array.isArray(y[l])?y[l]:[y[l]];for(p of z){const w=/[A-Z]/.test(m=l)?m:m.replace(/-[^]/g,j=>j[1].toUpperCase()),V=typeof p=="object"&&p&&p.toString===it&&(!n.utils[w]||!h.length);if(w in n.utils&&!V){const j=n.utils[w];if(j!==c){c=j,b(j(p)),c=null;continue}}else if(w in ue){const j=ue[w];if(j!==s){s=j,b(j(p)),s=null;continue}}if(v&&(k=l.slice(1)in n.media?"@media "+n.media[l.slice(1)]:l,l=k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(j,I,B,L,R,P)=>{const F=ee.test(I),K=.0625*(F?-1:1),[Z,se]=F?[L,I]:[I,L];return"("+(B[0]==="="?"":B[0]===">"===F?"max-":"min-")+Z+":"+(B[0]!=="="&&B.length===1?se.replace(ee,(Oe,X,Q)=>Number(X)+K*(B===">"?1:-1)+Q):se)+(R?") and ("+(R[0]===">"?"min-":"max-")+Z+":"+(R.length===1?P.replace(ee,(Oe,X,Q)=>Number(X)+K*(R===">"?-1:1)+Q):P):"")+")"})),V){const j=v?g.concat(l):[...g],I=v?[...h]:tt(h,l.split(ot));o!==void 0&&i(ge(...o)),o=void 0,a(p,I,j)}else o===void 0&&(o=[[],h,g]),l=v||l.charCodeAt(0)!==36?l:`--${W(n.prefix)}${l.slice(1).replace(/\$/g,"-")}`,p=V?p:typeof p=="number"?p&&w in at?String(p)+"px":String(p):je(rt(w,p??""),n.prefix,n.themeMap[w]),o[0].push(`${v?`${l} `:`${te(l)}:`}${p}`)}}var k,m};b(u),o!==void 0&&i(ge(...o)),o=void 0};a(e,t,r)},ge=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,at={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},fe=e=>String.fromCharCode(e+(e>25?39:97)),A=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=fe(r%52)+n;return fe(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),U=["themed","global","styled","onevar","resonevar","allvar","inline"],st=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},lt=e=>{let t;const r=()=>{const{cssRules:i}=t.sheet;return[].map.call(i,(o,c)=>{const{cssText:s}=o;let a="";if(s.startsWith("--sxs"))return"";if(i[c-1]&&(a=i[c-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===o)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${s}`;return o.cssRules.length?`${a}${s}`:""}return s}).join("")},n=()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const u in s)delete s[u]}const i=Object(e).styleSheets||[];for(const s of i)if(st(s)){for(let a=0,u=s.cssRules;u[a];++a){const h=Object(u[a]);if(h.type!==1)continue;const g=Object(u[a+1]);if(g.type!==4)continue;++a;const{cssText:l}=h;if(!l.startsWith("--sxs"))continue;const p=l.slice(14,-3).trim().split(/\s+/),b=U[p[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:g,index:a,cache:new Set(p)})}if(t)break}if(!t){const s=(a,u)=>({type:u,cssRules:[],insertRule(h,g){this.cssRules.splice(g,0,s(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:a}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:o,rules:c}=t;for(let s=U.length-1;s>=0;--s){const a=U[s];if(!c[a]){const u=U[s+1],h=c[u]?c[u].index:o.cssRules.length;o.insertRule("@media{}",h),o.insertRule(`--sxs{--sxs:${s}}`,h),c[a]={group:o.cssRules[h+1],index:h,cache:new Set([s])}}ct(c[a])}};return n(),t},ct=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},G=Symbol(),dt=D(),pe=(e,t)=>dt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const i of r)if(i!=null)if(i[M]){n.type==null&&(n.type=i[M].type);for(const o of i[M].composers)n.composers.add(o)}else i.constructor!==Object||i.$$typeof?n.type==null&&(n.type=i):n.composers.add(ut(i,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),gt(e,n,t)}),ut=({variants:e,compoundVariants:t,defaultVariants:r,...n},i)=>{const o=`${W(i.prefix)}c-${A(n)}`,c=[],s=[],a=Object.create(null),u=[];for(const l in r)a[l]=String(r[l]);if(typeof e=="object"&&e)for(const l in e){h=a,g=l,Qe.call(h,g)||(a[l]="undefined");const p=e[l];for(const b in p){const y={[l]:String(b)};String(b)==="undefined"&&u.push(l);const k=p[b],m=[y,k,!de(k)];c.push(m)}}var h,g;if(typeof t=="object"&&t)for(const l of t){let{css:p,...b}=l;p=typeof p=="object"&&p||{};for(const k in b)b[k]=String(b[k]);const y=[b,p,!de(p)];s.push(y)}return[o,n,c,s,a,u]},gt=(e,t,r)=>{const[n,i,o,c]=ft(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(g=>{function l(){for(let p=0;p<l[G].length;p++){const[b,y]=l[G][p];g.rules[b].apply(y)}return l[G]=[],null}return l[G]=[],l.rules={},U.forEach(p=>l.rules[p]={apply:b=>l[G].push([p,b])}),l})(r):null,a=(s||r).rules,u=`.${n}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,h=g=>{g=typeof g=="object"&&g||pt;const{css:l,...p}=g,b={};for(const m in o)if(delete p[m],m in g){let v=g[m];typeof v=="object"&&v?b[m]={"@initial":o[m],...v}:(v=String(v),b[m]=v!=="undefined"||c.has(m)?v:o[m])}else b[m]=o[m];const y=new Set([...i]);for(const[m,v,z,w]of t.composers){r.rules.styled.cache.has(m)||(r.rules.styled.cache.add(m),H(v,[`.${m}`],[],e,I=>{a.styled.apply(I)}));const V=he(z,b,e.media),j=he(w,b,e.media,!0);for(const I of V)if(I!==void 0)for(const[B,L,R]of I){const P=`${m}-${A(L)}-${B}`;y.add(P);const F=(R?r.rules.resonevar:r.rules.onevar).cache,K=R?a.resonevar:a.onevar;F.has(P)||(F.add(P),H(L,[`.${P}`],[],e,Z=>{K.apply(Z)}))}for(const I of j)if(I!==void 0)for(const[B,L]of I){const R=`${m}-${A(L)}-${B}`;y.add(R),r.rules.allvar.cache.has(R)||(r.rules.allvar.cache.add(R),H(L,[`.${R}`],[],e,P=>{a.allvar.apply(P)}))}}if(typeof l=="object"&&l){const m=`${n}-i${A(l)}-css`;y.add(m),r.rules.inline.cache.has(m)||(r.rules.inline.cache.add(m),H(l,[`.${m}`],[],e,v=>{a.inline.apply(v)}))}for(const m of String(g.className||"").trim().split(/\s+/))m&&y.add(m);const k=p.className=[...y].join(" ");return{type:t.type,className:k,selector:u,props:p,toString:()=>k,deferredInjector:s}};return ie(h,{className:n,selector:u,[M]:t,toString:()=>(r.rules.styled.cache.has(n)||h(),n)})},ft=e=>{let t="";const r=[],n={},i=[];for(const[o,,,,c,s]of e){t===""&&(t=o),r.push(o),i.push(...s);for(const a in c){const u=c[a];(n[a]===void 0||u!=="undefined"||s.includes(u))&&(n[a]=u)}}return[t,r,n,new Set(i)]},he=(e,t,r,n)=>{const i=[];e:for(let[o,c,s]of e){if(s)continue;let a,u=0,h=!1;for(a in o){const g=o[a];let l=t[a];if(l!==g){if(typeof l!="object"||!l)continue e;{let p,b,y=0;for(const k in l){if(g===String(l[k])){if(k!=="@initial"){const m=k.slice(1);(b=b||[]).push(m in r?r[m]:k.replace(/^@media ?/,"")),h=!0}u+=y,p=!0}++y}if(b&&b.length&&(c={["@media "+b.join(", ")]:c}),!p)continue e}}}(i[u]=i[u]||[]).push([n?"cv":`${a}-${o[a]}`,c,h])}return i},pt={},ht=D(),mt=(e,t)=>ht(e,()=>(...r)=>{const n=()=>{for(let i of r){i=typeof i=="object"&&i||{};let o=A(i);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in i){let c=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(i["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,c++);delete i["@import"]}H(i,[],[],e,c=>{t.rules.global.apply(c)})}}return""};return ie(n,{toString:n})}),bt=D(),xt=(e,t)=>bt(e,()=>r=>{const n=`${W(e.prefix)}k-${A(r)}`,i=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const o=[];H(r,[],[],e,s=>o.push(s));const c=`@keyframes ${n}{${o.join("")}}`;t.rules.global.apply(c)}return n};return ie(i,{get name(){return i()},toString:i})}),kt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+W(this.prefix)+W(this.scale)+this.token}toString(){return this.computedValue}},yt=D(),St=(e,t)=>yt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const i=`.${r=(r=typeof r=="string"?r:"")||`${W(e.prefix)}t-${A(n)}`}`,o={},c=[];for(const a in n){o[a]={};for(const u in n[a]){const h=`--${W(e.prefix)}${a}-${u}`,g=je(String(n[a][u]),e.prefix,a);o[a][u]=new kt(u,g,a,e.prefix),c.push(`${h}:${g}`)}}const s=()=>{if(c.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const a=`${n===e.theme?":root,":""}.${r}{${c.join(";")}}`;t.rules.themed.apply(a)}return r};return{...o,get className(){return s()},selector:i,toString:s}}),$t=D(),vt=D(),Ct=e=>{const t=(r=>{let n=!1;const i=$t(r,o=>{n=!0;const c="prefix"in(o=typeof o=="object"&&o||{})?String(o.prefix):"",s=typeof o.media=="object"&&o.media||{},a=typeof o.root=="object"?o.root||null:globalThis.document||null,u=typeof o.theme=="object"&&o.theme||{},h={prefix:c,media:s,theme:u,themeMap:typeof o.themeMap=="object"&&o.themeMap||{...Ee},utils:typeof o.utils=="object"&&o.utils||{}},g=lt(a),l={css:pe(h,g),globalCss:mt(h,g),keyframes:xt(h,g),createTheme:St(h,g),reset(){g.reset(),l.theme.toString()},theme:{},sheet:g,config:h,prefix:c,getCssText:g.toString,toString:g.toString};return String(l.theme=l.createTheme(u)),l});return n||i.reset(),i})(e);return t.styled=(({config:r,sheet:n})=>vt(r,()=>{const i=pe(r,n);return(...o)=>{const c=i(...o),s=c[M].type,a=f.forwardRef((u,h)=>{const g=u&&u.as||s,{props:l,deferredInjector:p}=c(u);return delete l.as,l.ref=h,p?f.createElement(f.Fragment,null,f.createElement(g,l),f.createElement(p,null)):f.createElement(g,l)});return a.className=c.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=c.selector,a.toString=()=>c.selector,a[M]=c[M],a}}))(t),t};function wt(e){const t=$.useRef({value:e,previous:e});return $.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function zt(e){const[t,r]=$.useState(void 0);return re(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let c,s;if("borderBoxSize"in o){const a=o.borderBoxSize,u=Array.isArray(a)?a[0]:a;c=u.inlineSize,s=u.blockSize}else c=e.offsetWidth,s=e.offsetHeight;r({width:c,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}var ae="Checkbox",[Et,hr]=be(ae),[jt,It]=Et(ae),Ie=$.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:i,defaultChecked:o,required:c,disabled:s,value:a="on",onCheckedChange:u,...h}=e,[g,l]=$.useState(null),p=Fe(t,z=>l(z)),b=$.useRef(!1),y=g?!!g.closest("form"):!0,[k=!1,m]=Ne({prop:i,defaultProp:o,onChange:u}),v=$.useRef(k);return $.useEffect(()=>{const z=g==null?void 0:g.form;if(z){const w=()=>m(v.current);return z.addEventListener("reset",w),()=>z.removeEventListener("reset",w)}},[g,m]),S.jsxs(jt,{scope:r,state:k,disabled:s,children:[S.jsx(Y.button,{type:"button",role:"checkbox","aria-checked":T(k)?"mixed":k,"aria-required":c,"data-state":Pe(k),"data-disabled":s?"":void 0,disabled:s,value:a,...h,ref:p,onKeyDown:le(e.onKeyDown,z=>{z.key==="Enter"&&z.preventDefault()}),onClick:le(e.onClick,z=>{m(w=>T(w)?!0:!w),y&&(b.current=z.isPropagationStopped(),b.current||z.stopPropagation())})}),y&&S.jsx(Rt,{control:g,bubbles:!b.current,name:n,value:a,checked:k,required:c,disabled:s,style:{transform:"translateX(-100%)"}})]})});Ie.displayName=ae;var Re="CheckboxIndicator",Be=$.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...i}=e,o=It(Re,r);return S.jsx(He,{present:n||T(o.state)||o.state===!0,children:S.jsx(Y.span,{"data-state":Pe(o.state),"data-disabled":o.disabled?"":void 0,...i,ref:t,style:{pointerEvents:"none",...e.style}})})});Be.displayName=Re;var Rt=e=>{const{control:t,checked:r,bubbles:n=!0,...i}=e,o=$.useRef(null),c=wt(r),s=zt(t);return $.useEffect(()=>{const a=o.current,u=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(u,"checked").set;if(c!==r&&g){const l=new Event("click",{bubbles:n});a.indeterminate=T(r),g.call(a,T(r)?!1:r),a.dispatchEvent(l)}},[c,r,n]),S.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:T(r)?!1:r,...i,tabIndex:-1,ref:o,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function T(e){return e==="indeterminate"}function Pe(e){return T(e)?"indeterminate":e?"checked":"unchecked"}var Bt=Ie,Pt=Be,Wt=Object.defineProperty,Lt=Object.defineProperties,Mt=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,me=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&me(e,r,t[r]);if(q)for(var r of q(t))Le.call(t,r)&&me(e,r,t[r]);return e},Me=(e,t)=>Lt(e,Mt(t)),At=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&q)for(var n of q(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r},Tt={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},Ot={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},_t={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Ft={default:"Roboto, sans-serif",code:"monospace"},Nt={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Ht={regular:"400",medium:"500",bold:"700"},Dt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:C,css:mr,globalCss:br,keyframes:Ae,getCssText:xr,theme:kr,createTheme:yr,config:Sr}=Ct({themeMap:Me(J({},Ee),{height:"space",width:"space"}),theme:{colors:Tt,fontSizes:Nt,fontWeights:Ht,fonts:Ft,lineHeights:Dt,radii:_t,space:Ot}}),Vt=C(Ze,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),Gt=C(qe,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Ut=C(Je,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Yt(e){return S.jsxs(Vt,{children:[S.jsx(Gt,J({},e)),S.jsx(Ut,{delayMs:600,children:S.jsx(ye,{})})]})}Yt.displayName="Avatar";var Kt=C("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Kt.displayName="Box";var Zt=C("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:"$20",boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",transition:"all 150ms",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});Zt.displayName="Button";var qt=C(Bt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),Jt=Ae({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Xt=Ae({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Qt=C(Pt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${Jt} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Xt} 200ms ease-out`}});function er(e){return S.jsx(qt,Me(J({},e),{children:S.jsx(Qt,{asChild:!0,children:S.jsx(ke,{weight:"bold"})})}))}er.displayName="Checkbox";var tr=C("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});tr.displayName="Heading";var Te=C("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Te.displayName="Text";var rr=C("div",{}),nr=C(Te,{color:"$gray200",defaultVariants:{size:"xs"}}),or=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),ir=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function ar({size:e,currentStep:t=1}){return S.jsxs(rr,{children:[S.jsxs(nr,{children:["Passo ",t," de ",e]}),S.jsx(or,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>S.jsx(ir,{active:t>=r},r))})]})}ar.displayName="MultiStep";var sr=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:"none",borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});sr.displayName="TextArea";var lr=C("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),cr=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),dr=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",backgroundColor:"transparent",border:"none",width:"100%","&:focus":{outline:"none"},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function ur(e){var t=e,{prefix:r}=t,n=At(t,["prefix"]);return S.jsxs(lr,{children:[!!r&&S.jsx(cr,{children:r}),S.jsx(dr,J({},n))]})}ur.displayName="TextInput";export{Yt as A,Kt as B,er as C,tr as H,ne as I,ar as M,Te as T,sr as a,ur as b,Zt as c,xe as r};