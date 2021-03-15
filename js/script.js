//mobile menu
let mql = window.matchMedia("screen and (max-width: 768px)");

let mobileMenuGo = () => {
  document.querySelectorAll(".menu__item--title").forEach((menuItem) => {
    let submenuOpen = false;
    menuItem.addEventListener("click", (e) => {
      submenuOpen = !submenuOpen;
      if (submenuOpen) {
        menuItem.style = "border-bottom: 1px solid gold; color:gold";
        menuItem.nextElementSibling.style = `opacity: 1; height: ${menuItem.nextElementSibling.scrollHeight}px; transition: all 200ms ease;`;
      } else {
        menuItem.nextElementSibling.style = `opacity: 0, height: 0; transition: all 200ms ease;`;
        menuItem.style = "border-bottom: 1px solid inherit; color: inherit";
      }
    });
  });
};
if (window.innerWidth <= 768) {
  mobileMenuGo();
}

// mql.addEventListener("change", (e) => {
//   if (e.matches) {
//     mobileMenuGo();
//   } else {
//     document.querySelectorAll(".menu__item--title").forEach((menuItem) => {
//       var old_element = menuItem;
//       var new_element = menuItem.cloneNode(true);
//       old_element.parentNode.replaceChild(new_element, old_element);
//     });
//   }
// });
mql.addListener((e) => {
  if (e.matches) {
    mobileMenuGo();
  } else {
    document.querySelectorAll(".menu__item--title").forEach((menuItem) => {
      var old_element = menuItem;
      var new_element = menuItem.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
    });
  }
});
let mobileMenuOpen = false;
const interactiveMenu = document.querySelector(".interactive__menu");
const showMobileMenu = () => {
  mobileMenuOpen = !mobileMenuOpen;
  if (mobileMenuOpen) {
    interactiveMenu.style = "right: 0";
  } else interactiveMenu.style = "right: 100%";
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && mobileMenuOpen) {
      mobileMenuOpen = !mobileMenuOpen;
      interactiveMenu.style = "right: 100%";
    }
  });
};
document
  .querySelector(".logotype_close")
  .addEventListener("click", showMobileMenu);

//language choice
let languageMenuOpen = false;
document.querySelector(".lang_button").addEventListener("click", (e) => {
  languageMenuOpen = !languageMenuOpen;
  if (languageMenuOpen) {
    e.target.style = "border-bottom: 1px solid gold; color:gold";
    e.target.nextElementSibling.style = `opacity: 1; visibility: unset; height: ${e.target.nextElementSibling.scrollHeight}px; transition: all 200ms ease`;
    e.target.classList.add("lang_button_up");
  } else {
    e.target.style = "border-bottom: 1px solid inherit; color:inherit";
    e.target.nextElementSibling.style = `opacity: 0; height: 0px; transition: all 200ms ease`;
    e.target.classList.remove("lang_button_up");
  }
});
// SVG properly displaying
document.querySelectorAll(".icon").forEach((e) => {
  let bBox = e.getBBox();
  e.setAttribute("width", bBox.width + 2);
  e.setAttribute("height", bBox.height + 2);
});
