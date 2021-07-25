const display = document.querySelector('#display');
let displayArr = [];
let formula = [];

const handleOperator = operator => {
	if (displayArr.length > 0) {
		formula.push(displayArr.join(''));
	} else {
		formula.pop();
	}
	displayArr = [];
	if (operator === '=') {
		const result = eval(formula.join(''));
		display.innerText = result;
		displayArr = [result];
		formula = [];
	} else {
		formula.push(operator);
	}
};

document.body.addEventListener('click', e => {
	if (e.target.tagName === 'BUTTON') {
		switch (e.target.innerText) {
			case 'C':
				formula = [];
				displayArr = [];
				display.innerText = '0';
				break;
			case '=':
			case '+':
			case '-':
			case '*':
			case '/':
				handleOperator(e.target.innerText);
				break;
			default:
				if (displayArr.includes('.') && e.target.innerText === '.') {
					return;
				} else if (e.target.innerText === '.' && displayArr.length === 0) {
					displayArr.push('0');
				}
				displayArr.push(e.target.innerText);
				display.innerText = displayArr.join('');
				break;
		}
	}
});

document.addEventListener('keypress', e => {
	console.log(e.key);
	const button = document.getElementById(e.key);
	console.log(button);
});
