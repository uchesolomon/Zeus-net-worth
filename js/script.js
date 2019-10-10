document.addEventListener('DOMContentLoaded', function(e) {
  const inputs = document.querySelectorAll('.form-control');
  const fields = Array.from(inputs);
  const net = document.querySelector('#net');
  const main = document.querySelector('#main');
  const bankMoney = document.querySelector('#money');
  const assets = document.querySelector('#asst');
  const cash = document.querySelector('#cash');
  const liab = document.querySelector('#liab');
  const cars = document.querySelector('#worth');

  const elem = document.querySelector('.after_nav > h2');
  let nameArr = elem.textContent.split(' ');
  let name = nameArr[1];
  console.log(name);

  const clearFields = (fields) => {
    fields.forEach(field => {
      field.value = '';
    })
  }

  let savedData = JSON.parse(localStorage.getItem(name));

  if (!savedData) {
    console.log('absent');
  } else {
    bankMoney.value = savedData.bankMoney;
    assets.value = savedData.assets;
    cash.value = savedData.cash;
    liab.value = savedData.liabilities;
    cars.value = savedData.cars;
    net.textContent = savedData.worth;
    console.log('present');
  }

  let sum = 0;

  class Details {
    constructor(bankMoney, assets, cash, liabilities, cars, worth) {
      this.bankMoney = bankMoney;
      this.assets = assets;
      this.cash = cash;
      this.liabilities = liabilities;
      this.cars = cars;
      this.worth = worth;
    }
  }

  main.addEventListener('submit', (e) => {
    e.preventDefault();
    Array.from(inputs).forEach(input => {
      if (input.classList.contains('add')) {
        sum += Number(input.value);
      } else {
        sum -= Number(input.value);
      }
    });

    net.textContent = sum.toFixed(2);

    let data = new Details(+bankMoney.value, +assets.value, +cash.value, +liab.value, +cars.value, sum);

    if (localStorage.getItem(name) === null) {
      localStorage.setItem(name, JSON.stringify(data));
      data = [];
      console.log(data);

      return false;
    } else {
      console.log('existing');
      let storedData = JSON.parse(localStorage.getItem(name));
      let status = storedData.bankMoney === data.bankMoney && storedData.assets === data.assets && storedData.cash === data.cash && storedData.liab === data.liab && storedData.cars === data.cars;
      console.log(status)
      if (status) {
        console.log('same');
      } else {
        localStorage.removeItem(name);
        localStorage.setItem(name, JSON.stringify(data));
      }
    }
    console.log(data)
    sum = 0;
    clearFields(fields);
    return true;
  });
});
