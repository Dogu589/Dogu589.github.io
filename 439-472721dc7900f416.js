(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439],{4182:function(e){e.exports={style:{fontFamily:"'__Bricolage_Grotesque_98a974', '__Bricolage_Grotesque_Fallback_98a974'",fontStyle:"normal"},className:"__className_98a974"}},4839:function(e,r,o){"use strict";function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}o.d(r,{W:function(){return t}})},6164:function(e,r,o){"use strict";o.d(r,{m6:function(){return U}});let t=e=>{let r=a(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},a=e=>{let{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return p(Object.entries(e.classGroups),o).forEach(([e,o])=>{i(o,t,e,r)}),t},i=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=o;return}if("function"==typeof e){if(c(e)){i(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{i(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,p=(e,r)=>r?e.map(([e,o])=>[e,o.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,o])=>[r+e,o])):e)]):e,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length,s=e=>{let o;let s=[],a=0,i=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===a){if(c===n&&(t||e.slice(d,d+l)===r)){s.push(e.slice(i,d)),i=d+l;continue}if("/"===c){o=d;continue}}"["===c?a++:"]"===c&&a--}let d=0===s.length?e:e.substring(i),c=d.startsWith("!"),p=c?d.substring(1):d;return{modifiers:s,hasImportantModifier:c,baseClassName:p,maybePostfixModifierPosition:o&&o>i?o-i:void 0}};return o?e=>o({className:e,parseClassName:s}):s},f=e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r},m=e=>({cache:u(e.cacheSize),parseClassName:b(e),...t(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),a="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:i,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:p}=o(r),u=!!p,b=t(u?c.substring(0,p):c);if(!b){if(!u||!(b=t(c))){a=r+(a.length>0?" "+a:a);continue}u=!1}let m=f(i).join(":"),g=d?m+"!":m,h=g+b;if(l.includes(h))continue;l.push(h);let y=n(b,u);for(let e=0;e<y.length;++e){let r=y[e];l.push(g+r)}a=r+(a.length>0?" "+a:a)}return a};function y(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=x(e))&&(t&&(t+=" "),t+=r);return t}let x=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=x(e[t]))&&(o&&(o+=" "),o+=r);return o},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},v=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,G=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>E(e)||z.has(e)||k.test(e),P=e=>H(e,"length",J),E=e=>!!e&&!Number.isNaN(Number(e)),M=e=>H(e,"number",E),$=e=>!!e&&Number.isInteger(Number(e)),I=e=>e.endsWith("%")&&E(e.slice(0,-1)),O=e=>v.test(e),W=e=>j.test(e),q=new Set(["length","size","percentage"]),R=e=>H(e,q,K),A=e=>H(e,"position",K),B=new Set(["image","url"]),F=e=>H(e,B,Q),T=e=>H(e,"",L),D=()=>!0,H=(e,r,o)=>{let t=v.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},J=e=>_.test(e)&&!C.test(e),K=()=>!1,L=e=>G.test(e),Q=e=>S.test(e),U=function(e,...r){let o,t,n;let l=function(a){return t=(o=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=o.cache.set,l=s,s(a)};function s(e){let r=t(e);if(r)return r;let l=h(e,o);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),o=w("blur"),t=w("brightness"),n=w("borderColor"),l=w("borderRadius"),s=w("borderSpacing"),a=w("borderWidth"),i=w("contrast"),d=w("grayscale"),c=w("hueRotate"),p=w("invert"),u=w("gap"),b=w("gradientColorStops"),f=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),h=w("opacity"),y=w("padding"),x=w("saturate"),v=w("scale"),k=w("sepia"),z=w("skew"),j=w("space"),_=w("translate"),C=()=>["auto","contain","none"],G=()=>["auto","hidden","clip","visible","scroll"],S=()=>["auto",O,r],q=()=>[O,r],B=()=>["",N,P],H=()=>["auto",E,O],J=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],K=()=>["solid","dashed","dotted","double","none"],L=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",O],V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[E,O];return{cacheSize:500,separator:":",theme:{colors:[D],spacing:[N,P],blur:["none","",W,O],brightness:X(),borderColor:[e],borderRadius:["none","","full",W,O],borderSpacing:q(),borderWidth:B(),contrast:X(),grayscale:U(),hueRotate:X(),invert:U(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[I,P],inset:S(),margin:S(),opacity:X(),padding:q(),saturate:X(),scale:X(),sepia:U(),skew:X(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[W]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...J(),O]}],overflow:[{overflow:G()}],"overflow-x":[{"overflow-x":G()}],"overflow-y":[{"overflow-y":G()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",$,O]}],basis:[{basis:S()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",$,O]}],"grid-cols":[{"grid-cols":[D]}],"col-start-end":[{col:["auto",{span:["full",$,O]},O]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[D]}],"row-start-end":[{row:["auto",{span:[$,O]},O]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",O,r]}],"min-w":[{"min-w":[O,r,"min","max","fit"]}],"max-w":[{"max-w":[O,r,"none","full","min","max","fit","prose",{screen:[W]},W]}],h:[{h:[O,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[O,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[O,r,"auto","min","max","fit"]}],"font-size":[{text:["base",W,P]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[D]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",E,M]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",N,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...K(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",N,P]}],"underline-offset":[{"underline-offset":["auto",N,O]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...J(),A]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",R]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},F]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...K(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:K()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...K()]}],"outline-offset":[{"outline-offset":[N,O]}],"outline-w":[{outline:[N,P]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[N,P]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",W,T]}],"shadow-color":[{shadow:[D]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...L(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":L()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",W,O]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[$,O]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[N,P,M]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);

