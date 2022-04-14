const index = (() => {
    let index = 0;
    return () => { console.log(`${'*'.repeat(20)} ${++index} ${'*'.repeat(20)}`); };
})();

index(); 

const Event = function(name) {
    // public
    this.name = name;
    this.id = Object.getPrototypeOf(this).countObj();
}
Event.prototype = (function() {
    // private
    let count = 1;

    // this is the actual prototype
    return {
        // privileged method
        countObj: () => count++
    }
})();

const events = [];
for (let i = 0; i < 5; i++) {
    events.push(new Event(`Event ${i}`));
}

for (const event of events) {
    console.log(`${event.name} has Id: ${event.id}`)
}