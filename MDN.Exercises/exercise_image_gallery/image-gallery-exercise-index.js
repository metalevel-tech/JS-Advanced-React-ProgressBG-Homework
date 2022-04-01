const nodes = {
    fullImg: document.querySelector('.full-img'),
    displayedImg: document.querySelector('.displayed-img'),
    thumbBar: document.querySelector('.thumb-bar'),
    btn: document.querySelector('button.dark'),
    overlay: document.querySelector('.overlay')
};

const {
    fullImg,
    displayedImg,
    thumbBar,
    btn,
    overlay
} = nodes;

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Looping through images */
for (const img of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + img);
    thumbBar.appendChild(newImage);
}

/* Add click event listener to the thumbBar images */
thumbBar.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        displayedImg.src = e.target.src;
    }
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (overlay.style.backgroundColor === 'rgba(0, 0, 0, 0.5)') {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});