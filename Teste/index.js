const generateRandomNumbers = () => {
  const randomNumbers = [];

  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

const findMinAndMax = (numbers) => {
  if (numbers.length === 0) {
    return { min: undefined, max: undefined };
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return { min, max };
};

const main = () => {
  const randomNumbers = generateRandomNumbers();
  const { min, max } = findMinAndMax(randomNumbers);

  console.log("Array gerado:", randomNumbers);
  console.log("Menor number:", min);
  console.log("Major number:", max);
};

main();
