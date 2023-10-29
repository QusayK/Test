const findMissingNumber = (arr) => {
  const arrSum = arr.reduce((acc, num) => acc + num, 0);

  let expectedSum = 0;

  for (let i = 0; i <= arr.length; i++) {
    expectedSum += i;
  }

  return expectedSum - arrSum;
};
