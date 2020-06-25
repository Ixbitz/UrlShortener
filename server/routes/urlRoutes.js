module.exports = function (app) {
	app.get('/api/url', (req, res) => {
		res.status(200);
		res.json({
			'data': {
				'message': ''
			}
		});
	});
};
