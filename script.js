
const body = document.querySelector('body');
const displayArea = document.createElement('div');
displayArea.className = 'display-area';

for (let i = 1; i <= 64; i++) {
    let pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    for (let j = 1; j <= 64; j++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixelRow.appendChild(pixel);
    }
    displayArea.appendChild(pixelRow);
}

body.appendChild(displayArea);

displayArea.addEventListener('mouseover', changePixel);

function changePixel(event) {
    if (event.target.className == 'pixel') {
        event.target.style.backgroundColor = 'black';
    }
}