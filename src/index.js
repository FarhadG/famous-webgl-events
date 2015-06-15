'use strict';

// Famous dependencies
var FamousEngine = require('famous/core/FamousEngine');
var Box = require('./Box');
var Light = require('./Light');

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize the scene
var root = FamousEngine.createScene();

// Attach four lights
for(var i = 0; i < 3; i++)
    new Light(root.addChild());

// Attach a ton of clickable boxes
for(var i = 0; i < 100; i++)
    new Box(root.addChild());

