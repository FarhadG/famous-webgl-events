'use strict';

// Famous dependencies
var FamousEngine = require('famous/core/FamousEngine');
var Box = require('./Box');
var Light = require('./Light');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var root = FamousEngine.createScene().addChild();

// Attach four lights
for(var i = 0; i < 4; i++)
    new Light(root.addChild());

// Attach a ton of clickable boxes
for(var i = 0; i < 300; i++)
    new Box(root.addChild());

