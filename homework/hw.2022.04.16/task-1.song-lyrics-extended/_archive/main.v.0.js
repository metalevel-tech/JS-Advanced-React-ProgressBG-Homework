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

const effectFideOut = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const effectFideIn = [
    { transform: 'rotate(360deg) scale(0)' },
    { transform: 'rotate(0) scale(1)' }
];

const effectTiming = {
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
};

// Controller to reset the 'Show info' button
// const controller = new AbortController();
// nodes.btnShow.addEventListener('click', showHideInfo, { signal: controller.signal });
// img.addEventListener('click', () => { controller.abort(); });

class Song {
    constructor() {
        this.artist = "provided";
        this.album = "provided";
        this.year = "provided";
        this.cover = "fillData()";
        this.fvSong = "provided";
        this.fvSongMp3 = "fillData()";
        this.fvSongLyr = "fillData()";
    }
    fillData() {
        this.cover = `${this.artist}-${this.album}.jpg`
            .toLowerCase().replace(/\s/g, '.');
        this.fvSongMp3 = `${this.artist}-${this.album}-${this.fvSong}.ogg`
            .toLowerCase().replace(/\s/g, '.');
        this.fvSongLyr = `${this.artist}-${this.album}-${this.fvSong}.txt`
            .toLowerCase().replace(/\s/g, '.');
    }
    deploy(init = false) {
        fetch(`${dataUrl}/${this.cover}`)
            .then(response => {
                if (response.ok) return response.blob();
                else throw new Error(`${this.cover} not found, response: ${response.status}`);
            })
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                const img = document.createElement('img');
                img.src = objectURL;
                img.classList.add('cover');

                if (init) {
                    nodes.cover.parentNode.replaceChild(img, nodes.cover);
                    nodes.cover = img;
                } else {
                    nodes.cover.animate(effectFideOut, effectTiming).finished
                        .then(animate => {
                            console.log(animate);
                            nodes.cover.parentNode.replaceChild(img, nodes.cover);
                            nodes.cover = img;
                            nodes.cover.animate(effectFideIn, effectTiming).finished;
                        });
                }
                img.addEventListener('click', showHideInfo);
            })
            .catch(error => console.error(error));

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
                audio.volume = 1;
                if (localStorage.getItem('autoPlay') === 'on') audio.play();
                
                nodes.output.replaceChild(audio, nodes.player);
                nodes.player = audio;
            })
            .catch(error => console.error(error));

        fetch(`${dataUrl}/${this.fvSongLyr}`)
            .then(response => {
                if (response.ok) return response.text();
                else throw new Error(`${this.fvSongMp3} not found, response: ${response.status}`);
            })
            .then(text => {
                nodes.artist.textContent = this.artist;
                nodes.album.textContent = this.album;
                nodes.song.textContent = this.fvSong;
                nodes.lyrics.textContent = text;
            })
            .catch(error => console.error(error));
    }
}

// Show/Hide info - this function is used also within Song.deploy()
function showHideInfo(event) {
    const { output, btnShow } = nodes;
    if (output.style.display === 'table-caption') {
        output.style.display = 'none';
        btnShow.innerText = 'Show info';

        localStorage.setItem('showInfo', false);
    } else {
        output.style.display = 'table-caption';
        btnShow.innerText = 'Hide info';

        localStorage.setItem('showInfo', true);
    }
}
nodes.btnShow.addEventListener('click', showHideInfo);

// Autoplay switch
function autoplayOnOff(event) {
    const { autoplaySwitch, player } = nodes;

    if (event && event.target === autoplaySwitch) {
        if (localStorage.getItem('autoPlay') === 'off') {
            localStorage.setItem('autoPlay', 'on');
        } else if (localStorage.getItem('autoPlay') === 'on') {
            localStorage.setItem('autoPlay', 'off');
        } else {
            localStorage.setItem('autoPlay', 'on');
        }
    }
    
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

    if (event && event.target === lyricsSwitch) {
        if (localStorage.getItem('lyricsSwitch') === 'off') {
            localStorage.setItem('lyricsSwitch', 'on');
        } else if (localStorage.getItem('lyricsSwitch') === 'on') {
            localStorage.setItem('lyricsSwitch', 'off');
        } else {
            localStorage.setItem('lyricsSwitch', 'on');
        }
    }
    
    if (localStorage.getItem('lyricsSwitch') === 'off') {
        lyricsSwitch.classList.replace('switch-on', 'switch-off');
        lyrics.style.display = 'none';
    } else if (localStorage.getItem('lyricsSwitch') === 'on') {
        lyricsSwitch.classList.replace('switch-off', 'switch-on');
        lyrics.style.display = 'block';
    }
}
nodes.lyricsSwitch.addEventListener('click', lyricsOnOff);

// The main logic, note the async functions return promise
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

async function init(n) {
    const songs = await getCollection(collectionUrl);

    songs[n].deploy(true);

    if (localStorage.getItem('showInfo') === 'true') {
        nodes.output.style.display = 'table-caption';
        nodes.btnShow.innerText = 'Hide info';
    }

    autoplayOnOff();
    lyricsOnOff();

    nodes.btnRight.addEventListener('click', (e) => {
        if (n < songs.length - 1) n++;
        else n = 0; 
        songs[n].deploy();
    });

    nodes.btnLeft.addEventListener('click', (e) => {
        if (n > 0) n--;
        else n = songs.length - 1; 
        songs[n].deploy();
    });
}
init(0);