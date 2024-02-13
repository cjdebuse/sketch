
const body = document.querySelector('body');
const displayArea = document.createElement('div');
displayArea.className = 'display-area';

for (let i = 1; i <= 64; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    // pixel.style.height = `${100/64}vh`;
    // pixel.style.width = `${100/64}vh`;
    displayArea.appendChild(pixel);
}

body.appendChild(displayArea);