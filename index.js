const projectsUl = document.querySelector(".projects__ul");
const cardsContainer = document.querySelector(".projects__cards-container");

projectsUl.addEventListener("click", () => {
  projectsUl.classList.add("projects__ul-borderAnim");

  setTimeout(function () {
    // cardsContainer.style.top = "45%";
    cardsContainer.style.opacity = "1";
    cardsContainer.style.filter = "blur(0px)";
  }, 1500);
});

