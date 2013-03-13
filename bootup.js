#! /usr/bin/env node

var system = require('./configs/apps.js'),
	exts = system.exts,
	core = system.core,
	facade = system.core.facade,
	settings = system.settings,
	server = exts.router.Router(exts.http.createServer());
// if(NODE_ENV['development'])
// console.log(system,process.env)

	server.get('/admins',function(req,res,next){
		facade.request('admin','requestAll').done(function(o){
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


	
	