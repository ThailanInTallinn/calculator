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
	if (e.target.classList.contains("numbers-button")) {
		display.textContent += `${e.target.textContent}`;
		inputOperand(e.target.textContent);
	} else if (e.target.textContent != "=") {
		inputOperator(e.target.textContent);
	} else {
		display.textContent = "";
		totalResult = operate(firstOperandNumber, secondOperandNumber, operator);
		console.log(totalResult);
		display.textContent = `${totalResult}`;
		firstOperandNumber = totalResult;
	}
});

function inputOperand(operand) {
	if (operator === null) {
		firstOperand += operand;
		firstOperandNumber = Number(firstOperand);
	} else {
		display.textContent = "";
		display.textContent += operand;
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
