/*! For license information please see commons-59bfe9a4443ac44d7cdf.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{8678:function(e,t,r){"use strict";var n,a=r(1880),i=r(7294),o=r(1883);const s=r(2788).ZP.div(n||(n=(0,a.Z)(["\n  header > a {\n    color: black;\n  }\n"])));t.Z=e=>{let{location:t,title:r,children:n}=e;const a="/"===t.pathname,c=i.createElement(o.Link,{className:"header-link-home",to:"/"},r);return i.createElement(s,{className:"global-wrapper","data-is-root-path":a},i.createElement("header",{className:"global-header"},i.createElement("div",{className:"global-header-center"},c)),i.createElement("div",{className:"global-center"},i.createElement("main",{className:"global-main"},n)))}},9357:function(e,t,r){"use strict";var n=r(7294),a=r(1883);t.Z=e=>{var t,r,i;let{description:o,title:s,children:c}=e;const{site:l}=(0,a.useStaticQuery)("2841359383"),u=o||l.siteMetadata.description,f=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,f?s+" | "+f:s),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{property:"og:title",content:s}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r||null===(i=r.social)||void 0===i?void 0:i.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:s}),n.createElement("meta",{name:"twitter:description",content:u}),c)}},8679:function(e,t,r){"use strict";var n=r(9864),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?o:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=o;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var a=p(r);a&&a!==h&&e(t,a,n)}var o=u(r);f&&(o=o.concat(f(r)));for(var s=c(t),m=c(r),g=0;g<o.length;++g){var y=o[g];if(!(i[y]||n&&n[y]||m&&m[y]||s&&s[y])){var v=d(r,y);try{l(t,y,v)}catch(b){}}}}return t}},9921:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case f:case i:case s:case o:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case m:case c:return e;default:return t}}case a:return t}}}function w(e){return k(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=s,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||k(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===l},t.isContextProvider=function(e){return k(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===i},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===m},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===o},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===s||e===o||e===p||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===v||e.$$typeof===b||e.$$typeof===S||e.$$typeof===y)},t.typeOf=k},9864:function(e,t,r){"use strict";e.exports=r(9921)},6774:function(e){e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var l=i[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(a=r?r.call(n,u,f,l):void 0)||void 0===a&&u!==f)return!1}return!0}},2788:function(e,t,r){"use strict";r.d(t,{ZP:function(){return $e}});var n=r(9864),a=r(7294),i=r(6774),o=r.n(i);var s=function(e){function t(e,n,c,l,d){for(var p,h,m,g,S,w=0,C=0,A=0,x=0,E=0,T=0,_=m=p=0,M=0,z=0,D=0,F=0,L=c.length,B=L-1,G="",H="",W="",Y="";M<L;){if(h=c.charCodeAt(M),M===B&&0!==C+x+A+w&&(0!==C&&(h=47===C?10:47),x=A=w=0,L++,B++),0===C+x+A+w){if(M===B&&(0<z&&(G=G.replace(f,"")),0<G.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(M)}h=59}switch(h){case 123:for(p=(G=G.trim()).charCodeAt(0),m=1,F=++M;M<L;){switch(h=c.charCodeAt(M)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(M+1)){case 42:case 47:e:{for(_=M+1;_<B;++_)switch(c.charCodeAt(_)){case 47:if(42===h&&42===c.charCodeAt(_-1)&&M+2!==_){M=_+1;break e}break;case 10:if(47===h){M=_+1;break e}}M=_}}break;case 91:h++;case 40:h++;case 34:case 39:for(;M++<B&&c.charCodeAt(M)!==h;);}if(0===m)break;M++}if(m=c.substring(F,M),0===p&&(p=(G=G.replace(u,"").trim()).charCodeAt(0)),64===p){switch(0<z&&(G=G.replace(f,"")),h=G.charCodeAt(1)){case 100:case 109:case 115:case 45:z=n;break;default:z=j}if(F=(m=t(n,z,m,h,d+1)).length,0<$&&(S=s(3,m,z=r(j,G,D),n,I,P,F,h,d,l),G=z.join(""),void 0!==S&&0===(F=(m=S.trim()).length)&&(h=0,m="")),0<F)switch(h){case 115:G=G.replace(k,o);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(y,"$1 $2"))+"{"+m+"}",m=1===R||2===R&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===l&&(H+=m,m="")}else m=""}else m=t(n,r(n,G,D),m,l,d+1);W+=m,m=D=z=_=p=0,G="",h=c.charCodeAt(++M);break;case 125:case 59:if(1<(F=(G=(0<z?G.replace(f,""):G).trim()).length))switch(0===_&&(p=G.charCodeAt(0),45===p||96<p&&123>p)&&(F=(G=G.replace(" ",":")).length),0<$&&void 0!==(S=s(1,G,n,e,I,P,H.length,l,d,l))&&0===(F=(G=S.trim()).length)&&(G="\0\0"),p=G.charCodeAt(0),h=G.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){Y+=G+c.charAt(M);break}default:58!==G.charCodeAt(F-1)&&(H+=a(G,p,h,G.charCodeAt(2)))}D=z=_=p=0,G="",h=c.charCodeAt(++M)}}switch(h){case 13:case 10:47===C?C=0:0===1+p&&107!==l&&0<G.length&&(z=1,G+="\0"),0<$*N&&s(0,G,n,e,I,P,H.length,l,d,l),P=1,I++;break;case 59:case 125:if(0===C+x+A+w){P++;break}default:switch(P++,g=c.charAt(M),h){case 9:case 32:if(0===x+w+C)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===x+C+w&&(z=D=1,g="\f"+g);break;case 108:if(0===x+C+w+O&&0<_)switch(M-_){case 2:112===E&&58===c.charCodeAt(M-3)&&(O=E);case 8:111===T&&(O=T)}break;case 58:0===x+C+w&&(_=M);break;case 44:0===C+A+x+w&&(z=1,g+="\r");break;case 34:case 39:0===C&&(x=x===h?0:0===x?h:x);break;case 91:0===x+C+A&&w++;break;case 93:0===x+C+A&&w--;break;case 41:0===x+C+w&&A--;break;case 40:if(0===x+C+w){if(0===p)if(2*E+3*T==533);else p=1;A++}break;case 64:0===C+A+x+w+_+m&&(m=1);break;case 42:case 47:if(!(0<x+w+A))switch(C){case 0:switch(2*h+3*c.charCodeAt(M+1)){case 235:C=47;break;case 220:F=M,C=42}break;case 42:47===h&&42===E&&F+2!==M&&(33===c.charCodeAt(F+2)&&(H+=c.substring(F,M+1)),g="",C=0)}}0===C&&(G+=g)}T=E,E=h,M++}if(0<(F=H.length)){if(z=n,0<$&&(void 0!==(S=s(2,H,z,e,I,P,F,l,d,l))&&0===(H=S).length))return Y+H+W;if(H=z.join(",")+"{"+H+"}",0!=R*O){switch(2!==R||i(H,2)||(O=0),O){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}O=0}}return Y+H+W}function r(e,t,r){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<i;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<i;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",a[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===R||2===R&&i(c,1)?"-webkit-"+c+c:c}if(0===R||2===R&&!i(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return p.test(o)?o.replace(d,":-webkit-")+o.replace(d,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(S,"tb");break;case 232:c=o.replace(S,"tb-rl");break;case 220:c=o.replace(S,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),_(2!==t?n:n.replace(A,"$1"),r,t)}function o(e,t){var r=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,a,i,o,s,c,u){for(var f,d=0,p=t;d<$;++d)switch(f=T[d].call(l,e,p,r,n,a,i,o,s,c,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(_=null,e?"function"!=typeof e?R=1:(R=2,_=e):R=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<$){var a=s(-1,r,n,n,I,P,0,0,0,0);void 0!==a&&"string"==typeof a&&(r=a)}var i=t(j,n,r,0,0);return 0<$&&(void 0!==(a=s(-2,i,n,n,I,P,i.length,0,0,0))&&(i=a)),"",O=0,P=I=1,i}var u=/^\0+/g,f=/[\0\r\f]/g,d=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,k=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,C=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,P=1,I=1,O=0,R=1,j=[],T=[],$=0,_=null,N=0;return l.use=function e(t){switch(t){case void 0:case null:$=T.length=0;break;default:if("function"==typeof t)T[$++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else N=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function l(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,f=l((function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=r(8679),p=r.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var m=function(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r},g=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,n.typeOf)(e)},y=Object.freeze([]),v=Object.freeze({});function b(e){return"function"==typeof e}function S(e){return e.displayName||e.name||"Component"}function k(e){return e&&"string"==typeof e.styledComponentId}var w="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",C="undefined"!=typeof window&&"HTMLElement"in window,A=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&(void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)));function x(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var E=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,a=n;e>=a;)(a<<=1)<0&&x(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var i=n;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),s=0,c=t.length;s<c;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var a=r;a<n;a++)this.tag.deleteRule(r)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),a=n+r,i=n;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),P=new Map,I=new Map,O=1,R=function(e){if(P.has(e))return P.get(e);for(;I.has(O);)O++;var t=O++;return P.set(e,t),I.set(t,e),t},j=function(e){return I.get(e)},T=function(e,t){t>=O&&(O=t+1),P.set(e,t),I.set(t,e)},$="style["+w+'][data-styled-version="5.3.10"]',_=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),N=function(e,t,r){for(var n,a=r.split(","),i=0,o=a.length;i<o;i++)(n=a[i])&&e.registerName(t,n)},M=function(e,t){for(var r=(t.textContent||"").split("/*!sc*/\n"),n=[],a=0,i=r.length;a<i;a++){var o=r[a].trim();if(o){var s=o.match(_);if(s){var c=0|parseInt(s[1],10),l=s[2];0!==c&&(T(l,c),N(e,l,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(o)}}},z=function(){return r.nc},D=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(e){for(var t=e.childNodes,r=t.length;r>=0;r--){var n=t[r];if(n&&1===n.nodeType&&n.hasAttribute(w))return n}}(r),i=void 0!==a?a.nextSibling:null;n.setAttribute(w,"active"),n.setAttribute("data-styled-version","5.3.10");var o=z();return o&&n.setAttribute("nonce",o),r.insertBefore(n,i),n},F=function(){function e(e){var t=this.element=D(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var a=t[r];if(a.ownerNode===e)return a}x(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),L=function(){function e(e){var t=this.element=D(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t),n=this.nodes[e];return this.element.insertBefore(r,n||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),B=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),G=C,H={isServer:!C,useCSSOMInjection:!A},W=function(){function e(e,t,r){void 0===e&&(e=v),void 0===t&&(t={}),this.options=h({},H,{},e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&C&&G&&(G=!1,function(e){for(var t=document.querySelectorAll($),r=0,n=t.length;r<n;r++){var a=t[r];a&&"active"!==a.getAttribute(w)&&(M(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return R(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(h({},this.options,{},t),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(r=(t=this.options).isServer,n=t.useCSSOMInjection,a=t.target,e=r?new B(a):n?new F(a):new L(a),new E(e)));var e,t,r,n,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(R(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},t.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(R(e),r)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(R(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),r=t.length,n="",a=0;a<r;a++){var i=j(a);if(void 0!==i){var o=e.names.get(i),s=t.getGroup(a);if(o&&s&&o.size){var c=w+".g"+a+'[id="'+i+'"]',l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+=e+",")})),n+=""+s+c+'{content:"'+l+'"}/*!sc*/\n'}}}return n}(this)},e}(),Y=/(a)(d)/gi,U=function(e){return String.fromCharCode(e+(e>25?39:97))};function q(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=U(t%52)+r;return(U(t%52)+r).replace(Y,"$1-$2")}var V=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Z=function(e){return V(5381,e)};function X(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(b(r)&&!k(r))return!1}return!0}var K=Z("5.3.10"),J=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&X(e),this.componentId=t,this.baseHash=V(K,t),this.baseStyle=r,W.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(n,this.staticRulesId))a.push(this.staticRulesId);else{var i=ge(this.rules,e,t,r).join(""),o=q(V(this.baseHash,i)>>>0);if(!t.hasNameForId(n,o)){var s=r(i,"."+o,void 0,n);t.insertRules(n,o,s)}a.push(o),this.staticRulesId=o}else{for(var c=this.rules.length,l=V(this.baseHash,r.hash),u="",f=0;f<c;f++){var d=this.rules[f];if("string"==typeof d)u+=d;else if(d){var p=ge(d,e,t,r),h=Array.isArray(p)?p.join(""):p;l=V(l,h+f),u+=h}}if(u){var m=q(l>>>0);if(!t.hasNameForId(n,m)){var g=r(u,"."+m,void 0,n);t.insertRules(n,m,g)}a.push(m)}}return a.join(" ")},e}(),Q=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,r,n,a,i=void 0===e?v:e,o=i.options,c=void 0===o?v:o,l=i.plugins,u=void 0===l?y:l,f=new s(c),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(r,n,a,i,o,s,c,l,u,f){switch(r){case 1:if(0===u&&64===n.charCodeAt(0))return e(n+";"),"";break;case 2:if(0===l)return n+"/*|*/";break;case 3:switch(l){case 102:case 112:return e(a[0]+n),"";default:return n+(0===f?"/*|*/":"")}case-2:n.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),h=function(e,n,i){return 0===n&&-1!==ee.indexOf(i[r.length])||i.match(a)?e:"."+t};function m(e,i,o,s){void 0===s&&(s="&");var c=e.replace(Q,""),l=i&&o?o+" "+i+" { "+c+" }":c;return t=s,r=i,n=new RegExp("\\"+r+"\\b","g"),a=new RegExp("(\\"+r+"\\b){2,}"),f(o||!i?"":i,l)}return f.use([].concat(u,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(r)>0&&(a[0]=a[0].replace(n,h))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||x(15),V(e,t.name)}),5381).toString():"",m}var re=a.createContext(),ne=(re.Consumer,a.createContext()),ae=(ne.Consumer,new W),ie=te();function oe(){return(0,a.useContext)(re)||ae}function se(){return(0,a.useContext)(ne)||ie}function ce(e){var t=(0,a.useState)(e.stylisPlugins),r=t[0],n=t[1],i=oe(),s=(0,a.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=(0,a.useMemo)((function(){return te({options:{prefix:!e.disableVendorPrefixes},plugins:r})}),[e.disableVendorPrefixes,r]);return(0,a.useEffect)((function(){o()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]),a.createElement(re.Provider,{value:s},a.createElement(ne.Provider,{value:c},e.children))}var le=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=ie);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.toString=function(){return x(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ie),this.name+e.hash},e}(),ue=/([A-Z])/,fe=/([A-Z])/g,de=/^ms-/,pe=function(e){return"-"+e.toLowerCase()};function he(e){return ue.test(e)?e.replace(fe,pe).replace(de,"-ms-"):e}var me=function(e){return null==e||!1===e||""===e};function ge(e,t,r,n){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=ge(e[o],t,r,n))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return me(e)?"":k(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:ge(e(t),t,r,n):e instanceof le?r?(e.inject(r,n),e.getName(n)):e:g(e)?function e(t,r){var n,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!me(t[o])&&(Array.isArray(t[o])&&t[o].isCss||b(t[o])?i.push(he(o)+":",t[o],";"):g(t[o])?i.push.apply(i,e(t[o],o)):i.push(he(o)+": "+(n=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||n in c||n.startsWith("--")?String(a).trim():a+"px")+";")));return r?[r+" {"].concat(i,["}"]):i}(e):e.toString();var l}var ye=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return b(e)||g(e)?ye(ge(m(y,[e].concat(r)))):0===r.length&&1===e.length&&"string"==typeof e[0]?e:ye(ge(m(e,r)))}new Set;var be=function(e,t,r){return void 0===r&&(r=v),e.theme!==r.theme&&e.theme||t||r.theme},Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function we(e){return e.replace(Se,"-").replace(ke,"")}var Ce=function(e){return q(Z(e)>>>0)};function Ae(e){return"string"==typeof e&&!0}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ee=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Pe(e,t,r){var n=e[r];xe(t)&&xe(n)?Ie(n,t):e[r]=t}function Ie(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var a=0,i=r;a<i.length;a++){var o=i[a];if(xe(o))for(var s in o)Ee(s)&&Pe(e,o[s],s)}return e}var Oe=a.createContext();Oe.Consumer;var Re={};function je(e,t,r){var n=k(e),i=!Ae(e),o=t.attrs,s=void 0===o?y:o,c=t.componentId,l=void 0===c?function(e,t){var r="string"!=typeof e?"sc":we(e);Re[r]=(Re[r]||0)+1;var n=r+"-"+Ce("5.3.10"+r+Re[r]);return t?t+"-"+n:n}(t.displayName,t.parentComponentId):c,u=t.displayName,d=void 0===u?function(e){return Ae(e)?"styled."+e:"Styled("+S(e)+")"}(e):u,m=t.displayName&&t.componentId?we(t.displayName)+"-"+t.componentId:t.componentId||l,g=n&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,w=t.shouldForwardProp;n&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(r,n,a){return e.shouldForwardProp(r,n,a)&&t.shouldForwardProp(r,n,a)}:e.shouldForwardProp);var C,A=new J(r,m,n?e.componentStyle:void 0),x=A.isStatic&&0===s.length,E=function(e,t){return function(e,t,r,n){var i=e.attrs,o=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,l=e.shouldForwardProp,u=e.styledComponentId,d=e.target,p=function(e,t,r){void 0===e&&(e=v);var n=h({},t,{theme:e}),a={};return r.forEach((function(e){var t,r,i,o=e;for(t in b(o)&&(o=o(n)),o)n[t]=a[t]="className"===t?(r=a[t],i=o[t],r&&i?r+" "+i:r||i):o[t]})),[n,a]}(be(t,(0,a.useContext)(Oe),s)||v,t,i),m=p[0],g=p[1],y=function(e,t,r,n){var a=oe(),i=se();return t?e.generateAndInjectStyles(v,a,i):e.generateAndInjectStyles(r,a,i)}(o,n,m),S=r,k=g.$as||t.$as||g.as||t.as||d,w=Ae(k),C=g!==t?h({},t,{},g):t,A={};for(var x in C)"$"!==x[0]&&"as"!==x&&("forwardedAs"===x?A.as=C[x]:(l?l(x,f,k):!w||f(x))&&(A[x]=C[x]));return t.style&&g.style!==t.style&&(A.style=h({},t.style,{},g.style)),A.className=Array.prototype.concat(c,u,y!==u?y:null,t.className,g.className).filter(Boolean).join(" "),A.ref=S,(0,a.createElement)(k,A)}(C,e,t,x)};return E.displayName=d,(C=a.forwardRef(E)).attrs=g,C.componentStyle=A,C.displayName=d,C.shouldForwardProp=w,C.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):y,C.styledComponentId=m,C.target=n?e.target:e,C.withComponent=function(e){var n=t.componentId,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,["componentId"]),i=n&&n+"-"+(Ae(e)?e:we(S(e)));return je(e,h({},a,{attrs:g,componentId:i}),r)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=n?Ie({},e.defaultProps,t):t}}),Object.defineProperty(C,"toString",{value:function(){return"."+C.styledComponentId}}),i&&p()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var Te=function(e){return function e(t,r,a){if(void 0===a&&(a=v),!(0,n.isValidElementType)(r))return x(1,String(r));var i=function(){return t(r,a,ve.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,h({},a,{},n))},i.attrs=function(n){return e(t,r,h({},a,{attrs:Array.prototype.concat(a.attrs,n).filter(Boolean)}))},i}(je,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Te[e]=Te(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=X(e),W.registerId(this.componentId+1)}var t=e.prototype;t.createStyles=function(e,t,r,n){var a=n(ge(this.rules,t,r,n).join(""),""),i=this.componentId+e;r.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,r,n){e>2&&W.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=z();return"<style "+[r&&'nonce="'+r+'"',w+'="true"','data-styled-version="5.3.10"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?x(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return x(2);var r=((t={})[w]="",t["data-styled-version"]="5.3.10",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=z();return n&&(r.nonce=n),[a.createElement("style",h({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new W({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?x(2):a.createElement(ce,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return x(3)}}();var $e=Te},1880:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=commons-59bfe9a4443ac44d7cdf.js.map