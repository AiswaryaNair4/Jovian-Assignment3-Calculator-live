document.addEventListener("DOMContentLoaded", function () {

  const display = document.getElementById('calcResult');
  const buttons = document.getElementsByClassName('btn');
  let currValue = "";
  let inverse =false;

  

  function evaluateResult() {
    console.log('currentValue:', currValue);
    console.log("currValue in INV: " + currValue);
    if(currValue.includes("!")){
      factorial();      
     } else if(currValue.includes("EXP")){
      exponentBase10();
      } else if(currValue.includes("10In")){
      InverseLog10();
     } else if(currValue.includes("yRtx")){
      
      InverseSquare();
     } 
     else if(currValue.includes("x2")){
      InverseSqrt();
     } 
    

    

    console.log('currentValueAfterFunction:', currValue);
    const convertedValue = currValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace('%', '*0.01')
      .replace('sin', 'Math.sin')
      .replace('cos', 'Math.cos')
      .replace('ln', 'Math.log')
      .replace('π', 'Math.PI')
      .replace('log', 'Math.log10')
      .replace('e', 'Math.E')
      .replace('tan', 'Math.tan') 
      .replace('!', '') 
      .replace('EXP', '') 
      .replace('^', '**')   
     // .replace('Inv', '')
      .replace('sinIn', 'asin') 
      .replace('cosIn', 'acos') 
      .replace('tanIn', 'atan') 
      .replace('EIn', 'Math.exp') 
      .replace('10In', '') 
      .replace('yRtx', '')
      // .replace('x2', '')
        
      .replace('√', 'Math.sqrt');
    
    console.log('convertedValue:', convertedValue);
   

    const result = eval(convertedValue);
    currValue = result.toString();
    display.value = currValue;
  }

  for(let i=0;i<buttons.length;i++){
    const button = buttons[i];
    console.log(button.innerText);
    button.addEventListener('click',function(){
     const value = button.innerText;
        console.log(value);
      try{        
        if (value == "AC") {
          currValue = "";
          display.value = currValue;
          document.getElementById("InvButton").style.backgroundColor = "#dadce0";
        } else if(value == "Inv") {
          currValue = "";
          Inverse();
        } else if(value == "=") {
          evaluateResult();
        } else {
          currValue += value;
          display.value = currValue;
        }
      }

      catch (error) {
        console.error(error);
        currValue = "ERROR";
        display.value = currValue;
    }

    })
  }
  
  function  factorial(){
    let inputString = currValue;
    let index = inputString.indexOf("!");
    let startIndex = index-1;
    console.log("index "+index); 
    while (startIndex >= 0 && /\d/.test(inputString[startIndex])) {
      startIndex--;
    }
    let numberClicked = inputString.substring(startIndex + 1, index);
    console.log("Required Number: "+numberClicked); 

    let operatorEndIndex = startIndex;
    while (operatorEndIndex >= 0 && /\D/.test(inputString[operatorEndIndex])) {
      operatorEndIndex--;
    }
    let operatorClicked = inputString.substring(operatorEndIndex - 1, startIndex + 1);
    console.log("First Number: "+operatorClicked); 

    let answer = 1;
    if (numberClicked == 0 || numberClicked == 1){
      answer = 1;
    }else{
      for(var i = numberClicked; i >= 1; i--){
        answer = answer * i;
      }    
    }   
    console.log(answer);
    currValue = operatorClicked + answer ;
    console.log("currValue:" + currValue);
  }

  function exponentBase10(){
    let inputString = currValue;

    if (inputString.indexOf("EXP") !== -1) {
      let [base, exponent] = inputString.split("EXP");
      let result = Number(base) * Math.pow(10, exponent);
      console.log(result);
      currValue = result.toString();      
    } else {
      console.log("exponentBase10 not working");
    }
  }
function InverseLog10(){
  console.log("InverseLog10");
  let inputString = currValue;
  console.log("inputString"+inputString);
  if (inputString.indexOf("x2") !== -1) {
   let [base, exponent] = inputString.split("10In");
    console.log("base"+base);
    console.log("exponent"+exponent);
    exponent = exponent.replace(/[()]/g, '');
    let result = Math.pow(10, exponent);
    console.log(result);
    currValue = result.toString();      
  } else {
    console.log("InverseLog10 not working");
  }
}

function InverseSqrt(){
  console.log("InverseSqrt");
  let inputString = currValue;
  console.log("inputString"+inputString);
  if (inputString.indexOf("x2") !== -1) {
    console.log("inside If");
    let [base, exponent] = inputString.split("x2");
    console.log("base"+base);
    console.log("exponent"+exponent);
    exponent = exponent.replace(/[()]/g, '');
    let result = Math.pow(base, 2);
    console.log(result);
    currValue = result.toString();      
  } else {
    console.log("InverseSqrt not working");
  }
}

function InverseSquare(){
  console.log("InverseSquare");
  let inputString = currValue;
  console.log("inputString"+inputString);
  if (inputString.indexOf("yRtx") !== -1) {
    console.log("inside If");
    let [base, exponent] = inputString.split("yRtx");
    console.log("base"+base);
    console.log("exponent"+exponent);
    //exponent = exponent.replace(/[()]/g, '');
    let result = Math.pow(base, 1/exponent);
    console.log(result);
    currValue = result.toString();      
  } else {
    console.log("InverseSquare not working");
  }
}

  function Inverse(){
    if(inverse == false){
      inverse = true;  
      document.getElementById("InvButton").style.backgroundColor = "#ffffff";    
      document.getElementById("sineBtn").innerHTML = "sinIn";
      document.getElementById("cosBtn").innerHTML = "cosIn";
      document.getElementById("tanBtn").innerHTML = "tanIn";
      document.getElementById("lnBtn").innerHTML = "EIn";
      document.getElementById("logBtn").innerHTML = "10In"; 
      document.getElementById("sqrtBtn").innerHTML = "x2"; 
      document.getElementById("squareBtn").innerHTML = "yRtx";
     // console.log("currValue in INV: " + currValue);
    // console.log("InverseFunctionFalse: "+document.getElementById("sineBtn").innerText);
      
    } else if(inverse == true){
      inverse = false;
      document.getElementById("InvButton").style.backgroundColor = "#dadce0"; 
      document.getElementById("sineBtn").innerHTML = "sin";
      document.getElementById("cosBtn").innerHTML = "cos";
      document.getElementById("tanBtn").innerHTML = "tan";
      document.getElementById("lnBtn").innerHTML = "ln";
      document.getElementById("logBtn").innerHTML = "log";
      document.getElementById("sqrtBtn").innerHTML = "√";
      document.getElementById("squareBtn").innerHTML = "^";
     // console.log("InverseFunctionTrue: "+document.getElementById("sineBtn").innerText);
    }

  //   let inputString = currValue;
  //   let inputArray =  inputString.split("Inv");
  //   console.log(inputArray);
  //   let result = "";
  //   if(inputArray[1]=="sin"){
  //     result = Math.asin(inputArray[2]);
  //     console.log("result: "+ result);
  //   } else if(inputArray[1]=="sin"){
  //     result = Math.asin(inputArray[2]);
  //     console.log("result: "+ result);
  //   } else if(inputArray[1]=="cos"){
  //     result = Math.acos(inputArray[2]);
  //     console.log("result: "+ result);
  //   } else if(inputArray[1]=="tan"){
  //     result = Math.atan(inputArray[2]);
  //     console.log("result: "+ result);
  //   } else if(inputArray[1].includes("ln")){
  //     let inputArray2 = inputArray[1].split(ln);
  //     result = Math.exp(inputArray2[1]);
  //     console.log("result: "+ result);
  //   } else if(inputArray[1]=="log"){
  //     result = Math.asin(inputArray[2]);
  //     console.log("result: "+ result);
  //   } 

  //   currValue = result.toString(); 
   }
  
});

