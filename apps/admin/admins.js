module.exports = function(exts){
	
	return function(channel,facade){

		var authenticate = false,
		app = exts.corejs.Core.createAppShell(channel,facade);
		// app.store = exts.storejs.NanoCouchdb.use('admins');

		app.boot = function(username,password){
			if(username && password) authenticate = true;
			app.store = exts.storejs.NanoCouchdb.use('admins',{ 
				username: (authenticate) ? username : null,
				password: (authenticate) ? password : null,
				admins: (authenticate) ? true : false 
			});
		};
		
		app.reboot = function(){};
		app.shutdown = function(){
			if(!this.store) return;
			ext.util.explode(app.store);
		};

		app.channel.add('bootup',function(){
			app.boot.apply(app,arguments);
		});
		app.channel.add('reboot',function(){});
		app.channel.add('shutdown',function(){
			app.shutdown.apply(app,arguments);
		});

		app.channel.add('all',function(query,promise){
			app.store.all().then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('get',function(query,promise){
			app.store.get(id).then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('create',function(query,promise){
			app.store.create(query.id,query.doc).then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('destroy',function(query,promise){
			app.store.destroy(id).then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('update',function(query,promise){
			app.store.update(id,doc).then(promise.resolve,promise.reject,promise.notify);
		});

		return app;
	};


};