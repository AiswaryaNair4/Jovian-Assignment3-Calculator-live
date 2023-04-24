const display = document.getElementById('calcResult');
const buttons = document.getElementsByClassName('btn');
let currValue = ""
let specialOperators = ""

// console.log(display);

function displayResult(a){ 
  console.log(a);
  currValue=a; 
  display.value += currValue;  
  console.log(display.value);
}

function equal(){
  if(display.value.includes("÷")){
    division();
  } else if(display.value.includes("x")){
    multiply();
   } else if(display.value.includes("^")){
    exponent();
  } 
  else{
    display.value = eval(display.value);
  } 
}

function clearText(){
  display.value = "";
}

function calculatePercentage(){
  let percentage = display.value;
  let temp = eval(percentage);
  display.value = temp*0.01;
}

function division(){
  let temp1 = display.value;
  let temp = temp1.replace("÷","/");
  display.value = eval(temp);
}

function multiply(){
  let temp1 = display.value;
  let temp = temp1.replace("x","*");
  display.value = eval(temp);
}

function rad(){
  let input = display.value;
  let result = input * (Math.PI/180);
  display.value = result;
}

function deg(){
  let input = display.value;
  let result = (input* (180/Math.PI);
  display.value = result;
}

function  factorial(){
  let fact = display.value;
  let answer = 1;
  if (fact == 0 || fact == 1){
    answer = 1;
  }else{
    for(var i = fact; i >= 1; i--){
      answer = answer * i;
    }    
  }   
  display.value = answer;
}

function sine(){
  var input = display.value;
   console.log("result: "+input); 
  var result = Math.sin(input);
  display.value = result;
}

function cos(){
  var input = display.value;
  var result = Math.cos(input);
  display.value = result;
  
}
function tan(){
  var input = display.value;
  var result = Math.tan(input);
  display.value = result;  
}
function ln(){
  var input = display.value;
  var result = Math.log(input);
  display.value = result;  
}

// function pi(){
//   let input = display.value;
//   let temp = input.replace("π","3.14");
//   let result = eval(temp);
//   display.value = eval(temp);  
// }

function logBase10(){
  var input = display.value;
  var result = Math.log10(input);
  display.value = result;  
}

function squareRoot(){
  var input = display.value;
  var result = Math.sqrt(input);
  display.value = result;  
}

function exponent(){
  var input = display.value;
  let inputArray = input.split("^");
  let result = Math.pow(inputArray[0],inputArray[1]);
  // console.log("result: "+result); 
  display.value = result;  
}
