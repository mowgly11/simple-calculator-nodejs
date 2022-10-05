const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function input(prompt) {
    return new Promise((callbackFunction, errorFunction) => {
        readline.question(prompt, (userInput) => {
            callbackFunction(userInput);
        }, () => {
            errorFunction();
        });
    });
}
async function getNumbersAndCalculate() {
    let firstNum = await input("First Number: ");
    let operator = await input("Operator: ");
    let secondNum = await input("Second Number: ");
    calculate(firstNum, operator, secondNum);
    readline.close();
};

function calculate(firstNum, operator, secondNum) {
    if (firstNum == '' || operator == '' || secondNum == '') return console.log("Please Provide a valid value.");
    if (isNaN(firstNum)) return console.log("Please Provide A Number Next Time.");
    if (!operator == "+" || !operator == "-" || !operator == "/" || !operator == "*") return console.log("please provide a valid operator.")
    if (isNaN(secondNum)) return console.log("Please Provide A Number Next Time.");

    const firstNumber = parseInt(firstNum);
    const secondNumber = parseInt(secondNum);

    switch (operator) {
        case "+":
            console.log(firstNumber + secondNumber);
            break;
        case "-":
            console.log(firstNumber - secondNumber);
            break;
        case "/":
            console.log(firstNumber / secondNumber);
            break;
        case "*":
            console.log(firstNumber * secondNumber);
            break;
        default:
            break;
    }
}

getNumbersAndCalculate();