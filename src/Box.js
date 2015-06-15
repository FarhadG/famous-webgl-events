'use strict';

// Famous dependencies
var Mesh = require('famous/webgl-renderables/Mesh');
var Align = require('famous/components/Align');
var Size = require('famous/components/Size');
var Color = require('famous/utilities/Color');
var randomColor = require('./randomColor');

function Box(node) {
    this.node = node;
    this.align = new Align(node);
    this.size = new Size(node);

    // Randomly position the element and set its size
    this.align.set(Math.random(), Math.random(), Math.random())
    this.size.setAbsolute(40, 40, 40);

    // Initialize the mesh along with a random color
    this.mesh = new Mesh(node);
    this.mesh.setGeometry('Box');
    this.mesh.setBaseColor(new Color(randomColor()));

    // Initialize the event
    node.addUIEvent('click');

    // Add a spinner component to the 'node' that is called, every frame
    var spinner = node.addComponent({
        onUpdate: function(time) {
            node.setRotation(time/1000, time/1500, time/2000);
            node.requestUpdateOnNextTick(spinner);
        }
    });

    // Set size mode, positional elements and call the spinner component
    node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setMountPoint(0.5, 0.5, 0.5)
        .setOrigin(0.5, 0.5, 0.5)
        .requestUpdate(spinner)
}

// Handle events as they're received
Box.prototype.onReceive = function onReceive(type, ev) {
    if (type === 'click') {
        // Move the box to a random position, when it's clicked
        this.align.set(Math.random(), Math.random(), Math.random(), {
            duration: 1000,
            curve: 'outElastic'
        });
    }
};

module.exports = Box;
