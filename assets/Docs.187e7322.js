import{S as W,i as J,s as X,E as le,F as ue,G as ce,H as ge,t as R,u as O,J as we,K as de,e as E,b as ee,c as T,f as Ae,g as B,h as L,j as Y,k as H,L as Fe,p as ne,q as te,v as ae,n as pe,r as $e}from"./vendor.087b2ff5.js";import{m as Se,f as fe,j as _e}from"./index.f0f3a47c.js";import{e as Ee}from"./accordion.a676dc1b.js";const me=Symbol("src");function Ce(p){let l;const t=p[2].default,a=le(t,p,p[1],null);return{c(){a&&a.c()},m(u,d){a&&a.m(u,d),l=!0},p(u,[d]){a&&a.p&&(!l||d&2)&&ue(a,t,u,u[1],l?ge(t,u[1],d,null):ce(u[1]),null)},i(u){l||(R(a,u),l=!0)},o(u){O(a,u),l=!1},d(u){a&&a.d(u)}}}function Pe(p,l,t){let{$$slots:a={},$$scope:u}=l,{src:d=""}=l;return we(me,d),p.$$set=f=>{"src"in f&&t(0,d=f.src),"$$scope"in f&&t(1,u=f.$$scope)},[d,u,a]}class Te extends W{constructor(l){super();J(this,l,Pe,Ce,X,{src:0})}}var je=`/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	/* This background color was intended by the author of this theme. */
	background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`,ze=`/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #8292a2;
}

.token.punctuation {
	color: #f8f8f2;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`,he={exports:{}};(function(p){var l=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,f={},s={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function n(e){return e instanceof b?new b(e.type,n(e.content),e.alias):Array.isArray(e)?e.map(n):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++d}),n.__id},clone:function n(e,r){r=r||{};var i,o;switch(s.util.type(e)){case"Object":if(o=s.util.objId(e),r[o])return r[o];i={},r[o]=i;for(var g in e)e.hasOwnProperty(g)&&(i[g]=n(e[g],r));return i;case"Array":return o=s.util.objId(e),r[o]?r[o]:(i=[],r[o]=i,e.forEach(function(h,c){i[c]=n(h,r)}),i);default:return e}},getLanguage:function(n){for(;n;){var e=u.exec(n.className);if(e)return e[1].toLowerCase();n=n.parentElement}return"none"},setLanguage:function(n,e){n.className=n.className.replace(RegExp(u,"gi"),""),n.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(n){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==n)return e[r]}return null}},isActive:function(n,e,r){for(var i="no-"+e;n;){var o=n.classList;if(o.contains(e))return!0;if(o.contains(i))return!1;n=n.parentElement}return!!r}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(n,e){var r=s.util.clone(s.languages[n]);for(var i in e)r[i]=e[i];return r},insertBefore:function(n,e,r,i){i=i||s.languages;var o=i[n],g={};for(var h in o)if(o.hasOwnProperty(h)){if(h==e)for(var c in r)r.hasOwnProperty(c)&&(g[c]=r[c]);r.hasOwnProperty(h)||(g[h]=o[h])}var k=i[n];return i[n]=g,s.languages.DFS(s.languages,function(w,j){j===k&&w!=n&&(this[w]=g)}),g},DFS:function n(e,r,i,o){o=o||{};var g=s.util.objId;for(var h in e)if(e.hasOwnProperty(h)){r.call(e,h,e[h],i||h);var c=e[h],k=s.util.type(c);k==="Object"&&!o[g(c)]?(o[g(c)]=!0,n(c,r,null,o)):k==="Array"&&!o[g(c)]&&(o[g(c)]=!0,n(c,r,h,o))}}},plugins:{},highlightAll:function(n,e){s.highlightAllUnder(document,n,e)},highlightAllUnder:function(n,e,r){var i={callback:r,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),s.hooks.run("before-all-elements-highlight",i);for(var o=0,g;g=i.elements[o++];)s.highlightElement(g,e===!0,i.callback)},highlightElement:function(n,e,r){var i=s.util.getLanguage(n),o=s.languages[i];s.util.setLanguage(n,i);var g=n.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(g,i);var h=n.textContent,c={element:n,language:i,grammar:o,code:h};function k(j){c.highlightedCode=j,s.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,s.hooks.run("after-highlight",c),s.hooks.run("complete",c),r&&r.call(c.element)}if(s.hooks.run("before-sanity-check",c),g=c.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!c.code){s.hooks.run("complete",c),r&&r.call(c.element);return}if(s.hooks.run("before-highlight",c),!c.grammar){k(s.util.encode(c.code));return}if(e&&a.Worker){var w=new Worker(s.filename);w.onmessage=function(j){k(j.data)},w.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else k(s.highlight(c.code,c.grammar,c.language))},highlight:function(n,e,r){var i={code:n,grammar:e,language:r};if(s.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=s.tokenize(i.code,i.grammar),s.hooks.run("after-tokenize",i),b.stringify(s.util.encode(i.tokens),i.language)},tokenize:function(n,e){var r=e.rest;if(r){for(var i in r)e[i]=r[i];delete e.rest}var o=new C;return P(o,o.head,n),F(n,o,e,o.head,0),x(o)},hooks:{all:{},add:function(n,e){var r=s.hooks.all;r[n]=r[n]||[],r[n].push(e)},run:function(n,e){var r=s.hooks.all[n];if(!(!r||!r.length))for(var i=0,o;o=r[i++];)o(e)}},Token:b};a.Prism=s;function b(n,e,r,i){this.type=n,this.content=e,this.alias=r,this.length=(i||"").length|0}b.stringify=function n(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(k){i+=n(k,r)}),i}var o={type:e.type,content:n(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},g=e.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(o.classes,g):o.classes.push(g)),s.hooks.run("wrap",o);var h="";for(var c in o.attributes)h+=" "+c+'="'+(o.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+h+">"+o.content+"</"+o.tag+">"};function S(n,e,r,i){n.lastIndex=e;var o=n.exec(r);if(o&&i&&o[1]){var g=o[1].length;o.index+=g,o[0]=o[0].slice(g)}return o}function F(n,e,r,i,o,g){for(var h in r)if(!(!r.hasOwnProperty(h)||!r[h])){var c=r[h];c=Array.isArray(c)?c:[c];for(var k=0;k<c.length;++k){if(g&&g.cause==h+","+k)return;var w=c[k],j=w.inside,re=!!w.lookbehind,se=!!w.greedy,be=w.alias;if(se&&!w.pattern.global){var ke=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,ke+"g")}for(var ie=w.pattern||w,A=i.next,_=o;A!==e.tail&&!(g&&_>=g.reach);_+=A.value.length,A=A.next){var I=A.value;if(e.length>n.length)return;if(!(I instanceof b)){var q=1,$;if(se){if($=S(ie,_,n,re),!$||$.index>=n.length)break;var G=$.index,ye=$.index+$[0].length,z=_;for(z+=A.value.length;G>=z;)A=A.next,z+=A.value.length;if(z-=A.value.length,_=z,A.value instanceof b)continue;for(var D=A;D!==e.tail&&(z<ye||typeof D.value=="string");D=D.next)q++,z+=D.value.length;q--,I=n.slice(_,z),$.index-=_}else if($=S(ie,0,I,re),!$)continue;var G=$.index,U=$[0],V=I.slice(0,G),oe=I.slice(G+U.length),N=_+I.length;g&&N>g.reach&&(g.reach=N);var Z=A.prev;V&&(Z=P(e,Z,V),_+=V.length),M(e,Z,q);var xe=new b(h,j?s.tokenize(U,j):U,be,U);if(A=P(e,Z,xe),oe&&P(e,A,oe),q>1){var Q={cause:h+","+k,reach:N};F(n,e,r,A.prev,_,Q),g&&Q.reach>g.reach&&(g.reach=Q.reach)}}}}}}function C(){var n={value:null,prev:null,next:null},e={value:null,prev:n,next:null};n.next=e,this.head=n,this.tail=e,this.length=0}function P(n,e,r){var i=e.next,o={value:r,prev:e,next:i};return e.next=o,i.prev=o,n.length++,o}function M(n,e,r){for(var i=e.next,o=0;o<r&&i!==n.tail;o++)i=i.next;e.next=i,i.prev=e,n.length-=o}function x(n){for(var e=[],r=n.head.next;r!==n.tail;)e.push(r.value),r=r.next;return e}if(!a.document)return a.addEventListener&&(s.disableWorkerMessageHandler||a.addEventListener("message",function(n){var e=JSON.parse(n.data),r=e.language,i=e.code,o=e.immediateClose;a.postMessage(s.highlight(i,s.languages[r],r)),o&&a.close()},!1)),s;var m=s.util.currentScript();m&&(s.filename=m.src,m.hasAttribute("data-manual")&&(s.manual=!0));function v(){s.manual||s.highlightAll()}if(!s.manual){var y=document.readyState;y==="loading"||y==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return s}(l);p.exports&&(p.exports=t),typeof de!="undefined"&&(de.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(u,d){var f={};f["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[d]},f.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:f}};s["language-"+d]={pattern:/[\s\S]+/,inside:t.languages[d]};var b={};b[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,u){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:t.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var d=a.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading\u2026",u=function(m,v){return"\u2716 Error "+m+" while fetching file: "+v},d="\u2716 Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",b="loading",S="loaded",F="failed",C="pre[data-src]:not(["+s+'="'+S+'"]):not(['+s+'="'+b+'"])';function P(m,v,y){var n=new XMLHttpRequest;n.open("GET",m,!0),n.onreadystatechange=function(){n.readyState==4&&(n.status<400&&n.responseText?v(n.responseText):n.status>=400?y(u(n.status,n.statusText)):y(d))},n.send(null)}function M(m){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(v){var y=Number(v[1]),n=v[2],e=v[3];return n?e?[y,Number(e)]:[y,void 0]:[y,y]}}t.hooks.add("before-highlightall",function(m){m.selector+=", "+C}),t.hooks.add("before-sanity-check",function(m){var v=m.element;if(v.matches(C)){m.code="",v.setAttribute(s,b);var y=v.appendChild(document.createElement("CODE"));y.textContent=a;var n=v.getAttribute("data-src"),e=m.language;if(e==="none"){var r=(/\.(\w+)$/.exec(n)||[,"none"])[1];e=f[r]||r}t.util.setLanguage(y,e),t.util.setLanguage(v,e);var i=t.plugins.autoloader;i&&i.loadLanguages(e),P(n,function(o){v.setAttribute(s,S);var g=M(v.getAttribute("data-range"));if(g){var h=o.split(/\r\n?|\n/g),c=g[0],k=g[1]==null?h.length:g[1];c<0&&(c+=h.length),c=Math.max(0,Math.min(c-1,h.length)),k<0&&(k+=h.length),k=Math.max(0,Math.min(k,h.length)),o=h.slice(c,k).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(c+1))}y.textContent=o,t.highlightElement(y)},function(o){v.setAttribute(s,F),y.textContent=o})}}),t.plugins.fileHighlight={highlight:function(v){for(var y=(v||document).querySelectorAll(C),n=0,e;e=y[n++];)t.highlightElement(e)}};var x=!1;t.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(he);var K=he.exports;const ve="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ve+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ve+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",p=>{p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(l,t){const a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;const u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};u["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const d={};d[l]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,l),"i"),lookbehind:!0,greedy:!0,inside:u},Prism.languages.insertBefore("svelte","cdata",d)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");const Le=(p,l)=>{if(p==="..."||p.startsWith("ERR"))return p;const t=p.indexOf(`name="${l}"`),a=p.indexOf(`
`,t),u=p.indexOf("</Example>",a),d=p.substring(a,u),f=d.indexOf("<")-1;return d.replaceAll(`
${" ".repeat(f)}`,`
`).trim()};function Me(p){let l,t,a,u,d,f,s,b,S=K.highlight(p[0],K.languages.svelte,"svelte")+"",F,C,P;const M=p[3].default,x=le(M,p,p[2],null);return{c(){l=E("div"),t=E("div"),x&&x.c(),a=ee(),u=E("details"),d=E("summary"),d.textContent="View Source",f=ee(),s=E("div"),b=E("pre"),T(t,"class","example-content"),T(d,"class","cyan"),T(b,"class","language-svelte svelte-17m4gpp"),T(s,"class","example-src"),Ae(u,"width","100%"),T(u,"class","svelte-17m4gpp"),T(l,"class","example svelte-17m4gpp")},m(m,v){B(m,l,v),L(l,t),x&&x.m(t,null),L(l,a),L(l,u),L(u,d),L(u,f),L(u,s),L(s,b),b.innerHTML=S,F=!0,C||(P=Y(Ee.call(null,u)),C=!0)},p(m,[v]){x&&x.p&&(!F||v&4)&&ue(x,M,m,m[2],F?ge(M,m[2],v,null):ce(m[2]),null),(!F||v&1)&&S!==(S=K.highlight(m[0],K.languages.svelte,"svelte")+"")&&(b.innerHTML=S)},i(m){F||(R(x,m),F=!0)},o(m){O(x,m),F=!1},d(m){m&&H(l),x&&x.d(m),C=!1,P()}}}const Ie=()=>{const p=document.head.querySelector(".prism-styles");if(p!==null)return p;const l=document.createElement("style");return l.className="prism-styles",document.head.appendChild(l),l},De=Ie();Se.subscribe(p=>{De.innerHTML=p?ze:je});function Re(p,l,t){let a,{$$slots:u={},$$scope:d}=l,{name:f=""}=l;const s=Fe(me);return p.$$set=b=>{"name"in b&&t(1,f=b.name),"$$scope"in b&&t(2,d=b.$$scope)},p.$$.update=()=>{p.$$.dirty&2&&t(0,a=Le(s,f)),p.$$.dirty&1&&console.log(a)},[a,f,d,u]}class Oe extends W{constructor(l){super();J(this,l,Re,Me,X,{name:1})}}var Be=`<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import src from './Button.svelte?raw';
<\/script>

<Examples {src}>
  <Example name="various-buttons">
    <button class="gray" use:exioButton>Default Button</button>
    <button use:exioButton={{ backgroundColor: 'var(--accent)' }}>lmao</button>
  </Example>
</Examples>
`;function He(p){let l,t,a,u,d;return{c(){l=E("button"),l.textContent="Default Button",t=ee(),a=E("button"),a.textContent="lmao",T(l,"class","gray")},m(f,s){B(f,l,s),B(f,t,s),B(f,a,s),u||(d=[Y(fe.call(null,l)),Y(fe.call(null,a,{backgroundColor:"var(--accent)"}))],u=!0)},p:pe,d(f){f&&H(l),f&&H(t),f&&H(a),u=!1,$e(d)}}}function qe(p){let l,t;return l=new Oe({props:{name:"various-buttons",$$slots:{default:[He]},$$scope:{ctx:p}}}),{c(){ne(l.$$.fragment)},m(a,u){te(l,a,u),t=!0},p(a,u){const d={};u&1&&(d.$$scope={dirty:u,ctx:a}),l.$set(d)},i(a){t||(R(l.$$.fragment,a),t=!0)},o(a){O(l.$$.fragment,a),t=!1},d(a){ae(l,a)}}}function Ge(p){let l,t;return l=new Te({props:{src:Be,$$slots:{default:[qe]},$$scope:{ctx:p}}}),{c(){ne(l.$$.fragment)},m(a,u){te(l,a,u),t=!0},p(a,[u]){const d={};u&1&&(d.$$scope={dirty:u,ctx:a}),l.$set(d)},i(a){t||(R(l.$$.fragment,a),t=!0)},o(a){O(l.$$.fragment,a),t=!1},d(a){ae(l,a)}}}class Ue extends W{constructor(l){super();J(this,l,null,Ge,X,{})}}function Ze(p){let l,t,a,u,d,f;return a=new Ue({}),{c(){l=E("div"),t=E("div"),ne(a.$$.fragment),T(t,"class","wrapper svelte-woxtrb"),T(l,"class","center svelte-woxtrb")},m(s,b){B(s,l,b),L(l,t),te(a,t,null),u=!0,d||(f=Y(_e.call(null,t)),d=!0)},p:pe,i(s){u||(R(a.$$.fragment,s),u=!0)},o(s){O(a.$$.fragment,s),u=!1},d(s){s&&H(l),ae(a),d=!1,f()}}}class Ye extends W{constructor(l){super();J(this,l,null,Ze,X,{})}}export{Ye as default};
//# sourceMappingURL=Docs.187e7322.js.map
