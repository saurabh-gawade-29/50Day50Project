const wrapInputIcon = document.querySelector(".wrap-input-icon");
const btn = document.querySelector(".btn");
const input = document.querySelector(".searchInput");

btn.addEventListener("click", () => {
  debugger;
  /*
   *If force is not given, "toggles" token,
   *removing it if it's present and adding it if it's not present.
   *If force is true, adds token (same as add()).
   *If force is false, removes token (same as remove()).
   */
  wrapInputIcon.classList.toggle("active");
  input.focus();
});
