//! Return All node list of '.card'
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  debugger;
  card.addEventListener("click", () => {
    removeActiveClasses();
    //! here you add active class to your
    card.classList.add("active");
  });
});

//! here remove active class from other cards
function removeActiveClasses() {
  debugger;
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
