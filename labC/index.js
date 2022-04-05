const index = (() => {
    let index = 0;
    return () => { console.log(`${'*'.repeat(20)} ${++index} ${'*'.repeat(20)}`); };
})();

/**
 * How does the .lastIndex property work with rx.exec() and rx.test()?
 */
index(); // 1

const test = ['ada', 'ada', 'spas', 'spas'];
const rx = /(.).*?\1/gi;

test.forEach(element => {
    console.log(rx.test(element));
    // rx.lastIndex = 0;
});
// true
// false
// true
// false

index(); // 2 
// reset the lastIndex property to 0
test.forEach(element => {
    console.log(rx.test(element));
    rx.lastIndex = 0;
});
// true
// true
// true
// true

/**
 * How does the str.match() (and the other String methods) behave in the same situation?
 */
index(); // 3

test.forEach(element => {
    console.log(element.match(rx));
});
// (1) ['ada']
// (1) ['ada']
// (1) ['spas']
// (1) ['spas']

/**
 * This behavior of the rx.lastIndex property, and the rx.exec() and rx.test() methods is intentional!
 * Thus we can parse long text without consequential duplicates at many iterations.
 * Nice examples are provided in the following links:
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups
 *  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags
 */
index(); // 4
// .test() works in an identical way, but just returns `true` or `false`... while,
// .exec() returns an array of the matched groups, or `null` if there are no matches.
const strC = 'fee fi fo fum';
const rxC = /\w+\s/g;

console.log(rxC.exec(strC)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(rxC.exec(strC)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(rxC.exec(strC)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(rxC.exec(strC)); // null


index(); // 5
// Parse multi-line text line by line and create an object (or array) with the parsed data.
const text = `First_Name: John, Last_Name:Doe, Phone: 887-456-789
First_Name: Jane, Last_Name: Smith, Phone: 889-456-788
First_Name: Ivan, Last_Name: Martins, Phone: 888-456-781`;

const contacts = []; // const contacts = {};

const rxD = /First_Name:\s?(?<fName>\w+?),\s?Last_Name:\s?(?<lName>\w+?),\s?Phone:\s?(?<phone>[\d-]+)/g;

for (let i = 0; i < text.split(/\n/).length; i++) {
    const contact = rxD.exec(text).groups;
    contact.phone = contact.phone.replace(/^/, '+359-').replaceAll('-', ' ');

    contacts[i] = contact;
    console.log(`${contact.phone}, ${contact.lName}, ${contact.fName}`);
}

console.log(contacts);

// +359 887 456 789, Doe, John
// +359 889 456 788, Smith, Jane
// +359 888 456 781, Martins, Ivan
// (3) [{…}, {…}, {…}]