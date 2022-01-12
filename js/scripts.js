
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

  //User Interface Logic

  $(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = add(number1, number2);
      $(".output").text(result);
    });
    $("form#subtract").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#subtract1").val());
      const number2 = parseInt($("#subtract2").val());
      const result = subtract(number1, number2);
      $(".output1").text(result);
    });
    $("form#multiply").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#multiply1").val());
      const number2 = parseInt($("#multiply2").val());
      const result = multiply(number1, number2);
      $(".output2").text(result);
    });
    $("form#divide").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#divide1").val());
      const number2 = parseInt($("#divide2").val());
      const result = divide(number1, number2);
      $(".output3").text(result);
    });
  });


  //Additional Practice -- Temperature Conversion

// const c = parseInt(prompt("Enter a temp in Celcius")); 
// const f = parseInt(prompt("Enter a temp in Farenheit")) ;
//   function farenToCel(f){
//     return "Temp in celcius is " +((f - 32) * (5/9));
//   }

//   function celToFaren(c){
//     return "Temp in farenheit is " +((c * 9/5) + 32);
//   }
//   alert(farenToCel(f))
//   alert(celToFaren(c))