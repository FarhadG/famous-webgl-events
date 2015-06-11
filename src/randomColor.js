// Helper function for returning a set of random colors
module.exports = function getRandomColor() {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    return [r, g, b];
};
