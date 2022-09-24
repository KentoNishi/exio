import{S as W,i as J,s as X,E as le,F as ue,G as ce,H as ge,t as R,u as O,J as we,K as de,e as E,b as ee,c as T,f as Ae,g as B,h as M,j as Y,k as H,L as Fe,p as ne,q as te,v as ae,m as $e,M as _e,r as Se,n as Ee}from"./vendor.b3743e90.js";import{m as pe,f as fe,j as Ce}from"./index.28544152.js";import{e as Pe}from"./accordion.8b8803ef.js";const me=Symbol("src");function Te(d){let u;const n=d[2].default,a=le(n,d,d[1],null);return{c(){a&&a.c()},m(l,p){a&&a.m(l,p),u=!0},p(l,[p]){a&&a.p&&(!u||p&2)&&ue(a,n,l,l[1],u?ge(n,l[1],p,null):ce(l[1]),null)},i(l){u||(R(a,l),u=!0)},o(l){O(a,l),u=!1},d(l){a&&a.d(l)}}}function je(d,u,n){let{$$slots:a={},$$scope:l}=u,{src:p=""}=u;return we(me,p),d.$$set=b=>{"src"in b&&n(0,p=b.src),"$$scope"in b&&n(1,l=b.$$scope)},[p,l,a]}class ze extends W{constructor(u){super();J(this,u,je,Te,X,{src:0})}}var Me=`/**
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
`,Le=`/**
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
`,he={exports:{}};(function(d){var u=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(a){var l=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,b={},r={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof f?new f(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++p}),t.__id},clone:function t(e,s){s=s||{};var i,o;switch(r.util.type(e)){case"Object":if(o=r.util.objId(e),s[o])return s[o];i={},s[o]=i;for(var g in e)e.hasOwnProperty(g)&&(i[g]=t(e[g],s));return i;case"Array":return o=r.util.objId(e),s[o]?s[o]:(i=[],s[o]=i,e.forEach(function(h,c){i[c]=t(h,s)}),i);default:return e}},getLanguage:function(t){for(;t;){var e=l.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(l,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var s in e)if(e[s].src==t)return e[s]}return null}},isActive:function(t,e,s){for(var i="no-"+e;t;){var o=t.classList;if(o.contains(e))return!0;if(o.contains(i))return!1;t=t.parentElement}return!!s}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(t,e){var s=r.util.clone(r.languages[t]);for(var i in e)s[i]=e[i];return s},insertBefore:function(t,e,s,i){i=i||r.languages;var o=i[t],g={};for(var h in o)if(o.hasOwnProperty(h)){if(h==e)for(var c in s)s.hasOwnProperty(c)&&(g[c]=s[c]);s.hasOwnProperty(h)||(g[h]=o[h])}var k=i[t];return i[t]=g,r.languages.DFS(r.languages,function(w,j){j===k&&w!=t&&(this[w]=g)}),g},DFS:function t(e,s,i,o){o=o||{};var g=r.util.objId;for(var h in e)if(e.hasOwnProperty(h)){s.call(e,h,e[h],i||h);var c=e[h],k=r.util.type(c);k==="Object"&&!o[g(c)]?(o[g(c)]=!0,t(c,s,null,o)):k==="Array"&&!o[g(c)]&&(o[g(c)]=!0,t(c,s,h,o))}}},plugins:{},highlightAll:function(t,e){r.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,s){var i={callback:s,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),r.hooks.run("before-all-elements-highlight",i);for(var o=0,g;g=i.elements[o++];)r.highlightElement(g,e===!0,i.callback)},highlightElement:function(t,e,s){var i=r.util.getLanguage(t),o=r.languages[i];r.util.setLanguage(t,i);var g=t.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(g,i);var h=t.textContent,c={element:t,language:i,grammar:o,code:h};function k(j){c.highlightedCode=j,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),s&&s.call(c.element)}if(r.hooks.run("before-sanity-check",c),g=c.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!c.code){r.hooks.run("complete",c),s&&s.call(c.element);return}if(r.hooks.run("before-highlight",c),!c.grammar){k(r.util.encode(c.code));return}if(e&&a.Worker){var w=new Worker(r.filename);w.onmessage=function(j){k(j.data)},w.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else k(r.highlight(c.code,c.grammar,c.language))},highlight:function(t,e,s){var i={code:t,grammar:e,language:s};if(r.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),f.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(t,e){var s=e.rest;if(s){for(var i in s)e[i]=s[i];delete e.rest}var o=new C;return P(o,o.head,t),F(t,o,e,o.head,0),x(o)},hooks:{all:{},add:function(t,e){var s=r.hooks.all;s[t]=s[t]||[],s[t].push(e)},run:function(t,e){var s=r.hooks.all[t];if(!(!s||!s.length))for(var i=0,o;o=s[i++];)o(e)}},Token:f};a.Prism=r;function f(t,e,s,i){this.type=t,this.content=e,this.alias=s,this.length=(i||"").length|0}f.stringify=function t(e,s){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(k){i+=t(k,s)}),i}var o={type:e.type,content:t(e.content,s),tag:"span",classes:["token",e.type],attributes:{},language:s},g=e.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(o.classes,g):o.classes.push(g)),r.hooks.run("wrap",o);var h="";for(var c in o.attributes)h+=" "+c+'="'+(o.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+h+">"+o.content+"</"+o.tag+">"};function _(t,e,s,i){t.lastIndex=e;var o=t.exec(s);if(o&&i&&o[1]){var g=o[1].length;o.index+=g,o[0]=o[0].slice(g)}return o}function F(t,e,s,i,o,g){for(var h in s)if(!(!s.hasOwnProperty(h)||!s[h])){var c=s[h];c=Array.isArray(c)?c:[c];for(var k=0;k<c.length;++k){if(g&&g.cause==h+","+k)return;var w=c[k],j=w.inside,re=!!w.lookbehind,se=!!w.greedy,be=w.alias;if(se&&!w.pattern.global){var ke=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,ke+"g")}for(var ie=w.pattern||w,A=i.next,S=o;A!==e.tail&&!(g&&S>=g.reach);S+=A.value.length,A=A.next){var I=A.value;if(e.length>t.length)return;if(!(I instanceof f)){var q=1,$;if(se){if($=_(ie,S,t,re),!$||$.index>=t.length)break;var G=$.index,ye=$.index+$[0].length,z=S;for(z+=A.value.length;G>=z;)A=A.next,z+=A.value.length;if(z-=A.value.length,S=z,A.value instanceof f)continue;for(var D=A;D!==e.tail&&(z<ye||typeof D.value=="string");D=D.next)q++,z+=D.value.length;q--,I=t.slice(S,z),$.index-=S}else if($=_(ie,0,I,re),!$)continue;var G=$.index,U=$[0],V=I.slice(0,G),oe=I.slice(G+U.length),N=S+I.length;g&&N>g.reach&&(g.reach=N);var Z=A.prev;V&&(Z=P(e,Z,V),S+=V.length),L(e,Z,q);var xe=new f(h,j?r.tokenize(U,j):U,be,U);if(A=P(e,Z,xe),oe&&P(e,A,oe),q>1){var Q={cause:h+","+k,reach:N};F(t,e,s,A.prev,S,Q),g&&Q.reach>g.reach&&(g.reach=Q.reach)}}}}}}function C(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function P(t,e,s){var i=e.next,o={value:s,prev:e,next:i};return e.next=o,i.prev=o,t.length++,o}function L(t,e,s){for(var i=e.next,o=0;o<s&&i!==t.tail;o++)i=i.next;e.next=i,i.prev=e,t.length-=o}function x(t){for(var e=[],s=t.head.next;s!==t.tail;)e.push(s.value),s=s.next;return e}if(!a.document)return a.addEventListener&&(r.disableWorkerMessageHandler||a.addEventListener("message",function(t){var e=JSON.parse(t.data),s=e.language,i=e.code,o=e.immediateClose;a.postMessage(r.highlight(i,r.languages[s],s)),o&&a.close()},!1)),r;var m=r.util.currentScript();m&&(r.filename=m.src,m.hasAttribute("data-manual")&&(r.manual=!0));function v(){r.manual||r.highlightAll()}if(!r.manual){var y=document.readyState;y==="loading"||y==="interactive"&&m&&m.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return r}(u);d.exports&&(d.exports=n),typeof de!="undefined"&&(de.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(l,p){var b={};b["language-"+p]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[p]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};r["language-"+p]={pattern:/[\s\S]+/,inside:n.languages[p]};var f={};f[l]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return l}),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",f)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,l){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[l,"language-"+l],inside:n.languages[l]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var l=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+l.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+l.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+l.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+l.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:l,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var p=a.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading\u2026",l=function(m,v){return"\u2716 Error "+m+" while fetching file: "+v},p="\u2716 Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",f="loading",_="loaded",F="failed",C="pre[data-src]:not(["+r+'="'+_+'"]):not(['+r+'="'+f+'"])';function P(m,v,y){var t=new XMLHttpRequest;t.open("GET",m,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?v(t.responseText):t.status>=400?y(l(t.status,t.statusText)):y(p))},t.send(null)}function L(m){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(m||"");if(v){var y=Number(v[1]),t=v[2],e=v[3];return t?e?[y,Number(e)]:[y,void 0]:[y,y]}}n.hooks.add("before-highlightall",function(m){m.selector+=", "+C}),n.hooks.add("before-sanity-check",function(m){var v=m.element;if(v.matches(C)){m.code="",v.setAttribute(r,f);var y=v.appendChild(document.createElement("CODE"));y.textContent=a;var t=v.getAttribute("data-src"),e=m.language;if(e==="none"){var s=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=b[s]||s}n.util.setLanguage(y,e),n.util.setLanguage(v,e);var i=n.plugins.autoloader;i&&i.loadLanguages(e),P(t,function(o){v.setAttribute(r,_);var g=L(v.getAttribute("data-range"));if(g){var h=o.split(/\r\n?|\n/g),c=g[0],k=g[1]==null?h.length:g[1];c<0&&(c+=h.length),c=Math.max(0,Math.min(c-1,h.length)),k<0&&(k+=h.length),k=Math.max(0,Math.min(k,h.length)),o=h.slice(c,k).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(c+1))}y.textContent=o,n.highlightElement(y)},function(o){v.setAttribute(r,F),y.textContent=o})}}),n.plugins.fileHighlight={highlight:function(v){for(var y=(v||document).querySelectorAll(C),t=0,e;e=y[t++];)n.highlightElement(e)}};var x=!1;n.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(he);var K=he.exports;const ve="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ve+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ve+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",d=>{d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(u,n){const a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;const l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};const p={};p[u]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,u),"i"),lookbehind:!0,greedy:!0,inside:l},Prism.languages.insertBefore("svelte","cdata",p)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");const Ie=(d,u)=>{if(d==="..."||d.startsWith("ERR"))return d;const n=d.indexOf(`name="${u}"`),a=d.indexOf(`
`,n),l=d.indexOf("</Example>",a),p=d.substring(a,l),b=p.indexOf("<")-1;return p.replaceAll(`
${" ".repeat(b)}`,`
`).trim()};function De(d){let u,n,a,l,p,b,r,f,_=K.highlight(d[0],K.languages.svelte,"svelte")+"",F,C,P;const L=d[3].default,x=le(L,d,d[2],null);return{c(){u=E("div"),n=E("div"),x&&x.c(),a=ee(),l=E("details"),p=E("summary"),p.textContent="View Source",b=ee(),r=E("div"),f=E("pre"),T(n,"class","example-content"),T(p,"class","cyan"),T(f,"class","language-svelte svelte-17m4gpp"),T(r,"class","example-src"),Ae(l,"width","100%"),T(l,"class","svelte-17m4gpp"),T(u,"class","example svelte-17m4gpp")},m(m,v){B(m,u,v),M(u,n),x&&x.m(n,null),M(u,a),M(u,l),M(l,p),M(l,b),M(l,r),M(r,f),f.innerHTML=_,F=!0,C||(P=Y(Pe.call(null,l)),C=!0)},p(m,[v]){x&&x.p&&(!F||v&4)&&ue(x,L,m,m[2],F?ge(L,m[2],v,null):ce(m[2]),null),(!F||v&1)&&_!==(_=K.highlight(m[0],K.languages.svelte,"svelte")+"")&&(f.innerHTML=_)},i(m){F||(R(x,m),F=!0)},o(m){O(x,m),F=!1},d(m){m&&H(u),x&&x.d(m),C=!1,P()}}}const Re=()=>{const d=document.head.querySelector(".prism-styles");if(d!==null)return d;const u=document.createElement("style");return u.className="prism-styles",document.head.appendChild(u),u},Oe=Re();pe.subscribe(d=>{Oe.innerHTML=d?Le:Me});function Be(d,u,n){let a,{$$slots:l={},$$scope:p}=u,{name:b=""}=u;const r=Fe(me);return d.$$set=f=>{"name"in f&&n(1,b=f.name),"$$scope"in f&&n(2,p=f.$$scope)},d.$$.update=()=>{d.$$.dirty&2&&n(0,a=Ie(r,b)),d.$$.dirty&1&&console.log(a)},[a,b,p,l]}class He extends W{constructor(u){super();J(this,u,Be,De,X,{name:1})}}var qe=`<script lang="ts">
  import Examples from '../../components/Examples.svelte';
  import Example from '../../components/Example.svelte';
  import { exioButton } from 'exio/svelte';
  import { dark } from '../../ts/stores.ts';
  import src from './Button.svelte?raw';
<\/script>

<Examples {src}>
  <Example name="various-buttons">
    <button class="gray" use:exioButton>Default Button</button>
    <button
      use:exioButton={{ backgroundColor: $dark ? 'var(--accent)' : '#85ccff' }}
    >
      lmao
    </button>
  </Example>
</Examples>
`;function Ge(d){let u,n,a,l,p,b;return{c(){u=E("button"),u.textContent="Default Button",n=ee(),a=E("button"),a.textContent="lmao",T(u,"class","gray")},m(r,f){B(r,u,f),B(r,n,f),B(r,a,f),p||(b=[Y(fe.call(null,u)),Y(l=fe.call(null,a,{backgroundColor:d[0]?"var(--accent)":"#85ccff"}))],p=!0)},p(r,f){l&&_e(l.update)&&f&1&&l.update.call(null,{backgroundColor:r[0]?"var(--accent)":"#85ccff"})},d(r){r&&H(u),r&&H(n),r&&H(a),p=!1,Se(b)}}}function Ue(d){let u,n;return u=new He({props:{name:"various-buttons",$$slots:{default:[Ge]},$$scope:{ctx:d}}}),{c(){ne(u.$$.fragment)},m(a,l){te(u,a,l),n=!0},p(a,l){const p={};l&3&&(p.$$scope={dirty:l,ctx:a}),u.$set(p)},i(a){n||(R(u.$$.fragment,a),n=!0)},o(a){O(u.$$.fragment,a),n=!1},d(a){ae(u,a)}}}function Ze(d){let u,n;return u=new ze({props:{src:qe,$$slots:{default:[Ue]},$$scope:{ctx:d}}}),{c(){ne(u.$$.fragment)},m(a,l){te(u,a,l),n=!0},p(a,[l]){const p={};l&3&&(p.$$scope={dirty:l,ctx:a}),u.$set(p)},i(a){n||(R(u.$$.fragment,a),n=!0)},o(a){O(u.$$.fragment,a),n=!1},d(a){ae(u,a)}}}function We(d,u,n){let a;return $e(d,pe,l=>n(0,a=l)),[a]}class Je extends W{constructor(u){super();J(this,u,We,Ze,X,{})}}function Xe(d){let u,n,a,l,p,b;return a=new Je({}),{c(){u=E("div"),n=E("div"),ne(a.$$.fragment),T(n,"class","wrapper svelte-woxtrb"),T(u,"class","center svelte-woxtrb")},m(r,f){B(r,u,f),M(u,n),te(a,n,null),l=!0,p||(b=Y(Ce.call(null,n)),p=!0)},p:Ee,i(r){l||(R(a.$$.fragment,r),l=!0)},o(r){O(a.$$.fragment,r),l=!1},d(r){r&&H(u),ae(a),p=!1,b()}}}class Ne extends W{constructor(u){super();J(this,u,null,Xe,X,{})}}export{Ne as default};
//# sourceMappingURL=Docs.cd68de98.js.map
