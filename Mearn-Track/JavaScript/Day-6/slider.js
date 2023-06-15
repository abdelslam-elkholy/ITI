"use strict ";

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
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
  imgTag.attributes("src", images[currentIndex]), 1000;
};

const startShow = () => {
  if (!isPlaying) {
    currentIndex === imagesLength ? (currentIndex = 0) : currentIndex++;
    img = setInterval(setImg(), 1000);
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
