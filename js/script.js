`use strict`;

window.addEventListener("load", function () {
  start();
});
/*
const HEADER_NAV = document.querySelector("." + "header-nav");
const HEADER_BLUER = document.querySelector(".header__bluer");
const whatDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
const whatEventUse = whatDevice ? "touchstart" : "click";
const SLIDER = document.querySelector("." + "reviews-slider__content");

const BUTTONS_SLIDERL = document.querySelector("#left");
const BUTTONS_SLIDERR = document.querySelector("#right");

let openW = false;
function openHeaderMenu(event) {
  if (event.target.closest("." + "header__button")) {
    openW = !openW;
    HEADER_NAV.classList.add("header-nav" + "--active");
    HEADER_BLUER.classList.add("header__bluer" + "--active");
  }
  if (
    event.target.closest(".header__bluer") ||
    event.target.closest(".header-nav__list")
  ) {
    openW = false;
    const timer = setTimeout(() => {
      HEADER_NAV.classList.remove("header-nav" + "--active");
      HEADER_BLUER.classList.remove("header__bluer" + "--active");
      HEADER_BLUER.classList.remove("header__bluer--clouse");
      HEADER_NAV.classList.remove("header-nav--clouse");
    }, 300);
    HEADER_BLUER.classList.add("header__bluer--clouse");
    HEADER_NAV.classList.add("header-nav--clouse");
    return () => clearTimeout(timer);
  }
}

const init = 500;
function onClickHandler() {
  if (!BUTTONS_SLIDERL || !BUTTONS_SLIDERR) return;
  BUTTONS_SLIDERL.addEventListener(
    whatEventUse,
    () => (SLIDER.scrollLeft += -init)
  );
  BUTTONS_SLIDERR.addEventListener(
    whatEventUse,
    () => (SLIDER.scrollLeft += init)
  );
}
*/
const sections = [...document.querySelectorAll("#scroll")];
const text = [...document.querySelectorAll(".header-nav__link")];
const logoText = document.querySelector(".logo__text");
const aside = document.querySelector(".aside");
const headert = document.querySelector(".header");
const rectLogo = document.querySelector(".logo__rect");
const scrollRoot = document.querySelector(".main").offsetHeight + 70;
const homeArt = document.querySelector(".home-art");

let timer;

function wegewg() {
  const options = {
    root: null,
    rootMargin: `${scrollRoot * -1}px`,
    threshold: 0,
  };

  let timer;

  function handleIntersection(entries, options) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        text.forEach((e) => e.classList.add("header-nav__link--theme"));
        headert.classList.add("header--theme");
        rectLogo.classList.add("logo__rect--theme");
        logoText.classList.add("logo__text--thema");
      } else {
        text.forEach((e) => e.classList.remove("header-nav__link--theme"));
        headert.classList.remove("header--theme");
        rectLogo.classList.remove("logo__rect--theme");
        logoText.classList.remove("logo__text--thema");
      }
    }, options);
  }

  const observer = new IntersectionObserver(handleIntersection, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
}

function start() {
  wegewg();
  /*onClickHandler();

  window.addEventListener(whatEventUse, (event) => {
    openHeaderMenu(event);
  });*/
}
