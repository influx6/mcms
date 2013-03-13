module.exports = function(exts){
	
	return function(channel,facade){

		var authenticate = false,
		app = exts.corejs.Core.createAppShell(channel,facade);
		// app.ready = exts.ts.Promise.create();
		// app.store = exts.storejs.NanoCouchdb.use('admins');
		app.route = {
			'requestAll':'all',
			'request':'get',
			'requestCreate':'save',
			'requestDestroy':'destroy',
			'requestUpdate':'update'
		}

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

		app.channel.add('requestAll',function(promise){
			console.log(promise);
			app.store.all().then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('request',function(id,promise){
			app.store.get(id).then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('requestCreate',function(id,doc,promise){
			app.store.create(id).then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('requestDestroy',function(id,fn,err){
			app.store.destroy(id).then(promise.resolve,promise.reject,promise.notify);
		});

		app.channel.add('requestUpdate',function(id,doc,fn,err){
			app.store.update(id,doc).then(promise.resolve,promise.reject,promise.notify);
		});

		return app;
	};


};