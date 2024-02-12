// The function is used to find the 2s compliment of the decimal number
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



function getSimpleDecimalFrom2sComplement(binaryString) {
    // Check if the binary string is valid
    if (!/^[01]+$/.test(binaryString)) {
        return "Invalid binary input";
    }

    // Check if it's a negative number (2's complement)
    const isNegative = binaryString[0] === '1';

    // Convert binary to decimal (ignoring the sign bit for now)
    let decimalValue = parseInt(binaryString, 2);

    // If it's a negative number, apply 2's complement by subtracting 2^length
    if (isNegative) {
        const bitLength = binaryString.length;
        decimalValue -= Math.pow(2, bitLength);
    }

    return decimalValue;
}

const binaryNumber = "11101101"; 
const decimalResult = getSimpleDecimalFrom2sComplement(binaryNumber);
console.log(`Binary: ${binaryNumber} -> Decimal: ${decimalResult}`);


function getJsNumberRepresentation(decimalNumber) {
    // Check if the input is a valid number
    if (typeof decimalNumber !== 'number') {
        return "Invalid input. Please provide a number.";
    }

    // Convert the number to its 64-bit binary representation
    const binaryString = (decimalNumber >>> 0).toString(2);

    // Ensure the binary representation is 64 bits by padding with leading zeros if needed
    const paddedBinaryString = '0'.repeat(64 - binaryString.length) + binaryString;

    return paddedBinaryString;
}


const decimalNumber = 3.14; 
const binaryRepresentation =getJsNumberRepresentation(decimalNumber);
console.log(`Decimal: ${decimalNumber} -> 64-bit Binary: ${binaryRepresentation}`);


function getNumericFromJsRepresentation(binaryString) {
    // Check if the input is a valid binary string
    if (!/^[01]{64}$/.test(binaryString)) {
        return "Invalid input. Please provide a 64-bit binary string.";
    }

    // Convert the binary string to a decimal number
    const decimalNumber = parseInt(binaryString, 2);

    return decimalNumber;
}

const binary = "0100000001011110110111000010100011110101110000101000111101011100"; 
const numericResult = getNumericFromJsRepresentation(binary);
console.log(`64-bit Binary: ${binary} -> Decimal: ${numericResult}`);

