const btn = document.querySelector('#submit-btn');
const form = document.querySelector('#form');
const demo = document.querySelector('#demo');
const inputs = document.querySelectorAll('input');
const assetsInputFields = document.querySelectorAll('.plus');
const liabilitiesInputFields = document.querySelectorAll('.minus');
const assetsArr = Array.from(assetsInputFields);
const liabilitiesArr = Array.from(liabilitiesInputFields);


const getSumOfAssets = (fields) => {
  let sum = 0;

  fields.forEach(field => {
    let val;
    if (field.value !== 0) {
      val = field.value;
    } else {
      val = 0;
    }
    sum = sum + (+val);
  });
  return sum;
}

const getSumOfLiabilities = (fields) => {
  let sum = 0;

  fields.forEach(field => {
    let val;
    if (field.value !== 0) {
      val = field.value;
    } else {
      val = 0;
    }
    sum = sum + (+val);
  });
  return sum;
}

const clearFields = (fields) => {
  fields.forEach(field => {
    if (field.type !== 'submit') {
      field.value = '';
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let sumOfAssets = getSumOfAssets(assetsArr);
  let sumOfLiabilities = getSumOfLiabilities(liabilitiesArr);
  let worth = sumOfAssets - sumOfLiabilities;
  demo.textContent = worth.toFixed(2);
  console.log(sumOfLiabilities)
  clearFields(inputs)
})


console.log(liabilitiesArr);
