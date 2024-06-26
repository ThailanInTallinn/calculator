const display = document.querySelector("p");
const buttonsContainer = document.querySelector("#buttons-container");
let operator = null;
let firstOperand = "";
let secondOperand = "";
let firstOperandNumber = null;
let secondOperandNumber = null;
let totalResult = null;
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
		if (Number(display.textContent) === totalResult) {
			display.textContent = "";
			inputOperand(e.target.textContent);
		} else {
			inputOperand(e.target.textContent);
		}
	} else if (e.target.textContent != "=" && !e.target.classList.contains("numbers-button")) {
		inputOperator(e.target.textContent);
	} else {
		display.textContent = "";
		if (totalResult != null) {
			totalResult = operate(totalResult, secondOperandNumber, operator);
			secondOperand = "";
			secondOperandNumber = null;
			display.textContent = `${totalResult}`;
		} else {
			totalResult = operate(firstOperandNumber, secondOperandNumber, operator);
			secondOperand = "";
			secondOperandNumber = null;
			display.textContent = `${totalResult}`;
		}
	}
});

function inputOperand(operand) {
	if (operator === null) {
		display.textContent += `${operand}`;
		firstOperand += operand;
		firstOperandNumber = Number(firstOperand);
	} else {
		if (secondOperand == "" && totalResult === firstOperandNumber) {
			display.textContent = "";
			display.textContent = operand;
			secondOperand = "";
			secondOperand += operand;
			secondOperandNumber = Number(secondOperand);
		} else if (secondOperand == "") {
			display.textContent = "";
			display.textContent += operand;
			secondOperand += operand;
			secondOperandNumber = Number(secondOperand);
		} else {
			display.textContent += operand;
			secondOperand += operand;
			secondOperandNumber = Number(secondOperand);
		}
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
};

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

