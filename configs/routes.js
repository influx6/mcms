module.exports = function(util){

	var get = {
		'/login': function(req,res){ res.send('So logable'); },
		'/signup': function(req,res){},

		'/admin': function(req,res){},
		'/admin/:id':function(req,res){},
		'/admin/:id/edit':function(req,res){},
		'/admin/:id/update':function(req,res){},
		'/admin/:id/destroy':function(req,res){},

		'/users': function(req,res){},
		'/users/:id':function(req,res){},
		'/users/:id/edit':function(req,res){},
		'/users/:id/update':function(req,res){},
		'/users/:id/destroy':function(req,res){},

		'/photos': function(req,res){},
		'/photos/:id':function(req,res){},
		'/photos/:id/edit':function(req,res){},
		'/photos/:id/update':function(req,res){},
		'/photos/:id/destroy':function(req,res){},

		'/activity': function(req,res){},
		'/activity/:id':function(req,res){},
		'/activity/:id/edit':function(req,res){},
		'/activity/:id/update':function(req,res){},
		'/activity/:id/destroy':function(req,res){},

		'/posts': function(req,res){},
		'/posts/:id':function(req,res){},
		'/posts/:id/edit':function(req,res){},
		'/posts/:id/update':function(req,res){},
		'/posts/:id/destroy':function(req,res){},

		'/comments': function(req,res){},
		'/comments/:id':function(req,res){},
		'/comments/:id/edit':function(req,res){},
		'/comments/:id/update':function(req,res){},
		'/comments/:id/destroy':function(req,res){},

	}, post = {

		'/login': function(req,res){},
		'/signup': function(req,res){},

		'/admin/:id/edit':function(req,res){},
		'/admin/:id/update':function(req,res){},

		'/users/:id/edit':function(req,res){},
		'/users/:id/update':function(req,res){},

		'/photos/:id/edit':function(req,res){},
		'/photos/:id/update':function(req,res){},

		'/posts/:id/edit':function(req,res){},
		'/posts/:id/update':function(req,res){},

		'/comments/:id/edit':function(req,res){},
		'/comments/:id/update':function(req,res){},

		'/activity/:id/edit':function(req,res){},
		'/activity/:id/update':function(req,res){},
	};


	return {
		attach: function(app){
			//attach get routes
			util.eachAsync(get,function(e,i,o,c){
				app.get(i,e);
				c(false);
			});
			//attach post routes
			util.eachAsync(post,function(e,i,o,c){
				app.post(i,e);
				c(false);
			});
		}
	}

};