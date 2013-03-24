module.exports = function(_,f,s){


	_.get('/admins',function(req,res,next){
		res.Status(200).Content('text/html').push();
		res.write('welcome admins!');
		res.end();
		next();
	});

	_.get('/admins/:id',function show(req,res,next) {

	});

	_.get('/admins/:id/create',function create(req,res,next) {
	});

	_.get('/admins/:id/update',function update(req,res,next) {
	});

	_.get('/admins/:id/destroy',function destroy(req,res,next) {
	});


};