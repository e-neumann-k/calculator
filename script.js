let expression = '';

function addToExpression(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = result.toString();
  } catch (e) {
    document.getElementById('result').value = 'Error';
  }
}
