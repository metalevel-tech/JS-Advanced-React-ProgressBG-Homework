// Fix the error message `Cannot redeclare block-scoped variable 'userName`',
// which is used in another file in that project - tell it is a module with own scope.
export {};

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

// void is a little like the opposite of any:
// the absence of having any type at all. You may 
// commonly see this as the return type of functions
// that do not return a value:
function showMessage(message: string): void {
    console.log(message);
}
showMessage("Hello World");
showMessage(anything);

let questionable: unknown = 4;
showMessage(questionable as string);

questionable = "hello";
showMessage(questionable as string);

questionable = true;
showMessage(questionable as string);

// Unlike unknown, variables of type any allow you to access arbitrary properties,
// even ones that don’t exist. These properties include functions and TypeScript
// will not check their existence or type:

let looselyTyped: any = 4;
// OK, ifItExists might exist at runtime
looselyTyped.ifItExists();
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
 
let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); // Object is of type 'unknown'.