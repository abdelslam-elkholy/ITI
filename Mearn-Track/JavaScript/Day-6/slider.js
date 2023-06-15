"use strict ";

const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const imgTag = document.querySelector("#img");
const images = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
];

let currentIndex = 0;
let img;
let isPlaying = false;
const imagesLength = images.length - 1;

const setImg = () => {
  imgTag.setAttribute("src", images[currentIndex]);
};

const startShow = () => {
  if (!isPlaying) {
    currentIndex === imagesLength ? (currentIndex = 0) : currentIndex++;
    img = setInterval(() => {
      setImg();
      currentIndex++;
    }, 1000);
    isPlaying = true;
  }
};

const stopShow = () => {
  clearInterval(img);
  isPlaying = false;
};

const nextShow = () => {
  clearInterval(img);
  currentIndex < imagesLength ? currentIndex++ : (currentIndex = 0);
  setImg();
};

const prevShow = () => {
  clearInterval(img);
  currentIndex == 0 ? (currentIndex = imagesLength) : currentIndex--;
  setImg();
};

startBtn.addEventListener("click", startShow);
stopBtn.addEventListener("click", stopShow);
nextBtn.addEventListener("click", nextShow);
prevBtn.addEventListener("click", prevShow);
