const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const substractBtn = document.getElementById('btn-substract');
const multiplyBtn = document.getElementById('btn-multiplacation');
const divideBtn = document.getElementById('btn-devider');


const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calcualation');

function outputResult(result, text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

