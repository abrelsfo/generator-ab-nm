#!/usr/bin/env node
'use strict';
var meow = require('meow');
const updateNotifier = require('update-notifier');
var <%= camelModuleName %> = require('./');

var cli = meow([
	'Usage',
	'  $ <%= moduleName %> [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ <%= moduleName %>',
	'  shits & giggles'
]);

updateNotifier({pkg: cli.pkg}).notify();

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
