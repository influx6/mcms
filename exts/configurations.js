module.exports = (function(_,util){

	_.configuration('core',{
		core: function(core,appdir){
			if(!core || !appdir) return;
			var utild = _.use('util');
			utild.features(core,'registerApp','unregisterApp','facade');
			var fo = {};
			fo.core = core;
			fo.appdir = appdir;

			return {
				loadUp: function(search,complete,each){
					var each = each || function(o){ 
						o = require(o);
						if(o && util.isFunction(o)) o(fo.core.facade);
						return o;
					};
					utild.dir(fo.appdir,search,complete,each)
				},
			}
		},

	});

});

