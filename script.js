const display = document.querySelector("p");
const buttonsContainer = document.querySelector("#buttons-container");
let operator = null;
let firstOperand = "";
let secondOperand = null;
let firstOperandNumber = null;
function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

buttonsContainer.addEventListener("click", (e) => {
	if (Number(e.target.textContent)) {
		display.textContent += `${e.target.textContent}`;
		inputOperand(e.target.textContent);
		console.log(firstOperandNumber);
	} else {
	}
});

function inputOperand(operand) {
	if (operator === null) {
		firstOperand += operand;
		firstOperandNumber = Number(firstOperand);
	} else {
		secondOperand += operand;
		secondOperandNumber = Number(secondOperand);
	}
};

