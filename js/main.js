document.addEventListener('DOMContentLoaded', () => {

  //============================================================JARALLAX-START
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.7,
  });
  //============================================================JARALLAX-END

  //============================================================WOW.JS-START
  new WOW().init();
  //============================================================WOW.JS-END

  //============================================================DARK-MODE-START
  const switchModeBtn = document.querySelectorAll(".dark-mode-btn");

  switchModeBtn.forEach((el) => {
    el.onclick = function () {
      const darkMode = document.body.classList.toggle("switch");

      if (darkMode) {
        localStorage.setItem('darkMode', 'dark')
      } else {
        localStorage.setItem('darkMode', 'light')
      }
    };
  });

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("switch");
  }

  if (localStorage.getItem('darkMode') === 'dark') {
    document.body.classList.add("switch");
  } else if (localStorage.getItem("darkMode") === "light") {
    document.body.classList.remove("switch");
  }

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

    if (newColorScheme === 'dark') {
      document.body.classList.add("switch");
      localStorage.setItem('darkMode', 'dark')
    } else {
      document.body.classList.remove("switch");
      localStorage.setItem('darkMode', 'light')
    }
  })
  //============================================================DARK-MODE-END

  //============================================================BURGER-START
  const burger = document.querySelector(".burger");
  const burgerOpen = document.querySelector(".burger__open");
  const burgerClose = document.querySelector(".burger__close");

  burgerOpen.onclick = function () {
    burger.classList.add("burger-show");
    document.body.classList.add("scroll-lock")
  };

  burgerClose.onclick = function () {
    burger.classList.remove("burger-show");
    document.body.classList.remove("scroll-lock")
  };
  //============================================================BURGER-END

});

