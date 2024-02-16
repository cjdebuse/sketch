
const body = document.querySelector('body');
const button = document.querySelector('button');
const displayArea = document.querySelector('.display-area');

createCanvas(64);

button.addEventListener('click', () => {
    clearDisplayArea();
    createCanvas(getPixelDensity());
});

function getPixelDensity () {
    const numberOfPixels = Number(prompt("Enter the desired number of horizontal pixels (≤ 100):", 64));
    if (numberOfPixels && numberOfPixels <= 100) {
        return numberOfPixels;
    } else {
        return(getPixelDensity());
    }
}

function clearDisplayArea () {
    const pixelRows = document.querySelectorAll('.pixel-row');
    pixelRows.forEach((row) => {
        displayArea.removeChild(row);
    });
}

function createCanvas (numberOfPixels) {
    for (let i = 1; i <= numberOfPixels; i++) {
        let pixelRow = document.createElement('div');
        pixelRow.className = 'pixel-row';
        for (let j = 1; j <= numberOfPixels; j++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixelRow.appendChild(pixel);
        }
        displayArea.appendChild(pixelRow);
    }
}

displayArea.addEventListener('mouseover', changePixel);

function changePixel(event) {
    if (event.target.className == 'pixel') {
        event.target.style.backgroundColor = 'black';
    }
}