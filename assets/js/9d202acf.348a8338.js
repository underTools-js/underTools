"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8194],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c="Style",s={unversionedId:"selector/style",id:"version-1.2.5/selector/style",title:"Style",description:"Basic use",source:"@site/versioned_docs/version-1.2.5/selector/style.md",sourceDirName:"selector",slug:"/selector/style",permalink:"/docs/selector/style",editUrl:"https://github.com/underTools-js/underTools/tree/dev/doc/versioned_docs/version-1.2.5/selector/style.md",tags:[],version:"1.2.5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Remove",permalink:"/docs/selector/remove"},next:{title:"Text",permalink:"/docs/selector/text"}},p={},u=[{value:"Basic use",id:"basic-use",level:2},{value:"Details",id:"details",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"style"},"Style"),(0,a.kt)("h2",{id:"basic-use"},"Basic use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// With element selected in the DOM\n_('div').style();\n_('div').style().backgroundColor;\n_('div').style('background-color');\n_('div').style('background-color', '#000');\n\n// With an element create in the dom\n_('#root').dom(_('div', 'create').style('background-color', '#000'));\n")),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_(element, action).style()"),": get all the element(s) style(s)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_(element, action).style(property)")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"_(element, action).style().property"),": get the value of the property entered as parameter of the element(s).")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The property is written as in Javascript for ",(0,a.kt)("inlineCode",{parentName:"p"},"_(element, action).style().property")," (example ",(0,a.kt)("inlineCode",{parentName:"p"},"_(element, action).style().backgroundColor"),") and as in CSS for ",(0,a.kt)("inlineCode",{parentName:"p"},"_(element, action).style(property)")," (example ",(0,a.kt)("inlineCode",{parentName:"p"},"_(element, action).style('background-color'"),"))."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_(element, action).style(property, value)"),": set to the element(s) the value to the property entered as parameter.")))}m.isMDXComponent=!0}}]);