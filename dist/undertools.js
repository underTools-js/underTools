!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).underTools=e()}(this,(function(){"use strict";var n=function(n,e){var t;return void 0===e?"string"!=typeof n?t=n:document.querySelectorAll(n).length>1?t=document.querySelectorAll(n):1===document.querySelectorAll(n).length&&(t=document.querySelector(n)):"create"===e&&(t=document.createElement(n)),t};function e(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=t(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,a=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return l=n.done,n},e:function(n){a=!0,u=n},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw u}}}}var i=function(n,e){if(void 0!==n)if(void 0!==e.length){var t,r=e[0].replaceWith(n),i=o(e);try{for(i.s();!(t=i.n()).done;){t.value.remove()}}catch(n){i.e(n)}finally{i.f()}e=r}else e.replaceWith(n);return e},u=function(n,e,t){var r;return void 0===n&&void 0===e?r=window.getComputedStyle(t,null):void 0===e?r=window.getComputedStyle(t,null).getPropertyValue(n):(t.style[n]=e,r=t),r},l=function(n,e,t){var r;if(void 0!==t.length){var i,l=[],a=o(t);try{for(a.s();!(i=a.n()).done;){var f=i.value;l.push(u(n,e,f))}}catch(n){a.e(n)}finally{a.f()}r=l}else r=u(n,e,t);return r},a=function(n,e){var t,r=[];if(void 0!==e.length){var i,u=o(e);try{for(u.s();!(i=u.n()).done;){var l=i.value;void 0===n?r.push(l.textContent):(l.textContent=n,r.push(l))}}catch(n){u.e(n)}finally{u.f()}t=r}else void 0===n?t=e.textContent:(e.textContent=n,t=e);return t},f=function(n,e,t){if(void 0!==t.length){var r,i=o(t);try{for(i.s();!(r=i.n()).done;){r.value.addEventListener(n,e)}}catch(n){i.e(n)}finally{i.f()}}else t.addEventListener(n,e);return t},c=function(n){if(void 0!==n.length){var e,t=o(n);try{for(t.s();!(e=t.n()).done;){e.value.click()}}catch(n){t.e(n)}finally{t.f()}}else n.click();return n},d=function(n){if(void 0!==n.length){var e,t=o(n);try{for(t.s();!(e=t.n()).done;){e.value.style.display="none"}}catch(n){t.e(n)}finally{t.f()}}else n.style.display="none";return n},s=function(n){if(void 0!==n.length){var e,t=o(n);try{for(t.s();!(e=t.n()).done;){e.value.style.display="block"}}catch(n){t.e(n)}finally{t.f()}}else n.style.display="block";return n},v=function(n,e,t){var r;return void 0===e?r=t.getAttribute(n):(t.setAttribute(n,e),r=t),r},y=function(n,e,t){if(void 0!==t.length){var r,i=[],u=o(t);try{for(u.s();!(r=u.n()).done;){var l=r.value;i.push(v(n,e,l))}}catch(n){u.e(n)}finally{u.f()}return i}return v(n,e,t)},h=function(n,e){var t,r=[];if(void 0!==e.length){var i,u=o(e);try{for(u.s();!(i=u.n()).done;){var l=i.value;r.push(l.classList.contains(n))}}catch(n){u.e(n)}finally{u.f()}t=r}else t=e.classList.contains(n);return t},m=function(n,e){if(void 0!==e.length){var t,r=o(e);try{for(r.s();!(t=r.n()).done;){t.value.classList.add(n)}}catch(n){r.e(n)}finally{r.f()}}else e.classList.add(n);return e},p=function(n,e){if(void 0!==e.length){var t,r=o(e);try{for(r.s();!(t=r.n()).done;){t.value.classList.remove(n)}}catch(n){r.e(n)}finally{r.f()}}else e.classList.remove(n);return e},g=function(n,e){if(void 0!==e.length){var t,r=o(e);try{for(r.s();!(t=r.n()).done;){t.value.classList.toggle(n)}}catch(n){r.e(n)}finally{r.f()}}else e.classList.toggle(n);return e},b=function(n,e){if(void 0!==e.length){var t,r=o(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,u=n.cloneNode(!0);i.appendChild(u)}}catch(n){r.e(n)}finally{r.f()}}else e.appendChild(n);return e},A=function(n){if(void 0!==n.length){var e,t=o(n);try{for(t.s();!(e=t.n()).done;){e.value.remove()}}catch(n){t.e(n)}finally{t.f()}}else n.remove();return n},S=function(n){return n[Math.random()*n.length|0]},w=function(n){return e(n).reduce((function(n,e){return n.includes(e)?n:n.concat(e)}),[])},C=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e(n).join(t)},L=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return j.filter(j.uniq(n),(function(n){return[].concat(t).every((function(e){return e.includes(n)}))}))},x=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=Math.min.apply(Math,e(n)),u=Math.max.apply(Math,e(n)),l=j.map(n,(function(n){return t+(r-t)*(n-i)/(u-i)}));return o?j.map(l,(function(n){return 0|n})):l},j=function(e,t){var r={element:n(e,t),dom:function(n){return i(n,r.element)},style:function(n,e){return l(n,e,r.element)},text:function(n){return a(n,r.element)},on:function(n,e){return f(n,e,r.element)},click:function(){return c(r.element)},hide:function(){return d(r.element)},display:function(){return s(r.element)},attr:function(n,e){return y(n,e,r.element)},haveClass:function(n){return h(n,r.element)},addClass:function(n){return m(n,r.element)},removeClass:function(n){return p(n,r.element)},toggleClass:function(n){return g(n,r.element)},add:function(n){return b(n,r.element)},remove:function(){return A(r.element)}};return r};return j.double=function(n){return function(n){return 2*n}(n)},j.id=function(n){return n},j.map=function(n,t){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.id;return e(n).map((function(n){return t(n)}))}(n,t)},j.forEach=j.each=function(n,t){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.id;return e(n).forEach((function(n){return t(n)}))}(n,t)},j.filter=function(n,t){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return e(n).filter((function(n){return t(n)}))}(n,t)},j.randArray=function(n){return S(n)},j.uniq=function(n){return w(n)},j.join=function(n,e){return C(n,e)},j.inter=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return L.apply(void 0,[n].concat(t))},j.scale=function(n,e,t,r){return x(n,e,t,r)},j}));
