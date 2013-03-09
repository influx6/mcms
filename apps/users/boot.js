module.exports = function(sandbox){

	sandbox.registerApp(require('./users')(sandbox.exts),{
		name: 'users',
		desc: 'provides a simple user management service',
	});

};