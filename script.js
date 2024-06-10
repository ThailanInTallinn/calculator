const display = document.querySelector("p");
const buttonsContainer = document.querySelector("#buttons-container");
let operator = null;
let firstOperand = "";
let secondOperand = "";
let firstOperandNumber = null;
let secondOperandNumber = null;
let totalResult = 0;
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
	} else if (e.target.textContent != "=") {
		inputOperator(e.target.textContent);
	} else {
		operate(firstOperandNumber, secondOperandNumber, operator);
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

function inputOperator(chosenOperator) {
	switch (chosenOperator) {
		case "+":
			operator = "+";
			break;
		case "-":
			operator = "-";
			break;
		case "x":
			operator = "*";
			break;
		case "/":
			operator = "/";
			break;
	}
}

function operate(a, b, operation) {
	switch (operation) {
		case "+":
			return sum(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
	}
}
