!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.r(t);var o=function(e,t){var n=document.createElement(e,{attributes:t});return t&&Object.entries(t).forEach((function(e){var t=a(e,2),r=t[0],o=t[1];n.setAttribute(r,o)})),n},i=o("header",{class:"header"}),s=o("h2",{class:"header__logo","data-page":"Home"}),c=o("div",{class:"header__search"}),l=o("img",{class:"icon",alt:"search icon",src:"./icons/search.svg"}),u=o("span",{class:"header__search-text"});s.textContent="Mealy",u.textContent="Search",c.append(l,u),i.append(s,c);for(var d=o("nav",{class:"nav"}),p=o("ul",{class:"nav__ul"}),f=["Menu","Contact","About"],m=0,g=f.length;m<g;m+=1){var h=o("a",{class:"nav__link",href:"#","data-page":f[m]}),v=o("li");h.textContent=f[m],v.append(h),p.append(v)}d.append(p);var _=o("span",{class:"bubble bubble__lg"}),b=o("span",{class:"bubble bubble__sm"}),y=o("div",{class:"hero"}),x=o("div",{class:"hero__left"}),C=o("div",{class:"hero__right"}),S=o("h1",{class:"hero__heading"}),w=o("p",{class:"hero__subheading"}),A=o("button",{class:"hero__cta"}),M=o("div",{class:"hero__image-container"}),j=o("img",{src:"./images/food4.png",alt:"plate with food"});S.textContent="Awesome Day. Special Breakfast",w.textContent="Mealy lets you get the food by the best chefs \n                            without waiting. Eat what you love and save your\n                            time for something cool",A.textContent="Order now",M.append(j),x.append(S,w,A),C.append(M),y.append(x,C);for(var O=o("ul",{class:"social-media"}),k=["instagram icon","twitter icon","facebook icon"],E=["./icons/instagram.svg","./icons/twitter.svg","./icons/facebook.svg"],T=0,z=k.length;T<z;T+=1){var H=o("li"),P=o("a",{class:"social-media__link",href:"#"}),q=o("img",{class:"icon",alt:k[T],src:E[T]});P.append(q),H.append(P),O.append(H)}for(var I=["./icons/arrow-left.svg","./icons/arrow-right.svg"],D=["arrow left icon","arrow right icon"],L=o("div",{class:"pagination"}),N=0;N<2;N+=1){var B=o("img",{class:"icon",alt:D[N],src:I[N]});L.append(B)}for(var J=0;J<4;J+=1){var $=o("span",{class:"pagination__circle"});1===J&&$.classList.add("pagination__circle--active"),L.insertBefore($,L.lastChild)}for(var F=o("div",{class:"menu"}),U=o("h2",{class:"menu__heading"}),Y=o("div",{class:"menu__cards"}),G=["./images/cola-min.png","./images/hammy1-min.png","./images/pizza-min.png","./images/hammy2-min.png"],K=["cola image","large hamburger","pizza","small hamburger"],Q=[5.49,15.99,25.45,8.99],R=["Iced Cola","Yummy Hammy","Pizza","Hammy"],V=0,W=G.length;V<W;V+=1){var X=o("div",{class:"card"}),Z=o("div",{class:"card__image-container"}),ee=o("img",{alt:K[V],src:G[V]}),te=o("span",{class:"card__price"}),ne=o("p",{class:"card__foodName"});ne.textContent=R[V],te.textContent="$".concat(Q[V]),Z.append(ee),X.append(Z,ne,te),Y.append(X)}U.textContent="Today's menu",F.append(U,Y);for(var ae=o("div",{class:"contact"}),re=o("h2",{class:"contact__heading"}),oe=o("form",{class:"form"}),ie=o("button",{class:"form__btn"}),se=o("textarea",{class:"form__input form__textarea",placeholder:" ",id:"Message"}),ce=o("label",{class:"form__label",for:"Message"}),le=o("div",{class:"form__group"}),ue=["Name","Email"],de=0,pe=ue.length;de<pe;de+=1){var fe=o("div",{class:"form__group"}),me=o("input",{class:"form__input",placeholder:" ",id:ue[de],required:!0}),ge=o("label",{class:"form__label",for:ue[de]});ge.textContent=ue[de],fe.append(me,ge),oe.append(fe)}re.textContent="Say Hi! Don't hesitate.",ce.textContent="Message",ie.textContent="Send",le.append(se,ce),oe.append(le,ie),ae.append(re,oe);var he=o("div",{class:"about"}),ve=o("h1",{class:"about__heading"}),_e=o("div",{class:"about__inner"}),be=o("p",{class:"about__paragraph"});ve.textContent="About us",be.textContent="Mealy is one of the country’s most celebrated restaurants;\n                        the creation of leading Australian restaurant group, \n                        Fink, and Executive Chef John Doe.The restaurant is \n                        an organic space reflective of John Doe’s nature inspired \n                        cuisine. The interplay of textures and colour brings life and \n                        a vibrance that embraces the restaurant’s place in the dress \n                        circle of Sydney Harbour. An ode to the Australian landscape, \n                        from the vast ocean floor, to the cracked bark of a paperbark \n                        tree, every detail from the ground up has been thoughtfully considered. \n                        The dining room is perfectly suited for a romantic dinner for 2, \n                        family gatherings,  larger parties, dinner meetings and corporate \n                        events- inquire about reserving our dining room for your next event.\n                        In addition to dining on-premise, Sidel’s also offers off-premise \n                        catering for all events.",_e.append(be),he.append(ve,_e);var ye=document.querySelector(".content"),xe=o("div",{class:"container"}),Ce=o("main"),Se=o("footer",{class:"footer"});function we(e){Ce.childNodes[0].remove();var t=e.target.dataset.page,n={Menu:function(){return Ce.append(F)},About:function(){return Ce.append(he)},Contact:function(){return Ce.append(ae)},Home:function(){return Ce.append(y)}};Se.append(O,L),"Contact"!==t&&"About"!==t||L.remove(),n[t]()}Ce.append(y),Se.append(O,L),xe.append(i,Ce,Se),ye.append(d,_,b,xe);var Ae=document.querySelectorAll("nav a"),Me=document.querySelector(".header__logo");Ae.forEach((function(e){e.addEventListener("click",we)})),Me.addEventListener("click",we)}]);