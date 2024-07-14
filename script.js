let numbers = document.querySelectorAll(".btn-num");
const display = document.getElementById("display");
const operator = document.querySelectorAll(".operator");
const del = document.getElementById("delete");
const resultBtn = document.getElementById("result");
const clearBtn = document.getElementById("clear");

let currentNum = "";
let previousNum = "";
let op = null;

numbers.forEach((btnNum) => {
    btnNum.addEventListener("click", function () {
        const value = btnNum.textContent;
        currentNum += value;
        display.value = currentNum;

        /*my first solution
        display.value += btnNum.textContent;
        console.log(display); 
        */
    });
});

operator.forEach((btnOp) => {
    btnOp.addEventListener("click", function () {
        if (previousNum === "") {
            previousNum = currentNum; // Store the current number
            currentNum = ""; // Reset for the next number input
            op = btnOp.textContent;
            display.value = op;
        } else if (currentNum !== "" && previousNum !== "") {
            let outcome = operate();
            op = btnOp.textContent;
            display.value = op;
            currentNum = "";
            previousNum = outcome;

            /* alternative  
            op = btnOp.textContent;
            display.value = op;
            currentNum = operate();
            previousNum = currentNum;
            currentNum = "";
            */
        }

        if (currentNum === " " && previousNum === " ") {
            return;
        }
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
    switch (op) {
        case "+":
            result = add(parseInt(previousNum), parseInt(currentNum));
            break;
        case "-":
            result = subtract(previousNum, currentNum);
            break;
        case "x":
            result = multiply(previousNum, currentNum);
            break;
        case "/":
            if (currentNum === "0") {
                result = "undefined";
            } else {
                result = divide(previousNum, currentNum);
                break;
            }
    }

    return result.toString();
}

let output = "";

function result() {
    resultBtn.addEventListener("click", () => {
        output = operate();
        display.value = output;
        currentNum = output.toString();
        previousNum = "";
        op = null;
    });
}

function clear() {
    clearBtn.addEventListener("click", () => {
        output = "";
        display.value = " ";
        currentNum = "";
        previousNum = "";
        op = "";
    });
}

function handleDelete() {
    del.addEventListener("click", () => {
        display.value = display.value.slice(0, -1);
        currentNum = "";
    });
}

result();
handleDelete();
clear();
