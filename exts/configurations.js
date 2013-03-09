module.exports = (function(){

	var extcg = require('configuratorjs'),
		fs = require('fs'),
		path = require('path'),
		util = require('tsk').ToolStack.Utility;

	extcg.configuration('dirs',{
		scan: function(dir,fn,cp){
				return fs.readdir(dir,function(err,list){
					if(err) return fn(err,null);
					util.eachAsync(list,function(e,i,o,mov){
						fn(e,i);
						mov(false);
					},cp);
				});
		}
	});

	extcg.configuration('util',{
		features: function(){
			var args = util.arranize(arguments),
			fo = args.shift();

			util.forEach(args,function(e,i,o){
				if(util.has(fo,e)) return;
				throw new Error(e," feature does not exist on Object",fo);
			});
		},
		processDir: function(appdir,search,onComplete,onEach){
			if(!onEach) onEach = function(o){ return require(o); }
			var loaded = {};
			extcg.use('dirs').scan(appdir,function(app,ind){
				var appPath = path.resolve(appdir,app.concat('/'+search));
				if(fs.existsSync(appPath)) loaded[app] = onEach(appPath);
				else console.log(appPath,'does not exists!');
			},function(){
				if(onComplete) onComplete(loaded);
			});
		}
	});

	extcg.configuration('core',{
		core: function(core,appdir){
			if(!core || !appdir) return;
			var utild = extcg.use('util');
			utild.features(core,'registerApp','unregisterApp','facade');
			var fo = {};
			fo.core = core;
			fo.appdir = appdir;

			return {
				loadApps: function(search,complete,each){
					var each = each || function(o){ 
						o = require(o);
						if(o && util.isFunction(o)) o(fo.core.facade);
						return o;
					};
					utild.processDir(fo.appdir,search,complete,each)
				}
			}
		},

	});

	return extcg;
})();

