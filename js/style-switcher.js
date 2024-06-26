/*   toggle style switcher    */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})




/* theme light and dark mode */

// const dayNight = document.querySelectorAll(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//    dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

const dayNightElements = document.querySelectorAll(".day-night");

dayNightElements.forEach(dayNight => {
  dayNight.addEventListener("click", () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle("dark");
  });
});

window.addEventListener("load", () => {
  dayNightElements.forEach(dayNight => {
    if (document.body.classList.contains("dark")) {
      dayNight.querySelector('i').classList.add('fa-sun');
    } else {
      dayNight.querySelector('i').classList.add('fa-moon');
    }
  });
});
