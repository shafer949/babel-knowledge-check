'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var container = document.getElementById('root');
var infoDisplay = document.createElement('h4');
var p = document.createElement('p');

var greet = function greet(name) {
    return 'Hey ' + name + ', how\'s it going?';
};

var _ref = ['ES6+ is Awesome!', 'Whaaaat??', 'Anonymous'],
    triggered = _ref[0],
    blame = _ref[2];


var whoSaidIt = {
    name: 'unknown',
    occupation: 'JS Guru'
};

var otherDetails = _extends({
    info: 'This won\'t work in IE 11 unless transpiled...try it out!'
}, whoSaidIt);

container.innerText = triggered;
infoDisplay.innerText = otherDetails.info;
p.innerText = '-' + otherDetails.name;

container.appendChild(p);
container.appendChild(infoDisplay);