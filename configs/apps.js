var exts = require('./exts.js'),
	apps = exts.path.resolve('.','./apps'),
	perms = require('./permissions'),
	settings = exts.settings,
	mcms = exts.corejs.Core.Sandbox('./lib/modules','./apps',perms);

	//add specific features to the core facade
	mcms.facade.fsl = exts.fsl.create();
	mcms.facade.settings  = settings;
	mcms.facade.exts = exts;

	settings.set('env','development');
	settings.set('apps',apps);

	// loadup center apps
	settings.use('core').core(mcms,apps).loadUp('boot.js',function(){ mcms.boot(); });

	//setup up some autoload
	// mcms.facade.fsl.add('core.permissions',exts.path.resolve('./permissions'));


module.exports = { exts:exts, settings: settings, core: mcms };

