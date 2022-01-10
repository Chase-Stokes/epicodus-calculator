const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
//   // Function for addition

  function add(number1, number2) {
  return number1 + number2;
  }

//   // Function for subtraction
function subtract(number1, number2) {
  return number1 - number2;
  }



//   // Function for multiplication
function multiply(number1, number2) {
  return number1 * number2;
  }


  
//   //Function for division
function divide(number1, number2) {
  return number1 / number2;
  } 

  alert(subtract(number1, number2));


  //Additional Practice -- Temperature Conversion

const c = parseInt(prompt("Enter a temp in Celcius")); 
const f = parseInt(prompt("Enter a temp in Farenheit")) ;
  function farenToCel(f){
    return "Temp in celcius is " +((f - 32) * (5/9));
  }

  function celToFaren(c){
    return "Temp in farenheit is " +((c * 9/5) + 32);
  }
  alert(farenToCel(f))
  alert(celToFaren(c))