const burger = document.querySelector(".burger"),
  nav = document.querySelector(".header__nav"),
  link = document.querySelectorAll(".header__link")


burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
	document.body.classList.toggle('overflow')
});

link.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove('overflow')
  })
})

document.querySelector(".header__btn-login").onclick = function () {
  document.querySelector(".overlay").classList.add("overlay_active");
  document
    .querySelector(".popup__form-login")
    .classList.add("popup__form-login_active");
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove('overflow')
};
document.querySelector(".header__btn-signup").onclick = function () {
  document.querySelector(".overlay").classList.add("overlay_active");
  document
    .querySelector(".popup__form-signup")
    .classList.add("popup__form-signup_active");
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.body.classList.remove('overflow')
};
document.querySelector(".popup__close").onclick = function () {
  document.querySelector(".overlay").classList.remove("overlay_active");
  document
    .querySelector(".popup__form-login")
    .classList.remove("popup__form-login_active");
  document
    .querySelector(".popup__form-signup")
    .classList.remove("popup__form-signup_active");
};

document.querySelector(".tools__more").onclick = function () {
  document.querySelector(".tools__more").classList.toggle("active");
  if (document.querySelector(".tools__more").classList.contains("active")) {
    document.querySelector(".tools__more").textContent = "Hide";
  } else {
    document.querySelector(".tools__more").textContent = "Load more...";
  }
  document.querySelectorAll(".hide").forEach((el) => {
    el.classList.toggle("active");
  });
};
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

