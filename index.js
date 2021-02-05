exports.colours = (req, res) => {
    res.status(200).json({colours: getColour()});
};

function getColour() {
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    r = zeroPad(getRandomInt(0, 255).toString(16),2)
    g = zeroPad(getRandomInt(0, 255).toString(16),2)
    b = zeroPad(getRandomInt(0, 255).toString(16),2)
    return "#"+r+""+g+""+b;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

