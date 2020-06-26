const urlRoutes = require('./urlRoutes');

module.exports = function (app) {
	/* Put specific routes before the /:id */
	urlRoutes(app);

	app.get('/:id', (req, res) => {
		res.status(200);
		res.json({
			'data': {
				message: req.params.id
			},
		});
	});

};