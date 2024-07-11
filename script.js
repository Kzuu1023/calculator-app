let number = document.querySelectorAll(".btn-num");
const display = document.getElementById("display");
const operator = document.querySelectorAll(".operator");
const del = document.getElementById("delete");
const resultBtn = document.getElementById("result");

let currentNum = "";
let previousNum = "";
let op = null;

number.forEach((btnNum) => {
    btnNum.addEventListener("click", function () {
        const value = btnNum.textContent;
        currentNum += value;
        display.value += currentNum;

        /*my first solution
        display.value += button.textContent;
        console.log(display); 
        */
    });
});

operator.forEach((btnOp) => {
    btnOp.addEventListener("click", function () {
        if (currentNum !== "") {
            previousNum = currentNum; // Store the current number
            currentNum = ""; // Reset for the next number input
        }

        op = btnOp.textContent;
        display.value = op;
    });
});

function add(a, b) {
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

function operate() {
    let result = "";
    switch (operator) {
        case "+":
            result = add(previousNum, currentNum);
            break;

        case "-":
            result = subtract(previousNum, currentNum);
            break;
        case "x":
            result = multiply(previousNum, currentNum);
            break;
        case "/":
            result = divide(previousNum, currentNum);
            break;
    }

    return result.toString();
}

resultBtn.addEventListener("click", () => {
    let result = operate();
    display.value = result;
    currentNum = result.toString();
    previousNum = "";
    op = null;
});
