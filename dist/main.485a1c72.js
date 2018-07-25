!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.extension=t():e.extension=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MAX_BRIGHTNESS=255,t.HUE_MAX_DEGREE=360,t.MAX_PERCENTAGE=100,t.HEX_BASE=16,t.JSON_SPACING=2,t.NUMERICAL_FONT_BOLD=700,t.NUMERICAL_FONT_NORMAL=400,t.NUMERICAL_DECIMAL_PRECISION=1,t.REACT_RULES_WITH_COLOR=["backgroundColor","borderColor","color","shadowColor","textDecorationColor","textShadowColor"],t.HTML_TAGS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","source","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],t.OPTION_NAMES={COLOR_FORMAT:"colorFormat",FONT_SCALE:"fontScale",TEXT_BASE_COMPONENT:"textBaseComponent",COLOR_THEME_PREFIX:"colorThemePrefix",FONT_THEME_PREFIX:"fontThemePrefix",TYPOGRAPHY_COMPONENTS_PATH:"typographyComponentsPath",BLUR_COMPONENT_PATH:"blurComponentPath"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(4);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var n=r(5);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var a=r(6);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var i=r(7);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateTextComponentsFromProject=t.generateTextComponentFromTextStyle=void 0;var o=r(0),n=r(1),a=t.generateTextComponentFromTextStyle=function(e,t,r){var a=(0,n.themeColor)(t,e,r.color),i={fontFamily:`theme.${t.fontThemePrefix||"font"}.${(0,n.generateName)(r.fontFace)}`,fontSize:`${r.fontSize&&(0,n.round)(r.fontSize,o.NUMERICAL_DECIMAL_PRECISION)}${t.fontScale?" * (props.fontScale || 1)":""}`,lineHeight:`${r.lineHeight&&(0,n.round)(r.lineHeight,o.NUMERICAL_DECIMAL_PRECISION)}${t.lineHeight?" * (props.fontScale || 1)":""}`,letterSpacing:r.letterSpacing&&(0,n.round)(r.letterSpacing,o.NUMERICAL_DECIMAL_PRECISION),textAlign:r.textAlign,color:a},u=(0,n.createJavascriptStringFromObj)(i);return`export const ${(0,n.uppercaseFirst)((0,n.generateName)(r.name))} = glamorous${t.textBaseComponent?`(${t.textBaseComponent})`:".text"}((props, theme) => (${u}))`};t.generateTextComponentsFromProject=function(e,t,r){var o="",i={},u=!0,l=!1,s=void 0;try{for(var c,f=r[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var d=c.value,p=(0,n.generateName)(d.fontFace);i[p]||(i[p]=d.fontFace),o+=`${a(t,e,d)}\n\n`}}catch(e){l=!0,s=e}finally{try{!u&&f.return&&f.return()}finally{if(l)throw s}}return`// Fonts (Put this in your theme)\n\nconst Fonts = ${(0,n.createJavascriptStringFromObj)(i)}\n\n// Text components\n\n${o}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(8),a=r(9),i=r(0),u=function(e,t){var r={colorFormat:e.getOption(i.OPTION_NAMES.COLOR_FORMAT)};return{code:(0,n.generateColorObjectFromProject)(r,e.project,t),language:"javascript"}},l=function(e,t){var r={colorFormat:e.getOption(i.OPTION_NAMES.COLOR_FORMAT),fontScale:e.getOption(i.OPTION_NAMES.FONT_SCALE),textBaseComponent:e.getOption(i.OPTION_NAMES.TEXT_BASE_COMPONENT),colorThemePrefix:e.getOption(i.OPTION_NAMES.COLOR_THEME_PREFIX),fontThemePrefix:e.getOption(i.OPTION_NAMES.FONT_THEME_PREFIX)};return{code:(0,o.generateTextComponentsFromProject)(r,e.project,t),language:"javascript"}};t.default={layer:function(e,t){var r={colorFormat:e.getOption(i.OPTION_NAMES.COLOR_FORMAT),textBaseComponent:e.getOption(i.OPTION_NAMES.TEXT_BASE_COMPONENT),colorThemePrefix:e.getOption(i.OPTION_NAMES.COLOR_THEME_PREFIX),fontThemePrefix:e.getOption(i.OPTION_NAMES.FONT_THEME_PREFIX),typographyComponentsPath:e.getOption(i.OPTION_NAMES.TYPOGRAPHY_COMPONENTS_PATH),blurComponentPath:e.getOption(i.OPTION_NAMES.BLUR_COMPONENT_PATH)};return{code:(0,a.generateLayerComponent)(r,e.project,t),language:"javascript"}},styleguideColors:u,styleguideTextStyles:l,comment:function(e,t){return`// ${t}`},exportStyleguideColors:function(e,t){return{code:u(e,t).code,filename:"index.js",language:"javascript"}},exportStyleguideTextStyles:function(e,t){return{code:l(e,t).code,filename:"index.js",language:"javascript"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.themeColor=t.getColorStringByFormat=t.toDefaultString=t.getColorMapByFormat=t.blendColors=void 0;var o=r(0),n=new Intl.NumberFormat("en-US",{useGrouping:!1,maximumFractionDigits:2});function a(e,t){if("r"in e&&"g"in e&&"b"in e&&"a"in e)switch(t){case"hex":return i(e);case"rgb":return u(e);case"hsl":return function(e){var t=e.toHSL(),r=`${Math.round(t.h*o.HUE_MAX_DEGREE)}, `+`${Math.round(t.s*o.MAX_PERCENTAGE)}%, `+`${Math.round(t.l*o.MAX_PERCENTAGE)}%`;return e.a<1?`hsla(${r}, ${n.format(e.a)})`:`hsl(${r})`}(e);case"default":default:return l(e)}}function i(e,t){var r=e.hexBase();if(e.a<1){var n=function(e){return(e<o.HEX_BASE?"0":"")+e.toString(o.HEX_BASE)}(e.a*o.MAX_BRIGHTNESS);r=t?n+r:r+n}return`#${r}`}function u(e){var t=`${Math.round(e.r)}, ${Math.round(e.g)}, ${Math.round(e.b)}`;return e.a<1?`rgba(${t}, ${n.format(e.a)})`:`rgb(${t})`}function l(e){return e.a<1?u(e):i(e)}t.blendColors=function(e){return e.reduce(function(e,t){return e.blend(t)})},t.getColorMapByFormat=function(e,t){return e.reduce(function(e,r){return e[a(r,t)]=r.name,e},{})},t.toDefaultString=l,t.getColorStringByFormat=a,t.themeColor=function(e,t,r){var o=t.findColorEqual(r)||a(r,e.colorFormat);return o.name?`theme.${e.colorThemePrefix||"color"}.${o.name}`:o}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createJavascriptStringFromObj=t.selectorize=t.round=t.isHtmlTag=void 0;var o=r(0);function n(e){return e.trim().replace(/[^\s\w-]/g,"").replace(/^(-?\d+)+/,"").replace(/\s+/g,"-")}function a(e){return o.HTML_TAGS.includes(e)}t.isHtmlTag=a,t.round=function(e,t){var r=Number(e).toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:t});return Number(r)},t.selectorize=function(e){if(!e)return"";var t=e.trim();if(a(e))return t.toLowerCase();if(/^[#.]/.test(t)){var r=n(t.substr(1));if(r)return t[0]+r}return(t=n(t))&&`.${t}`},t.createJavascriptStringFromObj=function(e){var t=JSON.stringify(e,null,o.JSON_SPACING);return t=t.replace(/"(.+)":/g,"$1:").replace(/"theme.(.*)"/g,"theme.$1").replace(/"/g,"'")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.layerHasGradient=function(e){return e.fills.some(function(e){return"gradient"===e.type})},t.layerHasBlendMode=function(e){return e.fills.some(function(e){return e.blendMode&&"normal"!==e.blendMode})}},function(e,t,r){"use strict";function o(e){return e.charAt(0).toLowerCase()+e.substring(1)}function n(e){return e.charAt(0).toUpperCase()+e.substring(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.lowercaseFirst=o,t.uppercaseFirst=n,t.generateName=function(e){return function(e){return o(e.map(n).join(""))}(function(e){var t=e.match(/\d+|[a-z]+|[A-Z]+(?![a-z])|[A-Z][a-z]+/g);if(!t)return["invalid","name"];return t.map(function(e){return e.toLowerCase()})}(e))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateColorObjectFromProject=void 0;var o=r(1);t.generateColorObjectFromProject=function(e,t,r){var n={},a=!0,i=!1,u=void 0;try{for(var l,s=r[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var c=l.value;c.name&&(n[c.name]=(0,o.getColorStringByFormat)(c,e.colorFormat))}}catch(e){i=!0,u=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw u}}return`const base = ${(0,o.createJavascriptStringFromObj)(n)}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateLayerComponent=void 0;var o=r(0),n=r(2),a=r(1),i=function(e,t,r,o){var i="",u=[];if(r.textStyles.length>0){for(var l="",s="",c=0;c<r.textStyles.length;c++){var f=r.textStyles[c].range;if(0!==f.end&&f.start!==r.content.length&&f.start!==f.end){var d=r.textStyles[c].textStyle,p=t.findTextStyleEqual(d),m="";if(p){if(m=(0,a.uppercaseFirst)((0,a.generateName)(p.name)),c>0&&m===u[c-1])continue;l+=`${m}, `}else d.name=m=`StyledText${c}`,s+=`${(0,n.generateTextComponentFromTextStyle)(t,e,d)}\n\n`;u.push(m)}}l.length>0&&(i+=`import { ${l.substring(0,l.length-2)} } from '${e.typographyComponentsPath}'\n\n`),s.length>0&&(e.textBaseComponent&&(i+=`import { ${e.textBaseComponent} } from '${e.typographyComponentsPath}\n\n`),i+=s)}if(u.length>1){for(var g="",O=0;O<u.length;O++)g+=`<${u[O]}>{text${O}}</${u[O]}>`;i+=`const StyledContainer = glamorous.view((props, theme) => (${(0,a.createJavascriptStringFromObj)(o)})\n\n`,i+=`export const Component = props => {\n    const { ${r.textStyles.map(function(e,t){return(t>0?" ":"")+"text"+t})} } = props\n    return <StyledContainer {...props}>\n      ${g}\n    </StyledContainer>\n  }`}else{var h=(0,a.createJavascriptStringFromObj)(o);i+=`export const Component = glamorous(${u[0]}){((props, theme) => (${h})`}return i},u=function(e,t,r,o){var n="";e.blurComponentPath?n=`import { BlurView } from '${e.blurComponentPath}'\n\n`:(n="import { BlurView as RNBlurView } from 'react-native-blur'\n\n",n+=`const StyledContainer = glamorous.view((props, theme) => (${(0,a.createJavascriptStringFromObj)(o)})\n\n`,n+="const BlurView = glamorous(RNBlurView)({\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0\n  })\n\n");return n+='export const Component = props => {\n  const { children } = props\n  return <StyledContainer {...props}>\n    <BlurView blurType="dark" /> // "xlight", "light" or "dark"\n    {children}\n  </StyledContainer>\n}'},l=function(e,t,r,n){return"text"===n?{textShadowColor:(0,a.themeColor)(e,t,r.color),textShadowOffset:{width:(0,a.round)(r.offsetX/t.densityDivisor,o.NUMERICAL_DECIMAL_PRECISION),height:(0,a.round)(r.offsetY/t.densityDivisor,o.NUMERICAL_DECIMAL_PRECISION)},textShadowRadius:(0,a.round)(r.blurRadius/t.densityDivisor,o.NUMERICAL_DECIMAL_PRECISION)}:"android"===t.type?{}:{shadowColor:(0,a.themeColor)(e,t,r.color),shadowOffset:{width:(0,a.round)(r.offsetX/t.densityDivisor,o.NUMERICAL_DECIMAL_PRECISION),height:(0,a.round)(r.offsetY/t.densityDivisor,o.NUMERICAL_DECIMAL_PRECISION)},shadowRadius:(0,a.round)(r.blurRadius/t.densityDivisor,o.NUMERICAL_DECIMAL_PRECISION),shadowOpacity:1}},s=function(e,t,r,o){if("text"===o||r.fill&&"gradient"===r.fill.type)return{};var n=(0,a.themeColor)(e,t,r.fill.color);return{borderStyle:"solid",borderWidth:(0,a.round)(r.thickness/t.densityDivisor,1),borderColor:n}};t.generateLayerComponent=function(e,t,r){var o={};if(o.height=r.rect.height,o.width=r.rect.width,r.fills.length&&r.fills[0].color){var n=(0,a.blendColors)(r.fills.map(function(e){return e.color}));o.backgroundColor=(0,a.themeColor)(e,t,n)}return r.shadows.length&&Object.assign(o,l(e,t,r.shadows[r.shadows.length-1],r.type)),r.borders.length&&Object.assign(o,s(e,t,r.borders[r.borders.length-1],r.type)),r.borderRadius>0&&(o.borderRadius=r.borderRadius),r.opacity<1&&(o.opacity=r.opacity),r.rotation&&(o.transform=[{rotate:`${r.rotation}deg`}]),"text"===r.type?i(e,t,r,o):r.blur?u(e,t,r,o):`const StyledContainer = glamorous.view((props, theme) => (${(0,a.createJavascriptStringFromObj)(o)})`}}]).default});