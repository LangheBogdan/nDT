let mainText = document.querySelector('#main-text');

mainText.addEventListener('click', () => {
  mainText.textContent = 'I Love JavaScript';
})


const btn = document.querySelector('#submit-button');
let numbersHere = document.querySelector('#numbers-here');//?
let firstClick = true;
let result = 0;
let sumOfNumbers = document.querySelector('#sum-of-numbers');
let maxNumber = document.querySelector('#max-number');
let ArrayMaxNumber = [];


btn.addEventListener('click', function () {
  let userNumber = document.querySelector('#number').value;


  if (firstClick) {
    numbersHere.textContent = numbersHere.textContent + userNumber;
  } else {
    numbersHere.textContent = numbersHere.textContent + ', ' + userNumber;
  }
  firstClick = false;

  function sum() {
    result = result + Number(userNumber);
    sumOfNumbers.textContent = result;
  }
  sum()
  ArrayMaxNumber.push(Number(userNumber));
  console.log(ArrayMaxNumber);
  maxNumber.textContent = Math.max(...ArrayMaxNumber).toString();

})
