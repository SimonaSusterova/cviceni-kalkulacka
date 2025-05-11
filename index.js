//1. tohle funguje
//let displayElm = document.querySelector (".display")
//displayElm.textContent = "42";  

// řešení z kodím
const displayElm = document.querySelector('.display');

const handleDigitClick = (event) => {
  if (displayElm.textContent.length === 9) {
    return;
  }
  const digit = event.target.textContent;
  if (displayElm.textContent === '0') {
    displayElm.textContent = digit; // Na displeji je nula, chceme ji tedy nahradit zadanou číslicí.
  } else {
    displayElm.textContent += digit;
  }
};