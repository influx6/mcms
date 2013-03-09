//will contain all external libraries to be used globaly
var exts = module.exports = {};

//basic node libs
exts.path = require('path');
exts.fs = require('fs');

//major libraries
exts.ts = require('tsk').ToolStack;
exts.corejs = require('corejs');
exts.storejs = require('storejs');
exts.router = require('router');
exts.watcher = require('watcherjs');
exts.fsl = require('fsl');
exts.lessy = require('lessy');

//initialize the library
exts.corejs.Core = exts.corejs.Core(exts.ts);

//major utilities
exts.util = exts.ts.Utility;

//loadup configurations
exts.settings = require('../exts/configurations');

// module.exports = exts;
