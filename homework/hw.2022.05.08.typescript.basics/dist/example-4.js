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
function showMessage(message) {
    console.log(message);
}
showMessage("Hello World");
