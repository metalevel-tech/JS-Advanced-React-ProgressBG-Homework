import { Subject, Observer } from './subject.observer.pattern.js';

// Select the dom items to be manipulated
const nodes = {
    select: document.querySelector('#letters'),
    items: document.querySelectorAll('.words li'),
}

// Create a mixins 'prototype' which will add own update() to the observers
const observer_prototype = {
    update: function(selectValue) {
        const startLetter = selectValue[0].toLowerCase();
        // console.log(selectValue);
        // console.log(startLetter);

        if (this.nodeItem.textContent.toLowerCase().startsWith(startLetter)) {
            this.nodeItem.classList.add('red');
        } else {
            this.nodeItem.classList.remove('red');
        }
    }
}

// Create an array of observers (the list items)
const observers = [...nodes.items].map(item =>
    Object.assign(new Observer, observer_prototype, {nodeItem: item})
);

// Create the subject
const subject = new Subject('Update list items with class .red');

// Register the observers ot the subject
observers.forEach(observer => subject.registerObserver(observer));

// Add action that will trigger the Subject.notifyObservers() method
nodes.select.addEventListener('change', function(e) {
    subject.notifyObservers(e.target.value);
    // console.log(e.target.value);
});
