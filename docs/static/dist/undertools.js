!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).underTools=n()}(this,(function(){"use strict";var e=function(e,n){var t;return void 0===n?"string"!=typeof e?t=e:document.querySelectorAll(e).length>1?t=document.querySelectorAll(e):1===document.querySelectorAll(e).length&&(t=document.querySelector(e)):"create"===n&&(t=document.createElement(e)),t};function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=r(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){l=!0,u=e},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw u}}}}var u=function(e,n){if(void 0!==e)if(void 0!==n.length){var t,r=n[0].replaceWith(e),o=i(n);try{for(o.s();!(t=o.n()).done;){t.value.remove()}}catch(e){o.e(e)}finally{o.f()}n=r}else n.replaceWith(e);return n},a=function(e,n,t){var r;return void 0===e&&void 0===n?r=window.getComputedStyle(t,null):void 0===n?r=window.getComputedStyle(t,null).getPropertyValue(e):(t.style[e]=n,r=t),r},l=function(e,n,t){var r;if(void 0!==t.length){var o,u=[],l=i(t);try{for(l.s();!(o=l.n()).done;){var c=o.value;u.push(a(e,n,c))}}catch(e){l.e(e)}finally{l.f()}r=u}else r=a(e,n,t);return r},c=function(e,n){var t,r=[];if(void 0!==n.length){var o,u=i(n);try{for(u.s();!(o=u.n()).done;){var a=o.value;void 0===e?r.push(a.textContent):(a.textContent=e,r.push(a))}}catch(e){u.e(e)}finally{u.f()}t=r}else void 0===e?t=n.textContent:(n.textContent=e,t=n);return t},f=function(e,n,t){if(void 0!==t.length){var r,o=i(t);try{for(o.s();!(r=o.n()).done;){r.value.addEventListener(e,n)}}catch(e){o.e(e)}finally{o.f()}}else t.addEventListener(e,n);return t},s=function(e){if(void 0!==e.length){var n,t=i(e);try{for(t.s();!(n=t.n()).done;){n.value.click()}}catch(e){t.e(e)}finally{t.f()}}else e.click();return e},d=function(e){if(void 0!==e.length){var n,t=i(e);try{for(t.s();!(n=t.n()).done;){n.value.style.display="none"}}catch(e){t.e(e)}finally{t.f()}}else e.style.display="none";return e},y=function(e){if(void 0!==e.length){var n,t=i(e);try{for(t.s();!(n=t.n()).done;){n.value.style.display="block"}}catch(e){t.e(e)}finally{t.f()}}else e.style.display="block";return e},v=function(e,n,t){var r;return void 0===n?r=t.getAttribute(e):(t.setAttribute(e,n),r=t),r},h=function(e,n,t){if(void 0!==t.length){var r,o=[],u=i(t);try{for(u.s();!(r=u.n()).done;){var a=r.value;o.push(v(e,n,a))}}catch(e){u.e(e)}finally{u.f()}return o}return v(e,n,t)},m=function(e,n){var t,r=[];if(void 0!==n.length){var o,u=i(n);try{for(u.s();!(o=u.n()).done;){var a=o.value;r.push(a.classList.contains(e))}}catch(e){u.e(e)}finally{u.f()}t=r}else t=n.classList.contains(e);return t},p=function(e,n){if(void 0!==n.length){var t,r=i(n);try{for(r.s();!(t=r.n()).done;){t.value.classList.add(e)}}catch(e){r.e(e)}finally{r.f()}}else n.classList.add(e);return n},g=function(e,n){if(void 0!==n.length){var t,r=i(n);try{for(r.s();!(t=r.n()).done;){t.value.classList.remove(e)}}catch(e){r.e(e)}finally{r.f()}}else n.classList.remove(e);return n},b=function(e,n){if(void 0!==n.length){var t,r=i(n);try{for(r.s();!(t=r.n()).done;){t.value.classList.toggle(e)}}catch(e){r.e(e)}finally{r.f()}}else n.classList.toggle(e);return n},S=function(e,n){if(void 0!==n.length){var t,r=i(n);try{for(r.s();!(t=r.n()).done;){var o=t.value,u=e.cloneNode(!0);o.appendChild(u)}}catch(e){r.e(e)}finally{r.f()}}else n.appendChild(e);return n},w=function(e){if(void 0!==e.length){var n,t=i(e);try{for(t.s();!(n=t.n()).done;){n.value.remove()}}catch(e){t.e(e)}finally{t.f()}}else e.remove();return e},A=function(e){return t(e).reduce((function(e,n){return e.includes(n)?e:e.concat(n)}),[])},L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t(e).join(n)},M=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return C.filter(C.uniq(e),(function(e){return[].concat(t).every((function(n){return n.includes(e)}))}))},j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=Math.min.apply(Math,t(e)),u=Math.max.apply(Math,t(e)),a=C.map(e,(function(e){return n+(r-n)*(e-i)/(u-i)}));return o?C.map(a,(function(e){return 0|Math.round(e)})):a},x=function(e){var n=e.request,t=void 0===n?"auto":n,r=e.method,o=void 0===r?"GET":r,i=e.url,u=e.data,a=e.format,l=e.headers,c=e.mode,f=e.cache,s=e.response,d=e.error,y=function(){var e;return"POST"===o&&u?e="JSON"===a||"json"===a?JSON.stringify(u):u:"POST"!==o||u||(e=null),e},v=function(){var e={};o&&(e.method=o),l&&(e.headers=new Headers(l)),u&&(e.body=y()),c&&(e.mode=c),f&&(e.cache=f),fetch(i,e).then((function(e){"json"===a||"JSON"===a?e.json().then((function(e){s(e)})):"text"===a?e.text().then((function(e){s(e)})):"type"===a?s(e.type):"url"===a?e.blob().then((function(e){s(URL.createObjectURL(e))})):"blob"===a?e.blob().then((function(e){s(e)})):s(e)})).catch((function(e){d&&d(e)}))},h=function(){var e=function(){var e=!1;if(window.XMLHttpRequest)(e=new XMLHttpRequest).overrideMimeType&&e.overrideMimeType("text/xml");else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(n){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){console.error(e)}}return e||console.error("unable to create XMLHTTP instance"),e}();for(var n in e.onreadystatechange=function(){4===e.readyState&&200===e.status?s("json"===a||"JSON"===a?JSON.parse(e.response):"text"===a?e.responseText:"type"===a?e.responseType:"url"===a?e.responseURL:e.response):4===e.readyState&&200!==e.status&&d&&d("Error: status ".concat(e.status))},e.open(o,i,!0),l)e.setRequestHeader(n,l[n]);e.send(y())};"auto"===t?window.fetch?v():h():"fetch"===t?v():"xhr"!==t&&"XMLHttpRequest"!==t||h()},T=function(e){return Array.isArray(e)?"array":"string"==typeof e?"string":"boolean"==typeof e?"boolean":"number"==typeof e?Number.isInteger(e)?"integer":"float":null!==e&&"object"===n(e)?"object":"undefined"},C=function(n,t){var r={element:e(n,t),dom:function(e){return u(e,r.element)},style:function(e,n){return l(e,n,r.element)},text:function(e){return c(e,r.element)},on:function(e,n){return f(e,n,r.element)},click:function(){return s(r.element)},hide:function(){return d(r.element)},display:function(){return y(r.element)},attr:function(e,n){return h(e,n,r.element)},haveClass:function(e){return m(e,r.element)},addClass:function(e){return p(e,r.element)},removeClass:function(e){return g(e,r.element)},toggleClass:function(e){return b(e,r.element)},add:function(e){return S(e,r.element)},remove:function(){return w(r.element)}};return r};return C.double=function(e){return function(e){return 2*e}(e)},C.id=function(e){return e},C.map=function(e,n){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.id;return t(e).map((function(e){return n(e)}))}(e,n)},C.forEach=C.each=function(e,n){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C.id;return t(e).forEach((function(e){return n(e)}))}(e,n)},C.filter=function(e,n){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return t(e).filter((function(e){return n(e)}))}(e,n)},C.randArray=function(e){return function(e){return e[Math.random()*e.length|0]}(e)},C.uniq=function(e){return A(e)},C.join=function(e,n){return L(e,n)},C.inter=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return M.apply(void 0,[e].concat(t))},C.scale=function(e,n,t,r){return j(e,n,t,r)},C.ajax=function(e){return x(e)},C.type=function(e){return T(e)},C.rand=function(e,n){return function(e,n){return Math.round(Math.random()*(n-e)+e)}(e,n)},C}));