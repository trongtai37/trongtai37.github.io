(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"pageQuery",(function(){return m}));var n=a(0),r=a.n(n),o=a(55),s=a.n(o),c=a(211),i=a(225),l=a(3),p=a.n(l);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:'Posts tagged as "'+e+'" – '+p.a.siteTitle}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Posts tagged as ",r.a.createElement("u",null,e)),r.a.createElement(i.a,{postEdges:t})))},n}(n.Component),m="1001091545"},225:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(144),a(145),a(95);var n=a(0),r=a.n(n),o=a(34),s=a(213),c=a.n(s),i=a(73),l=a.n(i),p=a(214);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.getPostList=function(){return this.props.postEdges.map((function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}}))},s.render=function(){var e=this.props.simple,t=this.getPostList();return r.a.createElement("section",{className:"posts "+(e?"simple":"")},t.map((function(t){var a;t.thumbnail&&(a=t.thumbnail.childImageSharp.fixed);var n=t.categories.includes("Popular"),s=Object(p.b)(t.date),i=l()(t.date)>l()().subtract(1,"months");return r.a.createElement(o.Link,{to:t.path,key:t.title},r.a.createElement("div",{className:"each"},a?r.a.createElement(c.a,{fixed:a}):r.a.createElement("div",null),r.a.createElement("div",{className:"each-list-item"},r.a.createElement("h2",null,t.title),!e&&r.a.createElement("div",{className:"excerpt"},s)),i&&r.a.createElement("div",{className:"alert"},r.a.createElement("div",{className:"new"},"New!")),n&&!e&&!i&&r.a.createElement("div",{className:"alert"},r.a.createElement("div",{className:"popular"},"Popular"))))})))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-templates-tag-js-92af204f98c4e470e504.js.map