function openNav(){document.getElementById("mySidepanel").style.width="180px",document.getElementById("mySidepanel").style.right="0px"}function closeNav(){document.getElementById("mySidepanel").style.width="180px",document.getElementById("mySidepanel").style.right="-180px"}function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}$(".top").click((function(){return $("html, body").animate({scrollTop:0},500),!1})),$("#mySidepanel a, #myDropdown a").click((function(){$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-60},500)})),$(".aniview").AniView(),window.onclick=function(e){if(!e.target.matches(".dropbtn")){var i,n=document.getElementsByClassName("dropdown-content");for(i=0;i<n.length;i++){var t=n[i];t.classList.contains("show")&&t.classList.remove("show")}}};let swiper=new Swiper(".swiper-container",{slidesPerView:1,spaceBetween:10,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:40},1024:{slidesPerView:1,spaceBetween:50}}}),swiper2=new Swiper(".swiper-container2",{slidesPerView:2,slidesPerGroup:2,spaceBetween:10,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2,slidesPerGroup:2,spaceBetween:20},768:{slidesPerView:3,slidesPerGroup:3,spaceBetween:40},1024:{slidesPerView:4,slidesPerGroup:4,spaceBetween:50}}}),swiper3=new Swiper(".swiper-container3",{slidesPerView:2,slidesPerGroup:2,spaceBetween:10,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:2,spaceBetween:50}}}),swiper4=new Swiper(".swiper-container4",{slidesPerView:2,slidesPerGroup:2,spaceBetween:10,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:50}}}),swiper42=new Swiper(".swiper-container42",{slidesPerView:1,slidesPerGroup:1,spaceBetween:10,loop:!1,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:3,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}}}),swiper5=new Swiper(".swiperflip",{effect:"flip",grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper6=new Swiper(".swiperCover",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"}});