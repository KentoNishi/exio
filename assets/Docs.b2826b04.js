import{S as U,i as Z,s as W,E as oe,F as le,G as ue,H as ce,t as R,u as O,J as ke,K as ge,e as j,b as de,c as P,f as xe,g as V,h as L,j as N,k as Q,L as we,p as ee,q as ne,v as te,n as Ae}from"./vendor.087b2ff5.js";import{m as Fe,f as $e,j as Se}from"./index.5edc58c3.js";import{e as _e}from"./accordion.79117932.js";const pe=Symbol("src");function Ee(p){let l;const t=p[2].default,a=oe(t,p,p[1],null);return{c(){a&&a.c()},m(u,d){a&&a.m(u,d),l=!0},p(u,[d]){a&&a.p&&(!l||d&2)&&le(a,t,u,u[1],l?ce(t,u[1],d,null):ue(u[1]),null)},i(u){l||(R(a,u),l=!0)},o(u){O(a,u),l=!1},d(u){a&&a.d(u)}}}function Ce(p,l,t){let{$$slots:a={},$$scope:u}=l,{src:d=""}=l;return ke(pe,d),p.$$set=v=>{"src"in v&&t(0,d=v.src),"$$scope"in v&&t(1,u=v.$$scope)},[d,u,a]}class je extends U{constructor(l){super();Z(this,l,Ce,Ee,W,{src:0})}}var Pe=`/**
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
`,Te=`/**
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
`,fe={exports:{}};(function(p){var l=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(a){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,v={},o={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function n(e){return e instanceof b?new b(e.type,n(e.content),e.alias):Array.isArray(e)?e.map(n):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++d}),n.__id},clone:function n(e,r){r=r||{};var s,i;switch(o.util.type(e)){case"Object":if(i=o.util.objId(e),r[i])return r[i];s={},r[i]=s;for(var g in e)e.hasOwnProperty(g)&&(s[g]=n(e[g],r));return s;case"Array":return i=o.util.objId(e),r[i]?r[i]:(s=[],r[i]=s,e.forEach(function(m,c){s[c]=n(m,r)}),s);default:return e}},getLanguage:function(n){for(;n;){var e=u.exec(n.className);if(e)return e[1].toLowerCase();n=n.parentElement}return"none"},setLanguage:function(n,e){n.className=n.className.replace(RegExp(u,"gi"),""),n.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(s){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack)||[])[1];if(n){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==n)return e[r]}return null}},isActive:function(n,e,r){for(var s="no-"+e;n;){var i=n.classList;if(i.contains(e))return!0;if(i.contains(s))return!1;n=n.parentElement}return!!r}},languages:{plain:v,plaintext:v,text:v,txt:v,extend:function(n,e){var r=o.util.clone(o.languages[n]);for(var s in e)r[s]=e[s];return r},insertBefore:function(n,e,r,s){s=s||o.languages;var i=s[n],g={};for(var m in i)if(i.hasOwnProperty(m)){if(m==e)for(var c in r)r.hasOwnProperty(c)&&(g[c]=r[c]);r.hasOwnProperty(m)||(g[m]=i[m])}var y=s[n];return s[n]=g,o.languages.DFS(o.languages,function(w,T){T===y&&w!=n&&(this[w]=g)}),g},DFS:function n(e,r,s,i){i=i||{};var g=o.util.objId;for(var m in e)if(e.hasOwnProperty(m)){r.call(e,m,e[m],s||m);var c=e[m],y=o.util.type(c);y==="Object"&&!i[g(c)]?(i[g(c)]=!0,n(c,r,null,i)):y==="Array"&&!i[g(c)]&&(i[g(c)]=!0,n(c,r,m,i))}}},plugins:{},highlightAll:function(n,e){o.highlightAllUnder(document,n,e)},highlightAllUnder:function(n,e,r){var s={callback:r,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),o.hooks.run("before-all-elements-highlight",s);for(var i=0,g;g=s.elements[i++];)o.highlightElement(g,e===!0,s.callback)},highlightElement:function(n,e,r){var s=o.util.getLanguage(n),i=o.languages[s];o.util.setLanguage(n,s);var g=n.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(g,s);var m=n.textContent,c={element:n,language:s,grammar:i,code:m};function y(T){c.highlightedCode=T,o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o.hooks.run("after-highlight",c),o.hooks.run("complete",c),r&&r.call(c.element)}if(o.hooks.run("before-sanity-check",c),g=c.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!c.code){o.hooks.run("complete",c),r&&r.call(c.element);return}if(o.hooks.run("before-highlight",c),!c.grammar){y(o.util.encode(c.code));return}if(e&&a.Worker){var w=new Worker(o.filename);w.onmessage=function(T){y(T.data)},w.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else y(o.highlight(c.code,c.grammar,c.language))},highlight:function(n,e,r){var s={code:n,grammar:e,language:r};if(o.hooks.run("before-tokenize",s),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=o.tokenize(s.code,s.grammar),o.hooks.run("after-tokenize",s),b.stringify(o.util.encode(s.tokens),s.language)},tokenize:function(n,e){var r=e.rest;if(r){for(var s in r)e[s]=r[s];delete e.rest}var i=new E;return C(i,i.head,n),F(n,i,e,i.head,0),x(i)},hooks:{all:{},add:function(n,e){var r=o.hooks.all;r[n]=r[n]||[],r[n].push(e)},run:function(n,e){var r=o.hooks.all[n];if(!(!r||!r.length))for(var s=0,i;i=r[s++];)i(e)}},Token:b};a.Prism=o;function b(n,e,r,s){this.type=n,this.content=e,this.alias=r,this.length=(s||"").length|0}b.stringify=function n(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var s="";return e.forEach(function(y){s+=n(y,r)}),s}var i={type:e.type,content:n(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},g=e.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(i.classes,g):i.classes.push(g)),o.hooks.run("wrap",i);var m="";for(var c in i.attributes)m+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+m+">"+i.content+"</"+i.tag+">"};function S(n,e,r,s){n.lastIndex=e;var i=n.exec(r);if(i&&s&&i[1]){var g=i[1].length;i.index+=g,i[0]=i[0].slice(g)}return i}function F(n,e,r,s,i,g){for(var m in r)if(!(!r.hasOwnProperty(m)||!r[m])){var c=r[m];c=Array.isArray(c)?c:[c];for(var y=0;y<c.length;++y){if(g&&g.cause==m+","+y)return;var w=c[y],T=w.inside,ae=!!w.lookbehind,re=!!w.greedy,he=w.alias;if(re&&!w.pattern.global){var ve=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,ve+"g")}for(var se=w.pattern||w,A=s.next,_=i;A!==e.tail&&!(g&&_>=g.reach);_+=A.value.length,A=A.next){var I=A.value;if(e.length>n.length)return;if(!(I instanceof b)){var B=1,$;if(re){if($=S(se,_,n,ae),!$||$.index>=n.length)break;var H=$.index,be=$.index+$[0].length,z=_;for(z+=A.value.length;H>=z;)A=A.next,z+=A.value.length;if(z-=A.value.length,_=z,A.value instanceof b)continue;for(var D=A;D!==e.tail&&(z<be||typeof D.value=="string");D=D.next)B++,z+=D.value.length;B--,I=n.slice(_,z),$.index-=_}else if($=S(se,0,I,ae),!$)continue;var H=$.index,q=$[0],X=I.slice(0,H),ie=I.slice(H+q.length),Y=_+I.length;g&&Y>g.reach&&(g.reach=Y);var G=A.prev;X&&(G=C(e,G,X),_+=X.length),M(e,G,B);var ye=new b(m,T?o.tokenize(q,T):q,he,q);if(A=C(e,G,ye),ie&&C(e,A,ie),B>1){var K={cause:m+","+y,reach:Y};F(n,e,r,A.prev,_,K),g&&K.reach>g.reach&&(g.reach=K.reach)}}}}}}function E(){var n={value:null,prev:null,next:null},e={value:null,prev:n,next:null};n.next=e,this.head=n,this.tail=e,this.length=0}function C(n,e,r){var s=e.next,i={value:r,prev:e,next:s};return e.next=i,s.prev=i,n.length++,i}function M(n,e,r){for(var s=e.next,i=0;i<r&&s!==n.tail;i++)s=s.next;e.next=s,s.prev=e,n.length-=i}function x(n){for(var e=[],r=n.head.next;r!==n.tail;)e.push(r.value),r=r.next;return e}if(!a.document)return a.addEventListener&&(o.disableWorkerMessageHandler||a.addEventListener("message",function(n){var e=JSON.parse(n.data),r=e.language,s=e.code,i=e.immediateClose;a.postMessage(o.highlight(s,o.languages[r],r)),i&&a.close()},!1)),o;var f=o.util.currentScript();f&&(o.filename=f.src,f.hasAttribute("data-manual")&&(o.manual=!0));function h(){o.manual||o.highlightAll()}if(!o.manual){var k=document.readyState;k==="loading"||k==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return o}(l);p.exports&&(p.exports=t),typeof ge!="undefined"&&(ge.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(u,d){var v={};v["language-"+d]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[d]},v.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:v}};o["language-"+d]={pattern:/[\s\S]+/,inside:t.languages[d]};var b={};b[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(a,u){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:t.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(a){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var d=a.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading\u2026",u=function(f,h){return"\u2716 Error "+f+" while fetching file: "+h},d="\u2716 Error: File does not exist or is empty",v={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",b="loading",S="loaded",F="failed",E="pre[data-src]:not(["+o+'="'+S+'"]):not(['+o+'="'+b+'"])';function C(f,h,k){var n=new XMLHttpRequest;n.open("GET",f,!0),n.onreadystatechange=function(){n.readyState==4&&(n.status<400&&n.responseText?h(n.responseText):n.status>=400?k(u(n.status,n.statusText)):k(d))},n.send(null)}function M(f){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(h){var k=Number(h[1]),n=h[2],e=h[3];return n?e?[k,Number(e)]:[k,void 0]:[k,k]}}t.hooks.add("before-highlightall",function(f){f.selector+=", "+E}),t.hooks.add("before-sanity-check",function(f){var h=f.element;if(h.matches(E)){f.code="",h.setAttribute(o,b);var k=h.appendChild(document.createElement("CODE"));k.textContent=a;var n=h.getAttribute("data-src"),e=f.language;if(e==="none"){var r=(/\.(\w+)$/.exec(n)||[,"none"])[1];e=v[r]||r}t.util.setLanguage(k,e),t.util.setLanguage(h,e);var s=t.plugins.autoloader;s&&s.loadLanguages(e),C(n,function(i){h.setAttribute(o,S);var g=M(h.getAttribute("data-range"));if(g){var m=i.split(/\r\n?|\n/g),c=g[0],y=g[1]==null?m.length:g[1];c<0&&(c+=m.length),c=Math.max(0,Math.min(c-1,m.length)),y<0&&(y+=m.length),y=Math.max(0,Math.min(y,m.length)),i=m.slice(c,y).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(c+1))}k.textContent=i,t.highlightElement(k)},function(i){h.setAttribute(o,F),k.textContent=i})}}),t.plugins.fileHighlight={highlight:function(h){for(var k=(h||document).querySelectorAll(E),n=0,e;e=k[n++];)t.highlightElement(e)}};var x=!1;t.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(fe);var J=fe.exports;const me="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+me+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+me+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",p=>{p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(l,t){const a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;const u={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};u["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const d={};d[l]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,l),"i"),lookbehind:!0,greedy:!0,inside:u},Prism.languages.insertBefore("svelte","cdata",d)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");const ze=(p,l)=>{if(p==="..."||p.startsWith("ERR"))return p;const t=p.indexOf(`name="${l}"`),a=p.indexOf(`
`,t),u=p.indexOf("</Example>",a),d=p.substring(a,u),v=d.indexOf("<")-1;return d.replaceAll(`
${" ".repeat(v)}`,`
`).trim()};function Le(p){let l,t,a,u,d,v,o,b,S=J.highlight(p[0],J.languages.svelte,"svelte")+"",F,E,C;const M=p[3].default,x=oe(M,p,p[2],null);return{c(){l=j("div"),t=j("div"),x&&x.c(),a=de(),u=j("details"),d=j("summary"),d.textContent="View Source",v=de(),o=j("div"),b=j("pre"),P(t,"class","example-content"),P(d,"class","cyan"),P(b,"class","language-svelte svelte-13e9jjy"),P(o,"class","example-src"),xe(u,"width","100%"),P(u,"class","svelte-13e9jjy"),P(l,"class","example svelte-13e9jjy")},m(f,h){V(f,l,h),L(l,t),x&&x.m(t,null),L(l,a),L(l,u),L(u,d),L(u,v),L(u,o),L(o,b),b.innerHTML=S,F=!0,E||(C=N(_e.call(null,u)),E=!0)},p(f,[h]){x&&x.p&&(!F||h&4)&&le(x,M,f,f[2],F?ce(M,f[2],h,null):ue(f[2]),null),(!F||h&1)&&S!==(S=J.highlight(f[0],J.languages.svelte,"svelte")+"")&&(b.innerHTML=S)},i(f){F||(R(x,f),F=!0)},o(f){O(x,f),F=!1},d(f){f&&Q(l),x&&x.d(f),E=!1,C()}}}const Me=()=>{const p=document.head.querySelector(".prism-styles");if(p!==null)return p;const l=document.createElement("style");return l.className="prism-styles",document.head.appendChild(l),l},Ie=Me();Fe.subscribe(p=>{Ie.innerHTML=p?Te:Pe});function De(p,l,t){let a,{$$slots:u={},$$scope:d}=l,{name:v=""}=l;const o=we(pe);return p.$$set=b=>{"name"in b&&t(1,v=b.name),"$$scope"in b&&t(2,d=b.$$scope)},p.$$.update=()=>{p.$$.dirty&2&&t(0,a=ze(o,v)),p.$$.dirty&1&&console.log(a)},[a,v,d,u]}class Re extends U{constructor(l){super();Z(this,l,De,Le,W,{name:1})}}var Oe=`<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import src from './Button.svelte?raw';
<\/script>

<Examples {src}>
  <Example name="various-buttons">
    <button class="gray" use:exioButton>Default Button</button>
  </Example>
</Examples>
`;function Be(p){let l,t,a;return{c(){l=j("button"),l.textContent="Default Button",P(l,"class","gray")},m(u,d){V(u,l,d),t||(a=N($e.call(null,l)),t=!0)},d(u){u&&Q(l),t=!1,a()}}}function He(p){let l,t;return l=new Re({props:{name:"various-buttons",$$slots:{default:[Be]},$$scope:{ctx:p}}}),{c(){ee(l.$$.fragment)},m(a,u){ne(l,a,u),t=!0},p(a,u){const d={};u&1&&(d.$$scope={dirty:u,ctx:a}),l.$set(d)},i(a){t||(R(l.$$.fragment,a),t=!0)},o(a){O(l.$$.fragment,a),t=!1},d(a){te(l,a)}}}function qe(p){let l,t;return l=new je({props:{src:Oe,$$slots:{default:[He]},$$scope:{ctx:p}}}),{c(){ee(l.$$.fragment)},m(a,u){ne(l,a,u),t=!0},p(a,[u]){const d={};u&1&&(d.$$scope={dirty:u,ctx:a}),l.$set(d)},i(a){t||(R(l.$$.fragment,a),t=!0)},o(a){O(l.$$.fragment,a),t=!1},d(a){te(l,a)}}}class Ge extends U{constructor(l){super();Z(this,l,null,qe,W,{})}}function Ue(p){let l,t,a,u,d,v;return a=new Ge({}),{c(){l=j("div"),t=j("div"),ee(a.$$.fragment),P(t,"class","wrapper svelte-1x71mx5"),P(l,"class","center svelte-1x71mx5")},m(o,b){V(o,l,b),L(l,t),ne(a,t,null),u=!0,d||(v=N(Se.call(null,t)),d=!0)},p:Ae,i(o){u||(R(a.$$.fragment,o),u=!0)},o(o){O(a.$$.fragment,o),u=!1},d(o){o&&Q(l),te(a),d=!1,v()}}}class Xe extends U{constructor(l){super();Z(this,l,null,Ue,W,{})}}export{Xe as default};
//# sourceMappingURL=Docs.b2826b04.js.map
