const screen = document.querySelector(".screen");
let buff = "";
let ope = "";
let pre;
function handleInput(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value); 
 }
}
function calculateAnswer() {
  if (ope === null) {
    return;
  } else {
    switch (ope) {
      case "+":
        screen.innerText = parseInt(pre) + parseInt(buff);
        break;
      case "-":
        screen.innerText = parseInt(pre) - parseInt(buff);
        break;
      case "*":
        screen.innerText = parseInt(pre) * parseInt(buff);
        break;
      case "/":
        screen.innerText = parseInt(pre) / parseInt(buff);
        break;
    }
    buff = screen.innerText;
    ope = null;
  }
}
function handleSymbol(value) {
  console.log("Symbol");
  switch (value) {
    case "/":
    case "*":
    case "-":
    case "+":
      ope = value;
      pre = buff;
      buff = "";
      screen.innerText = 0;
      break;
    case "C":
      buff = 0;
      rerender();
      break;
    case "⬅":
      if (screen.innerText.length < 2) {
        buff = 0;
      } else {
        buff = buff.slice(0, -1);
      }
      rerender();
      break;
    case "=":
      calculateAnswer();
  }
}
function handleNumber(value) {
  if (buff === 0) {
    buff = value;
  } else {
    buff = buff + value.toString();
  }
  rerender();
}
function rerender() {
  screen.innerText = buff;
 }
 function init() {
  document
    .querySelector(".button-sections")
    .addEventListener("click", function (e) {
      handleInput(e.target.innerText);
    });
}

init();