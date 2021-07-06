(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,a,t){e.exports=t(152)},138:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(38),m=t.n(u),d=(t(137),t(138),t(30)),b=t(15),p=t(119),g=t(55),v=t(14),k=t(120),E=t(24),h=t.n(E),f=t(33),w=t(18),O=t(48),j=Object(b.gql)(n||(n=Object(O.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          bookId\n          authors\n          image\n          description\n          title\n          link\n        }\n      }\n    }\n  }\n"]))),y=Object(b.gql)(r||(r=Object(O.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        bookCount\n        savedBooks {\n          bookId\n          authors\n          image\n          description\n          title\n          link\n        }\n      }\n    }\n  }\n"]))),S=Object(b.gql)(o||(o=Object(O.a)(["\n  mutation saveBook($input: BookInput!) {\n    saveBook(input: $input) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),I=Object(b.gql)(l||(l=Object(O.a)(["\n  mutation removeBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      email\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),x=t(165),C=t(166),B=t(171),q=t(116),F=t(167),T=t(168),L=t(176),_=t(114),N=t(115),$=t(95),P=t.n($),D=new(function(){function e(){Object(_.a)(this,e)}return Object(N.a)(e,[{key:"getProfile",value:function(){return P()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return P()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),G=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},M=function(){var e=Object(i.useState)([]),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(b.useMutation)(S),o=Object(w.a)(r,2),l=o[0],c=o[1],u=(c.error,c.data,Object(i.useState)("")),m=Object(w.a)(u,2),d=m[0],p=m[1],g=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),v=Object(w.a)(g,2),E=v[0],O=v[1];Object(i.useEffect)((function(){return function(){var e;(e=E).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var j=function(){var e=Object(f.a)(h.a.mark((function e(a){var t,r,o,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),d){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(d));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,l=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),console.log(l),n(l),p(""),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(a){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(h.a.mark((function e(a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),D.loggedIn()?D.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,l({variables:{input:n}});case 7:r=e.sent,r.data,console.log(E),O([].concat(Object(k.a)(E),[n.bookId])),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(C.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(B.a,{onSubmit:j},s.a.createElement(B.a.Row,null,s.a.createElement(q.a,{xs:12,md:8},s.a.createElement(B.a.Control,{name:"searchInput",value:d,onChange:function(e){return p(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(q.a,{xs:12,md:4},s.a.createElement(F.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(C.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(T.a,null,t.map((function(e){return s.a.createElement(L.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(L.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(L.a.Body,null,s.a.createElement(L.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(L.a.Text,null,e.description),D.loggedIn()&&s.a.createElement(F.a,{disabled:null===E||void 0===E?void 0:E.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return y(e.bookId)}},(null===E||void 0===E?void 0:E.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},U=Object(b.gql)(c||(c=Object(O.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        title\n        description\n        image\n        link\n      }\n    }\n  }\n"]))),V=function(){var e=Object(b.useQuery)(U),a=e.loading,t=e.data,n=(null===t||void 0===t?void 0:t.me)||[];console.log(n);var r=Object(b.useMutation)(I),o=Object(w.a)(r,2),l=o[0],c=(o[1].error,function(){var e=Object(f.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D.loggedIn()?D.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,l({variables:{bookId:a}});case 6:t=e.sent,t.data,G(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}());return a?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(C.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(C.a,null,s.a.createElement("h2",null,n.savedBooks.length?"Viewing ".concat(n.savedBooks.length," saved ").concat(1===n.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(T.a,null,n.savedBooks.map((function(e){return s.a.createElement(L.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(L.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(L.a.Body,null,s.a.createElement(L.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(L.a.Text,null,e.description),s.a.createElement(F.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))})))))},Y=t(173),A=t(172),J=t(170),K=t(174),z=t(51),H=t(169),Q=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(b.useMutation)(y),o=Object(w.a)(r,2),l=o[0],c=o[1],u=(c.error,c.data,Object(i.useState)(!1)),m=Object(w.a)(u,1)[0],p=Object(i.useState)(!1),g=Object(w.a)(p,2),v=g[0],k=g[1],E=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(z.a)({},r,o)))},O=function(){var e=Object(f.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,l({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,D.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),k(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(B.a,{noValidate:!0,validated:m,onSubmit:O},s.a.createElement(H.a,{dismissible:!0,onClose:function(){return k(!1)},show:v,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(B.a.Group,null,s.a.createElement(B.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(B.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:E,value:t.username,required:!0}),s.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(B.a.Group,null,s.a.createElement(B.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(B.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:E,value:t.email,required:!0}),s.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(B.a.Group,null,s.a.createElement(B.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(B.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:E,value:t.password,required:!0}),s.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(F.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},R=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(w.a)(e,2),t=a[0],n=a[1],r=Object(b.useMutation)(j),o=Object(w.a)(r,2),l=o[0],c=o[1],u=(c.error,c.data,Object(i.useState)(!1)),m=Object(w.a)(u,1)[0],p=Object(i.useState)(!1),g=Object(w.a)(p,2),v=g[0],k=g[1],E=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(z.a)({},r,o)))},O=function(){var e=Object(f.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,l({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,D.login(o.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),k(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(B.a,{noValidate:!0,validated:m,onSubmit:O},s.a.createElement(H.a,{dismissible:!0,onClose:function(){return k(!1)},show:v,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(B.a.Group,null,s.a.createElement(B.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(B.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:E,value:t.email,required:!0}),s.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(B.a.Group,null,s.a.createElement(B.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(B.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:E,value:t.password,required:!0}),s.a.createElement(B.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(F.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},W=function(){var e=Object(i.useState)(!1),a=Object(w.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(Y.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(C.a,{fluid:!0},s.a.createElement(Y.a.Brand,{as:g.b,to:"/"},"Google Books Search"),s.a.createElement(Y.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(Y.a.Collapse,{id:"navbar"},s.a.createElement(A.a,{className:"ml-auto"},s.a.createElement(A.a.Link,{as:g.b,to:"/"},"Search For Books"),D.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a.Link,{as:g.b,to:"/saved"},"See Your Books"),s.a.createElement(A.a.Link,{onClick:D.logout},"Logout")):s.a.createElement(A.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(J.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(K.a.Container,{defaultActiveKey:"login"},s.a.createElement(J.a.Header,{closeButton:!0},s.a.createElement(J.a.Title,{id:"signup-modal"},s.a.createElement(A.a,{variant:"pills"},s.a.createElement(A.a.Item,null,s.a.createElement(A.a.Link,{eventKey:"login"},"Login")),s.a.createElement(A.a.Item,null,s.a.createElement(A.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(J.a.Body,null,s.a.createElement(K.a.Content,null,s.a.createElement(K.a.Pane,{eventKey:"login"},s.a.createElement(R,{handleModalClose:function(){return n(!1)}})),s.a.createElement(K.a.Pane,{eventKey:"signup"},s.a.createElement(Q,{handleModalClose:function(){return n(!1)}})))))))},X=Object(b.createHttpLink)({uri:"/graphql"}),Z=Object(p.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),ee=new b.ApolloClient({link:Z.concat(X),cache:new b.InMemoryCache});var ae=function(){return s.a.createElement(b.ApolloProvider,{client:ee},s.a.createElement(g.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(W,null),s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/book-search-engine/",component:M}),s.a.createElement(v.a,{exact:!0,path:"/saved",component:V}),s.a.createElement(v.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(ae,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.38ddf55f.chunk.js.map