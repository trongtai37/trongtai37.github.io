(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{218:function(e,t,u){"use strict";u.r(t),u.d(t,"default",(function(){return s})),u.d(t,"pageQuery",(function(){return p}));var n=u(0),r=u.n(n),f=u(55),o=u(43),a=u(223),c=u.n(a),i=u(209),l=u(210),d=u(3),x=u.n(d);var s=function(e){var t,u;function n(){return e.apply(this,arguments)||this}return u=e,(t=n).prototype=Object.create(u.prototype),t.prototype.constructor=t,t.__proto__=u,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.group;return r.a.createElement(i.a,null,r.a.createElement(l.a,null),r.a.createElement(f.Helmet,{title:"Categories – "+x.a.siteTitle}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Categories"),r.a.createElement("div",{className:"tag-container"},e.map((function(e){return r.a.createElement(o.Link,{to:"/categories/"+c()(e.fieldValue),key:e.fieldValue},r.a.createElement("span",{key:e.fieldValue},e.fieldValue," ",r.a.createElement("strong",{className:"count"},e.totalCount)))})))))},n}(n.Component),p="1217815623"},223:function(e,t,u){(function(t){u(4),u(44),u(6),u(56),u(72);var n=1/0,r="[object Symbol]",f=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="["+a+"]",i="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",d="[\\u2700-\\u27bf]",x="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+a+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",E="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+x+"|"+s+")",g="(?:"+E+"|"+s+")",y="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?"+y+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",p,b].join("|")+")[\\ufe0e\\ufe0f]?"+y+")*"),j="(?:"+[d,p,b].join("|")+")"+v,A=RegExp("['’]","g"),O=RegExp(i,"g"),h=RegExp([E+"?"+x+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[c,E,"$"].join("|")+")",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[c,E+m,"$"].join("|")+")",E+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",E+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,j].join("|"),"g"),L=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,z="object"==typeof t&&t&&t.Object===Object&&t,C="object"==typeof self&&self&&self.Object===Object&&self,I=z||C||Function("return this")();var S,U=(S={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==S?void 0:S[e]});var Z=Object.prototype.toString,k=I.Symbol,w=k?k.prototype:void 0,R=w?w.toString:void 0;function N(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Z.call(e)==r}(e))return R?R.call(e):"";var t=e+"";return"0"==t&&1/e==-n?"-0":t}function T(e){return null==e?"":N(e)}var V,D=(V=function(e,t,u){return e+(u?"-":"")+t.toLowerCase()},function(e){return function(e,t,u,n){var r=-1,f=e?e.length:0;for(n&&f&&(u=e[++r]);++r<f;)u=t(u,e[r],r,e);return u}(function(e,t,u){return e=T(e),void 0===(t=u?void 0:t)?function(e){return L.test(e)}(e)?function(e){return e.match(h)||[]}(e):function(e){return e.match(f)||[]}(e):e.match(t)||[]}(function(e){return(e=T(e))&&e.replace(o,U).replace(O,"")}(e).replace(A,"")),V,"")});e.exports=D}).call(this,u(144))}}]);
//# sourceMappingURL=component---src-pages-categories-js-737ac5161d4413c1d83e.js.map