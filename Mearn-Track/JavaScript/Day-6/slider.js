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

const setImg = () => {
  img = setInterval(() => imgTag.attributes("src", images[currentIndex]), 1000);
};

const startShow = () => {
  currentIndex === images.length - 1 ? (currentIndex = 0) : currentIndex++;
  setImg();
};
