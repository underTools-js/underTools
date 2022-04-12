"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6996],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},c="Add Class",i={unversionedId:"selector/class/addClass",id:"version-1.2.5/selector/class/addClass",title:"Add Class",description:"Basic use",source:"@site/versioned_docs/version-1.2.5/selector/class/addClass.md",sourceDirName:"selector/class",slug:"/selector/class/addClass",permalink:"/docs/selector/class/addClass",editUrl:"https://github.com/underTools-js/underTools/tree/dev/doc/versioned_docs/version-1.2.5/selector/class/addClass.md",tags:[],version:"1.2.5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Selector",permalink:"/docs/selector/"},next:{title:"Have Class",permalink:"/docs/selector/class/haveClass"}},u={},d=[{value:"Basic use",id:"basic-use",level:2},{value:"Details",id:"details",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-class"},"Add Class"),(0,o.kt)("h2",{id:"basic-use"},"Basic use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// With element selected in the DOM\n_('button').addClass('active');\n\n// With an element create in the dom\nconst button = _('button', 'create').text('Click');\n_('#root').dom(_(button).addClass('active'));\n")),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"addClass(name)"),": set the class entered as a parameter to the element(s).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": String")))))}f.isMDXComponent=!0}}]);