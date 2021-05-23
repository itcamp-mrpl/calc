'use strict'

function initCalc() {
  const digits = document.getElementById('digitsBlock');
  const display = document.getElementById('display');
  digits.addEventListener('click', (event) => {
    const currentValue = display.value;
    const value = event.target.dataset.value;
    if (value) {
      display.value = currentValue + value;
    }
  })
  document.addEventListener('keypress', (event) => {
    event.preventDefault();
    const value = Number.parseInt(event.key, 10)
    if (Number.isNaN(value)) {
      return undefined;
    }
    const currentValue = display.value;
    display.value = currentValue + value;
  });
}

window.addEventListener('DOMContentLoaded', initCalc);

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function multi(a, b) {
  return a * b;
}

function print(message) {
  console.log(message);
}

function applyOperator(a, b, operator) {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return sub(a, b);
    case '/': return div(a, b);
    case '*': return multi(a, b);
    default: throw new Error('Неизвестный оператор!');
  }
}

function isOperatorValid(operator) {
  return operator === '+' || operator === '-' || operator === '/' || operator === '*';
}

function getNumber(message) {
  let value;
  do {
    value = Number(prompt(message));
  } while (Number.isNaN(value));
  return value;
}

function getOperator() {
  let operator;
  do {
    operator = prompt('Введите оператор');
  } while (!isOperatorValid(operator));
  return operator;
}

let repeat = true;

let state = [];

function addValue(value) {
  return {
    type: 'addValue',
    payload: value,
  }
}

function addOperator(value) {
  return {
    type: 'addOperator',
    payload: value,
  }
}

function reducer(currentState, action) {
  switch (action.type) {
    case 'addValue': {
      return [...currentState, [action.payload]];
    }
    case 'addOperator': {
      return [
        ...currentState.slice(0, currentState.length - 2),
        [currentState[currentState.length - 1][0], action.payload],
      ];
    }
  }
}

function setState(action) {
  state = reducer(state, action);
}

// do {
//   const firstValue = getNumber('Введите первое значение');
//   setState(addValue(firstValue));
//   const operator = getOperator();
//   setState(addOperator(operator));
//   const secondValue = getNumber('Введите второе значение');
//   setState(addValue(secondValue));
//
//   const result = applyOperator(firstValue, secondValue, operator);
//   print(`${firstValue} ${operator} ${secondValue} = ${result}`);
//
//   repeat = confirm('Продолжить!');
// } while (repeat);
