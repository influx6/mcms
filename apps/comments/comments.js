module.exports = function(exts){
	
	return function(channel,facade){

		var app = exts.corejs.Core.createAppShell(channel,facade);
		app.store = exts.storejs.NanoCouchdb.use('comments',{ admins: false });

		app.boot = function(){};
		app.reboot = function(){};
		app.shutdown = function(){};

		app.channel.add('bootup',function(){});
		app.channel.add('reboot',function(){});
		app.channel.add('shutdown',function(){});

		return app;
	};


};