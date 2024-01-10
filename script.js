const body = document.querySelector("body");
    let minsize = window.innerWidth;
    body.style.minWidth = minsize;

    document.addEventListener("DOMContentLoaded", function () {
      const div = document.getElementById("hamburger");
      const header = document.querySelector("header");
      const spam = document.getElementById("sp1");
      const spam2 = document.getElementById("sp2");
      const sections = document.querySelectorAll("section");
      const footer = document.querySelector("footer");
      const menu = document.querySelector(".menucontent");
      const headermid = document.querySelector(".middle");
      const headermain = document.querySelector(".mainheader");
      const mid_menu = document.querySelector(".mid_menu");
      const lang = document.querySelector(".lang");
      const mobilemenu_logo = document.querySelector(".menumobile-logo");
      const donate = document.querySelector(".DONATE");
      const mobilemenuani = document.querySelector(".mobilemenu");
      div.addEventListener("click", function () {
        spam.classList.toggle("rotate1");
        div.classList.toggle("no-gap");
        spam2.classList.toggle("rotate2");
        headermid.classList.toggle("hide");
        mid_menu.classList.toggle("show");
        headermain.classList.toggle("mobile_headermain");
        mobilemenu_logo.classList.toggle("mobile_show");
        body.classList.toggle("menu-body");
        mobilemenuani.classList.toggle('animobilemenu');
        header.classList.toggle("menu_header");
        header.classList.toggle("header");
        sections.forEach((section) => {
          section.classList.toggle("hide");
        });
        const menucomp = document.querySelectorAll(".menuconp");
        menucomp.forEach((menucop, index) => {
          setTimeout(() => {
            menucop.classList.toggle("open_transition");
          }, 100 * index);
        });
        footer.classList.toggle("hide");
        menu.classList.toggle("show");
        lang.classList.toggle("hide");
        donate.classList.toggle("menu_donate");
      });
    });

    const hoverhead = document.querySelectorAll(".hoverhead");
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const headanimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("headani");
        }
      });
    };

    let observer_hover = new IntersectionObserver(headanimation, option);
      hoverhead.forEach((element) => {
      observer_hover.observe(element);
    });

    const visiting_head = document.querySelectorAll(".headH1");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const animationclass = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("headani");
        }
      });
    };

    let observer = new IntersectionObserver(animationclass, options);
    visiting_head.forEach((element) => {
      observer.observe(element);
    });
    

    const videos = document.querySelectorAll(".video");

    videos.forEach((video) => {
      video.addEventListener("mouseenter", () => {
        video.play();
      });

      video.addEventListener("mouseleave", () => {
        video.pause();
        video.setAttribute(
          "poster",
          "https://images.prismic.io/railpark/28507bd7-e937-4074-87b0-95751194f4c1_noble-entrance.jpg?ixlib=gatsbyFP&amp;auto=compress%2Cformat&amp;fit=max&amp;q=50"
        );
      });
    });

    let previousScrollPosition = 0;

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > previousScrollPosition) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }

      previousScrollPosition = currentScrollPosition;
    });
 // ---------------------------------------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
        let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  const image = document.querySelectorAll(".slider_img");
  const slide_text = document.querySelectorAll(".animateText");

  function showSlide(index) {
    const currentTransform = -index * 100 + '%';
    slides.style.transform = 'translateX(' + currentTransform + ')';
    image.forEach((image,img_index)=>{
      if(img_index===index){
        image.style.transform='rotate(0) translateX(0) translateY(0)'
        image.style.opacity='1'
        image.style.transition="transform 2s linear, opacity 3.5s ease-in-out";
      }
     
      else{
        image.style.transform='rotate(-45deg) translateX(-50rem) translateY(80rem)'  
        image.style.opacity='0'
        image.style.transition="transform 2s linear, opacity .5s ease-in-out";
      }
    })
    slide_text.forEach((text,text_index)=>{
      if(text_index===index){
        text.style.transform='translateY(0) translateX(0)'
        text.style.transitionDelay='.5s'
        text.style.opacity='1'
        text.style.transition=" transform 2.5s, opacity 6s";
      }
      else{
        text.style.transform='translateY(100rem) translateX(85rem)'  
        text.style.transitionDelay='0s'
        text.style.opacity='0'
        text.style.transition=" transform 2.5s, opacity .5s";
      }
      if(text_index-1===index){
        text.style.transform='translateY(80rem) translateX(-15rem)'
        text.style.transition=''
        text.style.transitionDelay='0s'     
      }
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);
  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);
});
// -----------------------------------------------------------------------------------------------
    document.addEventListener("DOMContentLoaded", function () {
      const hoverVideo = document.querySelector(".hover-video");
      const customCursor = document.querySelector(".custom-cursor");
      const H = document.querySelector(".hover_vid");

      H.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        const halfWidth = x - hoverVideo.width / 2;
        const halfHeight = y - hoverVideo.height / 2;
        hoverVideo.style.left = `${halfWidth}px`;
        hoverVideo.style.top = `${halfHeight}px`;
      });

      H.addEventListener("mouseenter", function () {
        hoverVideo.style.opacity = 1;
        customCursor.style.opacity = 1;
      });

      H.addEventListener("mouseleave", function () {
        hoverVideo.style.opacity = 0;
        customCursor.style.opacity = 0;
      });
    });