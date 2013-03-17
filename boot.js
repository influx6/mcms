#! /usr/bin/env node

var system = require('./configs/apps.js'),
	exts = system.exts,
	core = system.core,
	facade = system.core.facade,
	settings = system.settings,
	server = exts.router.Router(exts.http.createServer());
// if(NODE_ENV['development'])
// console.log(system,process.env)
	// core.authorizeBox(server,{
	// 	admin: { all: true }
	// });

	server.get('/admins',function(req,res,next){
		facade.request('admin','all',{ start: 1, end:30}).done(function(o){
			res.setStatus(200).setContent('text/plain').pushHead();
			res.end(JSON.stringify(o));
			next();
		}).fail(function(o){
			res.setStatus(404).setContent('text/plain').pushHead();
			res.end(JSON.stringify(o));
			next();
		});
	});


	server.listen(3000);


