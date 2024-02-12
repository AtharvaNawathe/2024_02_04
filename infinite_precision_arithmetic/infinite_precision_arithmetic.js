/**
 * Function to add two arrays representing numbers.
 * The arrays can be of different sizes. Negative input is not allowed
 *
 * @param {number[]} arr1 - The first array of digits.
 * @param {number[]} arr2 - The second array of digits.
 * @returns {number[]} - Array representing the sum of the input arrays.
 */
//Defining the class
class InfiniteNumber {
  constructor(array) {
    this.validateNumbers(array);
    this.array = array;

  }
//validateNumbers method to validate elements of array
  validateNumbers(array) {
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
//checking with all datatypes
      if (
        !Number.isInteger(element) ||
        element <= 0 ||
        element % 1 !== 0 || 
        element === Infinity ||
        element === -Infinity ||
        element === undefined ||
        element === null ||
        typeof element === "string" ||
        typeof element === "boolean"
      ) {
        throw new Error("Array elements must be positive integers and meet additional constraints");
      }
    }
  }
  add(otherArray) {
    if (otherArray instanceof InfiniteNumber) {
      const result = [];
      let c = 0;

      for (let i = this.array.length - 1, j = otherArray.array.length - 1; i >= 0 || j >= 0; i--, j--) {
        let digit1 = i >= 0 ? this.array[i] : 0;
        let digit2 = j >= 0 ? otherArray.array[j] : 0;

        let add = digit1 + digit2 + c;

        if (add > 9) {
          let mod = add % 10;
          result.unshift(mod);
          let toint = Math.floor(add / 10);
          c = toint;
        } else {
          result.unshift(add);
          c = 0;
        }
      }

      if (c > 0) result.unshift(c);
      return new InfiniteNumber(result);
    } else {
      throw new Error("Input must be an instance of InfiniteNumber");
    }
  }
//subtract method for subtracting array
  subtract(otherArray) {
    if (otherArray instanceof InfiniteNumber) {
      const result = [];
      let borrow = 0;

      for (let i = this.array.length - 1, j = otherArray.array.length - 1; i >= 0 || j >= 0; i--, j--) {
        let digit1 = i >= 0 ? this.array[i] : 0;
        let digit2 = j >= 0 ? otherArray.array[j] : 0;
        let minus = digit1 - digit2 - borrow;

        if (minus < 0) {
          minus += 10;
          borrow = 1;
        } else {
          borrow = 0;
        }

        result.unshift(minus);
      }

      if (borrow > 0) result.unshift(borrow * -1);
      return new InfiniteNumber(result);
    } else {
      throw new Error("Input must be an instance of InfiniteNumber");
    }
  }
  
//multiply method to multiply two arrays
  multiply(otherArray) {
    if (otherArray instanceof InfiniteNumber) {
      const result = [0];

      for (let j = otherArray.array.length - 1; j >= 0; j--) {
        const temp = [];

        for (let k = 0; k < otherArray.array.length - 1 - j; k++) {
          temp.push(0);
        }

        let c = 0;

        for (let i = this.array.length - 1; i >= 0; i--) {
          let mult = otherArray.array[j] * this.array[i] + c;
          let mod = mult % 10;
          c = Math.floor(mult / 10);
          temp.unshift(mod);
        }

        if (c > 0) {
          temp.unshift(c);
        }

        result.unshift(...temp);
      }

      // Remove leading zeros from the result array
      while (result.length > 1 && result[0] === 0) {
        result.shift();
      }

      return new InfiniteNumber(result);
    } else {
      throw new Error("Input must be an instance of InfiniteNumber");
    }
  }
}


//calling all the functions
let array1 = new InfiniteNumber([7, 3, 3]);
let array2 = new InfiniteNumber([7, 7, 7]);
let array9 = new InfiniteNumber([])

console.log("Addition of two arrays:");
array9 = array1.add(array2).array;
console.log(array9);

let array3 = new InfiniteNumber([1, 0, 0]);
let array4 = new InfiniteNumber([1, 6, 8]);
let array8 = new InfiniteNumber([])

console.log("Subtraction of two arrays:");
array8 = array3.subtract(array4).array;
console.log(array8);

let array5 = new InfiniteNumber([2, 3, 4]);
let array6 = new InfiniteNumber([9, 6, 0, 4, 3, 6, 4, 3, 3, 7]);
let array7 = new InfiniteNumber([])

console.log("Multiplication of two arrays:");
array7 = array5.multiply(array6).array;
console.log(array7);