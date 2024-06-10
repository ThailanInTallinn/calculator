const display = document.querySelector("p");
const buttonsContainer = document.querySelector("#buttons-container");
let operator = null;
let firstOperand = "";
let secondOperand = "";
let firstOperandNumber = null;
let secondOperandNumber = null;
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
	} else {
		inputOperator(e.target.textContent);
	}
	console.log(firstOperandNumber);
	console.log(secondOperandNumber);
	console.log(operator);
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
