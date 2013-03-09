module.exports = function(sandbox){

	sandbox.registerApp(require('./model')(sandbox.exts),{
		name: 'admin',
		desc: 'provides a simple administration models,control service',
	});


};
