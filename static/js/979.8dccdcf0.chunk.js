"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[979],{396:function(e,n,t){t.r(n),t.d(n,{fetchCredits:function(){return o},fetchMovie:function(){return c},fetchQuery:function(){return u},fetchReviews:function(){return a},fetchTrending:function(){return i}});var r=t(243);r.Z.defaults.baseURL="https://api.themoviedb.org/3/",r.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjg4MTliMjUyOTAxOTkxMWIzMjg4MTRkYjI1MmQ4YSIsInN1YiI6IjY0NWI3NmVhNmFhOGUwMDE3MzgxYThlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u-ISzx_Hinkash-iFun779963DCpn6SaHRZhNpXKq9A";var i=function(){return r.Z.get("trending/movie/week").then((function(e){return e.data}))},u=function(e){return r.Z.get("search/movie",{params:{query:e}}).then((function(e){return e.data}))},c=function(e){return r.Z.get("movie/".concat(e)).then((function(e){return e.data}))},o=function(e){return r.Z.get("movie/".concat(e,"/credits")).then((function(e){return e.data}))},a=function(e){return r.Z.get("movie/".concat(e,"/reviews")).then((function(e){return e.data}))}},979:function(e,n,t){t.r(n);var r=t(861),i=t(439),u=t(757),c=t.n(u),o=t(396),a=t(791),s=t(689),h=t(184);n.default=function(e){var n=(0,s.UO)().movieId,t=(0,a.useState)(null),u=(0,i.Z)(t,2),f=u[0],d=u[1];return(0,a.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.fetchReviews)(n);case 2:t=e.sent,r=0===t.results.length?[{id:1,author:"",content:"No reviews"}]:t.results,d(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Reviews"}),f?(0,h.jsx)("ul",{children:f.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e.author}),(0,h.jsx)("div",{children:e.content})]},e.id)}))}):(0,h.jsx)("div",{children:"No reviews"})]})}}}]);
//# sourceMappingURL=979.8dccdcf0.chunk.js.map