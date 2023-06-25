const sliderContainer = document.querySelector(".slider-container");
const exitBtn = document.querySelector(".exit-btn button");
const productImage = document.querySelector(
  "main div.product-carousel .product-image img"
);
const productThumbnailsArea = document.querySelectorAll(
  "main .product-thumbnails div"
);
const productThumbnails = document.querySelectorAll(
  "main .product-thumbnails div img"
);

const sliderThummbnailsArea = document.querySelectorAll(
  ".slider-container .product-thumbnails div"
);
const sliderThummbnails = document.querySelectorAll(
  ".slider-container .product-thumbnails div img"
);
const sliderImage = document.querySelector(
  ".slider-container .product-image img"
);
const leftBtn = document.querySelector(".slider-container .left-btn");
const rightBtn = document.querySelector(".slider-container .right-btn");

let currentIndex = 0;

productImage.addEventListener(
  "click",
  () => (sliderContainer.style.display = "flex")
);

function exitSlider() {
  sliderContainer.style.display = "none";
  sliderThummbnailsArea[currentIndex].classList.remove("active-thumbnail");
  currentIndex = 0;
  sliderThummbnailsArea[currentIndex].classList.add("active-thumbnail");
  rightBtn.disabled = false;
  leftBtn.disabled = false;
}

exitBtn.addEventListener("click", exitSlider);

const handleSlider = (e) => {
  switch (e.target) {
    case leftBtn:
      if (currentIndex === 0) {
        leftBtn.disabled = true;
        return;
      }
      currentIndex -= 1;
      rightBtn.disabled = false;

      break;

    case rightBtn:
      if (currentIndex === sliderThummbnails.length - 1) {
        rightBtn.disabled = true;
        return;
      }
      currentIndex += 1;
      leftBtn.disabled = false;

      break;
    default:
      return;
  }

  sliderImage.src = sliderThummbnails[currentIndex].dataset.src;
  sliderThummbnailsArea.forEach((area) =>
    area.classList.remove("active-thumbnail")
  );
  sliderThummbnailsArea[currentIndex].classList.add("active-thumbnail");
};

rightBtn.addEventListener("click", handleSlider);
leftBtn.addEventListener("click", handleSlider);

function changeThumbnailImage(thumbnail) {
  productThumbnailsArea.forEach((area) =>
    area.classList.remove("active-thumbnail")
  );
  thumbnail.parentElement.classList.add("active-thumbnail");
  productImage.src = thumbnail.dataset.src;
}

productThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => changeThumbnailImage(thumbnail));
});
