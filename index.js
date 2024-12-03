import{S as A}from"./assets/vendor-8mki8isw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function c(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=c(s);fetch(s.href,r)}})();const O=document.querySelectorAll(".dialog-close");function E(t){t&&(t.classList.add("active"),document.body.style.overflow="hidden")}function T(t){const e=t.currentTarget.closest(".backdrop");e==null||e.classList.remove("active"),document.body.style.overflow=""}O.forEach(t=>{t.addEventListener("click",T)});const g=document.querySelector(".header-menu-btn"),K=document.querySelectorAll(".header-menu-link"),b=document.querySelector(".header-menu");g==null||g.addEventListener("click",()=>{g.classList.toggle("active"),b==null||b.classList.toggle("active"),document.body.style.overflow==="hidden"?document.body.style.overflow="":document.body.style.overflow="hidden"});K.forEach(t=>{t.addEventListener("click",()=>{g==null||g.classList.remove("active"),b==null||b.classList.remove("active"),document.body.style.overflow=""})});const p=document.querySelector(".hero-car-img"),n=document.querySelector("#startStopBtn"),l=document.querySelector("#car-temperature"),d=document.querySelector("#car-speed"),m=document.querySelector("#car-battery");let L=!1,v=!1;const u=(t,e,c,o,s=1)=>{const r=c-e,f=Math.abs(Math.floor(o/r));let h=e;const S=c>e?s:-s;return new Promise(M=>{const P=()=>{h+=S,t.textContent=h.toString(),S>0&&h<c||S<0&&h>c?setTimeout(P,f):(t.textContent=c.toString(),M())};P()})};n==null||n.addEventListener("click",()=>{v||(v=!0,L&&l&&d&&m?(n.textContent="START",n.classList.remove("active"),p==null||p.classList.remove("active"),Promise.all([u(l,parseInt((l==null?void 0:l.textContent)??"0"),0,1e3),u(d,parseInt((d==null?void 0:d.textContent)??"0"),0,1e3,4),u(m,parseInt((m==null?void 0:m.textContent)??"0"),0,1e3)]).finally(()=>{v=!1})):(n.textContent="STOP",n.classList.add("active"),p==null||p.classList.add("active"),l&&d&&m&&Promise.all([u(l,0,24,1e3),u(d,0,873,1e3,4),u(m,0,94,1e3)]).finally(()=>{v=!1})),L=!L)});const y=[{id:1,brand:"Tesla",model:"Model X",price:98900,img:"./images/t-model-x-min.png",img2x:"./images/t-model-x@2x-min.png"},{id:2,brand:"Tesla",model:"Model 3",price:45900,img:"./images/t-model-3-min.png",img2x:"./images/t-model-3@2x-min.png"},{id:3,brand:"Audi",model:"E-tron",price:175900,img:"./images/a-etron-min.png",img2x:"./images/a-etron@2x-min.png"},{id:4,brand:"Porsche",model:"Boxster 987",price:126900,img:"./images/p-boxter-987-min.png",img2x:"./images/p-boxter-987@2x-min.png"},{id:5,brand:"Porsche",model:"Panamera",price:126900,img:"./images/p-panamera-min.png",img2x:"./images/p-panamera@2x-min.png"},{id:6,brand:"Porsche",model:"Turbo S",price:175900,img:"./images/p-turbo-s-min.png",img2x:"./images/p-turbo-s@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:7,brand:"Porsche",model:"Taycan",price:114900,img:"./images/p-taycan-min.png",img2x:"./images/p-taycan@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:8,brand:"Porsche",model:"Turbo S Cross",price:150900,img:"./images/p-turbo-s-cross-min.png",img2x:"./images/p-turbo-s-cross@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:9,brand:"Porsche",model:"Boxster 718",price:125900,img:"./images/p-boxter-987-min.png",img2x:"./images/p-boxter-987@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:10,brand:"Porsche",model:"Cayman",price:128900,img:"./images/p-cayman-min.png",img2x:"./images/p-cayman@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"}],q=document.querySelector(".swiper-wrapper");function I(t){q&&(q.innerHTML=t.map(e=>{if(e.type==="Electric")return`
          <li class="swiper-slide card cars-card">
          <h3 class="card-title cars-card-title">${e.brand}</h3>
          <p class="card-subtitle cars-card-subtitle">${e.model}</p>
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
          <button class="card-btn cars-card-btn buy-car-btn" data-id="${e.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
        `}).join(""))}I(y);new A(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.5,spaceBetween:23,centeredSlides:!1,breakpoints:{768:{slidesPerView:3,spaceBetween:47,centeredSlides:!0}}});const C=document.querySelector(".store-list");function k(t){C&&(C.innerHTML=t.map(e=>{if(e.type!=="Electric")return`
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
          <button class="card-btn store-item-btn buy-car-btn" data-id="${e.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
      `}).join(""))}k(y);const x=document.querySelectorAll(".store-filters-btn");x==null||x.forEach(t=>{t.addEventListener("click",()=>{x.forEach(o=>o.classList.remove("active")),t.classList.add("active");const e=t.id.trim(),c=e==="all"?y:y.filter(o=>o.brand.toLowerCase()===e.toLowerCase());k(c)})});const N=document.querySelector("#subscribe-modal"),$=document.querySelector("#open-subscribe-modal");$==null||$.addEventListener("click",()=>E(N));let i;const w=document.querySelectorAll(".car-list-container"),a=document.querySelector("#car-modal-content"),H=document.querySelector("#car-payment-modal");w==null||w.forEach(t=>{t.addEventListener("click",e=>{const c=e.target;if(c.closest(".buy-car-btn")){const o=c.closest(".buy-car-btn").dataset.id;i=y.find(s=>Number(s.id)===Number(o)),a&&i&&(a.innerHTML=` 
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
        <div class="car-dialog-btns">
          <button class="button car-dialog-btn car-dialog-book">Book Now</button>
          <button class="button car-dialog-btn car-dialog-cancel">Cancel</button>
        </div>
        `,E(H))}})});a==null||a.addEventListener("click",t=>{const e=t.target;e.classList.contains("car-dialog-book")&&(a.innerHTML=`
    <h2 class="dialog-title car-dialog-title">Booking Confirmed</h2>
      <p class="car-dialog-message">
        Your car <strong>${i==null?void 0:i.brand} ${i==null?void 0:i.model}</strong> has been booked and is waiting for you at the showroom!
      </p>
  `),e.classList.contains("car-dialog-cancel")&&(T(t),a&&(a.innerHTML=""))});
//# sourceMappingURL=index.js.map
