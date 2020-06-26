require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./logger');


const app = express();

/* Middlewares */
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('./public'));

app.use(express.json());

/* Routers */
require('./routes')(app);

const port = process.env.PORT || 40800;
app.listen(port, () => {
	logger.info('Server running on port %s', port);
});

module.exports = app;
