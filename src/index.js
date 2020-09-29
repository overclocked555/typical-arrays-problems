exports.min = function min (array) {
    if (Array.isArray(array) && array.length !== 0) return Math.min.apply(Math, array);
    return 0;
  }
  
  exports.max = function max (array) {
    if (Array.isArray(array) && array.length !== 0) return Math.max.apply(Math, array);
    return 0;
  }
  
  exports.avg = function avg (array) {
      if (Array.isArray(array) && array.length !== 0) {
        sum = 0;
        array.forEach((element) => {
          sum += element;
          });
        return (sum/array.length);
      };
    return 0;
  }
  
  