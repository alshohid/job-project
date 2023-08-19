const  findMaxValue=(array)=> {
  if (array.length === 0) {
    throw new Error("Array is empty");
  }

  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return maxValue;
}
export default findMaxValue;