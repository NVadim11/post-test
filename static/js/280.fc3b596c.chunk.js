"use strict";(self.webpackChunkhttps_nvadim11_github_io_post_test_=self.webpackChunkhttps_nvadim11_github_io_post_test_||[]).push([[280],{1280:(e,t,n)=>{n.r(t),n.d(t,{StandardSolflareMetaMaskWalletAccount:()=>P,default:()=>O});var i=n(4918);const r=n(2851);var s=n(689),o=n.n(s);const a={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let c;const l=new Uint8Array(16);function d(){if(!c&&(c="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(l)}const h=[];for(let U=0;U<256;++U)h.push((U+256).toString(16).slice(1));function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]}const f=function(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();const i=(e=e||{}).random||(e.rng||d)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return u(i)};n(3325).Buffer;function m(e){return void 0===e.version}function p(e){return m(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize()}var v=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function a(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};function _(e){return v(this,void 0,void 0,(function*(){try{return yield e.request({method:"wallet_getSnaps"}),!0}catch(t){return!1}}))}var g=n(2236),y=n(9005),w=n(4694);const b=["solana:mainnet","solana:devnet","solana:testnet","solana:localnet"];function E(e){return b.includes(e)}var x,M,A,C,S,K,k=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},j=function(e,t,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,n):r?r.value=n:t.set(e,n),n};const T=b,I=[g.R,y.q,w.F];class P{get address(){return k(this,x,"f")}get publicKey(){return k(this,M,"f").slice()}get chains(){return k(this,A,"f").slice()}get features(){return k(this,C,"f").slice()}get label(){return k(this,S,"f")}get icon(){return k(this,K,"f")}constructor(e){let{address:t,publicKey:n,label:i,icon:r}=e;x.set(this,void 0),M.set(this,void 0),A.set(this,void 0),C.set(this,void 0),S.set(this,void 0),K.set(this,void 0),new.target===P&&Object.freeze(this),j(this,x,t,"f"),j(this,M,n,"f"),j(this,A,T,"f"),j(this,C,I,"f"),j(this,S,i,"f"),j(this,K,r,"f")}}x=new WeakMap,M=new WeakMap,A=new WeakMap,C=new WeakMap,S=new WeakMap,K=new WeakMap;var z=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(t){s(t)}}function a(e){try{c(i.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};class H extends r{constructor(e){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var t,n;switch(e.type){case"connect":return this._collapseIframe(),void((null===(t=e.data)||void 0===t?void 0:t.publicKey)?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected()));case"disconnect":return this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),void this._disconnected();case"accountChanged":return void((null===(n=e.data)||void 0===n?void 0:n.publicKey)?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected()));default:return}},this._handleResize=e=>{"full"===e.resizeMode?"fullscreen"===e.params.mode?this._expandIframe():"hide"===e.params.mode&&this._collapseIframe():"coordinates"===e.resizeMode&&this._resizeIframe(e.params)},this._handleMessage=e=>{var t;if("solflareIframeToWalletAdapter"!==(null===(t=e.data)||void 0===t?void 0:t.channel))return;const n=e.data.data||{};if("event"===n.type)this._handleEvent(n.event);else if("resize"===n.type)this._handleResize(n);else if("response"===n.type&&this._messageHandlers[n.id]){const{resolve:e,reject:t}=this._messageHandlers[n.id];delete this._messageHandlers[n.id],n.error?t(n.error):e(n.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const t of e)t.parentElement&&t.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),t=Object.keys(e).map((t=>"".concat(t,"=").concat(encodeURIComponent(e[t])))).join("&"),n="".concat(H.IFRAME_URL,"?").concat(t);this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML="\n      <iframe src='".concat(n,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?"".concat(e.top,"px"):"",this._iframe.style.bottom=isFinite(e.bottom)?"".concat(e.bottom,"px"):"",this._iframe.style.left=isFinite(e.left)?"".concat(e.left,"px"):"",this._iframe.style.right=isFinite(e.right)?"".concat(e.right,"px"):"",this._iframe.style.width=isFinite(e.width)?"".concat(e.width,"px"):e.width,this._iframe.style.height=isFinite(e.height)?"".concat(e.height,"px"):e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise(((t,n)=>{var i,r;const s=f();this._messageHandlers[s]={resolve:t,reject:n},null===(r=null===(i=this._iframe)||void 0===i?void 0:i.contentWindow)||void 0===r||r.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:s},e)},"*")}))},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();this._account&&this._account.address===e||(this._account=new P({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},(null===e||void 0===e?void 0:e.network)&&(this._network=null===e||void 0===e?void 0:e.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),(null===e||void 0===e?void 0:e.params)&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),null===e||void 0===e?void 0:e.params))}get publicKey(){return this._publicKey?new i.J3(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return z(this,void 0,void 0,(function*(){this.connected||(this._injectElement(),yield new Promise(((e,t)=>{this._connectHandler={resolve:e,reject:t}})))}))}disconnect(){return z(this,void 0,void 0,(function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()}))}signTransaction(e){var t;return z(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=p(e),n=yield this._sendIframeMessage({method:"signTransactionV2",params:{transaction:o().encode(t)}}),{transaction:r}=n;return m(e)?i.ZX.from(o().decode(r)):i.Kt.deserialize(o().decode(r))}catch(n){throw new Error((null===(t=null===n||void 0===n?void 0:n.toString)||void 0===t?void 0:t.call(n))||"Failed to sign transaction")}}))}signAllTransactions(e){var t;return z(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const t=e.map((e=>p(e))),{transactions:n}=yield this._sendIframeMessage({method:"signAllTransactionsV2",params:{transactions:t.map((e=>o().encode(e)))}});return n.map(((t,n)=>m(e[n])?i.ZX.from(o().decode(t)):i.Kt.deserialize(o().decode(t))))}catch(n){throw new Error((null===(t=null===n||void 0===n?void 0:n.toString)||void 0===t?void 0:t.call(n))||"Failed to sign transactions")}}))}signAndSendTransaction(e,t){var n;return z(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=p(e),{signature:i}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:o().encode(n),options:t}});return i}catch(i){throw new Error((null===(n=null===i||void 0===i?void 0:i.toString)||void 0===n?void 0:n.call(i))||"Failed to sign and send transaction")}}))}signMessage(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";var n;return z(this,void 0,void 0,(function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:n}=yield this._sendIframeMessage({method:"signMessage",params:{data:o().encode(e),display:t}});return Uint8Array.from(o().decode(n))}catch(i){throw new Error((null===(n=null===i||void 0===i?void 0:i.toString)||void 0===n?void 0:n.call(i))||"Failed to sign message")}}))}sign(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"utf8";return z(this,void 0,void 0,(function*(){return yield this.signMessage(e,t)}))}static isSupported(){return z(this,void 0,void 0,(function*(){return!!(yield function(){return v(this,void 0,void 0,(function*(){try{const e=window.ethereum;if(!e)return null;if(e.providers&&Array.isArray(e.providers)){const t=e.providers;for(const e of t)if(yield _(e))return e}if(e.detected&&Array.isArray(e.detected)){const t=e.detected;for(const e of t)if(yield _(e))return e}return(yield _(e))?e:null}catch(e){return console.error(e),null}}))}())}))}standardSignAndSendTransaction(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return z(this,void 0,void 0,(function*(){if(!this.connected)throw new Error("not connected");const e=[];if(1===t.length){const{transaction:n,account:r,chain:s,options:a}=t[0],{minContextSlot:c,preflightCommitment:l,skipPreflight:d,maxRetries:h}=a||{};if(r!==this._account)throw new Error("invalid account");if(!E(s))throw new Error("invalid chain");const u=yield this.signAndSendTransaction(i.Kt.deserialize(n),{preflightCommitment:l,minContextSlot:c,maxRetries:h,skipPreflight:d});e.push({signature:o().decode(u)})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignAndSendTransaction(n));return e}))}standardSignTransaction(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return z(this,void 0,void 0,(function*(){if(!this.connected)throw new Error("not connected");const e=[];if(1===t.length){const{transaction:n,account:r,chain:s}=t[0];if(r!==this._account)throw new Error("invalid account");if(s&&!E(s))throw new Error("invalid chain");const o=yield this.signTransaction(i.Kt.deserialize(n));e.push({signedTransaction:o.serialize()})}else if(t.length>1){let n;for(const e of t){if(e.account!==this._account)throw new Error("invalid account");if(e.chain){if(!E(e.chain))throw new Error("invalid chain");if(n){if(e.chain!==n)throw new Error("conflicting chain")}else n=e.chain}}const r=t.map((e=>{let{transaction:t}=e;return i.Kt.deserialize(t)})),s=yield this.signAllTransactions(r);e.push(...s.map((e=>({signedTransaction:e.serialize()}))))}return e}))}standardSignMessage(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return z(this,void 0,void 0,(function*(){if(!this.connected)throw new Error("not connected");const e=[];if(1===t.length){const{message:n,account:i}=t[0];if(i!==this._account)throw new Error("invalid account");const r=yield this.signMessage(n);e.push({signedMessage:n,signature:r})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignMessage(n));return e}))}}H.IFRAME_URL="https://widget.solflare.com/";const O=H},2851:e=>{var t=Object.prototype.hasOwnProperty,n="~";function i(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function s(e,t,i,s,o){if("function"!==typeof i)throw new TypeError("The listener must be a function");var a=new r(i,s||e,o),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function o(e,t){0===--e._eventsCount?e._events=new i:delete e._events[t]}function a(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(n=!1)),a.prototype.eventNames=function(){var e,i,r=[];if(0===this._eventsCount)return r;for(i in e=this._events)t.call(e,i)&&r.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},a.prototype.listeners=function(e){var t=n?n+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o},a.prototype.listenerCount=function(e){var t=n?n+e:e,i=this._events[t];return i?i.fn?1:i.length:0},a.prototype.emit=function(e,t,i,r,s,o){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,d=this._events[a],h=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),h){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,i),!0;case 4:return d.fn.call(d.context,t,i,r),!0;case 5:return d.fn.call(d.context,t,i,r,s),!0;case 6:return d.fn.call(d.context,t,i,r,s,o),!0}for(l=1,c=new Array(h-1);l<h;l++)c[l-1]=arguments[l];d.fn.apply(d.context,c)}else{var u,f=d.length;for(l=0;l<f;l++)switch(d[l].once&&this.removeListener(e,d[l].fn,void 0,!0),h){case 1:d[l].fn.call(d[l].context);break;case 2:d[l].fn.call(d[l].context,t);break;case 3:d[l].fn.call(d[l].context,t,i);break;case 4:d[l].fn.call(d[l].context,t,i,r);break;default:if(!c)for(u=1,c=new Array(h-1);u<h;u++)c[u-1]=arguments[u];d[l].fn.apply(d[l].context,c)}}return!0},a.prototype.on=function(e,t,n){return s(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return s(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,i,r){var s=n?n+e:e;if(!this._events[s])return this;if(!t)return o(this,s),this;var a=this._events[s];if(a.fn)a.fn!==t||r&&!a.once||i&&a.context!==i||o(this,s);else{for(var c=0,l=[],d=a.length;c<d;c++)(a[c].fn!==t||r&&!a[c].once||i&&a[c].context!==i)&&l.push(a[c]);l.length?this._events[s]=1===l.length?l[0]:l:o(this,s)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&o(this,t)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}}]);