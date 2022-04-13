// Factory Pattern:
// The Factory Pattern deals with the problem of creating objects
//     (we can think of them as 'products') 
//     without the need to specify the exact class of object being created.
// I.e. this pattern abstracts the object creation:
//      It offers great flexibility and implementation independence.

"use strict";

// AUX Constructors
function AudioPlayer(name) {
    this.name = name;
    this.play = () => {
        console.log(`${this.name} is playing on ${this.constructor.name.replace(/(?<=[a-z])(?=[A-Z])/, ' ')}!`)
    }
}
function VideoPlayer(name) {
    this.name = name;
    this.play = () => {
        console.log(`${this.name} is playing on ${this.constructor.name.replace(/(?<=[a-z])(?=[A-Z])/, ' ')}!`)
    }
}

// The Factory function
function mediaPlayerMaker(name) {
    if (name.match(/\.(?:mp3|ogg|flack|wave)$/i)) return new AudioPlayer(name);
    if (name.match(/\.(?:mp4|avi|mkv|ogv)$/i)) return new VideoPlayer(name);
}

const player1 = mediaPlayerMaker('Fun song.mp3');
const player2 = mediaPlayerMaker('Fun video.avi');

player1.play(); // Fun song.mp3 is playing on Audio Player!
player2.play(); // Fun video.avi is playing on Video Player!

console.log('*'.repeat(20));

// The Factory as mechanism to enforce encapsulation:
// As we saw, the only way to enforce encapsulation in JavaScript is by function scopes and closures.
// And Factory is just a function!

const accountFactory = function(balance) {
    // private member
    let _balance = balance;

    // public
    const obj = {
        // getBalance: () => _balance,
        // setBalance: (b) => _balance = b,
        get balance() { return _balance; },
        set balance(b) { _balance = b; }
    };

    return obj;
}

const object_1 = accountFactory(99999);
console.log(object_1.balance);
object_1.balance = 100000;
console.log(object_1.balance);