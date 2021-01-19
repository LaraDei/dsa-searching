function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return array.length;
  }
  
  function binarySearch(array, value, start, end, path = []) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
  
    if (start > end) {
      return { index: -1, path };
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];
    path.push(index);
  
    // console.log(start, end);
    if (item === value) {
      return { index, path };
    } else if (item < value) {
      path.push(index + 1);
      return binarySearch(array, value, index + 1, end, path);
    } else if (item > value) {
      path.push(index - 1);
      return binarySearch(array, value, start, index - 1, path);
    }
  }

  
  module.exports = {
    indexOf,
    binarySearch,
  };