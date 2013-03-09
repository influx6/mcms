module.exports = function(sandbox){

	sandbox.registerApp(require('./posts')(sandbox.exts),{
		name: 'posts',
		desc: 'provides a simple blogging service',
	});

};