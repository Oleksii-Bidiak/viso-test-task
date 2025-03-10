"use strict";(self.webpackChunkviso_test_task=self.webpackChunkviso_test_task||[]).push([[311],{279:(e,r,t)=>{t.d(r,{$:()=>u});var n=t(4848),a=t(3362),o=t(2732),i=t(3404),s=function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},s.apply(this,arguments)},c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t},l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function u(e){var r=e.className,t=e.variant,o=e.size,u=e.asChild,d=void 0!==u&&u,f=c(e,["className","variant","size","asChild"]),p=d?a.DX:"button";return(0,n.jsx)(p,s({"data-slot":"button",className:(0,i.cn)(l({variant:t,size:o,className:r}))},f))}},3369:(e,r,t)=>{t.d(r,{M:()=>a});var n=t(6540),a=function(e,r){var t=(0,n.useState)((function(){var t=localStorage.getItem(e);if(null===t)return r;try{return JSON.parse(t)}catch(t){return console.error("e",t),localStorage.removeItem(e),r}})),a=t[0],o=t[1];return[a,function(r){localStorage.setItem(e,JSON.stringify(r)),o(r),function(e,r){var t=new CustomEvent("localStorageChange",{detail:{key:e,value:r}});window.dispatchEvent(t)}(e,r)}]}},3404:(e,r,t)=>{t.d(r,{cn:()=>o});var n=t(4164),a=t(856);function o(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return(0,a.QP)((0,n.$)(e))}},5646:(e,r,t)=>{t.d(r,{l:()=>n});var n=t(1083).A.create({baseURL:"https://www.themealdb.com/api/json/v1/1/"})},6311:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(4848),a=t(7895),o=t(3369),i=t(279),s=t(6540);const c=function(){var e=(0,o.M)("favorites",[]),r=e[0],t=e[1],c=(0,a.qA)(),l=(0,s.useMemo)((function(){if(0===r.length)return[];var e=new Map;return c.forEach((function(r){for(var t=1;t<=20;t++){var n="strIngredient".concat(t),a="strMeasure".concat(t),o=null==r?void 0:r[n],i=null==r?void 0:r[a];if("string"==typeof o&&o.trim()&&"string"==typeof i){var s=e.get(o)||"";e.set(o,"".concat(s," ").concat(i).trim())}}})),Array.from(e.entries()).map((function(e){var r=e[0],t=e[1];return"".concat(r,": ").concat(t)}))}),[r,c]);return(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Favorite Recipes"}),(null==r?void 0:r.length)>0&&(0,n.jsx)(i.$,{variant:"destructive",className:"mb-4 cursor-pointer",onClick:function(){return t([])},children:"Clear All"}),Array.isArray(c)&&c.length>0&&(0,n.jsx)(a.RN,{recipes:r.length>0?c:[],isLoading:!1}),!!l&&(null==l?void 0:l.length)>0&&(0,n.jsxs)("div",{className:"mt-8",children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-2",children:"Combined Ingredients"}),(0,n.jsx)("ul",{className:"list-disc pl-5",children:l.map((function(e,r){return(0,n.jsx)("li",{children:e},r)}))})]})]})}},6719:(e,r,t)=>{t.d(r,{u:()=>s});var n=t(5646),a=function(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}c((n=n.apply(e,r||[])).next())}))},o=function(e,r){var t,n,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=s(0),i.throw=s(1),i.return=s(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(t=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=r.call(e,o)}catch(e){s=[6,e],n=0}finally{t=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},i=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},s=new(function(){function e(){}return e.prototype.getBySearch=function(e){return a(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,n.l.get("search.php?f=".concat(e))];case 1:return[2,r.sent().data.meals]}}))}))},e.prototype.getAllRecipes=function(){return a(this,void 0,void 0,(function(){var e,r,t,n,a,s,c;return o(this,(function(o){switch(o.label){case 0:e="abcdefghijklmnopqrstuvwxyz".split(""),r=[],t=0,n=e,o.label=1;case 1:if(!(t<n.length))return[3,6];a=n[t],o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.getBySearch(a)];case 3:return"no data found"!==(s=o.sent())&&(r=i(i([],r,!0),s,!0)),[3,5];case 4:return c=o.sent(),console.error('Error fetching recipes for letter "'.concat(a,'":'),c),[3,5];case 5:return t++,[3,1];case 6:return[2,r]}}))}))},e.prototype.getById=function(e){return a(this,void 0,void 0,(function(){var r;return o(this,(function(t){switch(t.label){case 0:return[4,n.l.get("lookup.php?i=".concat(e))];case 1:return(r=t.sent().data).meals?[2,r.meals[0]]:[2,null]}}))}))},e}())},6943:(e,r,t)=>{t.d(r,{D:()=>a});var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},n.apply(this,arguments)},a=function(e){try{var r=localStorage.getItem("favorites"),t=r?JSON.parse(r):null;return function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))}([],e,!0).map((function(e){return n(n({},e),{favorite:!!(null==t?void 0:t.includes(e.idMeal))})}))}catch(e){throw console.error(e),new Error("Error processing products")}}},7895:(e,r,t)=>{t.d(r,{RN:()=>p,y5:()=>y,qA:()=>m});var n=t(4848),a=t(9293),o=t(4984),i=t(8219),s=t(3345),c=t(279),l=t(6540),u=(0,l.memo)((function(e){var r=e.recipe,t=e.toggleFavorite,u=e.favorite,d=(0,l.useState)(u),f=d[0],p=d[1],v=(0,o.Zp)(),h=(0,l.useCallback)((function(e){e.stopPropagation(),p(!f),t(r.idMeal)}),[r.idMeal,t]);return(0,n.jsxs)(a.Zp,{className:"overflow-hidden shadow-lg cursor-pointer",onClick:function(){return v("".concat(i.AY.recipe).concat(r.idMeal))},children:[(0,n.jsx)("img",{src:r.strMealThumb,alt:r.strMeal,className:"w-full h-[200px] object-cover"}),(0,n.jsx)(a.aR,{children:(0,n.jsx)(a.ZB,{children:r.strMeal})}),(0,n.jsxs)(a.Wu,{children:[(0,n.jsxs)("p",{className:"text-sm text-gray-700",children:["Category: ",r.strCategory]}),(0,n.jsxs)("p",{className:"text-sm text-gray-700",children:["Area: ",r.strArea]}),(0,n.jsx)(c.$,{variant:"ghost",className:"top-2 text-red-500 cursor-pointer",onClick:h,children:f?(0,n.jsx)(s.A,{className:"w-6 h-6 fill-[red]"}):(0,n.jsx)(s.A,{className:"w-6 h-6"})})]})]})})),d=t(3369),f=function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},p=(0,l.memo)((function(e){var r=e.recipes,t=e.isLoading,a=function(){var e=(0,d.M)("favorites",[]),r=e[0],t=e[1];return[(0,l.useCallback)((function(e){var n=f([],r,!0);n.includes(e)?t(n.filter((function(r){return r!==e}))):t(f(f([],n,!0),[e],!1))}),[r,t])]}()[0];return t?(0,n.jsx)("p",{children:"Loading..."}):0===r.length?(0,n.jsx)("p",{children:"No data found"}):(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-between",children:r.map((function(e){return(0,n.jsx)(u,{recipe:e,toggleFavorite:a,favorite:e.favorite},e.idMeal)}))})})),v=t(176),h=t(6719),g=t(6943),y=function(e){var r=(0,v.I)({queryKey:["get recipe",e],queryFn:function(){return h.u.getById(e)}}),t=r.data,n=r.isLoading,a=t?(0,g.D)([t])[0]:t;return(0,l.useMemo)((function(){return{recipe:a,isLoading:n}}),[a,n])},m=function(){var e=(0,d.M)("favorites",[])[0],r=[];if(0===e.length)return[];for(var t=0,n=e;t<n.length;t++){var a=n[t],o=y(a).recipe;o&&r.push(o)}return r}},9293:(e,r,t)=>{t.d(r,{Wu:()=>u,ZB:()=>l,Zp:()=>s,aR:()=>c});var n=t(4848),a=t(3404),o=function(){return o=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},o.apply(this,arguments)},i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t};function s(e){var r=e.className,t=i(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card",className:(0,a.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r)},t))}function c(e){var r=e.className,t=i(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card-header",className:(0,a.cn)("flex flex-col gap-1.5 px-6",r)},t))}function l(e){var r=e.className,t=i(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card-title",className:(0,a.cn)("leading-none font-semibold",r)},t))}function u(e){var r=e.className,t=i(e,["className"]);return(0,n.jsx)("div",o({"data-slot":"card-content",className:(0,a.cn)("px-6",r)},t))}}}]);