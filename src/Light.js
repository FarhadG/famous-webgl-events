'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var PointLight = require('famous/webgl-renderables/lights/PointLight');
var Color = require('famous/utilities/Color');
var GestureHandler = require('famous/components/GestureHandler');
var randomColor = require('./randomColor');

function Light(node) {
    var _this = this;
    this.node = node;
    this._id = node.addComponent(this);

    // Initialize the light, along with a color (off) and size
    var lightSize = 50;
    this.lightColor = new Color('black');
    this.light = new PointLight(node)
        .setColor(this.lightColor);

    // Set node's size and positional elements
    node.setSizeMode('absolute', 'absolute', 'absolute')
        .setAlign(Math.random(), Math.random(), Math.random())
        .setPosition(0, 0, 500)
        .setMountPoint(0.5, 0.5, 0.5)
        .setOrigin(0.5, 0.5, 0.5)
        .setAbsoluteSize(lightSize * 2, lightSize)
        .requestUpdate(this._id)

    new DOMElement(node)
        .setContent('Light (DOM)')
        .setProperty('font-family', 'helvetica')
        .setProperty('background-color', 'red')
        .setProperty('color', 'white')
        .setProperty('text-align', 'center')
        .setProperty('line-height', lightSize+'px');

    // Initialize the events and use gestures for drag functionality
    this.node.addUIEvent('dblclick');

    var gestures = new GestureHandler(node);
    gestures.on('drag', function(ev) {
        var position = _this.node.getPosition();
        var x = position[0] + ev.centerDelta.x;
        var y = position[1] + ev.centerDelta.y;
        _this.node.setPosition(x, y, position[2]);
    });
}

// Handle events as they're received
Light.prototype.onReceive = function onReceive(type, ev) {
    // Turn on/off the lights when they're double clicked
    if (type !== 'dblclick') return;
    var color = this.lightColor.getNormalizedRGB();
    this.lightColor.set(color[0] ? 'black' : randomColor(), { duration: 500 });
    this.light.setColor(this.lightColor);
};

module.exports = Light;
