/**
 * Implementation of a class named InfiniteNumber where following operations
 * are performed
 * 1 Addition
 * 2 Subtraction
 * 3 Multiplication
 * @author: Atharva Nawathe
 */

/**
 * Class representing an infinite precision number.
 */
class InfiniteNumber {
  /**
   * Constructor for the InfiniteNumber class.
   *
   * @param {number[]} array - The array of digits representing the number.
   */
  constructor(array) {
    // Validate input array when creating an instance
    this.validateNumbers(array);
    this.array = array;
  }

  /**
   * Method to validate elements of the array.
   *
   * @param {number[]} array - The array to be validated.
   */
  validateNumbers(array) {
    // Check if input is an array
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }

    // Iterate through each element of the array
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      // Check various conditions for each element
      if (
        !Number.isInteger(element) ||
        // element < 0 || // Allowing positive integers
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

  /**
   * Method to perform addition with another InfiniteNumber.
   *
   * @param {InfiniteNumber} otherArray - The other InfiniteNumber to add.
   * @returns {InfiniteNumber} - Result of the addition.
   */
  add(otherArray) {
    if (otherArray instanceof InfiniteNumber) {
      const result = [];
      let carry = 0;

      // Iterate through each digit from the right to left
      for (let i = this.array.length - 1, j = otherArray.array.length - 1; i >= 0 || j >= 0; i--, j--) {
        let digit1 = i >= 0 ? this.array[i] : 0;
        let digit2 = j >= 0 ? otherArray.array[j] : 0;

        // Perform addition and handle carry
        let sum = digit1 + digit2 + carry;
        if (sum > 9) {
          let mod = sum % 10;
          result.unshift(mod);
          carry = Math.floor(sum / 10);
        } else {
          result.unshift(sum);
          carry = 0;
        }
      }

      // If there is a carry after the loop, add it to the result
      if (carry > 0) result.unshift(carry);

      return new InfiniteNumber(result);
    } else {
      throw new Error("Input must be an instance of InfiniteNumber");
    }
  }

  /**
   * Method to perform subtraction with another InfiniteNumber.
   *
   * @param {InfiniteNumber} otherArray - The other InfiniteNumber to subtract.
   * @returns {InfiniteNumber} - Result of the subtraction.
   */
  subtract(otherArray) {
    if (otherArray instanceof InfiniteNumber) {
      const result = [];
      let borrow = 0;

      // Iterate through each digit from the right to left
      for (let i = this.array.length - 1, j = otherArray.array.length - 1; i >= 0 || j >= 0; i--, j--) {
        let digit1 = i >= 0 ? this.array[i] : 0;
        let digit2 = j >= 0 ? otherArray.array[j] : 0;

        // Perform subtraction and handle borrow
        let difference = digit1 - digit2 - borrow;
        if (difference < 0) {
          difference += 10;
          borrow = 1;
        } else {
          borrow = 0;
        }

        result.unshift(difference);
      }

      // If there is a borrow after the loop, add it to the result
      if (borrow > 0) result.unshift(borrow * -1);

      return new InfiniteNumber(result);
    } else {
      throw new Error("Input must be an instance of InfiniteNumber");
    }
  }

  /**
   * Method to perform multiplication with another InfiniteNumber.
   *
   * @param {InfiniteNumber} otherArray - The other InfiniteNumber to multiply.
   * @returns {InfiniteNumber} - Result of the multiplication.
   */
  multiply(otherArray) {
    if (otherArray instanceof InfiniteNumber) {
      const result = [0];

      // Iterate through each digit of the multiplier
      for (let j = otherArray.array.length - 1; j >= 0; j--) {
        const temp = [];

        // Add trailing zeros based on the position of the digit
        for (let k = 0; k < otherArray.array.length - 1 - j; k++) {
          temp.push(0);
        }

        let carry = 0;

        // Iterate through each digit of the multiplicand
        for (let i = this.array.length - 1; i >= 0; i--) {
          let product = otherArray.array[j] * this.array[i] + carry;
          let mod = product % 10;
          carry = Math.floor(product / 10);
          temp.unshift(mod);
        }

        // If there is a carry after the inner loop, add it to the result
        if (carry > 0) {
          temp.unshift(carry);
        }

        // Add the temporary result to the overall result
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

// Giving Inputs 
let array1 = new InfiniteNumber([7, 3, 3]);
let array2 = new InfiniteNumber([7, 7, 7]);
let array3 = array1.add(array2);
console.log("Addition of two arrays:", array3.array);

let array4 = new InfiniteNumber([1, 0, 0]);
let array5 = new InfiniteNumber([1, 6, 8]);
let array6 = array4.subtract(array5);
console.log("Subtraction of two arrays:", array6.array);

let array7 = new InfiniteNumber([2, 3, 4]);
let array8 = new InfiniteNumber([9, 6, 0, 4, 3, 6, 4, 3, 3, 7]);
let array9 = array7.multiply(array8);
console.log("Multiplication of two arrays:", array9.array);
