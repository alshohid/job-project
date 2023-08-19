const findXMInValue = (array)=>{
     if (array.length === 0) {
    throw new Error("Array is empty");
  }

  let minValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }

  return minValue;
}
export default findXMInValue;