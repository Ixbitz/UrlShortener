const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, label } = format;


const logger = createLogger({
	level: 'debug',
	format: combine(
		format.splat(),
		label({ label: 'UrlShortener'}),
		timestamp(),
		format.json()
	),
	transports: [
		new transports.File({ filename: 'combined.log' }),
		new transports.File({ filename: 'error.log', level: 'error' }),
	]
});

if (process.env.NODE_ENV !== 'production') {
	const myFormat = printf(({ level, message, label, timestamp }) => {
		return `${timestamp} [${label}] [${level}]: ${message}`;
	});

	logger.add(new transports.Console({
		format: combine(
			format.colorize(),
			timestamp({
				format: 'YYYY-MM-DD HH:mm:ss'
			}),
			myFormat
		),
		
	}));
}

module.exports = logger;