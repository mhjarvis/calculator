let int1 = 0;
let int2 = 0;
let opperator = '';
const display = document.getElementById("displayP");


function addN(a, b) {           //returns sum of two numbers
    return a + b;
}

function subtractN(a, b) {      //returns difference of two numbers
    return a - b;
}

function multiplyN(a, b) {      //returns product of two numbers
    return a * b;
}

function divideN(a, b) {        //returns division of two numbers
    return a / b;
}

function operate(opp, a, b) {   //calls add function
    return addN(a, b);
}

function displayNumber(char) {
    int1 = int1 * 10 + char;
    display.textContent = int1;
}

function displayOpperator(opp) {
    opperator = opp;
    int2 = int1;
    int1 = 0;
    display.textContent = opp;
}
function displayDecimal(dec) {
    int1 *= 1.0;
}

function displayResult() {
    
    switch(opperator) {
        case '+':
            display.textContent = addN(int2, int1);
            break;
        case '-':
            display.textContent = subtractN(int2, int1);
            break;
        case '/':
            display.textContent = divideN(int2, int1);
            break;
        case '*':
            display.textContent = multiplyN(int2, int1);
            break;
    }
}

function clearAll() {
    int1 = 0;
    int2 = 0;
    opperator = '';
    display.textContent = 0;
}
