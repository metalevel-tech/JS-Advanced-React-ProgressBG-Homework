// ProgressBG course JS Advanced by Iva Popova, Lesson 2
// - function as return value
// - scope chain

const sum = function(x) {
    return function(y) {
        return x + y;
    }
  }

  console.log("sum:", sum(2)(3));