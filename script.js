'use strict'

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

function print(a, b, callOperator) {
  const result = callOperator(a, b)
  console.log(result);
}

function applyOperator(a, b, operator) {
  switch (operator) {
    case '+': {
      print(a, b, add);
      break;
    }
    case '-': {
      print(a, b, sub);
      break;
    }
    case '/': {
      print(a, b, div);
      break;
    }
    case '*': {
      print(a, b, multi);
      break;
    }
    default: {
      console.log('Неизвестный оператор!')
    }
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

do {
  const firstValue = getNumber('Введите первое значение');
  const secondValue = getNumber('Введите второе значение');
  const operator = getOperator();

  applyOperator(firstValue, secondValue, operator);

  repeat = confirm('Продолжить!');
} while (repeat);
