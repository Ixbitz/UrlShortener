const urlRoutes = require('./urlRoutes');

module.exports = function (app) {
	app.get(['/', '/api'], (req, res) => {
		res.status(200);
		res.json({success: true, message: 'Hey, you reached our API!'});
	});

	app.get('/api/routes', (req, res) => {
		res.status(200);
		res.contentType('application/json');

		let routes = [];
		app._router.stack.forEach(function(r){
			if (r.route && r.route.path){
				let method;
				try {
					if (r.route.methods.get)
						method = 'get';
					if (r.route.methods.post)
						method = 'post';
					if (r.route.methods.put)
						method = 'put';
					if (r.route.methods.delete)
						method = 'delete';
				}catch (e) {
					method = 'undefined';
				}
				routes.push({'method': method, 'route': r.route.path});
			}
		});

		res.json(routes);
	});

	urlRoutes(app);
};