const body = document.querySelector("body");
const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");
const cssoutput = document.querySelector(".css-output");

// getting colors.
let leftColor = leftInput.value;
let rightColor = rightInput.value;

const changeBackground = () => {
  const cssString = `linear-gradient(to right,${leftColor},${rightColor})`;
  body.style.background = cssString;
  cssoutput.textContent = `background: ${cssString};`;
};
// changeBackground();

// adding events on input

leftInput.addEventListener("change", (Event) => {
  leftColor = Event.target.value;
  changeBackground();
});

rightInput.addEventListener("change", (Event) => {
  rightColor = Event.target.value;
  changeBackground();
});

changeBackground();
// generating random values using random buttom.s
const buttom = document.querySelector("button");

const randomColor = () => {
  const values = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor((Math.random() * 100) % 16);
    color += values[randomIndex];
  }
  return color;
};

buttom.addEventListener("click", () => {
  leftColor = randomColor();
  rightColor = randomColor();
  // also showing color in input tag
  leftInput.value = leftColor;
  rightInput.value = rightColor;
//   console.log(leftColor);
  changeBackground();
});


