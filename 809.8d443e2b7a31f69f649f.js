"use strict";(self.webpackChunkviso_test_task=self.webpackChunkviso_test_task||[]).push([[809],{279:(e,t,r)=>{r.d(t,{$:()=>u});var n=r(4848),a=r(3362),o=r(2732),s=r(3404),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},c=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function u(e){var t=e.className,r=e.variant,o=e.size,u=e.asChild,d=void 0!==u&&u,f=l(e,["className","variant","size","asChild"]),p=d?a.DX:"button";return(0,n.jsx)(p,i({"data-slot":"button",className:(0,s.cn)(c({variant:r,size:o,className:t}))},f))}},3369:(e,t,r)=>{r.d(t,{M:()=>a});var n=r(6540),a=function(e,t){var r=(0,n.useState)((function(){var r=localStorage.getItem(e);if(null===r)return t;try{return JSON.parse(r)}catch(r){return console.error("e",r),localStorage.removeItem(e),t}})),a=r[0],o=r[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),o(t),function(e,t){var r=new CustomEvent("localStorageChange",{detail:{key:e,value:t}});window.dispatchEvent(r)}(e,t)}]}},3404:(e,t,r)=>{r.d(t,{cn:()=>o});var n=r(4164),a=r(856);function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,a.QP)((0,n.$)(e))}},5646:(e,t,r)=>{r.d(t,{l:()=>n});var n=r(1083).A.create({baseURL:"https://www.themealdb.com/api/json/v1/1/"})},6719:(e,t,r)=>{r.d(t,{u:()=>i});var n=r(5646),a=function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}l((n=n.apply(e,t||[])).next())}))},o=function(e,t){var r,n,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},s=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},i=new(function(){function e(){}return e.prototype.getBySearch=function(e){return a(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,n.l.get("search.php?f=".concat(e))];case 1:return[2,t.sent().data.meals]}}))}))},e.prototype.getAllRecipes=function(){return a(this,void 0,void 0,(function(){var e,t,r,n,a,i,l;return o(this,(function(o){switch(o.label){case 0:e="abcdefghijklmnopqrstuvwxyz".split(""),t=[],r=0,n=e,o.label=1;case 1:if(!(r<n.length))return[3,6];a=n[r],o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.getBySearch(a)];case 3:return"no data found"!==(i=o.sent())&&(t=s(s([],t,!0),i,!0)),[3,5];case 4:return l=o.sent(),console.error('Error fetching recipes for letter "'.concat(a,'":'),l),[3,5];case 5:return r++,[3,1];case 6:return[2,t]}}))}))},e.prototype.getById=function(e){return a(this,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return[4,n.l.get("lookup.php?i=".concat(e))];case 1:return(t=r.sent().data).meals?[2,t.meals[0]]:[2,null]}}))}))},e}())},6809:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(4848),a=r(5012),o=r(5107),s=r(5773),i=r(2102),l=r(3404),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function d(e){var t=u(e,[]);return(0,n.jsx)(a.bL,c({"data-slot":"select"},t))}function f(e){var t=u(e,[]);return(0,n.jsx)(a.WT,c({"data-slot":"select-value"},t))}function p(e){var t=e.className,r=e.children,s=u(e,["className","children"]);return(0,n.jsxs)(a.l9,c({"data-slot":"select-trigger",className:(0,l.cn)("cursor-pointer border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",t)},s,{children:[r,(0,n.jsx)(a.In,{asChild:!0,children:(0,n.jsx)(o.A,{className:"size-4 opacity-50"})})]}))}function h(e){var t=e.className,r=e.children,o=e.position,s=void 0===o?"popper":o,i=u(e,["className","children","position"]);return(0,n.jsx)(a.ZL,{children:(0,n.jsxs)(a.UC,c({"data-slot":"select-content",className:(0,l.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:s},i,{children:[(0,n.jsx)(g,{}),(0,n.jsx)(a.LM,{className:(0,l.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:r}),(0,n.jsx)(m,{})]}))})}function v(e){var t=e.className,r=e.children,o=u(e,["className","children"]);return(0,n.jsxs)(a.q7,c({"data-slot":"select-item",className:(0,l.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",t)},o,{children:[(0,n.jsx)("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:(0,n.jsx)(a.VF,{children:(0,n.jsx)(s.A,{className:"size-4"})})}),(0,n.jsx)(a.p4,{children:r})]}))}function g(e){var t=e.className,r=u(e,["className"]);return(0,n.jsx)(a.PP,c({"data-slot":"select-scroll-up-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t)},r,{children:(0,n.jsx)(i.A,{className:"size-4"})}))}function m(e){var t=e.className,r=u(e,["className"]);return(0,n.jsx)(a.wn,c({"data-slot":"select-scroll-down-button",className:(0,l.cn)("flex cursor-default items-center justify-center py-1",t)},r,{children:(0,n.jsx)(o.A,{className:"size-4"})}))}var x=r(176),y=r(6540),b=r(5646),j=new(function(){function e(){}return e.prototype.getAll=function(){return e=this,t=void 0,n=function(){var e,t;return function(e,t){var r,n,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=i(0),s.throw=i(1),s.return=i(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(r){switch(r.label){case 0:return[4,b.l.get("list.php?c=list")];case 1:return e=r.sent().data,null===(t=e.meals)||void 0===t||t.unshift({strCategory:"All"}),[2,e.meals]}}))},new((r=void 0)||(r=Promise))((function(a,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,i)}l((n=n.apply(e,t||[])).next())}));var e,t,r,n},e}()),w=(0,y.memo)((function(e){var t=e.onChange,r=function(){var e=(0,x.I)({queryKey:["get categories"],queryFn:function(){return j.getAll()},staleTime:1/0}),t=e.data,r=e.isLoading;return(0,y.useMemo)((function(){return{categories:t,isLoading:r}}),[t,r])}(),a=r.categories,o=r.isLoading,s=(0,y.useMemo)((function(){return(0,n.jsx)(n.Fragment,{children:null==a?void 0:a.map((function(e){var t=e.strCategory;return(0,n.jsx)(v,{value:t,children:t},t)}))})}),[o]),i=(0,y.useCallback)((function(e){t(e)}),[t]);return o?"loading...":(0,n.jsxs)(d,{onValueChange:i,defaultValue:"All",children:[(0,n.jsx)(p,{className:"w-[180px]",children:(0,n.jsx)(f,{placeholder:"Category"})}),(0,n.jsx)(h,{children:s})]})})),N=r(181),O=r.n(N),k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},k.apply(this,arguments)};function S(e){var t=e.className,r=e.type,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["className","type"]);return(0,n.jsx)("input",k({type:r,"data-slot":"input",className:(0,l.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t)},a))}var A,C,P=r(7895);!function(e){e.NEWEST="newest",e.ALPHABETICALLY="alphabetically",e.CHEAPEST="cheapest"}(A||(A={})),function(e){e.FOUR="4",e.EIGHT="8",e.SIXTEEN="16",e.ALL="All"}(C||(C={}));var L=r(279),M=r(232),z=r(8635),E=function(e){var t=e.onPageChange,r=e.totalPages,a=e.currentPage,o=(0,y.useState)(5),s=o[0],i=o[1],l=(0,y.useState)(!1),c=l[0],u=l[1];(0,y.useEffect)((function(){var e=function(){var e=window.innerWidth;e<400?(u(!0),i(3)):e<640?(u(!1),i(5)):e<1e3?(u(!1),i(8)):(u(!1),i(18))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var d,f,p,h,v=(d=s,f=Math.floor(d/2),p=Math.max(2,a-f),h=Math.min(r-1,a+f),c&&(p=Math.max(2,a-1),h=Math.min(r-1,a+1)),h-p+1<d&&p>2&&(p=Math.max(2,h-d+1)),h-p+1<d&&h<r-1&&(h=Math.min(r-1,p+d-1)),Array.from({length:h-p+1},(function(e,t){return p+t}))),g=function(e){e>=1&&e<=r&&t(e)};return(0,n.jsxs)("div",{className:"flex justify-center space-x-4 py-6 ",children:[(0,n.jsx)(L.$,{className:"cursor-pointer",onClick:function(){return g(a-1)},disabled:1===a,children:(0,n.jsx)(M.A,{})}),(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)(L.$,{className:"cursor-pointer",variant:1===a?"outline":"default",onClick:function(){return g(1)},children:1}),v[0]>2&&!c&&(0,n.jsx)(L.$,{disabled:!0,children:"..."}),v.map((function(e){return(0,n.jsx)(L.$,{className:"cursor-pointer",variant:a===e?"outline":"default",onClick:function(){return g(e)},children:e},e)})),v[v.length-1]<r-1&&!c&&(0,n.jsx)(L.$,{disabled:!0,children:"..."}),r>1&&(0,n.jsx)(L.$,{className:"cursor-pointer",variant:a===r?"outline":"default",onClick:function(){return g(r)},children:r})]}),(0,n.jsx)(L.$,{className:"cursor-pointer",onClick:function(){return g(a+1)},disabled:a===r,children:(0,n.jsx)(z.A,{})})]})},I=r(6719),_=r(6943);const T=function(){var e=(0,y.useState)("All"),t=e[0],r=e[1],a=(0,y.useState)(""),o=a[0],s=a[1],i=(0,y.useState)(""),l=i[0],c=i[1],u=(0,y.useState)(1),g=u[0],m=u[1],b=(0,y.useState)(C.ALL),j=b[0],N=b[1],k=(0,y.useState)(1),A=k[0],L=k[1],M=function(e,t,r){var n=(0,x.I)({queryKey:["get all recipes",e],queryFn:function(){return""!==e?I.u.getBySearch(e):I.u.getAllRecipes()},staleTime:18e5}),a=n.data,o=n.isLoading;return{recipes:(0,y.useMemo)((function(){return a&&"no data found"!==a?(0,_.D)(a).filter((function(e){return"All"===t||e.strCategory===t})):[]}),[a,e,t,r]),isLoading:o}}(l,t,j),z=M.recipes,T=M.isLoading,F=(0,y.useCallback)(O()(c,500),[]),$=(0,y.useCallback)((function(e){s(e.target.value),F(e.target.value)}),[]),q=(0,y.useMemo)((function(){return(0,n.jsx)(n.Fragment,{children:Object.values(C).map((function(e){return(0,n.jsx)(v,{value:e,children:e},e)}))})}),[]),B=(0,y.useMemo)((function(){if(j!==C.ALL&&0!==z.length){var e=(g-1)*+j;return L(Math.ceil(z.length/+j)),z.slice(e,e+ +j)}L(1)}),[z,g]);return(0,n.jsxs)("div",{className:"flex flex-col gap-y-3",children:[(0,n.jsx)(S,{value:o,onChange:$,placeholder:"Search..."}),(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)(w,{onChange:function(e){r(e),m(1)}}),(0,n.jsxs)(d,{onValueChange:function(e){m(1),N(e)},defaultValue:j,children:[(0,n.jsx)(p,{className:"w-[180px]",children:(0,n.jsx)(f,{placeholder:"Per page"})}),(0,n.jsx)(h,{children:q})]})]}),(0,n.jsx)(P.RN,{recipes:null!=B?B:z,isLoading:T}),A>1&&(0,n.jsx)(E,{currentPage:g,totalPages:A,onPageChange:function(e){m(e)}})]})}},6943:(e,t,r)=>{r.d(t,{D:()=>a});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=function(e){try{var t=localStorage.getItem("favorites"),r=t?JSON.parse(t):null;return function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}([],e,!0).map((function(e){return n(n({},e),{favorite:!!(null==r?void 0:r.includes(e.idMeal))})}))}catch(e){throw console.error(e),new Error("Error processing products")}}},7895:(e,t,r)=>{r.d(t,{RN:()=>p,y5:()=>m,qA:()=>x});var n=r(4848),a=r(9293),o=r(4984),s=r(8219),i=r(3345),l=r(279),c=r(6540),u=(0,c.memo)((function(e){var t=e.recipe,r=e.toggleFavorite,u=e.favorite,d=(0,c.useState)(u),f=d[0],p=d[1],h=(0,o.Zp)(),v=(0,c.useCallback)((function(e){e.stopPropagation(),p(!f),r(t.idMeal)}),[t.idMeal,r]);return(0,n.jsxs)(a.Zp,{className:"overflow-hidden shadow-lg cursor-pointer",onClick:function(){return h("".concat(s.AY.recipe).concat(t.idMeal))},children:[(0,n.jsx)("img",{src:t.strMealThumb,alt:t.strMeal,className:"w-full h-[200px] object-cover"}),(0,n.jsx)(a.aR,{children:(0,n.jsx)(a.ZB,{children:t.strMeal})}),(0,n.jsxs)(a.Wu,{children:[(0,n.jsxs)("p",{className:"text-sm text-gray-700",children:["Category: ",t.strCategory]}),(0,n.jsxs)("p",{className:"text-sm text-gray-700",children:["Area: ",t.strArea]}),(0,n.jsx)(l.$,{variant:"ghost",className:"top-2 text-red-500 cursor-pointer",onClick:v,children:f?(0,n.jsx)(i.A,{className:"w-6 h-6 fill-[red]"}):(0,n.jsx)(i.A,{className:"w-6 h-6"})})]})]})})),d=r(3369),f=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},p=(0,c.memo)((function(e){var t=e.recipes,r=e.isLoading,a=function(){var e=(0,d.M)("favorites",[]),t=e[0],r=e[1];return[(0,c.useCallback)((function(e){var n=f([],t,!0);n.includes(e)?r(n.filter((function(t){return t!==e}))):r(f(f([],n,!0),[e],!1))}),[t,r])]}()[0];return r?(0,n.jsx)("p",{children:"Loading..."}):0===t.length?(0,n.jsx)("p",{children:"No data found"}):(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-between",children:t.map((function(e){return(0,n.jsx)(u,{recipe:e,toggleFavorite:a,favorite:e.favorite},e.idMeal)}))})})),h=r(176),v=r(6719),g=r(6943),m=function(e){var t=(0,h.I)({queryKey:["get recipe",e],queryFn:function(){return v.u.getById(e)}}),r=t.data,n=t.isLoading,a=r?(0,g.D)([r])[0]:r;return(0,c.useMemo)((function(){return{recipe:a,isLoading:n}}),[a,n])},x=function(){var e=(0,d.M)("favorites",[])[0],t=[];if(0===e.length)return[];for(var r=0,n=e;r<n.length;r++){var a=n[r],o=m(a).recipe;o&&t.push(o)}return t}},9293:(e,t,r)=>{r.d(t,{Wu:()=>u,ZB:()=>c,Zp:()=>i,aR:()=>l});var n=r(4848),a=r(3404),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function i(e){var t=e.className,r=s(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t)},r))}function l(e){var t=e.className,r=s(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card-header",className:(0,a.cn)("flex flex-col gap-1.5 px-6",t)},r))}function c(e){var t=e.className,r=s(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",t)},r))}function u(e){var t=e.className,r=s(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card-content",className:(0,a.cn)("px-6",t)},r))}}}]);