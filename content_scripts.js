
(function() {
    // Total amount of images
    const max = 39;
    
    const images = [];
    for (i = 25; i < max; i++) {
        images.push("https://raw.githubusercontent.com/Twinklefan2/cute-images/main/img" + i + ".png")
    };
	for (i = 79; i < 103; i++) {
        images.push("https://raw.githubusercontent.com/Twinklefan2/cute-images/main/img" + i + ".png")
    }
	

    drawImage(images)
})();

function drawImage(images) {
    const len = images.length;
    const image = document.createElement('img');

    image.style.zIndex = 1000;
    image.src = images[randomize(len)];
    image.style = generateStyle();

	document.body.appendChild(image);
}

function randomize(max) {
    return Math.floor(Math.random() * max);
}

function generateStyle() {
    const { left, top } = generateLocation();
    const degrees = generateRotation();
    const width = randomize(200) + 200;
    const style = `
    z-index: 2;
    position: absolute;
    left: ${left}px;
    top: ${top}px;
    transform: rotate(${degrees}deg);
    width: ${width}px;
    `;
    return style
}

function generateLocation() {
    const windowHeight = window.innerHeight - 500;
    const windowWidth = window.innerWidth - 500;
    const left = randomize(windowWidth);
    const top = randomize(windowHeight);
    return { left, top }
}

function generateRotation() {
    const direction = Math.random() < 0.5 ? -1 : 1;
    return (Math.random() * ((50 - (-50)) + -50)) * direction
}
