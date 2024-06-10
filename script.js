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
		totalResult = operate(firstOperandNumber, secondOperandNumber, operator);
		console.log(totalResult);
		display.textContent = `${totalResult}`;
		firstOperandNumber = totalResult;
	}
});

function inputOperand(operand) {
	if (operator === null) {
		display.textContent += `${operand}`;
		firstOperand += operand;
		firstOperandNumber = Number(firstOperand);
		console.log(firstOperandNumber);
	} else {
		if (secondOperand.length == 0) {
			display.textContent = "";
			if (firstOperandNumber === totalResult) {
				display.textContent += operand;
				secondOperand += operand;
				secondOperandNumber = Number(secondOperand);
			} else {
				display.textContent += operand;
				secondOperand += operand;
				secondOperandNumber = Number(secondOperand);
				console.log(secondOperandNumber);
			}
		} else {
			if (firstOperandNumber === totalResult) {
				display.textContent += operand;
				secondOperand += operand;
				secondOperandNumber = Number(secondOperand);
			} else {
				display.textContent += operand;
				secondOperand += operand;
				secondOperandNumber = Number(secondOperand);
				console.log(secondOperandNumber);
			}
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
	console.log(operator);
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
