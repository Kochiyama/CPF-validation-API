function applyCpfVerifyAlgorithm(multiplier, endIndex, cpf) {
  let totalSum = 0;
  for (let position = 0; position < endIndex; position++) {
    totalSum += cpf[position] * multiplier;
    multiplier--;
  }
  return (totalSum * 10) % 11;
}

function verifyRepetition(cpf) {
  const first = cpf[0];

  for (let pos = 0; pos < 9; pos++) {
    if (first != cpf[pos]) {
      return false;
    }
  }

  return true;
}

export function validateCpf(cpfString) {

  // Verify if it has the correct number of characters
  if (cpfString.length != 11) {
    return false;
  }

  // split the cpf into an array
  const cpfArrayOfStrings = cpfString.split("");

  // convert all the stored numbers to integers
  const cpf = cpfArrayOfStrings.map(char => { return parseInt(char) });

  // verify if it is not a repetition (00000000000, 11111111111, ...)
  if (verifyRepetition(cpf)) {
    return false;
  }

  // Compare algorithm results to positions 10 and 11 from cpf
  if (applyCpfVerifyAlgorithm(10, 9, cpf) === cpf[9]) {
    if (applyCpfVerifyAlgorithm(11, 10, cpf) === cpf[10]) {
      return true;
    }
  }

  // if the results not match is not valid
  return false
}