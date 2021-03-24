'use strict';

numbers.slice = function(start = 0, end = this.length) {
  // write code here
  const { length } = this;
  const numbersSlice = [];
  let startIndex = start;
  let endIndex = end;

  if (startIndex > length - 1) {
    return [];
  }

  if (startIndex < 0) {
    if (Math.abs(startIndex) > length - 1) {
      startIndex = 0;
    }
  }

  if (endIndex > length - 1) {
    endIndex = this.length;
  }

  if (startIndex >= 0) {
    if (endIndex > 0) {
      if (startIndex > endIndex) {
        return [];
      }

      for (let i = startIndex; i < endIndex; i++) {
        numbersSlice[i - startIndex] = this[i];
      }
    }

    if (endIndex < 0) {
      endIndex = length + endIndex;

      if (startIndex > endIndex) {
        return [];
      }

      for (let j = startIndex; j < endIndex; j++) {
        numbersSlice[j - startIndex] = this[j];
      }
    }
  }

  if (startIndex < 0) {
    startIndex = length + startIndex;

    if (endIndex > 0) {
      if (startIndex > endIndex) {
        return [];
      }

      for (let i = startIndex; i < endIndex; i++) {
        numbersSlice[i - startIndex] = this[i];
      }
    }

    if (endIndex < 0) {
      endIndex = length + endIndex;

      if (startIndex > endIndex) {
        return [];
      }

      for (let j = startIndex; j < endIndex; j++) {
        numbersSlice[j - startIndex] = this[j];
      }
    }
  }

  return numbersSlice;
};
