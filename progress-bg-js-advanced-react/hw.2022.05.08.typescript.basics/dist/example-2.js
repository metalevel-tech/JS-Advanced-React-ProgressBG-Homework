"use strict";
// export {}; // https://backbencher.dev/articles/typescript-solved-cannot-redeclare-block-scoped-variable-name
var addNumbers = function (x, y) {
    var result = x + y;
    console.log(result);
};
// This is a legal JS call, but TS will raise an error:
// addNumbers(3);
addNumbers(3, 4);
