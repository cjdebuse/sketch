
const body = document.querySelector('body');
const button = document.querySelector('button');
const displayArea = document.querySelector('.display-area');

createCanvas(64);

button.addEventListener('click', () => {
    clearDisplayArea();
    createCanvas(getPixelDensity());
});

function getPixelDensity() {
    const numberOfPixels = Number(prompt("Enter the desired number of horizontal pixels (≤ 100):", 64));
    if (numberOfPixels && numberOfPixels <= 100) {
        return numberOfPixels;
    } else {
        return(getPixelDensity());
    }
}

function clearDisplayArea() {
    const pixelRows = document.querySelectorAll('.pixel-row');
    pixelRows.forEach((row) => {
        displayArea.removeChild(row);
    });
}

function createCanvas(numberOfPixels) {
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
    const box = event.target;
    if (box.classList.contains('filled')) {
        box.style.backgroundColor = darken(box.style.backgroundColor);
    } else if (box.classList.contains('pixel')) {
        box.style.backgroundColor = pickColor();
        box.classList.add('filled');
    }
}

function darken(color) {
    let rgb = color.split(',');
    if (rgb.length < 4) {return color;}
    
    let transparency = Number(rgb[3].slice(1,-1));
    rgb.pop();

    if (transparency < 1) {
        transparency += .1;
    }

    return `${rgb.join(",")}, ${transparency})`;
}

function pickColor() {
    return `rgba(${randomRGB()}, ${randomRGB()}, ${randomRGB()}, 0.1)`;
}

function randomRGB() {
    return Math.floor(Math.random()*256);
}