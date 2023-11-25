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
        case mulTwo(number, number2):
            return mulTwo(number, number2);
        }
 }
 const result = document.querySelector(".display_results");
 const dig1 = document.querySelector("#one");

 dig1.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here"){
        result.textContent = "1";
    }
    else {
        result.textContent += "1";
    }
 });

 const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    result.textContent = "";

});
