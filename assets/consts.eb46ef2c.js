function E(e=10){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let o="";for(let i=0;i<e;i++){const n=Math.floor(Math.random()*t.length);o+=t.substring(n,n+1)}return o}function u(...e){return{destroy(){e.forEach(t=>{t()})}}}function f(e){const t=E(),o=document.getElementById(t)||document.createElement("style");return o.id=t,e.classList.add(t),document.head.appendChild(o),o}function I(e,t){const{left:o,top:i,width:n,height:a}=e.getBoundingClientRect(),{clientX:s,clientY:l}=t,[m,g]=[s-o,l-i];return{x:m,y:g,width:n,height:a}}function C(e){return parseFloat(e)*(/\ds$/.test(e)?1e3:1)}function N(e){const t=f(e),o=()=>{const n=(e.getAttribute("data-theme")||"").toLowerCase()==="dark";t.innerHTML=`
      :root {
        /* --------------------------- */
        /* CUSTOMIZABLE EXIO VARIABLES */
        /* --------------------------- */

        /* backdrop color for dialogs and other popups */
        --exio-backdrop-color: rgba(128, 128, 128, 0.2);
        /* border width for various effects */
        --exio-border-width: 2px;
        /* scaling factor for elements while being clicked */
        --exio-clicking-scale: 0.95;
        /* text color for textboxes when focused */
        /* border color for focused elements */
        --exio-focused-border-color:
          ${n?"rgba(255, 255, 255, 1)":"rgba(0, 0, 0, 0.5)"};
        --exio-focused-text-color: ${n?"white":"black"};
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-background-scale: 4;
        /* body color for the acrylic hover highlight effect */
        --exio-hover-body-color:
          ${n?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.1)"};
        /* border color for the acrylic hover highlight effect */
        --exio-hover-border-color:
          ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.25)"};
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-border-scale: 2;
        /* fill color for progress bars and loaders */
        --exio-loader-fill-color: ${n?"white":"black"};
        /* animation duration for progress bars and loaders */
        --exio-loader-duration: 1s;
        /* color of radio/switch backgrounds when selected */
        --exio-selected-background-color: black;
        /* color of radio/switch indicators when selected */
        --exio-selected-indicator-color: ${n?"white":"black"};
        /* color of slider thumbs */
        --exio-slider-thumb-color: ${n?"white":"black"};
        /* size of slider thumbs */
        --exio-slider-thumb-size: 12px;
        /* size of slider thumbs outlines when hovered */
        --exio-slider-thumb-hover-outline-size: 18px;
        /* size of slider thumb outlines when grabbing */
        --exio-slider-thumb-grab-outline-size: 25px;
        /* size of slider tracks */
        --exio-slider-track-size: 4px;
        /* fast transition duration */
        --exio-fast-transition-duration: 0.1s;
        /* slow transition duration */
        --exio-slow-transition-duration: 0.4s;
        /* standard transition duration */
        --exio-standard-transition-duration: 0.2s;
        /* scaling factor for the zoom in animation */
        --exio-zoom-in-animation-scale: 97.5%;
      }

      .${t.id} {
        background-color: ${n?"black":"white"};
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        color: ${n?"white":"black"};
        font-size: 1rem;
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
      }

      body {
        margin: 0;
        padding: 0;
      }

      * ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      * ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      * ::-webkit-scrollbar-thumb {
        background: #888;
      }
      
      * ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      * ::-webkit-scrollbar-corner {
        background: transparent;
      }
      
      * {
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;
      }
    `},i=new MutationObserver(o);return i.observe(e,{attributes:!0,attributeFilter:["data-theme"]}),o(),u(()=>{t.remove(),i.disconnect()})}function z(e){const t=f(e);return t.innerHTML=`
    @keyframes exio-fly-in {
      from {
        transform: translateY(50%);
        opacity: 0;
      }
      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
    .${t.id} {
      animation: exio-fly-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,u(()=>t.remove())}function F(e){const t=f(e);return t.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${t.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,u(()=>t.remove())}function H(e){const t=f(e);return t.innerHTML=`
    @keyframes exio-zoom-in {
      from {
        transform: scale(var(--exio-zoom-in-animation-scale));
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .${t.id} {
      animation: exio-zoom-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,u(()=>t.remove())}function P(e){const t=f(e);return t.innerHTML=`
    @keyframes exio-loading-bar {
      from {
        background-position: 100% 0;
      }
      to {
        background-position: 0 0;
      }
    }
    .${t.id} {
      background-image: linear-gradient(
        to right,
        var(--exio-loader-fill-color) 0%,
        var(--exio-loader-fill-color) 25%,
        transparent 25%,
        transparent 50%,
        var(--exio-loader-fill-color) 50%,
        var(--exio-loader-fill-color) 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: exio-loading-bar var(--exio-loader-duration) linear infinite;
    }
  `,u(()=>t.remove())}var d=window.CustomEvent;(!d||typeof d=="object")&&(d=function(t,o){o=o||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!!o.bubbles,!!o.cancelable,o.detail||null),i},d.prototype=window.Event.prototype);function b(e,t){var o="on"+t.type.toLowerCase();return typeof e[o]=="function"&&e[o](t),e.dispatchEvent(t)}function M(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(i,n){return!(t[i]===void 0||t[i]===n)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||t.isolation==="isolate"||t.position==="fixed"||t.webkitOverflowScrolling==="touch")return!0;e=e.parentElement}return!1}function h(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function v(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function D(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function p(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function y(e){var t=["button","input","keygen","select","textarea"],o=t.map(function(s){return s+":not([disabled])"});o.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=e.querySelector(o.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var n=e.querySelectorAll("*"),a=0;a<n.length&&!(n[a].tagName&&n[a].shadowRoot&&(i=y(n[a].shadowRoot),i));a++);return i}function w(e){return e.isConnected||document.body.contains(e)}function _(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var o=r.formSubmitter;if(!o){var i=e.target,n="getRootNode"in i&&i.getRootNode()||document;o=n.activeElement}return!o||o.form!==t?null:o}function S(e){if(!e.defaultPrevented){var t=e.target,o=r.imagemapUseValue,i=_(e);o===null&&i&&(o=i.value);var n=h(t);if(!!n){var a=i&&i.getAttribute("formmethod")||t.getAttribute("method");a==="dialog"&&(e.preventDefault(),o!=null?n.close(o):n.close())}}}function k(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",S,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var o=!1,i=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),n,a=function(s){if(s.target===e){var l="DOMNodeRemoved";o|=s.type.substr(0,l.length)===l,window.clearTimeout(n),n=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(s){e.addEventListener(s,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}k.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&w(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),r.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=y(this.dialog_)),v(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!w(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!r.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");M(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,r.needsCentering(this.dialog_)?(r.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new d("close",{bubbles:!1,cancelable:!1});b(this.dialog_,t)}};var r={};r.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"};r.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],i=null;try{i=o.cssRules}catch{}if(!!i)for(var n=0;n<i.length;++n){var a=i[n],s=null;try{s=document.querySelectorAll(a.selectorText)}catch{}if(!(!s||!D(s,e))){var l=a.style.getPropertyValue("top"),m=a.style.getPropertyValue("bottom");if(l&&l!=="auto"||m&&m!=="auto")return!0}}}return!1};r.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!r.isInlinePositionSetByStylesheet(e)};r.forceRegisterDialog=function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new k(e)};r.registerDialog=function(e){e.showModal||r.forceRegisterDialog(e)};r.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var o=[];t.forEach(function(i){for(var n=0,a;a=i.removedNodes[n];++n){if(a instanceof Element)a.localName==="dialog"&&o.push(a);else continue;o=o.concat(a.querySelectorAll("dialog"))}}),o.length&&e(o)}))};r.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};r.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};r.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,o;o=this.pendingDialogStack[t];++t)o.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var i=this.pendingDialogStack[0];if(i){var n=i.dialog.parentNode||document.body;n.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};r.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=h(e);){for(var t=0,o;o=this.pendingDialogStack[t];++t)if(o.dialog===e)return t===0;e=e.parentElement}return!1};r.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),v(t),this.forwardTab_!==void 0)){var o=this.pendingDialogStack[0],i=o.dialog,n=i.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?o.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};r.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new d("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&b(o.dialog,t)&&o.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};r.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(o){e.indexOf(o.dialog)!==-1?o.downgradeModal():o.maybeHideModal()})};r.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};r.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};r.dm=new r.DialogManager;r.formSubmitter=null;r.imagemapUseValue=null;if(window.HTMLDialogElement===void 0){var x=document.createElement("form");if(x.setAttribute("method","dialog"),x.method!=="dialog"){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var T=c.get;c.get=function(){return p(this)?"dialog":T.call(this)};var A=c.set;c.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):A.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",function(e){if(r.formSubmitter=null,r.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e){var o=e.composedPath();t=o.shift()||t}if(!(!t||!p(t.form))){var i=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!i){if(!(t.localName==="input"&&t.type==="image"))return;r.imagemapUseValue=e.offsetX+","+e.offsetY}var n=h(t);!n||(r.formSubmitter=t)}}},!1),document.addEventListener("submit",function(e){var t=e.target,o=h(t);if(!o){var i=_(e),n=i&&i.getAttribute("formmethod")||t.getAttribute("method");n==="dialog"&&e.preventDefault()}});var L=HTMLFormElement.prototype.submit,O=function(){if(!p(this))return L.call(this);var e=h(this);e&&e.close()};HTMLFormElement.prototype.submit=O}const R=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);export{N as a,H as b,r as c,u as d,F as e,P as f,I as g,z as h,R as i,f as s,C as t};
