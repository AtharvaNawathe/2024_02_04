function getSimple2sCompliment(number, numLen) {
  // Check if the number is within the valid range
  if (!Number.isInteger(number)) {
      throw new Error("Input must be an integer in the range of 0-52.");
  }

  // Convert the number to binary representation
  let binaryArray = number.toString(2).padStart(numLen, '0');
  console.log(binaryArray);

  // Convert binaryArray string to an array of integers
  let binaryIntArray = binaryArray.split('').map(bit => parseInt(bit));

  // Calculate the 1's complement
  for (let i = 0; i < numLen; i++) {
      if (binaryIntArray[i] == 0)
          binaryIntArray[i] = 1;
      else
          binaryIntArray[i] = 0;
  }

  // Calculating 2s complement
  let carry = 1;
  if (binaryIntArray[numLen - 1] == carry) {
      binaryIntArray[numLen - 1] = 0;
      binaryIntArray[numLen - 2] = 1;
  } else {
      binaryIntArray[numLen - 1] = 1;
  }

  // If the number is negative, add a sign bit at the beginning
  if (number < 0) {
      binaryIntArray[0] * -1;
  }

  return binaryIntArray;
}

let result = getSimple2sCompliment(-5, 4);
console.log(result);
