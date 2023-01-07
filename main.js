var inputFormula = $('#formula')
var inputResult = $('#result')
var n1 = $('#n1')
var calcSum = $('#calcSum')
var calcEqual = $('#calcEqual')

n1.on('click', clickN1);
calcSum.on('click', clickCalcSum);
calcEqual.on('click', clickCalcEqual);

var calculator = new Calculator();

function clickN1(){
    clickInputButton('1');
}

function clickCalcSum(){
    clickInputButton('+');
}

function clickCalcEqual(){
    execCalc(inputFormula.val());
}

function clickInputButton(text){
    inputFormula.val(inputFormula.val() + text)
}

function execCalc(calcText){
    // パース
    var parse = calculator.parseCalcText(calcText);
    
    // 実行
    var result = 0
    switch(parse[2]){
        case '+':
            result = calculator.sum(parse[1], parse[3]);
            break
    }

    inputResult.val(result);
}