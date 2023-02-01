"use strict";
// - An interface is an abstract type, i.e. it does not contain any
//   executable code as a class does.
// - An interface is a way to define a contract on a function
//   with respect to the arguments and their type.
// - Interface = Obligation
// - An interface can also be used with a Class to define custom types.
// An Interface is useful for enforce the type of the object
function drawPoint(point) {
    console.log("Point: (".concat(point.x, ", ").concat(point.y, ")"));
}
drawPoint({ x: 1, y: 2 });
// The following function call will generate an error in TS
// drawPoint({x: 3, y: 4, z: 5});
