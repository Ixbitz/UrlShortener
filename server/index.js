require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

/* Routers */
const indexRouter = require('./routes/index');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());


require('./routes')(app);

const port = process.env.PORT;

if (process.argv.indexOf('production') >= 0 || process.argv.indexOf('development') >= 0){
	app.listen(port, () => {
		console.log('Server running on port ' + port);
	});
}else{
	let listener = app.listen(0, () => {
		console.log('Server running on port '+ listener.address().port);
	});
}

module.exports = app;
