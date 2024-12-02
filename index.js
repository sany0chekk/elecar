import{S as C}from"./assets/vendor-8mki8isw.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const d=document.querySelector(".header-menu-btn"),q=document.querySelectorAll(".header-menu-link"),g=document.querySelector(".header-menu");d==null||d.addEventListener("click",()=>{d.classList.toggle("active"),g==null||g.classList.toggle("active"),document.body.style.overflow==="hidden"?document.body.style.overflow="":document.body.style.overflow="hidden"});q.forEach(t=>{t.addEventListener("click",()=>{d==null||d.classList.remove("active"),g==null||g.classList.remove("active"),document.body.style.overflow=""})});const m=document.querySelector(".hero-car-img"),a=document.querySelector("#startStopBtn"),o=document.querySelector("#car-temperature"),n=document.querySelector("#car-speed"),l=document.querySelector("#car-battery");let y=!1,b=!1;const p=(t,e,r,c,s=1)=>{const i=r-e,u=Math.abs(Math.floor(c/i));let f=e;const v=r>e?s:-s;return new Promise(P=>{const S=()=>{f+=v,t.textContent=f.toString(),v>0&&f<r||v<0&&f>r?setTimeout(S,u):(t.textContent=r.toString(),P())};S()})};a==null||a.addEventListener("click",()=>{b||(b=!0,y&&o&&n&&l?(a.textContent="START",a.classList.remove("active"),m==null||m.classList.remove("active"),Promise.all([p(o,parseInt((o==null?void 0:o.textContent)??"0"),0,1e3),p(n,parseInt((n==null?void 0:n.textContent)??"0"),0,1e3,4),p(l,parseInt((l==null?void 0:l.textContent)??"0"),0,1e3)]).finally(()=>{b=!1})):(a.textContent="STOP",a.classList.add("active"),m==null||m.classList.add("active"),o&&n&&l&&Promise.all([p(o,0,24,1e3),p(n,0,873,1e3,4),p(l,0,94,1e3)]).finally(()=>{b=!1})),y=!y)});const T=[{id:1,brand:"Porsche",model:"Turbo S",price:175900,img:"./images/p-turbo-s-min.png",img2x:"./images/p-turbo-s@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:2,brand:"Porsche",model:"Taycan",price:114900,img:"./images/p-taycan-min.png",img2x:"./images/p-taycan@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:3,brand:"Porsche",model:"Turbo S Cross",price:150900,img:"./images/p-turbo-s-cross-min.png",img2x:"./images/p-turbo-s-cross@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:4,brand:"Porsche",model:"Boxster 718",price:125900,img:"./images/p-boxter-987-min.png",img2x:"./images/p-boxter-987@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"},{id:5,brand:"Porsche",model:"Cayman",price:128900,img:"./images/p-cayman-min.png",img2x:"./images/p-cayman@2x-min.png",acceleration:"3.7 Sec",topSpeed:"356 Km/h",type:"Electric"}],L=document.querySelector(".swiper-wrapper");function E(t){L&&(L.innerHTML=t.map(e=>`
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
          <button class="card-btn cars-card-btn" data-id="${e.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
        `).join(""))}E(T);new C(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.5,spaceBetween:23,centeredSlides:!1,breakpoints:{768:{slidesPerView:3,spaceBetween:47,centeredSlides:!0}}});const x=[{id:1,brand:"Tesla",model:"Model X",price:98900,img:"./images/t-model-x-min.png",img2x:"./images/t-model-x@2x-min.png"},{id:2,brand:"Tesla",model:"Model 3",price:45900,img:"./images/t-model-3-min.png",img2x:"./images/t-model-3@2x-min.png"},{id:3,brand:"Audi",model:"E-tron",price:175900,img:"./images/a-etron-min.png",img2x:"./images/a-etron@2x-min.png"},{id:4,brand:"Porsche",model:"Boxster 987",price:126900,img:"./images/p-boxter-987-min.png",img2x:"./images/p-boxter-987@2x-min.png"},{id:5,brand:"Porsche",model:"Panamera",price:126900,img:"./images/p-panamera-min.png",img2x:"./images/p-panamera@2x-min.png"}],w=document.querySelector(".store-list");function $(t){w&&(w.innerHTML=t.map(e=>`
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
          <button class="card-btn store-item-btn" data-id="${e.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
      `).join(""))}$(x);const h=document.querySelectorAll(".store-filters-btn");h==null||h.forEach(t=>{t.addEventListener("click",()=>{h.forEach(c=>c.classList.remove("active")),t.classList.add("active");const e=t.id.trim(),r=e==="all"?x:x.filter(c=>c.brand.toLowerCase()===e.toLowerCase());$(r)})});
//# sourceMappingURL=index.js.map
