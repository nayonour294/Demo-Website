"use strict";

// Selection Section Here
const slideOne = document.querySelectorAll('.nav-row .menu-list a');
const appliSlideContainer = document.querySelector('.appli-slide-container');
const formPageOne = document.querySelector('#page1');
const formPageTwo = document.querySelector('#page2');
const formPageThree = document.querySelector('#page3');
const nextBtn = document.querySelector('#nest');
const nextTwoBtn = document.querySelector('#next2');
const prevBtn = document.querySelector('#previous');
const prevTwoBtn = document.querySelector('#previous2');




// Pre Loader Function
const bgLoading = document.querySelector('#loader');
const loadingAnimation = document.querySelector('#loader::after');

window.addEventListener("load", () => {
  bgLoading.style.display = "none";
})





nextBtn.addEventListener('click', () => {
  formPageOne.style.display = "none"
  formPageTwo.style.display = "Block"
  
});

nextTwoBtn.addEventListener('click', () => {
  formPageOne.style.display = "none"
  formPageTwo.style.display = "none"
  formPageThree.style.display = "block"
  
});

prevBtn.addEventListener('click', () => {
  formPageOne.style.display = "Block"
  formPageTwo.style.display = "none"
  
});

prevTwoBtn.addEventListener('click', () => {
  formPageOne.style.display = "none"
  formPageTwo.style.display = "block"
  formPageThree.style.display = "none"
  
});




let count = 1;

for(let list = 0; list < slideOne.length; list++) {
  slideOne[list].addEventListener("click", () => {

    const currentBg = document.querySelector(".active");
    currentBg.classList.remove("active");
    slideOne[list].classList.add("active");
    
  })
}



const allSlider = () => {

  let appliSwiper = new Swiper(".appli-swiper", {
    slidesPerView: 1,
    spaceBetween: 250,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}

allSlider();

const logosSlider = () => {

  let logosSwiper = new Swiper(".logos-swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 5,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}

logosSlider();
