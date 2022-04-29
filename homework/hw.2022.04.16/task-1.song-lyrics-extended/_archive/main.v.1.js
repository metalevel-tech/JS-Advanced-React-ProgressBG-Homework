const dataUrl = `./data`;
const collectionUrl = `${dataUrl}/collection.json`;

const nodes = {
    cover: document.querySelector('.cover'),
    output: document.querySelector('#output'),
    player: document.querySelector('#output .player'),
    artist: document.querySelector('#output .artist-name'),
    album: document.querySelector('#output .album-name'),
    song: document.querySelector('#output .song-name'),
    lyrics: document.querySelector('#output .song-lyrics'),
    btnLeft: document.querySelector('.nav-btn-left'),
    btnRight: document.querySelector('.nav-btn-right'),
    btnShow: document.querySelector('.nav-center'),
    imageContainer: document.querySelector('.image-container'),
    autoplaySwitch: document.querySelector('.auto-play'),
    lyricsSwitch: document.querySelector('.lyrics-switch')
};

const effectFadeOut = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const effectFadeIn = [
    { transform: 'rotate(360deg) scale(0)' },
    { transform: 'rotate(0) scale(1)' }
];

const effectTiming = {
    duration: 500,
    iterations: 1,
    fill: 'forwards'
};

// Controller to reset the 'Show info' button
// const controller = new AbortController();
// nodes.btnShow.addEventListener('click', showHideInfo, { signal: controller.signal });
// img.addEventListener('click', () => { controller.abort(); });

class Song {
    // The Instances model
    constructor() { 
        this.artist = "provided";
        this.album = "provided";
        this.year = "provided";
        this.cover = "fillData()";
        this.fvSong = "provided";
        this.fvSongMp3 = "fillData()";
        this.fvSongLyr = "fillData()";
    }

    // The Instances Prototype model
    fillData() {
        // Fill up the missing data
        this.cover = `${this.artist}-${this.album}.jpg`
            .toLowerCase().replace(/\s/g, '.');
        this.fvSongMp3 = `${this.artist}-${this.album}-${this.fvSong}.ogg`
            .toLowerCase().replace(/\s/g, '.');
        this.fvSongLyr = `${this.artist}-${this.album}-${this.fvSong}.txt`
            .toLowerCase().replace(/\s/g, '.');
    }

    deploy(init = false) {
        // Get the cover for the current song
        fetch(`${dataUrl}/${this.cover}`)
            .then(response => {
                if (response.ok) return response.blob();
                else throw new Error(`${this.cover} not found, response: ${response.status}`);
            })
            .then(blob => {
                // Create new DOM IMG element
                const objectURL = URL.createObjectURL(blob);
                const img = document.createElement('img');
                img.src = objectURL;
                img.classList.add('cover');
                img.addEventListener('click', showHideInfo);

                // Replace the old cover
                if (init) {
                    // If it is the init call: just replace the node
                    nodes.cover.parentNode.replaceChild(img, nodes.cover);
                    nodes.cover = img;

                    // Return a promise to resolve the next step
                    return new Promise(function (resolve, reject) {
                        resolve('chain with the next promise');
                    });
                } else {
                    // If it is a regular call: animate the cover and replace the node
                    return nodes.cover.animate(effectFadeOut, effectTiming).finished
                        .then(animate => {
                            nodes.cover.parentNode.replaceChild(img, nodes.cover);
                            nodes.cover = img;

                            // Return a promise to resolve the next step
                            return nodes.cover.animate(effectFadeIn, effectTiming).finished;
                        })
                        .catch(error => { throw new Error(`Animate error: ${error}`); });
                }
            })
            .then(resolve => {
                // The next step is to get the lyrics and change the info content
                fetch(`${dataUrl}/${this.fvSongLyr}`)
                    .then(response => {
                        if (response.ok) return response.text();
                        else throw new Error(`${this.fvSongLyr} not found, response: ${response.status}`);
                    })
                    .then(text => {
                        nodes.artist.textContent = this.artist;
                        nodes.album.textContent = this.album;
                        nodes.song.textContent = this.fvSong;
                        nodes.lyrics.textContent = text;
                    })
                    .catch(error => { throw new Error(`Lyrics error: ${error}`); });

                // Also in parallel get the audio file and place it in the player
                fetch(`${dataUrl}/${this.fvSongMp3}`)
                    .then(response => {
                        if (response.ok) return response.blob();
                        else throw new Error(`${this.fvSongMp3} not found, response: ${response.status}`);
                    })
                    .then(blob => {
                        const objectURL = URL.createObjectURL(blob);
                        const audio = new Audio(objectURL);

                        audio.classList.add('player');
                        audio.setAttribute("controls", "controls");
                        audio.volume = Song.currentVolume;
                        
                        if (localStorage.getItem('autoPlay') === 'on') audio.play();
                        
                        nodes.output.replaceChild(audio, nodes.player);
                        nodes.player = audio;
                        
                        audio.addEventListener('volumechange', (e) => {
                            Song.currentVolume = Number(audio.volume.toFixed(2));
                        }, true);

                        // Auto decrease the volume at the end of the song
                        const fadeAudio = setInterval(() => {
                            const fadePoint = audio.duration - 6;

                            if ((audio.currentTime >= fadePoint) && (audio.volume > 0)) {
                                try {
                                    audio.volume -= 0.1;
                                }
                                catch (error) {
                                    // console.log(`Volume fade error: ${error}`);
                                    audio.volume = 0;
                                }
                            }

                            if (audio.volume < 0.003) {
                                audio.volume = 0;
                                clearInterval(fadeAudio);
                                
                                setTimeout(() => {
                                    audio.pause();
                                    audio.volume = 0.6;

                                    // Call the next song, in auto play mode
                                    if (localStorage.getItem('autoPlay') === 'on') Song.nextSong();
                                }, 500);
                            }
                        }, 200);
                    })
                    .catch(error => { throw new Error(`Audio error: ${error}`); });
            })
            .catch(error => console.error(error));
    }

    // The Class model
    static playList = [];

    static currentVolume = 0.8;

    static nextSong() {
        const songs = this.playList;
        let currentSong = songs.findIndex(song => song.fvSong === nodes.song.textContent);
    
        if (currentSong < songs.length - 1) currentSong++;
        else currentSong = 0;
    
        songs[currentSong].deploy();
    }

    static prevSong() {
        const songs = this.playList;
        let currentSong = songs.findIndex(song => song.fvSong === nodes.song.textContent);
    
        if (currentSong > 0) currentSong--;
        else currentSong = songs.length - 1;
        
        songs[currentSong].deploy();
    };
}

// Show/Hide info - this function is used also within Song.deploy()
function showHideInfo(event) {
    const { output, btnShow } = nodes;

    // The default value is on
    if (localStorage.getItem('showInfo') === null) {
        localStorage.setItem('showInfo', 'on');
    }

    // On click change the value
    if (event && event.type === 'click') {
        if (localStorage.getItem('showInfo') === 'off') {
            localStorage.setItem('showInfo', 'on');
        } else if (localStorage.getItem('showInfo') === 'on') {
            localStorage.setItem('showInfo', 'off');
        } else {
            localStorage.setItem('showInfo', 'on');
        }
    }
 
    // Read the value and change the switch
    if (localStorage.getItem('showInfo') === 'off') {
        btnShow.innerText = 'Show info';
        output.style.display = 'none';
    } else if (localStorage.getItem('showInfo') === 'on') {
        btnShow.innerText = 'Hide info';
        output.style.display = 'table-caption';
    }
}
nodes.btnShow.addEventListener('click', showHideInfo);

// Autoplay switch
function autoplayOnOff(event) {
    const { autoplaySwitch, player } = nodes;

    // The default value is on
    if (localStorage.getItem('autoPlay') === null) {
        localStorage.setItem('autoPlay', 'on');
    }

    // On click change the value
    if (event && event.target === autoplaySwitch) {
        if (localStorage.getItem('autoPlay') === 'off') {
            localStorage.setItem('autoPlay', 'on');
        } else if (localStorage.getItem('autoPlay') === 'on') {
            localStorage.setItem('autoPlay', 'off');
        } else {
            localStorage.setItem('autoPlay', 'on');
        }
    }

    // Read the value and change the switch
    if (localStorage.getItem('autoPlay') === 'off') {
        autoplaySwitch.classList.replace('switch-on', 'switch-off');
    } else if (localStorage.getItem('autoPlay') === 'on') {
        autoplaySwitch.classList.replace('switch-off', 'switch-on');
    }
}
nodes.autoplaySwitch.addEventListener('click', autoplayOnOff);

// Lyrics switch
function lyricsOnOff(event) {
    const { lyricsSwitch, lyrics } = nodes;

    // The default value is off
    if (localStorage.getItem('lyricsSwitch') === null) {
        localStorage.setItem('lyricsSwitch', 'off');
    }

    // On click, change the value
    if (event && event.target === lyricsSwitch) {
        if (localStorage.getItem('lyricsSwitch') === 'off') {
            localStorage.setItem('lyricsSwitch', 'on');
        } else if (localStorage.getItem('lyricsSwitch') === 'on') {
            localStorage.setItem('lyricsSwitch', 'off');
        } else {
            localStorage.setItem('lyricsSwitch', 'off');
        }
    }

    // Read the value and show/hide the lyrics
    if (localStorage.getItem('lyricsSwitch') === 'off') {
        lyricsSwitch.classList.replace('switch-on', 'switch-off');
        lyrics.style.display = 'none';
    } else if (localStorage.getItem('lyricsSwitch') === 'on') {
        lyricsSwitch.classList.replace('switch-off', 'switch-on');
        lyrics.style.display = 'block';
    }
}
nodes.lyricsSwitch.addEventListener('click', lyricsOnOff);

// Get the sound collection collection 
async function getCollection(url) {
    try {
        const collection = await fetch(url);
        const data = await collection.json();
        const songs = data.map(entry => {
            const song = Object.assign(new Song(), entry);
            song.fillData();
            return song;
        });
        return songs;
    }
    catch (error) {
        console.log(`We have a problem: ${error}`);
    }
}

// The main logic
(async function init() {
    Song.playList = await getCollection(collectionUrl);

    const randomSongNumber = Math.floor(Math.random() * Song.playList.length);
    Song.playList[randomSongNumber].deploy(true);

    showHideInfo();
    autoplayOnOff();
    lyricsOnOff();

    nodes.btnRight.addEventListener('click', (e) => {
        Song.nextSong();
    });
    
    nodes.btnLeft.addEventListener('click', (e) => {
        Song.prevSong();
    });
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') Song.nextSong();
        if (e.key === 'ArrowLeft') Song.prevSong();
    });
})();
