import{S as M}from"./assets/vendor-8mki8isw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function c(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=c(s);fetch(s.href,r)}})();const A=document.querySelectorAll(".dialog-close");function O(t){t&&(t.classList.add("active"),document.body.style.overflow="hidden")}function T(t){const e=t.currentTarget.closest(".backdrop");e==null||e.classList.remove("active"),document.body.style.overflow=""}A.forEach(t=>{t.addEventListener("click",T)});const d=document.querySelector(".header-menu-btn"),k=document.querySelectorAll(".header-menu-link"),g=document.querySelector(".header-menu");d==null||d.addEventListener("click",()=>{d.classList.toggle("active"),g==null||g.classList.toggle("active"),document.body.style.overflow==="hidden"?document.body.style.overflow="":document.body.style.overflow="hidden"});k.forEach(t=>{t.addEventListener("click",()=>{d==null||d.classList.remove("active"),g==null||g.classList.remove("active"),document.body.style.overflow=""})});const m=document.querySelector(".hero-car-img"),a=document.querySelector("#startStopBtn"),o=document.querySelector("#car-temperature"),n=document.querySelector("#car-speed"),l=document.querySelector("#car-battery");let S=!1,y=!1;const p=(t,e,c,i,s=1)=>{const r=c-e,u=Math.abs(Math.floor(i/r));let b=e;const x=c>e?s:-s;return new Promise(E=>{const w=()=>{b+=x,t.textContent=b.toString(),x>0&&b<c||x<0&&b>c?setTimeout(w,u):(t.textContent=c.toString(),E())};w()})};a==null||a.addEventListener("click",()=>{y||(y=!0,S&&o&&n&&l?(a.textContent="START",a.classList.remove("active"),m==null||m.classList.remove("active"),Promise.all([p(o,parseInt((o==null?void 0:o.textContent)??"0"),0,1e3),p(n,parseInt((n==null?void 0:n.textContent)??"0"),0,1e3,4),p(l,parseInt((l==null?void 0:l.textContent)??"0"),0,1e3)]).finally(()=>{y=!1})):(a.textContent="STOP",a.classList.add("active"),m==null||m.classList.add("active"),o&&n&&l&&Promise.all([p(o,0,24,1e3),p(n,0,873,1e3,4),p(l,0,94,1e3)]).finally(()=>{y=!1})),S=!S)});const f=[{id:1,brand:"Tesla",model:"Model X",price:98900,img:"./images/t-model-x-min.png",img2x:"./images/t-model-x@2x-min.png"},{id:2,brand:"Tesla",model:"Model 3",price:45900,img:"./images/t-model-3-min.png",img2x:"./images/t-model-3@2x-min.png"},{id:3,brand:"Audi",model:"E-tron",price:175900,img:"./images/a-etron-min.png",img2x:"./images/a-etron@2x-min.png"},{id:4,brand:"Porsche",model:"Boxster 987",price:126900,img:"./images/p-boxter-987-min.png",img2x:"./images/p-boxter-987@2x-min.png"},{id:5,brand:"Porsche",model:"Panamera",price:126900,img:"./images/p-panamera-min.png",img2x:"./images/p-panamera@2x-min.png"},{id:6,brand:"Porsche",model:"Turbo S",price:175900,img:"./images/p-turbo-s-min.png",img2x:"./images/p-turbo-s@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:7,brand:"Porsche",model:"Taycan",price:114900,img:"./images/p-taycan-min.png",img2x:"./images/p-taycan@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:8,brand:"Porsche",model:"Turbo S Cross",price:150900,img:"./images/p-turbo-s-cross-min.png",img2x:"./images/p-turbo-s-cross@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:9,brand:"Porsche",model:"Boxster 718",price:125900,img:"./images/p-boxter-987-min.png",img2x:"./images/p-boxter-987@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:10,brand:"Porsche",model:"Cayman",price:128900,img:"./images/p-cayman-min.png",img2x:"./images/p-cayman@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"}],P=document.querySelector(".swiper-wrapper");function K(t){P&&(P.innerHTML=t.map(e=>{if(e.type==="Electric")return`
          <li class="swiper-slide card cars-card">
          <h3 class="card-title cars-card-title">Porsche</h3>
          <p class="card-subtitle cars-card-subtitle">Turbo S</p>
          <img
            srcset="
              ${e.img}    1x,
              ${e.img2x} 2x
            "
            src="${e.img}"
            alt="${e.brand} ${e.model}"
            class="cars-card-img"
          />
          <ul class="cars-card-benefits">
             <li class="cars-card-benefits-item">
              <span class="card-card-benefits-icon">
              <svg>
                <use href="./images/svg/icons.svg#speed"></use>
              </svg>
              </span>
              <p class="cars-card-benefits-text">${e.acceleration} Sec</p>
            </li>
            <li class="cars-card-benefits-item">
              <span class="card-card-benefits-icon">
              <svg>
                <use href="./images/svg/icons.svg#stats"></use>
              </svg>
              </span>
              <p class="cars-card-benefits-text">${e.topSpeed} Km/h</p>
            </li>
            <li class="cars-card-benefits-item">
              <span class="card-card-benefits-icon">
              <svg>
                <use href="./images/svg/icons.svg#charging"></use>
              </svg>
              </span>
              <p class="cars-card-benefits-text">${e.type}</p>
            </li>
          </ul>
          <p class="card-price cars-card-price">$${e.price}</p>
          <button class="card-btn cars-card-btn" id="buy-car-btn" data-id="${e.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
        `}).join(""))}K(f);new M(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.5,spaceBetween:23,centeredSlides:!1,breakpoints:{768:{slidesPerView:3,spaceBetween:47,centeredSlides:!0}}});const q=document.querySelector(".store-list");function C(t){q&&(q.innerHTML=t.map(e=>{if(e.type!=="Electric")return`
        <li class="card store-item">
          <h3 class="card-title store-item-title">${e.brand}</h3>
          <p class="card-subtitle store-item-subtitle">${e.model}</p>
          <img 
            srcset="${e.img} 1x, ${e.img2x} 2x" 
            src="${e.img}" 
            alt="${e.model}" 
            class="store-item-img" 
          />
          <p class="card-price store-item-price">$${e.price.toLocaleString()}</p>
          <button class="card-btn store-item-btn" id="buy-car-btn" data-id="${e.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
      `}).join(""))}C(f);const h=document.querySelectorAll(".store-filters-btn");h==null||h.forEach(t=>{t.addEventListener("click",()=>{h.forEach(i=>i.classList.remove("active")),t.classList.add("active");const e=t.id.trim(),c=e==="all"?f:f.filter(i=>i.brand.toLowerCase()===e.toLowerCase());C(c)})});const L=document.querySelectorAll("#buy-car-btn"),$=document.querySelector(".car-dialog-cancel"),v=document.querySelector("#car-modal-content"),I=document.querySelector("#car-payment-modal");L==null||L.forEach(t=>{t.addEventListener("click",e=>{const c=e.currentTarget.dataset.id,i=f.find(s=>Number(s.id)===Number(c));v&&i&&(v.innerHTML=` 
        <h2 class="dialog-title car-dialog-title">Purchase Confirmation</h2>
        <img
          srcset="${i.img} 1x, ${i.img2x} 2x"
          src="${i.img}"
          alt="${i.brand} ${i.model}"
          class="car-dialog-img"
        />
  
        <h2 class="car-dialog-brand">
          ${i.brand} <span class="car-dialog-model">${i.model}</span>
        </h2>
        <p class="car-dialog-price">Total to Pay: <span>$${i.price}</span></p>
        `,O(I))})});$==null||$.addEventListener("click",t=>{T(t),v&&(v.innerHTML="")});
//# sourceMappingURL=index.js.map
