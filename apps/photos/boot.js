module.exports = function(sandbox){

	sandbox.registerApp(require('./photos')(sandbox.exts),{
		name: 'photos',
		desc: 'provides a simple photo upload service',
	});


};
