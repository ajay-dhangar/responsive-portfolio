/*==================== Typing animation =========================== */
const typed = new Typed(".typing", {
  strings: [
    "A Web Developer",
    "A Web Designer",
    "An App Developer",
    "A YouTuber",
    "A Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/*============================= Navigation ======================================*/

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function (event) {
    event.preventDefault();
    removeActiveClass();
    const target = this.getAttribute("href").split("#")[1];
    document.getElementById(target).classList.add("active");
    asideSectionTogglerBtn();
  });
}

function removeActiveClass() {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
  }
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active", "open");
  }
}

function asideSectionTogglerBtn() {
  aside.classList.remove("open");
  navTogglerBtn.classList.remove("open");
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
});

for (let i = 0; i < totalSection; i++) {
  allSection[i].addEventListener("click", function () {
    removeActiveClass();
    this.classList.add("active");
  });
}
