const urlRoutes = require('./urlRoutes');

module.exports = function (app) {
	/* Put specific routes before the /:id */
	urlRoutes(app);
	

	app.get('/', (req, res) => {
		res.status(200);
		res.json({success: true, message: 'Hey, you reached our API!'});
	});

	app.get('/:id', (req, res) => {
		res.status(200);
		res.json({
			'data': {},
		});
	});

};