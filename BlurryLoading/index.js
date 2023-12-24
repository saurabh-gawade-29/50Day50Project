const bg = document.querySelector(".wrap-image");
console.log(bg, "bg");
const loadingText = document.querySelector(".loading-number");
console.log(loadingText, "loading");

let load = 0;

//! call till clear interval call
let int = setInterval(callbackFunction, 30);

function callbackFunction() {
  load++;

  if (load > 99) {
    //! if (true) => pass that variable in clear interval
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
