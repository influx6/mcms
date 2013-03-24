//will contain all external libraries to be used globaly
var exts = module.exports = {};

//basic node libs
exts.path = require('path');
exts.fs = require('fs');

//major libraries
exts.ts = require('tsk').ToolStack;
exts.corejs = require('corejs');
exts.settings = require('configtor')();
exts.storejs = require('storejs');
exts.router = require('router');
exts.watcher = require('watcherjs');
exts.fsl = require('fsl');
exts.lessy = require('lessy');
exts.http = require('http');
exts.express = require('express');
exts.router = require('router');

//initialize the library
exts.corejs.Core = exts.corejs.Core(exts.ts);
require('configtor/configs/fs')(exts.settings);

//major utilities
exts.util = exts.ts.Utility;

//loadup configurations
require('../exts/configurations')(exts.settings,exts.util);

// module.exports = exts;
