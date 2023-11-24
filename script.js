const number1 = 0;
const operation = 0;
const number2 = 0;

function addTwo(num1, num2){ return num1+num2};
function subTwo(num1, num2) { return num1 - num2};
function divTwo(num1, num2) { if (num2 != 0) { return num1/num2} else { return "Error"}};
function mulTwo(num1, num2) {return num1 * num2};

function operate(number, number2, operation){
    switch(operation){
        case addTwo:
            return addTwo(number, number2);
        case subTwo:
            return subTwo(number, number2);
        case divTwo:
            return divTwo(number, number2);
        case mulTwo(number, number2);
    }
}