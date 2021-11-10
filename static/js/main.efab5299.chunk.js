(this["webpackJsonpmarvel-comics"]=this["webpackJsonpmarvel-comics"]||[]).push([[0],{66:function(e,t,c){},68:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a,n=c(1),s=c(17),r=c.n(s),i=c(4),o=c(12),l=c.n(o),m=c(15),d=c(14),j=c(34),u=c.n(j),b=c(35),_=c.n(b),O=Object({NODE_ENV:"production",PUBLIC_URL:"/marvel-comics",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PUBLIC_KEY,p=Object({NODE_ENV:"production",PUBLIC_URL:"/marvel-comics",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PRIVATE_KEY,h=function(){var e=Object(m.a)(l.a.mark((function e(t,c){var a,n,s,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Date.now(),n=u()("".concat(a).concat(p).concat(O)),s=Object(d.a)({ts:a,apikey:O,hash:n},c),r="".concat("https://gateway.marvel.com:443/v1/public","/").concat(t),e.prev=4,e.next=7,_.a.get(r,{params:s});case 7:return i=e.sent,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,c){return e.apply(this,arguments)}}(),x=c(11),C=Object(x.b)("lastComics/fetchLastComics",Object(m.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("comics",{orderBy:"modified",format:"comic"});case 2:return t=e.sent,c=t.data.data.results,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))),N=Object(x.c)({name:"shoppingCart",initialState:{comicsInCart:[],totalComicsInCart:0},reducers:{addComicToCart:function(e,t){var c=t.payload,a=c.id,n=e.comicsInCart.findIndex((function(e){return e.id===a}));-1!==n?e.comicsInCart[n].quantity++:e.comicsInCart.push(Object(d.a)(Object(d.a)({},c),{},{quantity:1})),e.totalComicsInCart++},deleteComicFromCart:function(e,t){var c=t.payload;e.comicsInCart=e.comicsInCart.filter((function(e){return e.id!==c}))},addOneComic:function(e,t){var c=t.payload,a=e.comicsInCart.findIndex((function(e){return e.id===c}));e.comicsInCart[a].quantity++},subtractOneComic:function(e,t){var c=t.payload,a=e.comicsInCart.findIndex((function(e){return e.id===c})),n=e.comicsInCart[a].quantity;e.comicsInCart[a].quantity=1!==n?n-1:1},clearCart:function(e){e.comicsInCart=[]}}}),v=c(16),f=Object(x.c)({name:"lastComics",initialState:{comics:[],loading:!1,error:!1},extraReducers:(a={},Object(v.a)(a,C.pending,(function(e){e.loading=!0})),Object(v.a)(a,C.fulfilled,(function(e,t){e.loading=!1,e.error=!1;var c=function(e){return e.map((function(e){var t=e.id,c=e.title,a=e.thumbnail,n=e.creators,s=e.prices,r=a.extension,i=a.path;return{id:t,title:c,creatorName:n.available>0?n.items[0].name:"Author not available",coverURL:"".concat(i,".").concat(r),price:Array.isArray(s)&&!s.length?"0":s[0].price}}))}(t.payload);e.comics=c})),Object(v.a)(a,C.rejected,(function(e){e.loading=!1,e.error=!0})),a)}),y=Object(x.c)({name:"buyerInformation",initialState:{buyerData:{name:"",phone:"",country:"",address:"",additionalInformation:"",city:"",state:"",zipCode:""}},reducers:{addClientInformation:function(e,t){var c=t.payload;e.buyerData=Object(d.a)({},c)}}}),I=Object(x.a)({reducer:{lastComics:f.reducer,shoppingCart:N.reducer,buyer:y.reducer}}),T=(c(66),c(0));function g(e){var t=e.id,c=e.coverURL,a=e.title,n=e.creatorName,s=e.price,r=Object(i.b)(),o=N.actions.addComicToCart;return Object(T.jsxs)("div",{className:"LastComics__Item",children:[Object(T.jsx)("img",{src:c,alt:"",className:"LastComics__Cover"}),Object(T.jsxs)("button",{type:"button",className:"AddToCartButton",onClick:function(){r(o({id:t,coverURL:c,title:a,creatorName:n,price:s}))},children:[Object(T.jsx)("img",{src:"".concat("/marvel-comics","/ShoppingcartInButton.svg"),alt:"",className:"AddToCartButton__CartIcon"}),Object(T.jsx)("span",{children:" ADD TO CART "})]}),Object(T.jsx)("p",{className:"LastComics__Title",children:a}),Object(T.jsx)("p",{className:"LastComics__Author",children:n}),Object(T.jsxs)("p",{className:"LastComics__Price",children:[s,"  "]})]},t)}var S=c(10);c(68);function F(){var e=Object(i.c)((function(e){return e.shoppingCart.comicsInCart})).reduce((function(e,t){return e+t.quantity}),0);return Object(T.jsxs)("div",{className:"Header__Container",children:[Object(T.jsx)(S.b,{to:"/",children:Object(T.jsx)("img",{src:"".concat("/marvel-comics","/MarvelLogo.svg"),alt:"",className:"Header__Logo"})}),Object(T.jsx)("p",{className:"Header__Link",children:" CHARACTERS "}),Object(T.jsx)("p",{className:"Header__Link",children:" CREATORS "}),Object(T.jsx)("p",{className:"Header__Link",children:" EVENTS "}),Object(T.jsxs)("div",{className:"Header__Button Header__Actions",children:[Object(T.jsx)("img",{src:"".concat("/marvel-comics","/SearchIcon.svg"),alt:"",className:"Header__Icon"}),Object(T.jsx)("span",{children:" Search comic "})]}),Object(T.jsx)(S.b,{className:"Header__Button",to:"/checkout",children:Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:"".concat("/marvel-comics","/ShoppingCart.svg"),alt:"",className:"Header__Icon"}),Object(T.jsx)("span",{className:"Header__text",children:" Shopping cart "}),Object(T.jsxs)("span",{className:"Header__Counter",children:[e," "]})]})})]})}c(71);var E=function(){return Object(T.jsx)("div",{className:"lds-hourglass"})};function P(e){var t=e.children;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(F,{}),t]})}function L(e){var t=e.comic,c=t.id,a=t.coverURL,n=t.title,s=t.creatorName,r=t.price,o=t.quantity,l=Object(i.b)();return Object(T.jsxs)("div",{className:"Item",children:[Object(T.jsx)("img",{src:a,alt:"",className:"Item__Image"}),Object(T.jsxs)("div",{className:"Item__Description",children:[Object(T.jsxs)("p",{className:"Item__Title",children:[n," "]}),Object(T.jsx)("p",{className:"Item__Author",children:s})]}),Object(T.jsxs)("div",{className:"Item__QuantityModification",children:[Object(T.jsx)("button",{className:"Item__QuantityButton",onClick:function(){l(N.actions.subtractOneComic(c))},children:"-"}),Object(T.jsx)("span",{className:"Item__Quantity",children:o}),Object(T.jsx)("button",{className:"Item__QuantityButton",onClick:function(){l(N.actions.addOneComic(c))},children:"+"})]}),Object(T.jsx)("p",{className:"Item__Price",children:(Math.round(r*o*100,2)/100).toFixed(2)}),Object(T.jsx)("img",{src:"".concat("/marvel-comics","/DeleteIcon.svg"),alt:"",className:"Item__DeleteIcon",onClick:function(){l(N.actions.deleteComicFromCart(c))}})]})}function A(e){var t=e.total,c=e.totalItems;return Object(T.jsxs)("div",{className:"Summary",children:[Object(T.jsxs)(S.b,{className:"BackToHome",to:"/",children:[Object(T.jsx)("img",{src:"".concat("/marvel-comics","/ArrowBack.svg"),alt:""}),Object(T.jsx)("span",{className:"BackToHome__Text",children:"Back to store"})]}),Object(T.jsxs)("div",{className:"Summary__Container",children:[Object(T.jsxs)("div",{className:"Summary__ContainerTotal",children:[Object(T.jsx)("div",{className:"Summary__Text",children:"Total"}),Object(T.jsx)("div",{className:"Summary__Total",children:(Math.round(100*t,2)/100).toFixed(2)})]}),Object(T.jsxs)("div",{className:"Summary__ItemsCount",children:[c," items"]})]})]})}c(72);function R(){var e=Object(i.c)((function(e){return e.lastComics.comics})),t=Object(i.c)((function(e){return e.lastComics.error})),c=Object(i.c)((function(e){return e.lastComics.loading})),a=Object(i.b)();return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(C());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(T.jsxs)("div",{className:"LastComics",children:[!t&&!c&&e.map((function(e){return Object(T.jsx)(g,{id:e.id,coverURL:e.coverURL,title:e.title,creatorName:e.creatorName,price:e.price})})),c&&Object(T.jsx)(E,{})]})}var k=c(3);c(73);function D(){var e=Object(i.c)((function(e){return e.shoppingCart.comicsInCart})),t=e.reduce((function(e,t){return e+t.quantity}),0),c=e.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(T.jsxs)("div",{className:"Checkout",children:[Object(T.jsx)("h1",{className:"Checkout__Title",children:"My cart"}),Object(T.jsxs)("div",{className:"Cart",children:[e.map((function(e){return Object(T.jsx)(L,{comic:e},e.id)})),Object(T.jsx)(A,{total:c,totalItems:t}),Object(T.jsx)("div",{className:"ContinueOrder",children:Object(T.jsx)(S.b,{to:"/payment",children:Object(T.jsx)("button",{className:"ContinueOrder__Button",children:"CONTINUE ORDER"})})})]})]})}c(74);function H(){var e=Object(n.useRef)(null),t=Object(i.b)();return Object(T.jsxs)("div",{className:"Payment",children:[Object(T.jsx)("h1",{className:"Payment__Title",children:"Payment"}),Object(T.jsxs)("div",{className:"Payment__Section",children:[Object(T.jsx)("h2",{className:"Payment__SubTitle",children:"Delivery Details"}),Object(T.jsxs)("form",{action:"#",ref:e,children:[Object(T.jsx)("h3",{className:"Form__Title",children:"Contact information"}),Object(T.jsxs)("div",{className:"Form__Section",children:[Object(T.jsxs)("label",{htmlFor:"name",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"Name and last name"}),Object(T.jsx)("input",{type:"text",name:"name",id:"name",className:"Form__Input"})]}),Object(T.jsxs)("label",{htmlFor:"phone",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"Phone Number"}),Object(T.jsx)("input",{type:"tel",name:"phone",id:"phone",className:"Form__Input",pattern:"[0-9]*"})]})]}),Object(T.jsx)("h3",{className:"Form__Title",children:"Delivery information"}),Object(T.jsxs)("div",{className:"Form__Section",children:[Object(T.jsxs)("label",{htmlFor:"country",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"Country"}),Object(T.jsx)("input",{type:"text",name:"country",id:"country",className:"Form__Input"})]}),Object(T.jsxs)("label",{htmlFor:"address",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"Address"}),Object(T.jsx)("input",{type:"text",name:"address",className:"Form__Input",id:"address"})]}),Object(T.jsxs)("label",{htmlFor:"additionalInformation",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"Additional information"}),Object(T.jsx)("input",{type:"text",name:"additionalInformation",className:"Form__Input",id:"additionalInformation"})]}),Object(T.jsxs)("label",{htmlFor:"city",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"City"}),Object(T.jsx)("input",{type:"text",name:"city",className:"Form__Input",id:"city"})]}),Object(T.jsxs)("label",{htmlFor:"state",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"State"}),Object(T.jsx)("input",{type:"text",name:"state",className:"Form__Input",id:"state"})]}),Object(T.jsxs)("label",{htmlFor:"zipCode",className:"Form__Label",children:[Object(T.jsx)("span",{className:"Form__Text",children:"Zip Code"}),Object(T.jsx)("input",{type:"text",name:"zipCode",className:"Form__Input",pattern:"[0-9]*",id:"zipCode"})]})]})]})]}),Object(T.jsxs)("div",{className:"NavigationButtons",children:[Object(T.jsxs)(S.b,{className:"BackToHome",to:"/checkout",children:[Object(T.jsx)("img",{src:"".concat("/marvel-comics","/ArrowBack.svg"),alt:""}),Object(T.jsx)("span",{className:"BackToHome__Text",children:"Back to shopping cart"})]}),Object(T.jsx)(S.b,{to:"/summary",children:Object(T.jsx)("button",{className:"ContinueOrder__Button",onClick:function(){var c=new FormData(e.current),a={name:c.get("name"),phone:c.get("phone"),country:c.get("country"),address:c.get("address"),additionalInformation:c.get("additionalInformation"),city:c.get("city"),state:c.get("state"),zipCode:c.get("zipCode")};t(y.actions.addClientInformation(a))},children:"GO TO PAY"})})]})]})}var B=c(37);c(75);function U(){var e=Object(i.c)((function(e){return e.shoppingCart.comicsInCart})),t=e.reduce((function(e,t){return e+t.price*t.quantity}),0),c=e.reduce((function(e,t){return e+t.quantity}),0),a=Object(i.b)(),n=Object(k.f)(),s={clientId:Object({NODE_ENV:"production",PUBLIC_URL:"/marvel-comics",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PAYPAL_CLIENT_ID,intent:"capture",currency:"USD"};return Object(T.jsxs)("div",{className:"Content",children:[Object(T.jsx)(A,{total:t,totalItems:c}),Object(T.jsx)("div",{className:"PaypalContainer",children:Object(T.jsx)(B.PayPalButton,{paypalOptions:s,style:{layout:"vertical",label:"pay",shape:"pill",size:"responsive"},amount:t,onSuccess:function(e){"COMPLETED"===e.status&&(a(N.actions.clearCart()),n.push("/payment/success"))},onError:function(e){return console.log(e)},onCancel:function(e){return console.log(e)}})})]})}c(76);function w(){return Object(T.jsxs)("div",{className:"Payment",children:[Object(T.jsx)("img",{className:"Payment__CheckIcon",src:"".concat("/marvel-comics","/CheckIcon.svg"),alt:""}),Object(T.jsx)("p",{className:"Payment__Callout",children:"PAYMENT DONE"}),Object(T.jsx)("p",{className:"Payment__Text",children:"Come back soon"})]})}var q=function(){return Object(T.jsx)(i.a,{store:I,children:Object(T.jsx)(S.a,{basename:"/",children:Object(T.jsx)(P,{children:Object(T.jsxs)(k.c,{children:[Object(T.jsx)(k.a,{exact:!0,path:"/",component:R}),Object(T.jsx)(k.a,{exact:!0,path:"/checkout",component:D}),Object(T.jsx)(k.a,{exact:!0,path:"/payment",component:H}),Object(T.jsx)(k.a,{exact:!0,path:"/summary",component:U}),Object(T.jsx)(k.a,{exact:!0,path:"/payment/success",component:w})]})})})})};c(77);r.a.render(Object(T.jsx)(q,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.efab5299.chunk.js.map