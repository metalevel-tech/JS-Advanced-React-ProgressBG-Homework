"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var start = false;
var age = 16;
var userName = "John";
var dataList1 = [1, 2, 3, 4, 5];
var dataList2 = [1, 2, 3, 4, 5];
var dataListA = ["a", "b", "c", "d", "e"];
var dataListB = ["a", "b", "c", "d", "e"];
var dataListMix1 = ["a", 1, "c", false];
var dataListMix2 = [1, "a", 2, "b", 3, "c"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var rColor = Color.Red;
var gColor = Color.Green;
var anything = 42;
anything = "hello";
anything = true;
// void is a little like the opposite of any:
// the absence of having any type at all. You may 
// commonly see this as the return type of functions
// that do not return a value:
function showMessage(message) {
    console.log(message);
}
showMessage("Hello World");
showMessage(anything);
var questionable = 4;
showMessage(questionable);
questionable = "hello";
showMessage(questionable);
questionable = true;
showMessage(questionable);
// Unlike unknown, variables of type any allow you to access arbitrary properties,
// even ones that don’t exist. These properties include functions and TypeScript
// will not check their existence or type:
var looselyTyped = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
var strictlyTyped = 4;
// strictlyTyped.toFixed(); // Object is of type 'unknown'.
