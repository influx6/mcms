module.exports = {
	
	admin:{
		global: {
			request: true,
			requestAll: true,
		},

		photos:{
			request: true,
			destroy: true,
			create: true,
			update: true
		},
		comments:{
			request: true,
			destroy: true,
			create: true,
			update: true
		},
		posts:{
			request: true,
			destroy: true,
			create: true,
			update: true
		},
		activity:{
			request: true,
			destroy: true,
			create: true,
			update: true
		}
	},
	users:{
		photos: {
			request: true,
			destroy: true,
			create: true,
			update: true
		},
		comments:{
			request: true,
			destroy: true,
			create: true,
			update: true
		},
		posts:{
			request: true,
			destroy: true,
			create: true,
			update: true
		},
		activity:{
			request: true
		}
	},

	photos:{
		admin: { request: true },
		users: { request: true },
		post: { request: true },
	},

	comments:{
		admin: { request: true },
		users: { request: true },
		post: { request: true },
	},

	posts:{
		admin: { request: true },
		users: { request: true },
		post: { request: true },
	},

	activity:{
		admin: { request: true },
		users: { request: true },
		post: { request: true },
	}

}