var elArr = ['oneId','twoId','threeId','fourId','fiveId','sixId','sevenId','eightId','nineId','zeroId'];
var mathElArr = ['plusId','minusId','divisionId','multiplicationId'];
var result = document.getElementById('resultId');
var preResult = document.getElementById('preResultId');
var value1;
var value2;
var command;
var isResult = false;


var getCalculateEvent = function(){
    addClickEventToCeElement();
    addClickEventToEquelElement();

    for(mEl in mathElArr){
        addClickEventToMathElement(mathElArr[mEl]);
    }

    for(el in elArr){
        addClickEventToNumericElement(elArr[el]);
    }

    var calc = document.getElementById('calculatorId');
    calc.addEventListener('keypress', function(e){
        checkResult();
        console.log(e.keyCode);
        var keyCode = parseInt(e.keyCode,10);
        switch (keyCode){
            case 45:
                if(command === undefined){
                    preResult.innerHTML += "-";
                    command = "-";
                    value1 = result.innerHTML;
                    result.innerHTML = '';
                }
                break;
            case 43:
                if(command === undefined){
                    preResult.innerHTML += "+";
                    command = "+";
                    value1 = result.innerHTML;
                    result.innerHTML = '';
                }
                break;
            case 42:
                if(command === undefined){
                    preResult.innerHTML += "*";
                    command = "*";
                    value1 = result.innerHTML;
                    result.innerHTML = '';
                }
                break;
            case 47:
                if(command === undefined){
                    preResult.innerHTML += "/";
                    command = "/";
                    value1 = result.innerHTML;
                    result.innerHTML = '';
                }
                break;
            case 61 || 13:
                preResult.innerHTML += "=";
                equalsCalc();
                break;
            case 49 || 97:
                preResult.innerHTML += "1";
                result.innerHTML += "1";
                break;
            case 50 || 98:
                preResult.innerHTML += "2";
                result.innerHTML += "2";
                break;
            case 51 || 99:
                preResult.innerHTML += "3";
                result.innerHTML += "3";
                break;
            case 52 || 100:
                preResult.innerHTML += "4";
                result.innerHTML += "4";
                break;
            case 53 || 101:
                preResult.innerHTML += "5";
                result.innerHTML += "5";
                break;
            case 54 || 102:
                preResult.innerHTML += "6";
                result.innerHTML += "6";
                break;
            case 55 || 103:
                preResult.innerHTML += "7";
                result.innerHTML += "7";
                break;
            case 56 || 104:
                preResult.innerHTML += "8";
                result.innerHTML += "8";
                break;
            case 57 || 105:
                preResult.innerHTML += "9";
                result.innerHTML += "9";
                break;
            case 48 || 96:
                preResult.innerHTML += "0";
                result.innerHTML += "0";
                break;
        }
    },true);
};

// helpers
var addClickEventToEquelElement = function(){
    var el = document.getElementById('equalsId');
    el.addEventListener('click',function(){
        checkResult();
        preResult.innerHTML += el.value;
        equalsCalc();
    },true);
};
var addClickEventToNumericElement = function(elId){
    var el = document.getElementById(elId);
    el.addEventListener('click',function(){
        checkResult();
        preResult.innerHTML += el.value;
        result.innerHTML += el.value;
    },true);
};

var addClickEventToMathElement = function(elId){
    var el = document.getElementById(elId);
    el.addEventListener('click',function(){
        checkResult();
        preResult.innerHTML += el.value;
        value1 = result.innerHTML;
        result.innerHTML = '';
        command = el.value;
    },true);
};

var addClickEventToCeElement = function(elId){
    var el = document.getElementById('ceId');
    el.addEventListener('click',function(){
        preResult.innerHTML = "";
        result.innerHTML = "";
        value1 = undefined;
        value2  = undefined;
        command  = undefined;
        isResult = false;
    },true);
};
var equalsCalc = function (){
    var checkValue1 = (value1 === undefined || value1 === '');
    isResult = true;
    switch (command){
        case "*":
            if(checkValue1){value1 =0}
            value2 = parseInt(result.innerHTML,10);
            if(isNaN(value2)){value2 =1}
            result.innerHTML = '';
            result.innerHTML += parseInt(value1,10) * parseInt(value2,10);
            break;
        case "/":
            if(checkValue1){value1 =0}
            value2 = parseInt(result.innerHTML,10);
            if(isNaN(value2)){value2 =1}
            result.innerHTML = '';
            result.innerHTML += parseInt(value1,10) / parseInt(value2,10);
            break;
        case "-":
            if(checkValue1){value1 =0}
            value2 = parseInt(result.innerHTML,10);
            if(isNaN(value2)){value2 =1}
            result.innerHTML = '';
            result.innerHTML += parseInt(value1,10) - parseInt(value2,10);
            break;
        case "+":
            if(checkValue1){value1 =0}
            value2 = parseInt(result.innerHTML,10);
            if(isNaN(value2)){value2 =1}
            result.innerHTML = '';
            result.innerHTML += parseInt(value1,10) + parseInt(value2,10);
            break;
    }
};
var checkResult = function(){
    if(isResult){
        preResult.innerHTML = "";
        result.innerHTML = "";
        value1 = undefined;
        value2  = undefined;
        command  = undefined;
        isResult = false;
        return;
    }
};

getCalculateEvent();