let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((temp) => {
  temp.addEventListener("click", () => {
    wrapper.style.display = "flex";
      imgWrapper.src = temp.src;
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

