const slides = document.querySelector(".slides");
const slide1 = document.querySelector(".slide-1");
const slide2 = document.querySelector(".slide-2");
const slide3 = document.querySelector(".slide-3");

let currentSlide = 0;
setInterval(() => {
  currentSlide++;
  if (currentSlide > 3) {
    currentSlide = 1;
  }
  if (currentSlide === 1) {
    slide1.classList.add("active");
    slide2.classList.remove("active");
    slide3.classList.remove("active");
  } else if (currentSlide === 2) {
    slide2.classList.add("active");
    slide1.classList.remove("active");
    slide3.classList.remove("active");
  } else if (currentSlide === 3) {
    slide3.classList.add("active");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
  }
}, 5000);
const buttons = document.querySelectorAll(".button");
const blocks = document.querySelectorAll(".news_inner_news_globals");

const firstBlock = document.querySelector(".news_inner_news_globals");
firstBlock.classList.add("active");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetBlockId = button.dataset.target;
    blocks.forEach((block) => {
      if (block.id === targetBlockId) {
        block.classList.add("active");
      } else {
        block.classList.remove("active");
      }
    });
  });
});

const ellipsisBlocks = document.querySelectorAll(".card_p");

ellipsisBlocks.forEach((block) => {
  const dots = block.querySelector(".card_span");
  const paragraph = block.querySelector(".card_limit");

  dots.addEventListener("click", () => {
    paragraph.style.display = "block";
    dots.style.display = "none";
  });
});
