export {}

let start: boolean = false;
let age: number = 16;
let userName: string = "John";
let dataList1: number[] = [1, 2, 3, 4, 5];
let dataList2: Array<number> = [1, 2, 3, 4, 5];
let dataListA: string[] = ["a", "b", "c", "d", "e"];
let dataListB: Array<string> = ["a", "b", "c", "d", "e"];
let dataListMix1: (string|number|boolean)[] = ["a", 1, "c", false];
let dataListMix2: Array<number | string> = [1, "a", 2, "b", 3, "c"];

enum Color {Red, Green, Blue}
let rColor: Color = Color.Red;
let gColor: Color = Color.Green;

let anything: any = 42;
anything = "hello";
anything = true;

function showMessage(message: string): void {
    console.log(message);
}

showMessage("Hello World");