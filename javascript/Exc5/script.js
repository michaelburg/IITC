let num1,math,num2
function appendToResult(value) {
    document.getElementById('result').value += value;
}
function action(symbol){
    num1=document.getElementById('result').value
    math=symbol
    document.getElementById('result').value = '';

}
function clearResult() {
    document.getElementById('result').value = '';
    num1=NaN
    math=NaN
}

function calculate() {
    num2=document.getElementById('result').value
    if(math=='*') result=num1*num2
    if(math=='+') result=num1+num2
    if(math=='-') result=num1-num2
    if(math=='/'){
         if(num2!=0) result=num1/num2
         else result='error'
    }

    document.getElementById('result').value = result;
    num1=num2
    num2=NaN
    math=NaN
    
}
