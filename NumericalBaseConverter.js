'use strict';

const form = document.getElementById('button');
const alphabet = 'abcdefghijklmnopqrstuvxyz';

form.addEventListener("click", assignConvertableValues);
form.addEventListener("click", getNewNumber);

function assignConvertableValues() {
    const numberToOperateUpon = parseInt(document.getElementById("orgnum"));
    const numericalBase = parseInt(document.getElementById("base"));
    const exp = getExponent(numericalBase, numberToOperateUpon);
}

function getExponent(a, b) {
    if(a == 0 || b == 0) { return 0; }
    let exponent = 0;
    while (Math.pow(a, exponent) < b) {
        exponent++;
    }
    return exponent - 1;
}

function getRadicals(a, b, c) {
    let x = 1;
    while (Math.pow(a, c) * x < b) {
        x++;
    }
    return x - 1;
} 

function getAllRadicals() {
    let i;
    let a = numberToOperateUpon;
    const radicals = [];
    if(numberToOperateUpon == 0 || numericalBase == 0) { return; }
    for (i = exp; i >= 0; i--) {
        radicals[i] = getRadicals(numericalBase, a, i);
        a -= Math.pow(numericalBase, i);
    }
}

function getNewNumber() {
    getAllRadicals();
    let i;
    for(i = 0; i < radicals.length; i++) {
        radicals[i] = getNumericalSymbols(radicals[i]);
    }
    const list = radicals.values();
    let answer = "";
    for (let x of list) {
        answer += x;
    }
    document.getElementById('answer').innerHTML = answer;
    alert(answer);
}
function getNumericalSymbols(number) {
	if(number >= 10) {
        number = alphabet[number - 10];
	}
	return number;
}
	

