'use strict';

// Famous dependencies
var Mesh = require('famous/webgl-renderables/Mesh');
var Align = require('famous/components/Align');
var Size = require('famous/components/Size');
var Color = require('famous/utilities/Color');
var randomColor = require('./randomColor');

function Sphere(node) {
    this.node = node;
    this._id = node.addComponent(this);
    this.align = new Align(node);
    this.size = new Size(node);

    // Randomly position the element and set its size
    this.align.set(Math.random(), Math.random(), Math.random())
    this.size.setAbsolute(40, 40, 40);

    // Initialize the mesh along with a random color
    this.mesh = new Mesh(node);
    this.mesh.setGeometry('Box');
    this.mesh.setBaseColor(new Color(randomColor()));

    // Initialize the events and a state for animation
    this.growing = false;
    node.addUIEvent('click');
    node.addUIEvent('wheel');

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

var eventsHandling = {
    // Grow/shrink the size of the box, when it's a scroll event
    'wheel': function() {
        var _this = this;
        if (this.growing) return;
        this.growing = true;
        var size = this.node.getSize();
        var random = Math.random();
        var factor = (random > 0.5) ? random * 3 : -random * 2;
        this.size.setAbsolute(size[0]*factor, size[1]*factor, size[2]*factor, {
            duration: 800,
            curve: 'outBounce'
        }, function() { _this.growing = false; });
    },
    // Move the box to a random position, when it's clicked
    'click': function() {
        this.align.set(Math.random(), Math.random(), Math.random(), {
            duration: 1000,
            curve: 'outElastic'
        });
    }
};

// Handle events as they're received
Sphere.prototype.onReceive = function onReceive(type, ev) {
    eventsHandling[type].call(this);
};

module.exports = Sphere;
