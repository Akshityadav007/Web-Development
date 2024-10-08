/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// my code
class Calculator {
  constructor(){
    this.res = 0;
  }

  add(a){
    if(typeof(a) === "number")
      this.res += a;
    else
      throw new Error("Wrong input: invalid non-numerical characters");
      
  }

  subtract(a){
    if(typeof(a) === "number")
      this.res -= a;
    else
      throw new Error("Wrong input: invalid non-numerical characters");
  }

  multiply(a){
    if(typeof(a) === "number")
      this.res *= a;
    else
      throw new Error("Wrong input: invalid non-numerical characters");
  }

  divide(a){
    if(typeof(a) === "number" && a!== 0)
      this.res /= a;
    else
      throw new Error("Wrong input: invalid non-numerical characters");
  }

  clear(){
    this.res = 0;
  }

  getResult(){
    return this.res;
  }

  calculate(str){
    let exp = "";
    for(let i = 0; i < str.length; i++){
      if(str[i] >= '0' && str[i] <= '9' || str[i] == '+' || str[i] == '.' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '(' || str[i] == ')')
        exp += str[i];
      else if(str[i] == ' ')
          continue;
      else
        throw new Error("Wrong input: invalid non-numerical characters");
    }

    // let us solve the expression
    try{
      this.res = eval(exp);
      if(this.res === Infinity || this.res === -Infinity)
        throw new Error("Divide by 0");
      }
      catch(err){
        throw err;
    }
    return this.res;   

  }

}


// Chat GPT implmented code
// class Calculator {
//   constructor() {
//       this.result = 0;
//   }

//   add(number) {
//       this.result += number;
//   }

//   subtract(number) {
//       this.result -= number;
//   }

//   multiply(number) {
//       this.result *= number;
//   }

//   divide(number) {
//       if (number === 0) {
//           throw new Error("Division by zero is not allowed.");
//       }
//       this.result /= number;
//   }

//   clear() {
//       this.result = 0;
//   }

//   getResult() {
//       return this.result;
//   }

//   calculate(expression) {
//       // Remove spaces
//       expression = expression.replace(/\s+/g, '');

//       // Validate expression for invalid characters
//       if (!/^[0-9+\-*/().]+$/.test(expression)) {
//           throw new Error("Invalid characters in expression.");
//       }

//       // Check for division by zero
//       const divisionByZeroCheck = /\/\s*0(?![0-9])/;
//       if (divisionByZeroCheck.test(expression)) {
//           throw new Error("Division by zero is not allowed.");
//       }

//       // Evaluate the expression
//       try {
//           this.result = eval(expression);
//           if (this.result === Infinity || this.result === -Infinity) {
//               throw new Error("Division by zero occurred during evaluation.");
//           }
//       } catch (error) {
//           throw new Error("Error in expression evaluation.");
//       }

//       return this.result;
//   }
// }


module.exports = Calculator;
