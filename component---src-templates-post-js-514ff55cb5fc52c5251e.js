(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{223:function(e,t,n){"use strict";n.r(t);n(95),n(227);var a=n(0),r=n.n(a),o=n(55),u=n.n(o),c=n(213),i=n.n(c),l=n(211),f=n(228),s=n.n(f);var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("aside",{className:"note"},r.a.createElement("div",{className:"container note-container"},r.a.createElement("div",{className:"flex-author"},r.a.createElement("div",{className:"flex-avatar"},r.a.createElement("img",{className:"avatar",src:s.a,alt:"Tony Nguyen"})),r.a.createElement("div",null,r.a.createElement("p",null,"I’m trongtai37. I document everything I learn and share everyone who start coding careers."," ",r.a.createElement("strong",null,"My site has no ads, sponsors, or bullshit. If you enjoy my content, please consider supporting what I do."))))))},a}(a.Component),p=n(225),m=n.n(p),x=n(43);var h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tags,n=e.size;return r.a.createElement("div",{className:"tag-container"},t&&t.map((function(e){return r.a.createElement(x.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+m()(e)+"/"},r.a.createElement("span",{className:n},e))})))},a}(a.Component),g=n(212),E=n(3),y=n.n(E),b=n(214);a.Component;n.d(t,"default",(function(){return v})),n.d(t,"pageQuery",(function(){return j}));var v=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={error:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=this.state,n=(t.comments,t.error,this.props.pageContext.slug),a=this.props.data.markdownRemark,o=a.frontmatter;a.frontmatter.categories.find((function(e){return"Popular"===e}));o.id||(o.id=n),o.category_id||(o.category_id=y.a.postDefaultCategoryID),o.thumbnail&&(e=o.thumbnail.childImageSharp.fixed);var c=Object(b.b)(o.date),f=Object(b.a)(o),s="http://twitter.com/share?text="+encodeURIComponent(o.title)+"&url="+y.a.siteUrl+"/"+o.slug+"/&via=trongtai37";return r.a.createElement(l.a,null,r.a.createElement(u.a,null,r.a.createElement("title",null,"Post: "+o.title+" – "+y.a.siteTitle)),r.a.createElement(g.a,{postPath:n,postNode:a,postSEO:!0}),r.a.createElement("article",{className:"single container"},r.a.createElement("header",{className:"single-header "+(e?"":"no-thumbnail")},e&&r.a.createElement(i.a,{fixed:o.thumbnail.childImageSharp.fixed}),r.a.createElement("div",{className:"flex"},r.a.createElement("h1",null,o.title),r.a.createElement("div",{className:"post-meta"},r.a.createElement("time",{className:"date"},c),"/",r.a.createElement("a",{className:"twitter-link",href:s},"Share"),"/",r.a.createElement("a",{className:"github-link",href:f,target:"_blank",rel:"noopener noreferrer"},"Edit ✏️")),r.a.createElement(h,{tags:o.tags}))),r.a.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:a.html}})),r.a.createElement(d,{config:y.a}))},a}(a.Component),j="2735630030"},225:function(e,t,n){(function(t){n(4),n(44),n(6),n(56),n(72);var a=1/0,r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,c="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+c+"]",l="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",f="\\d+",s="[\\u2700-\\u27bf]",d="[a-z\\xdf-\\xf6\\xf8-\\xff]",p="[^\\ud800-\\udfff"+c+f+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",h="[A-Z\\xc0-\\xd6\\xd8-\\xde]",g="(?:"+d+"|"+p+")",E="(?:"+h+"|"+p+")",y="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?"+y+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",m,x].join("|")+")[\\ufe0e\\ufe0f]?"+y+")*"),v="(?:"+[s,m,x].join("|")+")"+b,j=RegExp("['’]","g"),N=RegExp(l,"g"),O=RegExp([h+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,h,"$"].join("|")+")",E+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,h+g,"$"].join("|")+")",h+"?"+g+"+(?:['’](?:d|ll|m|re|s|t|ve))?",h+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",f,v].join("|"),"g"),I=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,A="object"==typeof t&&t&&t.Object===Object&&t,_="object"==typeof self&&self&&self.Object===Object&&self,S=A||_||Function("return this")();var w,C=(w={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==w?void 0:w[e]});var L=Object.prototype.toString,U=S.Symbol,k=U?U.prototype:void 0,z=k?k.toString:void 0;function R(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==r}(e))return z?z.call(e):"";var t=e+"";return"0"==t&&1/e==-a?"-0":t}function Z(e){return null==e?"":R(e)}var T,D=(T=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var r=-1,o=e?e.length:0;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=Z(e),void 0===(t=n?void 0:t)?function(e){return I.test(e)}(e)?function(e){return e.match(O)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=Z(e))&&e.replace(u,C).replace(N,"")}(e).replace(j,"")),T,"")});e.exports=D}).call(this,n(146))},227:function(e,t,n){"use strict";var a=n(10),r=n(99)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),a(a.P+a.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(96)("find")},228:function(e,t,n){e.exports=n.p+"static/trongtai-3c2bd529cca23456954104cbf2746bb7.jpg"}}]);
//# sourceMappingURL=component---src-templates-post-js-514ff55cb5fc52c5251e.js.map