module.exports = function(sandbox){

	sandbox.registerApp(require('./admins')(sandbox.exts),{
		name: 'admin',
		desc: 'provides a simple administration models,control service',
	});


};
