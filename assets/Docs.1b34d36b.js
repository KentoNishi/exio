import{S as q,i as U,s as W,E as le,F as oe,G as ue,H as ce,t as B,u as M,J as we,K as de,a as ke,L as Ae,e as C,b as ge,c as D,f as Fe,g as K,h as j,j as V,k as Q,M as $e,N as Se,n as pe,p as ee,q as ne,v as te}from"./vendor.a98eaa6c.js";import{f as _e,j as Ee}from"./index.60c68b62.js";import{e as Ie}from"./accordion.9448b773.js";const fe=Symbol("filename");function Ce(p){let u;const e=p[2].default,a=le(e,p,p[1],null);return{c(){a&&a.c()},m(o,g){a&&a.m(o,g),u=!0},p(o,[g]){a&&a.p&&(!u||g&2)&&oe(a,e,o,o[1],u?ce(e,o[1],g,null):ue(o[1]),null)},i(o){u||(B(a,o),u=!0)},o(o){M(a,o),u=!1},d(o){a&&a.d(o)}}}function De(p,u,e){let{$$slots:a={},$$scope:o}=u,{filename:g=""}=u;return we(fe,g),p.$$set=m=>{"filename"in m&&e(0,g=m.filename),"$$scope"in m&&e(1,o=m.$$scope)},[g,o,a]}class Te extends q{constructor(u){super();U(this,u,De,Ce,W,{filename:0})}}var he={exports:{}};(function(p){var u=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(a){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,g=0,m={},r={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function t(n){return n instanceof x?new x(n.type,t(n.content),n.alias):Array.isArray(n)?n.map(t):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++g}),t.__id},clone:function t(n,i){i=i||{};var s,l;switch(r.util.type(n)){case"Object":if(l=r.util.objId(n),i[l])return i[l];s={},i[l]=s;for(var d in n)n.hasOwnProperty(d)&&(s[d]=t(n[d],i));return s;case"Array":return l=r.util.objId(n),i[l]?i[l]:(s=[],i[l]=s,n.forEach(function(h,c){s[c]=t(h,i)}),s);default:return n}},getLanguage:function(t){for(;t;){var n=o.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,n){t.className=t.className.replace(RegExp(o,"gi"),""),t.classList.add("language-"+n)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(s){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var i in n)if(n[i].src==t)return n[i]}return null}},isActive:function(t,n,i){for(var s="no-"+n;t;){var l=t.classList;if(l.contains(n))return!0;if(l.contains(s))return!1;t=t.parentElement}return!!i}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(t,n){var i=r.util.clone(r.languages[t]);for(var s in n)i[s]=n[s];return i},insertBefore:function(t,n,i,s){s=s||r.languages;var l=s[t],d={};for(var h in l)if(l.hasOwnProperty(h)){if(h==n)for(var c in i)i.hasOwnProperty(c)&&(d[c]=i[c]);i.hasOwnProperty(h)||(d[h]=l[h])}var b=s[t];return s[t]=d,r.languages.DFS(r.languages,function(A,T){T===b&&A!=t&&(this[A]=d)}),d},DFS:function t(n,i,s,l){l=l||{};var d=r.util.objId;for(var h in n)if(n.hasOwnProperty(h)){i.call(n,h,n[h],s||h);var c=n[h],b=r.util.type(c);b==="Object"&&!l[d(c)]?(l[d(c)]=!0,t(c,i,null,l)):b==="Array"&&!l[d(c)]&&(l[d(c)]=!0,t(c,i,h,l))}}},plugins:{},highlightAll:function(t,n){r.highlightAllUnder(document,t,n)},highlightAllUnder:function(t,n,i){var s={callback:i,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),r.hooks.run("before-all-elements-highlight",s);for(var l=0,d;d=s.elements[l++];)r.highlightElement(d,n===!0,s.callback)},highlightElement:function(t,n,i){var s=r.util.getLanguage(t),l=r.languages[s];r.util.setLanguage(t,s);var d=t.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(d,s);var h=t.textContent,c={element:t,language:s,grammar:l,code:h};function b(T){c.highlightedCode=T,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),i&&i.call(c.element)}if(r.hooks.run("before-sanity-check",c),d=c.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!c.code){r.hooks.run("complete",c),i&&i.call(c.element);return}if(r.hooks.run("before-highlight",c),!c.grammar){b(r.util.encode(c.code));return}if(n&&a.Worker){var A=new Worker(r.filename);A.onmessage=function(T){b(T.data)},A.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else b(r.highlight(c.code,c.grammar,c.language))},highlight:function(t,n,i){var s={code:t,grammar:n,language:i};if(r.hooks.run("before-tokenize",s),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),x.stringify(r.util.encode(s.tokens),s.language)},tokenize:function(t,n){var i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}var l=new w;return I(l,l.head,t),S(t,l,n,l.head,0),k(l)},hooks:{all:{},add:function(t,n){var i=r.hooks.all;i[t]=i[t]||[],i[t].push(n)},run:function(t,n){var i=r.hooks.all[t];if(!(!i||!i.length))for(var s=0,l;l=i[s++];)l(n)}},Token:x};a.Prism=r;function x(t,n,i,s){this.type=t,this.content=n,this.alias=i,this.length=(s||"").length|0}x.stringify=function t(n,i){if(typeof n=="string")return n;if(Array.isArray(n)){var s="";return n.forEach(function(b){s+=t(b,i)}),s}var l={type:n.type,content:t(n.content,i),tag:"span",classes:["token",n.type],attributes:{},language:i},d=n.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(l.classes,d):l.classes.push(d)),r.hooks.run("wrap",l);var h="";for(var c in l.attributes)h+=" "+c+'="'+(l.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+h+">"+l.content+"</"+l.tag+">"};function $(t,n,i,s){t.lastIndex=n;var l=t.exec(i);if(l&&s&&l[1]){var d=l[1].length;l.index+=d,l[0]=l[0].slice(d)}return l}function S(t,n,i,s,l,d){for(var h in i)if(!(!i.hasOwnProperty(h)||!i[h])){var c=i[h];c=Array.isArray(c)?c:[c];for(var b=0;b<c.length;++b){if(d&&d.cause==h+","+b)return;var A=c[b],T=A.inside,ae=!!A.lookbehind,ie=!!A.greedy,me=A.alias;if(ie&&!A.pattern.global){var xe=A.pattern.toString().match(/[imsuy]*$/)[0];A.pattern=RegExp(A.pattern.source,xe+"g")}for(var re=A.pattern||A,F=s.next,E=l;F!==n.tail&&!(d&&E>=d.reach);E+=F.value.length,F=F.next){var L=F.value;if(n.length>t.length)return;if(!(L instanceof x)){var z=1,_;if(ie){if(_=$(re,E,t,ae),!_||_.index>=t.length)break;var H=_.index,be=_.index+_[0].length,P=E;for(P+=F.value.length;H>=P;)F=F.next,P+=F.value.length;if(P-=F.value.length,E=P,F.value instanceof x)continue;for(var R=F;R!==n.tail&&(P<be||typeof R.value=="string");R=R.next)z++,P+=R.value.length;z--,L=t.slice(E,P),_.index-=E}else if(_=$(re,0,L,ae),!_)continue;var H=_.index,Z=_[0],J=L.slice(0,H),se=L.slice(H+Z.length),X=E+L.length;d&&X>d.reach&&(d.reach=X);var G=F.prev;J&&(G=I(n,G,J),E+=J.length),O(n,G,z);var ye=new x(h,T?r.tokenize(Z,T):Z,me,Z);if(F=I(n,G,ye),se&&I(n,F,se),z>1){var Y={cause:h+","+b,reach:X};S(t,n,i,F.prev,E,Y),d&&Y.reach>d.reach&&(d.reach=Y.reach)}}}}}}function w(){var t={value:null,prev:null,next:null},n={value:null,prev:t,next:null};t.next=n,this.head=t,this.tail=n,this.length=0}function I(t,n,i){var s=n.next,l={value:i,prev:n,next:s};return n.next=l,s.prev=l,t.length++,l}function O(t,n,i){for(var s=n.next,l=0;l<i&&s!==t.tail;l++)s=s.next;n.next=s,s.prev=n,t.length-=l}function k(t){for(var n=[],i=t.head.next;i!==t.tail;)n.push(i.value),i=i.next;return n}if(!a.document)return a.addEventListener&&(r.disableWorkerMessageHandler||a.addEventListener("message",function(t){var n=JSON.parse(t.data),i=n.language,s=n.code,l=n.immediateClose;a.postMessage(r.highlight(s,r.languages[i],i)),l&&a.close()},!1)),r;var f=r.util.currentScript();f&&(r.filename=f.src,f.hasAttribute("data-manual")&&(r.manual=!0));function v(){r.manual||r.highlightAll()}if(!r.manual){var y=document.readyState;y==="loading"||y==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",v):window.requestAnimationFrame?window.requestAnimationFrame(v):window.setTimeout(v,16)}return r}(u);p.exports&&(p.exports=e),typeof de!="undefined"&&(de.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(o,g){var m={};m["language-"+g]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[g]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};r["language-"+g]={pattern:/[\s\S]+/,inside:e.languages[g]};var x={};x[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:r},e.languages.insertBefore("markup","cdata",x)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(a,o){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:e.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(a){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var g=a.languages.markup;g&&(g.tag.addInlined("style","css"),g.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading\u2026",o=function(f,v){return"\u2716 Error "+f+" while fetching file: "+v},g="\u2716 Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",x="loading",$="loaded",S="failed",w="pre[data-src]:not(["+r+'="'+$+'"]):not(['+r+'="'+x+'"])';function I(f,v,y){var t=new XMLHttpRequest;t.open("GET",f,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?v(t.responseText):t.status>=400?y(o(t.status,t.statusText)):y(g))},t.send(null)}function O(f){var v=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(v){var y=Number(v[1]),t=v[2],n=v[3];return t?n?[y,Number(n)]:[y,void 0]:[y,y]}}e.hooks.add("before-highlightall",function(f){f.selector+=", "+w}),e.hooks.add("before-sanity-check",function(f){var v=f.element;if(v.matches(w)){f.code="",v.setAttribute(r,x);var y=v.appendChild(document.createElement("CODE"));y.textContent=a;var t=v.getAttribute("data-src"),n=f.language;if(n==="none"){var i=(/\.(\w+)$/.exec(t)||[,"none"])[1];n=m[i]||i}e.util.setLanguage(y,n),e.util.setLanguage(v,n);var s=e.plugins.autoloader;s&&s.loadLanguages(n),I(t,function(l){v.setAttribute(r,$);var d=O(v.getAttribute("data-range"));if(d){var h=l.split(/\r\n?|\n/g),c=d[0],b=d[1]==null?h.length:d[1];c<0&&(c+=h.length),c=Math.max(0,Math.min(c-1,h.length)),b<0&&(b+=h.length),b=Math.max(0,Math.min(b,h.length)),l=h.slice(c,b).join(`
`),v.hasAttribute("data-start")||v.setAttribute("data-start",String(c+1))}y.textContent=l,e.highlightElement(y)},function(l){v.setAttribute(r,S),y.textContent=l})}}),e.plugins.fileHighlight={highlight:function(v){for(var y=(v||document).querySelectorAll(w),t=0,n;n=y[t++];)e.highlightElement(n)}};var k=!1;e.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(he);var N=he.exports;const ve="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ve+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ve+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",p=>{p.type==="entity"&&(p.attributes.title=p.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(u,e){const a={};a["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;const o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};const g={};g[u]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,u),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("svelte","cdata",g)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");var Pe=`<script lang="ts">
  import {
    exioButton,
    exioCard,
    exioSwitch,
    exioFlyInAnimation,
    exioFadeInAnimation,
    exioIcon,
    exioZoomInAnimation,
    exioDropdown,
    exioRadio,
    exioTextbox,
    exioLoadingBarAnimation,
    exioCheckbox,
    exioAccordion,
    exioSlider,
  } from 'exio/svelte';
  import { tick } from 'svelte';
  import { dark, demoDialogOpen } from '../ts/stores';

  let render = true;
  let animate = true;
  let buttonDisabled = true;
  let textDisabled = true;
  const range = (len: number) => new Array(len);
  $: colorDefault = $dark ? 'black' : 'white';
  $: colorInverted = $dark ? 'white' : 'black';
  $: if ($dark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
<\/script>

{#if render}
  <div use:exioZoomInAnimation class="wrapper">
    <div class="block">
      <div class="items">
        <input
          use:exioSwitch
          type="checkbox"
          id="dark-mode"
          bind:checked={$dark}
          style="
                  border-color: {colorInverted};
                  --exio-switch-selected-fill-color: var(--accent);
                "
        />
        <label for="dark-mode">Dark Mode</label>
      </div>
    </div>
    <div class="block">
      <button class="gray" use:exioButton>Default Button</button>
      <button class="blue" use:exioButton>Default Button</button>
      <button use:exioButton use:exioIcon class="gray">send</button>
      <button use:exioButton use:exioIcon class="cyan">send</button>
    </div>
    <div class="block" style="align-items: center;">
      <button use:exioButton class="gray" disabled={buttonDisabled}>
        Example Button
      </button>
      <div class="pair">
        <input
          use:exioSwitch
          type="checkbox"
          id="disable-button"
          style="
            border-color: {colorInverted};
            --exio-switch-selected-fill-color: var(--accent);
          "
          bind:checked={buttonDisabled}
        />
        <label for="disable-button"><code>disabled</code> Attribute</label>
      </div>
    </div>
    <div class="block">
      <div use:exioCard class="card gray">Default Card</div>
      <div use:exioCard class="card cyan">Default Card</div>
    </div>
    <div class="block">
      <div class="items">
        <div class="pair">
          <input
            use:exioSwitch
            type="checkbox"
            id="switch-option-1"
            style="
                  border-color: {colorInverted};
                  --exio-switch-selected-fill-color: var(--accent);
                "
          />
          <label for="switch-option-1">Switch Option 1</label>
        </div>
        <div class="pair">
          <input
            use:exioSwitch
            type="checkbox"
            id="switch-option-2"
            style="
                  border-color: var(--accent);
                  --exio-switch-selected-fill-color: {colorInverted};
                  --exio-switch-thumb-color: var(--accent);
                "
          />
          <label for="switch-option-2">Switch Option 2</label>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="items">
        <div class="pair">
          <input
            use:exioCheckbox
            type="checkbox"
            id="checkbox-option-1"
            style="
                  border-color: {colorInverted};
                  --exio-checkbox-selected-fill-color: {colorInverted};
                  --exio-checkbox-checkmark-color: {colorDefault};
                "
          />
          <label for="checkbox-option-1">Checkbox Option 1</label>
        </div>
        <div class="pair">
          <input
            use:exioCheckbox
            type="checkbox"
            id="checkbox-option-2"
            style="
                  border-color: var(--accent);
                  --exio-checkbox-selected-fill-color: var(--accent);
                  --exio-checkbox-checkmark-color: {colorInverted};
                "
          />
          <label for="checkbox-option-2">Checkbox Option 2</label>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="items">
        <div class="pair">
          <input
            type="radio"
            use:exioRadio
            id="radio-option-1"
            name="radio-options"
            style="
                  border-color: {colorInverted};
                "
          />
          <label for="radio-option-1">Radio Option 1</label>
        </div>
        <div class="pair">
          <input
            type="radio"
            use:exioRadio
            id="radio-option-2"
            name="radio-options"
            style="
                  border-color: var(--accent);
                  --exio-radio-indicator-color: var(--accent);
                "
          />
          <label for="radio-option-2">Radio Option 2</label>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="items">
        <input
          type="range"
          min="0"
          max="69"
          use:exioSlider
          style="width: 150px; margin: 20px;"
          step="0.01"
          class="gray"
        />
        <input
          type="range"
          min="0"
          max="69"
          use:exioSlider
          style="
                  width: 150px;
                  --exio-slider-thumb-color: var(--cyan);
                  margin: 20px;
                "
          step="0.01"
          class="gray"
        />
        <input
          type="range"
          min="0"
          max="69"
          use:exioSlider
          style="
                  width: 150px;
                  background-color: gray;
                  --exio-slider-thumb-color: var(--accent);
                  margin: 20px;
                "
          step="0.01"
          class="gray"
        />
      </div>
    </div>
    <div class="block">
      <div class="items">
        <input class="gray" use:exioTextbox placeholder="Textfield" />
        <textarea class="gray" use:exioTextbox placeholder="Textarea" />
      </div>
    </div>
    <div class="block" style="align-items: center;">
      <input
        class="gray"
        use:exioTextbox
        placeholder="Textfield"
        disabled={textDisabled}
      />
      <div class="pair">
        <input
          use:exioSwitch
          type="checkbox"
          id="disable-text"
          style="
            border-color: {colorInverted};
            --exio-switch-selected-fill-color: var(--accent);
          "
          bind:checked={textDisabled}
        />
        <label for="disable-text"><code>disabled</code> Attribute</label>
      </div>
    </div>
    <div class="block">
      <select use:exioDropdown class="gray">
        {#each range(3) as _, index}
          <option value={index + 1}>Option {index + 1}</option>
        {/each}
      </select>
      <select use:exioDropdown class="blue">
        <option disabled selected>Placeholder</option>
        {#each range(3) as _, index}
          <option value={index + 1}>Option {index + 1}</option>
        {/each}
      </select>
      <select use:exioDropdown class="gray">
        <option disabled selected>Overflow</option>
        {#each range(69) as _, index}
          <option value={index + 1}>Option {index + 1}</option>
        {/each}
      </select>
    </div>
    <div class="block">
      <button
        class="gray"
        use:exioButton
        on:click={() => ($demoDialogOpen = true)}
      >
        Open Dialog
      </button>
    </div>
    <div class="block">
      <details use:exioAccordion style="width: 320px;">
        <summary class="cyan">Accordion</summary>
        <div style="padding: 1rem;" class="gray">
          Never gonna give you up <br />
          Never gonna let you down <br />
          Never gonna run around and desert you <br />
          Never gonna make you cry <br />
          Never gonna say goodbye <br />
          Never gonna tell a lie and hurt you <br />
        </div>
      </details>
    </div>
    <div class="block" style="flex-direction: column; padding: 10px 0px;">
      <div class="items">
        <div
          use:exioLoadingBarAnimation
          style="
                  width: 300px;
                  height: 5px;
                  --exio-loader-fill-color: var(--cyan);
                "
        />
        <div
          use:exioLoadingBarAnimation
          style="
                  width: 300px;
                  height: 5px;
                  --exio-loader-fill-color: var(--accent);
                  background-color: {colorInverted};
                "
        />
      </div>
      <div>
        <button
          use:exioButton
          class="cyan"
          on:click={async () => {
            animate = false;
            await tick();
            animate = true;
          }}
          style="
                  display: flex;
                  align-items: center;
                  gap: 0.25rem;
                "
        >
          <span use:exioIcon>refresh</span>
          <span>Reload Animations</span>
        </button>
      </div>
      {#if animate}
        <div class="items">
          <div use:exioCard use:exioFlyInAnimation class="card gray">
            Fly In Animation
          </div>
          <div
            use:exioCard
            use:exioZoomInAnimation
            class="card blue"
            style="--exio-zoom-in-animation-scale: 80%;"
          >
            Zoom In Animation
          </div>
          <div use:exioCard use:exioFadeInAnimation class="card cyan">
            Fade In Animation
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .card {
    width: 150px;
    height: 150px;
  }
  .block {
    display: flex;
    margin: 1rem;
    overflow: visible;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
  .items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .wrapper {
    transform-origin: center top;
  }
  .pair {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
</style>
`;const je=p=>Ae("...",u=>{if(p==="Demo.svelte"){u(Pe);return}u(`ERR: did not find file '${p}'`)}),Oe=(p,u)=>ke(je(p),e=>{if(e==="..."||e.startsWith("ERR"))return e;const a=e.indexOf(`name="${u}"`),o=e.indexOf(`
`,a),g=e.indexOf("</Example>",o),m=e.substring(o,g),r=m.indexOf("<")-1;return m.replaceAll(`
${" ".repeat(r)}`,`
`).trim()});function Le(p){let u,e,a,o,g,m,r,x,$=N.highlight(p[1],N.languages.svelte,"svelte")+"",S,w,I;const O=p[4].default,k=le(O,p,p[3],null);return{c(){u=C("div"),e=C("div"),k&&k.c(),a=ge(),o=C("details"),g=C("summary"),g.textContent="View Source",m=ge(),r=C("div"),x=C("pre"),D(e,"class","example-content"),D(g,"class","cyan"),D(x,"class","language-svelte svelte-1t426h1"),D(r,"class","example-src"),Fe(o,"width","100%"),D(o,"class","svelte-1t426h1"),D(u,"class","example svelte-1t426h1")},m(f,v){K(f,u,v),j(u,e),k&&k.m(e,null),j(u,a),j(u,o),j(o,g),j(o,m),j(o,r),j(r,x),x.innerHTML=$,S=!0,w||(I=V(Ie.call(null,o)),w=!0)},p(f,[v]){k&&k.p&&(!S||v&8)&&oe(k,O,f,f[3],S?ce(O,f[3],v,null):ue(f[3]),null),(!S||v&2)&&$!==($=N.highlight(f[1],N.languages.svelte,"svelte")+"")&&(x.innerHTML=$)},i(f){S||(B(k,f),S=!0)},o(f){M(k,f),S=!1},d(f){f&&Q(u),k&&k.d(f),w=!1,I()}}}function Re(p,u,e){let a,o,g=pe,m=()=>(g(),g=Se(a,w=>e(1,o=w)),a);p.$$.on_destroy.push(()=>g());let{$$slots:r={},$$scope:x}=u,{name:$=""}=u;const S=$e(fe);return p.$$set=w=>{"name"in w&&e(2,$=w.name),"$$scope"in w&&e(3,x=w.$$scope)},p.$$.update=()=>{p.$$.dirty&4&&m(e(0,a=Oe(S,$)))},[a,o,$,x,r]}class Be extends q{constructor(u){super();U(this,u,Re,Le,W,{name:2})}}function Me(p){let u,e,a;return{c(){u=C("button"),u.textContent="Default Button",D(u,"class","gray")},m(o,g){K(o,u,g),e||(a=V(_e.call(null,u)),e=!0)},d(o){o&&Q(u),e=!1,a()}}}function ze(p){let u,e;return u=new Be({props:{name:"various-buttons",$$slots:{default:[Me]},$$scope:{ctx:p}}}),{c(){ee(u.$$.fragment)},m(a,o){ne(u,a,o),e=!0},p(a,o){const g={};o&1&&(g.$$scope={dirty:o,ctx:a}),u.$set(g)},i(a){e||(B(u.$$.fragment,a),e=!0)},o(a){M(u.$$.fragment,a),e=!1},d(a){te(u,a)}}}function He(p){let u,e;return u=new Te({props:{filename:"docs/components/Button.svelte",$$slots:{default:[ze]},$$scope:{ctx:p}}}),{c(){ee(u.$$.fragment)},m(a,o){ne(u,a,o),e=!0},p(a,[o]){const g={};o&1&&(g.$$scope={dirty:o,ctx:a}),u.$set(g)},i(a){e||(B(u.$$.fragment,a),e=!0)},o(a){M(u.$$.fragment,a),e=!1},d(a){te(u,a)}}}class Ze extends q{constructor(u){super();U(this,u,null,He,W,{})}}function Ge(p){let u,e,a,o,g,m;return a=new Ze({}),{c(){u=C("div"),e=C("div"),ee(a.$$.fragment),D(e,"class","wrapper svelte-1x71mx5"),D(u,"class","center svelte-1x71mx5")},m(r,x){K(r,u,x),j(u,e),ne(a,e,null),o=!0,g||(m=V(Ee.call(null,e)),g=!0)},p:pe,i(r){o||(B(a.$$.fragment,r),o=!0)},o(r){M(a.$$.fragment,r),o=!1},d(r){r&&Q(u),te(a),g=!1,m()}}}class Ne extends q{constructor(u){super();U(this,u,null,Ge,W,{})}}export{Ne as default};
//# sourceMappingURL=Docs.1b34d36b.js.map
