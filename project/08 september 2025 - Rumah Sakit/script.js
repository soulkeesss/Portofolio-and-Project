let number = 0;
let btnPlus = document.getElementById(`plus`);
let btnMinus = document.getElementById(`minus`);
var displayNum = document.getElementById(`number`);

let number2 = 0;
let btnPlus2 = document.getElementById(`plus2`);
let btnMinus2 = document.getElementById(`minus2`);
var displayNum2 = document.getElementById(`number2`);

btnMinus.disabled = true;
btnMinus2.disabled = true;



// COUNTER 1
function change() {
    displayNum.textContent = `D${number}`;
}

function inc() {
        number++;
        change();
        btnMinus.disabled = false;
    if (number >= 10) {
        btnPlus.disabled = true;
    }
    else if (number > 10) {
        btnPlus.disabled = false;
    }

}

function dec() {
    if (number > 0) {
        number--;
        change();
        btnPlus.disabled = false;

    }
    else {
        number = number;
        change();
        btnMinus.disabled = true;

    }
}

function reset() {
    number = 0;
    change();
    btnMinus.disabled = true;
    btnPlus.disabled = false;
}

// COUNTER 2
function change2() {
    displayNum2.textContent = `A${number2}`;
}

function inc2() {
        number2++;
        change2();
        btnMinus2.disabled = false;
    if (number2 >= 10) {
        btnPlus2.disabled = true;
    }
    else if (number2 > 10) {
        btnPlus2.disabled = false;
    }

}

function dec2() {
    if (number2 > 0) {
        number2--;
        change2();
        btnPlus2.disabled = false;

    }
    else {
        number2 = number2;
        change2();
        btnMinus2.disabled = true;

    }
}

function reset2() {
    number2 = 0;
    change2();
    btnMinus2.disabled = true;
    btnPlus2.disabled = false;
}