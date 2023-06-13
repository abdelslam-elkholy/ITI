"use strict";

const text = document.querySelector("#PAR");

const ChangeFont = (value) => {
  text.style.fontFamily = value;
};
const ChangeAlign = (value) => {
  text.style.textAlign = value;
};
const ChangeHeight = (value) => {
  text.style.height = value;
};
const ChangeLSpace = (value) => {
  text.style.marginLeft = value;
};
const ChangeIndent = (value) => {
  text.style.textIndent = value;
};
const ChangeTransform = (value) => {
  text.style.textTransform = value;
};

const ChangeBorder = (value) => {
  text.style.border = value;
};

const ChangeBorderColor = (value) => {
  text.style.borderColor = value;
};

const hangeDecorate = (value) => {
  text.style.textDecoration = value;
};
