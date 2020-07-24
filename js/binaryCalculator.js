function type0(){
    document.getElementById("res").innerHTML+='0';
}
function type1(){
        document.getElementById("res").innerHTML+='1';
}
function typeSum(){
        document.getElementById("res").innerHTML+='+';
}
function typeSub(){
        document.getElementById("res").innerHTML+='-';
}
function typeMul(){
        document.getElementById("res").innerHTML+='*';
}
function typeDiv(){
        document.getElementById("res").innerHTML+='/';
}
function pressClr(){
            document.getElementById("res").innerHTML='';
}
function sum(operand1,operand2){return operand1|operand2;}
function mul(operand1,operand2){return operand1&operand2;}
function sub(operand1,operand2){
        operand1=parseInt(operand1,2);
        operand2=parseInt(operand2,2);
        let result=operand1-operand2;
        return result.toString(2);
}
function Div(operand1,operand2){
        operand1=parseInt(operand1,2);
        operand2=parseInt(operand2,2);
        let result=operand1/operand2;
        return Math.floor(result.toString(2));
}
function pressEql(){
  //indexof(opertator)
  //str.substring(begin,end-1)
  var fullinput=document.getElementById("res").innerHTML.toString();
  //find the operator
  var operatorIndex;
  if(fullinput.indexOf('+')>-1)
  operatorIndex=fullinput.indexOf('+');
  else if(fullinput.indexOf('-')>-1)
  operatorIndex=fullinput.indexOf('-');
  else if(fullinput.indexOf('*')>-1)
  operatorIndex=fullinput.indexOf('*');
  else if(fullinput.indexOf('/')>-1)
  operatorIndex=fullinput.indexOf('/');  
  else {
          alert("No operator was entered");
          return true;
  }    
  //save operand1,oprand2
  let operand1=fullinput.substring(0,operatorIndex);
  let operand2=fullinput.substring(operatorIndex+1);
  let operator=fullinput[operatorIndex].toString();
  if(operator=="+"){
        document.getElementById("res").innerHTML=sum(operand2,operand1);
  }
  if(operator=="*"){
        document.getElementById("res").innerHTML=mul(operand1,operand2); 
  }
  if(operator=="-"){
        document.getElementById("res").innerHTML=sub(operand1,operand2);  
  }
  if(operator=="/"){
        document.getElementById("res").innerHTML=Div(operand1,operand2);  
  }
  return false;
}
