var system = require('./configs/apps.js'),
	exts = system.exts,
	core = system.core,
	facade = system.core.facade,
	settings = system.settings,
	app = exts.router.Router();
	// app = exts.express();

	settings.use('util').dir(settings.get('apps'),'route.js',null,function(o){ return require(o)(app,facade,settings); });

	// app.get('/admins',function(req,res,next){
	// 	facade.request('admin','all',{ start: 1, end:30}).done(function(o){
	// 		res.setStatus(200).setContent('text/plain').pushHead();
	// 		res.end(JSON.stringify(o));
	// 		next();
	// 	}).fail(function(o){
	// 		res.setStatus(404).setContent('text/plain').pushHead();
	// 		res.end(JSON.stringify(o));
	// 		next();
	// 	});
	// });
		
	app.listen(3000);


