const number1 = 0;
const operation = 0;
const number2 = 0;

function addTwo(num1, num2){ return num1 + num2};
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
 const dig2 = document.querySelector("#two");
 const dig3 = document.querySelector("#three");
 const dig4 = document.querySelector("#four");
 const dig5 = document.querySelector("#five");
 const dig6 = document.querySelector("#six");
 const dig7 = document.querySelector("#seven");
 const dig8 = document.querySelector("#eight");
 const dig9 = document.querySelector("#nine");
 const equals = document.querySelector(".equals");
 const add = document.querySelector(".add");
 const sub = document.querySelector(".sub");
 const mult = document.querySelector(".multiply");
 const div = document.querySelector(".divide");

 dig1.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "1";
    }
    else {
        result.textContent += "1";
    }
 });

 dig2.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "2";
    }
    else {
        result.textContent += "2";
    }
 });

 dig3.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "3";
    }
    else {
        result.textContent += "3";
    }
 });

 dig4.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "4";
    }
    else {
        result.textContent += "4";
    }
 });

 dig5.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "5";
    }
    else {
        result.textContent += "5";
    }
 });

 dig6.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "6";
    }
    else {
        result.textContent += "6";
    }
 });

 dig7.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "7";
    }
    else {
        result.textContent += "7";
    }
 });

 dig8.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "8";
    }
    else {
        result.textContent += "8";
    }
 });

 dig9.addEventListener("click", () => {
    if(result.textContent == "Result will be listed here" || result.textContent == ""){
        result.textContent = "9";
    }
    else {
        result.textContent += "9";
    }
 });


 add.addEventListener("click", () => {
    result.textContent += "+";
 });

sub.addEventListener("click", () => result.textContent += "-");
mult.addEventListener("click", () => result.textContent += "*");
div.addEventListener("click", () => result.textContent += "/");

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    result.textContent = "";

});

// document equals

equals.addEventListener("click", () => {
    let contentString = result.textContent;
    let contentArray = contentString.split(''); // get each number/element individually so that we could later identify operator

    let part1 = [];
    let part2 = [];
    let operator = "";
    let index = -1;
    contentArray.forEach((item) => {
        if (index != -1){
            // skip
        }
        else {
        if (item == "+" || item == "-" || item == "/" || item == "*"){
            index = contentArray.indexOf(item);
            operator = item;
        }
    }
    });

    for (let i = 0; i < index; i ++){
        part1.push(contentArray[i]);
    }
    for (let j = index+1; j < contentArray.length; j++){
        part2.push(contentArray[j]);
    }

    // now i must convert part1 and part2 to int so i could do operations with them 

    part1 = part1.join('');
    part2 = part2.join('');

    let final = 0;
    switch(operator){
        case "+":
            final = addTwo(+part1, +part2);
        case "-":
            final =  subTwo(+part1, +part2);
        case "*":
            final = mulTwo(+part1, +part2);
        case "/":
            final = divTwo(+part1, +part2);
    }
    result.textContent = final;

})




