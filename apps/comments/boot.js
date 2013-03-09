module.exports = function(sandbox){

	sandbox.registerApp(require('./comments')(sandbox.exts),{
		name: 'comments',
		desc: 'provides a simple activity authorization service',
	});
};