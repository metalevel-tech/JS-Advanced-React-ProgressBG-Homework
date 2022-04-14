// The Subject (Publisher) Class
class Subject {
    constructor(name) {
        this.name = name;
        this.observerList = [];
    }
    registerObserver(observer) {
        this.observerList.push(observer);
    }
    unregisterObserver(observer) {
        this.observerList = this.observerList.filter(el => el !== observer);
    }
    notifyObservers(...data) {
        // Notification means we calling a method of the observer object.
        this.observerList.forEach(observer => observer.update(data));
    }
}

// The Observer (Subscriber) Class
// Notification means we calling a method of the observer object.
// Each observer must implement its own update (notify) method,
// Here w set a default one...
class Observer {
    update() {
        console.log(`Observer cannot be updated, because it doesn't have oun 'update()'`);
    }
}

export { Subject, Observer };