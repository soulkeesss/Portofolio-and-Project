const buttonEL = document.querySelectorAll("button");
const inputFieldEL = document.getElementById("result");

for(let i = 0; i < buttonEL.length; i++) {
    buttonEL[i].addEventListener("click", () => {
        const buttonValue = buttonEL[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } 
        else if (buttonValue === "Del") {
                deleteLast();
            }
        else if(buttonValue === "=") {
            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    })
}

function clearResult() {
    inputFieldEL.value = "";
}

function calculateResult() {
    inputFieldEL.value = eval(inputFieldEL.value);
}

function appendValue(buttonValue) {
    inputFieldEL.value += buttonValue;
}

function deleteLast() {
    inputFieldEL.value = inputFieldEL.value.slice(0, -1);
}