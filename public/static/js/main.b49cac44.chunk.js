(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(22),i=c.n(s),a=(c(53),c(54),c(3)),r=(c(55),c(0)),j=function(){return Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("h4",{children:"Bep Viet"}),Object(r.jsx)("p",{children:"   55 rue president - 92700 - Colombes"})]})},o=c(4),l=(c(57),c(24)),d=c(6),b=["Menus","Entrees","Plats","Desserts","Boissons"],h=function(e){var t=e.products,c=Object(a.f)();return Object(r.jsx)("ul",{children:b.map((function(e,n){var s=t&&Object(l.a)(t).filter((function(t){return t.category===e}));return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"category",onClick:function(t){return function(e,t){setTimeout((function(){c.push("/products?cat=".concat(t))}),2e3)}(0,e)},children:[Object(r.jsxs)("h2",{children:[e,"  "]}),Object(r.jsx)("span",{children:"\u23e9"})]}),Object(r.jsx)("ul",{className:"category-list__all-products",children:null===s||void 0===s?void 0:s.map((function(e){var t=e.name,c=e._id,n=e.price,s=e.ingredients;return Object(r.jsxs)("li",{children:[Object(r.jsx)(d.b,{to:"/product/".concat(c),className:"name",children:t}),Object(r.jsxs)("p",{className:"price",children:[Number(n).toFixed(2)," \u20ac"]}),Object(r.jsxs)("p",{className:"ingredients",children:[s[0],s.length>0&&", ",s[1],s.length>0&&"..."]})]},c)}))})]},"".concat(e,"-").concat(n))}))})},O=function(e){var t=e.displayMenu,c=e.closeToggleBar,n=function(){c(!1)};return Object(r.jsxs)("div",{className:"menu-in-nav",children:[Object(r.jsxs)("div",{className:t?"menu-list expanded":"menu-list",children:[Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{onClick:n,className:"menu",children:[Object(r.jsx)(d.b,{to:"/products",children:Object(r.jsx)("h3",{children:"Carte"})}),Object(r.jsx)(h,{})]}),Object(r.jsx)("li",{children:Object(r.jsx)(d.c,{onClick:n,to:"/",children:Object(r.jsx)("h3",{children:"Histories"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.c,{onClick:n,to:"/contact",children:Object(r.jsx)("h3",{children:"Contacter"})})})]}),Object(r.jsx)("div",{className:"out-side-menu"})]}),Object(r.jsx)("div",{className:t?"left-menu-list expanded":"left-menu-list",onClick:n})]})},u=(c(62),function(e){var t=e.opened,c=e.closeToggleBar,s=Object(n.useState)(!1),i=Object(o.a)(s,2),a=i[0],j=i[1];return Object(n.useEffect)((function(){j(t)}),[t]),Object(r.jsx)("div",{onClick:function(){console.log("in toggle",!a),j(!a),c(!a)},className:a?"nav-toggle expanded":"nav-toggle",children:Object(r.jsx)("div",{className:"nav-toggle-bar"})})}),m=(c(63),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],i=function(e){console.log(e),s(e)};return Object(r.jsxs)("div",{className:"nav-bar",children:[Object(r.jsx)(u,{closeToggleBar:i,opened:c}),Object(r.jsx)(O,{displayMenu:c,closeToggleBar:i}),Object(r.jsxs)("div",{className:"logo",children:[Object(r.jsx)(d.b,{to:"/",children:Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{children:"B"}),"ep ",Object(r.jsx)("span",{children:"V"}),"iet"]})}),Object(r.jsxs)(d.b,{to:"/",children:["  ",Object(r.jsx)("p",{children:"Saveur asiatique"})]})]})]})}),p=c(23),x=c(29),g=c(32),f=(c(68),c(45)),v=c.n(f),_=Object(g.b)({accessToken:"pk.eyJ1IjoidHJhbngiLCJhIjoiY2tqZzR2M2RhMG1mNjJ5bG9wbTF2Z3EwaSJ9.s4CffQ9GjURVeHVpgekb1A"}),N=function(){var e=Object(n.useState)({name:"",message:"",email:"",tel:""}),t=Object(o.a)(e,2),c=t[0],s=t[1],i=function(e){s((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(p.a)({},e.target.name,e.target.value))}))};return Object(r.jsxs)("div",{className:"contact-page",children:[Object(r.jsxs)("div",{className:"contact-page__contact",children:[Object(r.jsxs)("ul",{className:"horaires",children:[Object(r.jsx)("h2",{children:"Horaires"}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Lundi"}),Object(r.jsx)("p",{children:"11:30 - 13:30 / 18:00 - 20:00"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Mardi"}),Object(r.jsx)("p",{children:"11:30 - 13:30 / 18:00 - 20:00"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Mercredi"}),Object(r.jsx)("p",{children:"11:30 - 13:30 / 18:00 - 20:00"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Jeudi"}),Object(r.jsx)("p",{children:"11:30 - 13:30 / 18:00 - 20:00"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Vendredi"}),Object(r.jsx)("p",{children:"11:30 - 13:30 / 18:00 - 20:00"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Samedi"}),Object(r.jsx)("p",{children:"11:30 - 13:30 / 18:00 - 20:00"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:"Dimanche"}),Object(r.jsx)("p",{children:" 17:00 - 20:00"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"contact-nous",children:"Contactez-nous!"}),Object(r.jsxs)("div",{className:"contact-tel",children:[Object(r.jsx)("label",{children:"Tel: "}),"\xa0\xa0",Object(r.jsx)("a",{href:"tel:0707070707",children:Object(r.jsx)("h3",{children:"07-07-07-07-07"})})]}),Object(r.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c),v.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"https://bepviet.herokuapp.com",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoidHJhbngiLCJhIjoiY2tqZzR2M2RhMG1mNjJ5bG9wbTF2Z3EwaSJ9.s4CffQ9GjURVeHVpgekb1A"}).EMAILJS_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"https://bepviet.herokuapp.com",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoidHJhbngiLCJhIjoiY2tqZzR2M2RhMG1mNjJ5bG9wbTF2Z3EwaSJ9.s4CffQ9GjURVeHVpgekb1A"}).EMAILJS_TEMPLATE_ID,c,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BACKEND_URL:"https://bepviet.herokuapp.com",REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoidHJhbngiLCJhIjoiY2tqZzR2M2RhMG1mNjJ5bG9wbTF2Z3EwaSJ9.s4CffQ9GjURVeHVpgekb1A"}).EMAILJS_USER_ID).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},children:[Object(r.jsx)("label",{htmlFor:"name",children:"Votre nom: "}),Object(r.jsx)("input",{required:!0,id:"name",name:"name",value:c.name,onChange:i}),Object(r.jsx)("label",{htmlFor:"email",children:"Votre email: "}),Object(r.jsx)("input",{required:!0,id:"email",type:"email",name:"email",value:c.email,onChange:i}),Object(r.jsx)("label",{htmlFor:"tel",children:"Votre num\xe9ro de t\xe9l\xe9phone : "}),Object(r.jsx)("input",{required:!0,id:"tel",name:"tel",value:c.tel,onChange:i}),Object(r.jsx)("label",{htmlFor:"message",children:"Votre message: "}),Object(r.jsx)("textarea",{required:!0,id:"message",name:"message",value:c.message,onChange:i}),Object(r.jsx)("button",{type:"submit",children:"Envoyer!"})]})]})]}),Object(r.jsxs)("div",{className:"contact-page__map",children:[Object(r.jsx)(_,{style:"mapbox://styles/mapbox/streets-v9",zoom:[12],containerStyle:{height:"100%",width:"100%"},center:[2.2371042700659154,48.9221467502941],children:Object(r.jsx)(g.a,{coordinates:[2.2371042700659154,48.9221467502941],children:Object(r.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",alt:"map"})})}),Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"   55 rue president - 92700 - Colombes"})})]})]})},C=c(16),S=c(15),E=c.n(S),T=c(48),k=c.n(T),A=(c(122),function(e){var t=e.selectedCat,c=Object(n.useState)([]),s=Object(o.a)(c,2),i=s[0],a=s[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),h=b[0],O=b[1],u=Object(n.useState)([]),m=Object(o.a)(u,2),p=m[0],x=m[1];Object(n.useEffect)((function(){E.a.get("https://bepviet.herokuapp.com/api/products").then((function(e){a(e.data)})).catch((function(e){return O(e.message)}))}),[]),Object(n.useEffect)((function(){x("All"===t?i:Object(l.a)(i).filter((function(e){return e.category===t})))}),[t]);var g=function(e){return e.map((function(e,c){var n=e._id,s=e.image,i=(e.category,e.name),a=e.price;return Object(r.jsxs)("div",{className:"alice-carousel__stage-item__added",children:[Object(r.jsxs)(d.b,{to:"/product/".concat(n),children:["Boissons"!==t&&Object(r.jsx)("div",{className:"overlay"}),Object(r.jsx)("img",{src:"".concat(s),alt:n,style:{objectFit:"Boissons"===t?"scale-down":"cover"}},c)]}),Object(r.jsxs)("div",{className:"information",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:i}),Object(r.jsx)("p",{children:a})]}),Object(r.jsx)(d.b,{to:"/product/".concat(n),children:"See more"})]})]})}))},f=0!==p.length?g(p):g(i);return 0===i.length?Object(r.jsx)("div",{children:"Loading ..."}):h?Object(r.jsx)("div",{children:h}):Object(r.jsx)(k.a,{autoPlayInterval:3e3,autoPlay:!0,fadeOutAnimation:!0,mouseTrackingEnabled:!0,disableAutoPlayOnAction:!0,infinite:!0,autoWidth:!0,items:f,responsive:{0:{items:1}},disableDotsControls:!0,innerWidth:266.5})}),P=(c(123),c(124),function(e){var t=e.sortByCat,c=function(e){t(e.target.id)};return Object(r.jsxs)("div",{className:"button-list",children:[Object(r.jsx)("button",{onClick:c,id:"All",children:"\ud83c\udf7d\xa0\xa0La\xa0carte"}),Object(r.jsx)("button",{onClick:c,id:"Menus",children:"\ud83c\udf71\xa0\xa0Menus"}),Object(r.jsx)("button",{onClick:c,id:"Entrees",children:"\ud83e\udd57\xa0\xa0Entr\xe9es"}),Object(r.jsx)("button",{onClick:c,id:"Plats",children:"\ud83c\udf5d\xa0\xa0Plats"}),Object(r.jsx)("button",{onClick:c,id:"Desserts",children:"\ud83c\udf70\xa0\xa0Desserts"}),Object(r.jsx)("button",{onClick:c,id:"Boissons",children:"\ud83c\udf79\xa0\xa0Boissons"})]})}),y=function(){var e=Object(n.useState)("All"),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"home-page",children:[Object(r.jsxs)(C.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:"Bep Viet Colombes"}),Object(r.jsx)("link",{rel:"canonical",href:"http://mysite.com/example"}),Object(r.jsx)("meta",{name:"description",content:"Bep Viet, Colombes, cuisine vietnamienne"}),Object(r.jsx)("meta",{name:"geo.region",content:"W6CP+VR Colombes, France"}),Object(r.jsx)("meta",{name:"geo.placename",content:"Colombes"}),Object(r.jsx)("meta",{name:"og:street-address",content:"55 rue du Pr\xe9sident Salvador Allende, 92700 Colombes "}),Object(r.jsx)("meta",{name:"geo.position",content:"48.9221467502941, 2.2371042700659154"}),Object(r.jsx)("meta",{name:"rating",content:"General"}),Object(r.jsx)("meta",{name:"copyright",content:"Bep Viet Colombes"}),Object(r.jsx)("meta",{name:"og:phone_number",content:"650-123-4567"}),Object(r.jsx)("meta",{name:"og:site_name",content:"Bep Viet Colombes"}),Object(r.jsx)("meta",{name:"og:url",content:"http://www.imdb.com/title/tt0117500/"}),Object(r.jsx)("meta",{name:"og:image",content:"http://ia.media-imdb.com/rock.jpg"})]}),Object(r.jsxs)("div",{className:"home-page__order-ways",children:[Object(r.jsxs)("div",{className:"option",children:[Object(r.jsx)("div",{className:"option-overlay",children:Object(r.jsx)("h2",{children:"Commander en ligne"})}),Object(r.jsxs)("div",{className:"option-information",children:[Object(r.jsx)("a",{href:"https://www.just-eat.fr/livraison/repas/bezons-centre",className:"link",children:Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/23/Uber_eats_logo_2017_06_22.jpg",alt:"ubereat"})}),Object(r.jsx)("a",{href:"https://www.just-eat.fr/livraison/repas/bezons-centre",className:"link",children:Object(r.jsx)("img",{src:"https://i.pinimg.com/originals/1f/22/88/1f22889a6babb1166286b13db517a555.png",alt:"deliveroo"})})]})]}),Object(r.jsxs)("div",{className:"option",children:[Object(r.jsx)("div",{className:"option-overlay",children:Object(r.jsx)("h2",{children:"Commander par telephone"})}),Object(r.jsx)("div",{className:"option-information",children:Object(r.jsx)("a",{href:"tel:0707070707",className:"link tel",children:Object(r.jsx)("h2",{children:"07-07-07-07-07"})})})]})]}),Object(r.jsx)(P,{sortByCat:function(e){s(e)}}),Object(r.jsx)("div",{className:"home-page__products",children:Object(r.jsx)(A,{selectedCat:c})})]})};var B=function(e){var t=e.allergenic,c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=s[0];return s[1],Object(r.jsx)("div",{className:"list-allergenic",children:t.map((function(e,t){return Object(r.jsxs)("div",{className:"allergenic",children:[Object(r.jsx)("p",{onmouseover:function(){return i(!0)},className:"icon",children:function(){switch(console.log("allergic ",e),e){case"s\xe9same/cacahu\xe8te":return"\ud83e\udd5c";case"porc":return"\ud83d\udc16";case"lait":return"\ud83e\udd5b";case"poisson":return"\ud83d\udc1f";default:return""}}()}),Object(r.jsx)("p",{className:"note",children:e})]})}))})},R=(c(125),Object(a.h)((function(e){var t=e.match.params.idProducts,c=Object(n.useState)(null),s=Object(o.a)(c,2),i=s[0],a=s[1],j=Object(n.useState)(""),l=Object(o.a)(j,2),d=l[0],b=l[1];return Object(n.useEffect)((function(){E.a.get("https://bepviet.herokuapp.com/api/products/"+t).then((function(e){return a(e.data)})).catch((function(e){return b(e.message)}))}),[]),Object(r.jsx)("div",{className:"product-page",children:i?d?Object(r.jsx)(r.Fragment,{children:d}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"product-page__image",children:Object(r.jsx)("img",{src:i.image})}),Object(r.jsxs)("div",{className:"product-page__details",children:[Object(r.jsx)("div",{className:"product-page__details-goBack",children:Object(r.jsx)("p",{onClick:function(){return e.history.goBack()},children:"\u23ee\ufe0f "})}),Object(r.jsx)("div",{className:"product-page__details-name",children:Object(r.jsx)("h2",{children:i.name})}),Object(r.jsx)("div",{className:"product-page__details-price",children:Object(r.jsxs)("h3",{children:[i.price," \u20ac"]})}),0!==(null===i||void 0===i?void 0:i.ingredients.length)&&Object(r.jsxs)("div",{className:"product-page__details-ingredients",children:[Object(r.jsx)("h3",{children:"Composition: "}),i.ingredients.map((function(e,t){return Object(r.jsxs)("p",{children:[" ",e]},"ing-".concat(t))}))]}),(null===i||void 0===i?void 0:i.description)&&Object(r.jsxs)("div",{className:"product-page__details-description",children:[Object(r.jsx)("h3",{children:"Description: "}),Object(r.jsx)("p",{children:i.description})]}),Object(r.jsx)("div",{className:"product-page__details-vegan",children:i.isVegan&&Object(r.jsx)("p",{children:"\ud83e\udd6c Veggie "})}),0!==i.allergenic.length&&Object(r.jsxs)("div",{className:"product-page__details-allergenic",children:[Object(r.jsx)("h3",{children:"Allerg\xe8ne: "}),Object(r.jsx)(B,{allergenic:i.allergenic})]})]})]}):Object(r.jsx)(r.Fragment,{children:"Loading ..."})})}))),V=(c(126),function(e){var t=e.products,c=e.category,n="";return t.forEach((function(e){n+="".concat(e.name,", ")})),Object(r.jsxs)("div",{className:"products",children:[Object(r.jsxs)(C.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsxs)("title",{children:["Bep Viet - ",c," "]}),Object(r.jsx)("meta",{name:"description",content:"Bep Viet - ".concat(c," - ").concat(n)}),Object(r.jsx)("link",{rel:"canonical",href:"http://mysite.com/example"})]}),t.map((function(e,t){var c=e.image,n=e.name,s=e.ingredients,i=e.price,a=e.isVegan,j=e._id;return Object(r.jsxs)("div",{className:"products__product",children:[Object(r.jsx)(d.b,{to:"/product/".concat(j),className:"products__product-image",children:Object(r.jsx)("img",{src:c,alt:"name-".concat(n)})}),Object(r.jsxs)("div",{className:"products__product-information",children:[Object(r.jsx)(d.b,{to:"/product/".concat(j),children:Object(r.jsxs)("h3",{className:"products__product-information__name",children:[" ",n]})}),Object(r.jsxs)("p",{className:"products__product-information__price",children:["Price: ",i,"\u20ac"]}),Object(r.jsxs)("p",{className:"products__product-information__ingredients",children:[Object(r.jsx)("span",{children:"Ingredients:"})," ",s.map((function(e,t){return Object(r.jsxs)("span",{children:[e,", "]},t)}))]}),a&&Object(r.jsx)("p",{children:"\ud83e\udd6c Veggie "})]})]},t)}))]})}),D=(c(127),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),l=j[0],d=j[1],b=Object(a.g)(),O=b.search&&b.search.split("=")[1];return Object(n.useEffect)((function(){E.a.get("https://bepviet.herokuapp.com/api/products"+b.search).then((function(e){s(e.data)})).catch((function(e){return d(e.message)}))}),[O,b.search]),b.search?Object(r.jsxs)("div",{className:"products-page",children:[Object(r.jsxs)(C.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:"Bep Viet Colombes"}),Object(r.jsx)("link",{rel:"canonical",href:"http://mysite.com/example"}),Object(r.jsx)("meta",{name:"description",content:"Bep Viet, Colombes, cuisine vietnamienne"})]}),Object(r.jsx)("a",{href:"/products",className:"btn-back",children:Object(r.jsxs)("h2",{children:["\u23ee\ufe0f  Nos produits: "," ",O]})}),Object(r.jsxs)("div",{children:[l&&Object(r.jsx)("div",{children:l}),Object(r.jsx)(V,{products:c,category:O})]})]}):Object(r.jsxs)("div",{className:"products-page",children:[Object(r.jsxs)(C.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:"Bep Viet - Plats"}),Object(r.jsx)("link",{rel:"canonical",href:"http://mysite.com/example"}),Object(r.jsx)("meta",{name:"description",content:"Bep Viet, Colombes, cuisine vietnamienne"})]}),Object(r.jsx)("div",{className:"category-list",children:Object(r.jsx)(h,{products:c||[]})})]})});var J=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{}),Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{exact:!0,path:"/",component:y}),Object(r.jsx)(a.a,{path:"/products",component:D}),Object(r.jsx)(a.a,{exact:!0,path:"/product/:idProducts",component:R}),Object(r.jsx)(a.a,{exact:!0,path:"/contact",component:N})]}),Object(r.jsx)(j,{})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};i.a.render(Object(r.jsx)(d.a,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),w()},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},68:function(e,t,c){}},[[128,1,2]]]);
//# sourceMappingURL=main.b49cac44.chunk.js.map