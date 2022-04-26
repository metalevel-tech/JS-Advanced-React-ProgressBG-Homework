const dataUrl = `./data`;
const collectionUrl = `${dataUrl}/collection.json`;

const nodes = {
    outputJoke: document.querySelector('#output pre.joke'),
    outputContainer: document.querySelector('#output.joke-container'),

    btnLeft: document.querySelector('.nav-btn-left'),
    btnRight: document.querySelector('.nav-btn-right'),
    btnShow: document.querySelector('.nav-center'),

    autoplaySwitch: document.querySelector('.auto-play'),
    soundSwitch: document.querySelector('.sound-switch')
};

// const effectFadeOut = [
//     { transform: 'rotate(0) scale(1)' },
//     { transform: 'rotate(360deg) scale(0)' }
// ];

// const effectFadeIn = [
//     { transform: 'rotate(360deg) scale(0)' },
//     { transform: 'rotate(0) scale(1)' }
// ];

// const effectTiming = {
//     duration: 500,
//     iterations: 1,
//     fill: 'forwards'
// };

let fadeAudioIntervalId;

const newJokeButton = {
    messages: [
        'New joke',
        'Once gain',
        'Tell me a joke',
        'Next joke',
        'Fetch a new joke',
        'Show me a new joke',
        'Show next joke'
    ],
    resolve: true
}

const typewriter = {
    type: {
        src: './assets/typewriter-type.mp3',
        audio: 'Audio() generated bu the fetch() method',
        volume: 0.8,
        playbackRate: 1.1,
        loop: true
    },
    keyStroke: {
        src: './assets/typewriter-key.mp3',
        audio: 'Audio() generated bu the fetch() method',
        volume: 0.15,
        playbackRate: 1.5,
        loop: false
    },
    newLine: {
        src: './assets/typewriter-linefeed-bell.mp3',
        audio: 'Audio() generated bu the fetch() method',
        volume: 0.5,
        playbackRate: 1,
        loop: false
    },
    lineReturn: {
        src: './assets/typewriter-linefeed-return.mp3',
        audio: 'Audio() generated bu the fetch() method',
        volume: 0.5,
        playbackRate: 1,
        loop: false
    },
    async fetch(sound) {
        return new Promise(async (resolve, reject) => {
            try {
                if (typeof(this[sound].audio) !== 'object') {
                    const audioResponse = await fetch(this[sound].src);
        
                    if (!audioResponse.ok)
                        throw new Error(`${this.this[sound].src} not found, response: ${audioResponse.status}`);
        
                    const audioFile = await audioResponse.blob();

                    this[sound].audio = new Audio(URL.createObjectURL(audioFile));
                    this[sound].audio.volume = this[sound].volume;
                    this[sound].audio.playbackRate = this[sound].playbackRate;
                    this[sound].audio.loop = this[sound].loop;
                }
                resolve(`Resolve: ${sound}`);
            } catch (error) {
                reject(`Something went wrong with: '${sound}', ${error.message}`);
            }
        });
    }
}

class Joke {
    /**
     * The Instances model
     */
    // Properties that will be provided by an API fetch
    id;
    joke;
    categories;

    // Properties provided by the constructor
    index;

    constructor() {
        this.index = this.constructor.countInstances();
    }

    /**
     * The Instances Prototype model
     */
    async jokeType() {
        const { outputJoke } = nodes;

        outputJoke.dataset.index = this.index;
        outputJoke.dataset.id = this.id;
        outputJoke.innerHTML = '';
        outputJoke.style.fontSize = this.constructor.defaultFontSize;

        const text = this.joke.replace(/&quot;/g, '"');
        const speed = 90;
        let lineCount = 1;

        await typewriter.fetch('type').then(() => {
            typewriter.type.audio.play();
            newJokeButton.resolve = false;
        });
        await typewriter.fetch('keyStroke');
        await typewriter.fetch('newLine');
        await typewriter.fetch('lineReturn');

        [...text].forEach((letter, index, array) => {
            setTimeout(async () => {
                if (letter.match(/\.|\?|\!|\:|\,|\-/)) {
                    typewriter.type.audio.pause();
                    typewriter.keyStroke.audio.play();
                    typewriter.type.audio.play();
                }

                outputJoke.innerHTML += letter;
                this.fitJokeToContainer();

                const luneNumber = this.getNumberOfLines();
                if (lineCount < luneNumber) {
                    lineCount = luneNumber;
                    
                    typewriter.type.audio.pause();
                    typewriter.newLine.audio.play();
                    typewriter.type.audio.play();
                }

                if (index === array.length - 1) {
                    typewriter.type.audio.pause();
                    typewriter.type.audio.currentTime = 0;
                    typewriter.lineReturn.audio.play();
                    newJokeButton.resolve = true;
                    nodes.btnShow.textContent = newJokeButton.messages[Math.random() * newJokeButton.messages.length | 0];
                }

            }, index * speed);

        });
    }

    getNumberOfLines() {
        const { outputJoke } = nodes;

        const jokeHeight = parseFloat(window.getComputedStyle(outputJoke, null).getPropertyValue('height'));
        const lineHeight = parseFloat(window.getComputedStyle(outputJoke, null).getPropertyValue('line-height'));

        return Math.floor(jokeHeight / lineHeight);
    }

    fitJokeToContainer() {
        const { outputJoke, outputContainer } = nodes;

        let jokeHeight = parseFloat(window.getComputedStyle(outputJoke, null).getPropertyValue('height'));
        const containerHeight = parseFloat(window.getComputedStyle(outputContainer, null).getPropertyValue('height'));

        let jokeFontSize = parseFloat(window.getComputedStyle(outputJoke, null).getPropertyValue('font-size'));

        if (jokeHeight >= containerHeight) {
            jokeFontSize -= 0.1;
            outputJoke.style.fontSize = `${jokeFontSize}px`;
            this.fitJokeToContainer();
        }
    }

    /**
     * The Class model
     */
    static countInstances = (function () {
        let count = 0;
        return () => count++;
    })();

    static jokeList = [];

    static async fetchJoke() {
        return fetch('http://api.icndb.com/jokes/random')
            .then(response => {
                if (!response.ok) throw new Error(`Network error: ${response.status} ${response.statusText}`);
                return response.json();
            })
            .then(data => {
                const joke = Object.assign(new Joke(), data.value);
                const jokeListLength = this.jokeList.push(joke);

                return new Promise((resolve, reject) => {
                    // return the index of the last element
                    resolve(jokeListLength - 1);
                });
            })
            .catch(error => {
                console.error(`We have a problem: ${error}`);
            });
    }

    static async newJoke() {
        const lastElementIndex = await this.fetchJoke();
        this.jokeList[lastElementIndex].jokeType();
    }

    static defaultVolume = 0.8;
    static defaultFontSize = `${25.6}px`;
}

// Show/Hide info - this function is used also within Song.deploy()
nodes.btnShow.addEventListener('click', (event) => { 
    if (newJokeButton.resolve) {
        Joke.newJoke();
    }
});

// Autoplay switch
function autoplayOnOff(event) {
    const { autoplaySwitch } = nodes;

    // The default value is on
    if (localStorage.getItem('autoPlayOnOff') === null) {
        localStorage.setItem('autoPlayOnOff', 'on');
    }

    // On click change the value
    if (event && event.target === autoplaySwitch) {
        if (localStorage.getItem('autoPlayOnOff') === 'off') {
            localStorage.setItem('autoPlayOnOff', 'on');
        } else if (localStorage.getItem('autoPlayOnOff') === 'on') {
            localStorage.setItem('autoPlayOnOff', 'off');
        } else {
            localStorage.setItem('autoPlayOnOff', 'on');
        }
    }

    // Read the value and change the state
    if (localStorage.getItem('autoPlayOnOff') === 'off') {
        autoplaySwitch.classList.replace('switch-on', 'switch-off');
    } else if (localStorage.getItem('autoPlayOnOff') === 'on') {
        autoplaySwitch.classList.replace('switch-off', 'switch-on');
    }
}
nodes.autoplaySwitch.addEventListener('click', autoplayOnOff);

// Sound switch
function soundOnOff(event) {
    const { soundSwitch: soundSwitch } = nodes;

    // The default value is off
    if (localStorage.getItem('soundOnOff') === null) {
        localStorage.setItem('soundOnOff', 'off');
    }

    // On click, change the value
    if (event && event.target === soundSwitch) {
        if (localStorage.getItem('soundOnOff') === 'off') {
            localStorage.setItem('soundOnOff', 'on');
        } else if (localStorage.getItem('soundOnOff') === 'on') {
            localStorage.setItem('soundOnOff', 'off');
        } else {
            localStorage.setItem('soundOnOff', 'off');
        }
    }

    // Read the value and change the state
    if (localStorage.getItem('soundOnOff') === 'off') {
        soundSwitch.classList.replace('switch-on', 'switch-off');
    } else if (localStorage.getItem('soundOnOff') === 'on') {
        soundSwitch.classList.replace('switch-off', 'switch-on');
    }
}
nodes.soundSwitch.addEventListener('click', soundOnOff);

// The main logic
(async function init() {
    autoplayOnOff();
    soundOnOff();

    nodes.btnRight.addEventListener('click', (e) => {
        // Song.changeSong('next');
    });

    nodes.btnLeft.addEventListener('click', (e) => {
        // Song.changeSong('prev');
    });

    window.addEventListener('keydown', (e) => {
        // if (e.key === 'ArrowRight') Song.changeSong('next');
        // if (e.key === 'ArrowLeft') Song.changeSong('prev');
        // if (e.key === 'Space') Song.changeSong('prev');
    });
})();
