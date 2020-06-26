module.exports = function (app) {
	app.post('/url', (req, res) => {
		res.status(200);
		res.json({'ok': 'ok!'});
	});
};
