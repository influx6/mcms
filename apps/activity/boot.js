module.exports = function(sandbox){

	sandbox.registerApp(require('./activity')(sandbox.exts),{
		name: 'activity',
		desc: 'provides a simple activity authorization service',
	});

};
