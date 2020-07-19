function writeDigit0() {
    document.getElementById("res").innerHTML =
        document.getElementById("res").innerHTML + "0";
}

function writeDigit1() {
    document.getElementById("res").innerHTML =
        document.getElementById("res").innerHTML + "1";
}

function writeSum() {
    document.getElementById("res").innerHTML =
        document.getElementById("res").innerHTML + "+";
}

function writeSub() {
    document.getElementById("res").innerHTML =
        document.getElementById("res").innerHTML + "-";
}

function writeMul() {
    document.getElementById("res").innerHTML =
        document.getElementById("res").innerHTML + "*";
}

function writeDiv() {
    document.getElementById("res").innerHTML =
        document.getElementById("res").innerHTML + "/";
}

function cancel() {
    document.getElementById("res").innerHTML = "";
}

function performOperations() {
    let val = document.getElementById("res").innerHTML;

    let operand1 = "",
        operand2 = "",
        operator = "";

    let flag = true;

    for (let i = 0; i < val.length; i++) {
        if (val[i] == "+" || val[i] == "-" || val[i] == "*" || val[i] == "/") {
            operator += val[i];
            flag = false;
        } else if (flag == true) {
            operand1 += val[i];
        } else {
            operand2 += val[i];
        }
    }

    if (parseInt(operand1) < parseInt(operand2) || operator.length > 1) {
        document.getElementById('res').innerHTML = "Syntex Error";
        return;
    }

    //! Code snipet for observing variables
    console.log(operand1, parseInt(operand1, 2));
    console.log(operand2, parseInt(operand2, 2));
    console.log(operator);

    let result = 0;
    let temp;
    if (operator == "+") {
        temp = parseInt(operand1, 2) + parseInt(operand2, 2);
        result = temp.toString(2);
    } else if (operator == "-") {
        temp = parseInt(operand1, 2) - parseInt(operand2, 2);
        result = temp.toString(2);
    } else if (operator == "*") {
        temp = parseInt(operand1, 2) * parseInt(operand2, 2);
        result = temp.toString(2);
    } else if (operator == "/") {
        temp = parseInt(operand1, 2) / parseInt(operand2, 2);
        result = temp.toString(2);
    }

    document.getElementById('res').innerHTML = result;
}