/**
 * Function to add two arrays representing numbers.
 * The arrays can be of different sizes. Negative input is not allowed
 *
 * @param {number[]} arr1 - The first array of digits.
 * @param {number[]} arr2 - The second array of digits.
 * @returns {number[]} - Array representing the sum of the input arrays.
 */
function addArrays(arr1, arr2) {
  // Initialize carry to 0 and the sum array to store the sum
  let c = 0;
  let sum = [];

  // Iterate through the arrays from right to left
  for (let i = arr1.length - 1, j = arr2.length - 1;i >= 0 || j >= 0;i--, j--) {
  //Checking if number is negative or not
    if(arr1[i] < 0 || arr2[j] < 0)
    {
      throw new console.error("Invalid input!!");
    }
    // Get the current digits from both arrays or default to 0
    let digit1 = i >= 0 ? arr1[i] : 0;
    let digit2 = j >= 0 ? arr2[j] : 0;

    // Calculate the sum of the current digits and the carry
    let add = digit1 + digit2 + c;

    // Check if the sum is greater than 9
    if (add > 9) {
      let mod = add % 10;
      sum.unshift(mod);
      let toint = Math.floor(add/10)
      c = toint;
    } else {
      // If no carry is needed, add the sum to the beginning of the result array
      sum.unshift(add);
      c = 0;
    }
  }
  // If there is a carry remaining, add it to the beginning of the result array
  if (c > 0) sum.unshift(c);
  return sum;
}

  let array1 = [7,3,3];
  let array2 = [7,7,7];
	console.log("Addition of two arrays");
  console.log(addArrays(array1, array2));

/**
 * Subtract two arrays representing positive integers.
 * The inputs must be positive, and the output may be negative.
 *
 * @param {number[]} arr1 - The first array of digits (minuend).
 * @param {number[]} arr2 - The second array of digits (subtrahend).
 * @returns {number[]} - Array representing the result of subtracting arr2 from arr1.
 */
function subtractArrays(arr1, arr2) {
	// Initialize borrow to 0 and the sub array to store the subtraction.
	let borrow = 0;
	let sub = [];

	// Check if arr1 is smaller than arr2, and swap them if false.
	if (arr1[0] < arr2[0]) {
		// Swap arr1 and arr2
		[arr1, arr2] = [arr2, arr1];

		for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0; i--, j--) {
    //Checking if number is negative or not
      if(arr1[i]<0 || arr2[j] <0)
      {
        throw new console.error("Invalid input!!");
      }
			let digit1 = i >= 0 ? arr1[i] : 0
			let digit2 = j >= 0 ? arr2[j] : 0
			let minus = digit1 - digit2 - borrow;
			
			// Adjust borrow and result array based on subtraction result.
			if (minus < 0) {
				minus += 10;
				borrow = 1;
			} else {
				borrow = 0;
			}
			sub.unshift(minus); // Add the number digit to the beginning of the array.
		}

		//arr1 was smaller, the result is negative.
		sub[0] *= -1;
		return sub;
	} else {
		for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0; i--, j--) {
			let digit1 = i >= 0 ? arr1[i] : 0
			let digit2 = j >= 0 ? arr2[j] : 0
			let minus = digit1 - digit2 - borrow;
			
			// Adjust borrow and result array based on subtraction result.
			if (minus < 0) {
				minus += 10;
				borrow = 1;
			} else {
				borrow = 0;
			}

			sub.unshift(minus); // Add the  number digit to the beginning of the array.
		}

		return sub;
	}
}


let a = [1,0,0];
let b = [1,6,8];
console.log("Subtraction of two arrays:");
console.log(subtractArrays(a, b));


/**
 * Function to multiply two arrays representing numbers.
 * The arrays can be of different sizes. Input cannot be negative 
 * output may be positive
 *
 * @param {number[]} arr1 - The first array of digits.
 * @param {number[]} arr2 - The second array of digits.
 * @returns {number[]} - Array representing the product of the input arrays.
 */
function multArrays(arr1, arr2) {
  // Initialize mul array with zero
  let mul = [0];

  // Iterate arr2 from right to left
  for (let j = arr2.length - 1; j >= 0; j--) {
  //Checking if number is negative or not
    if(arr2[j] <0)
    {
      throw new console.error("Invalid input!!");
    }
    // Initialize temporary array for the current product
    let temp = [];

    // Add zeros based on the position in arr2
    for (let k = 0; k < arr2.length - 1 - j; k++) {
      temp.push(0);
    }

    // Initialize carry to 0
    let c = 0;

    // Multiply arr1 with the current digit of arr2
    for (let i = arr1.length - 1; i >= 0; i--) {
    ////Checking if number is negative or not
      if(arr2[j] <0)
      {
        throw new console.error("Invalid input!!");
      }
      let mult = arr2[j] * arr1[i] + c;
      let mod = mult % 10;
      c = Math.floor(mult / 10);
      temp.unshift(mod);
    }

    // If there is a carry remaining, add it to the beginning of temp
    if (c > 0) {
      temp.unshift(c);
    }

    // Add the current product to the result array using the addArrays function
    mul = addArrays(mul, temp);
  }

  // // Remove leading zeros from the result array
  // while (mul.length > 1 && mul[0] === 0) {
  //   mul.shift();
  // }

  return mul;
}

let a1 = [2,3,4];
let a2 = [9,6,0,4,3,6,4,3,3,7];
console.log("Multiplication of two arrays:");   
console.log(multArrays(a1, a2));

