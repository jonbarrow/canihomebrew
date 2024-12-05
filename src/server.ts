process.title = 'Can I Homebrew?';
process.on('uncaughtException', (error, origin) => {
	console.log(error);
	console.log(origin);
});
process.on('SIGTERM', () => {
	process.exit(0);
});

import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import DetectConsoleMiddleware from '@/middleware/detect-console';

dotenv.config();

const port = process.env.CIHB_PORT ? parseInt(process.env.CIHB_PORT) : 8080;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/../views`);

app.use(morgan('dev')); // TODO - Configure this
app.use(DetectConsoleMiddleware);

app.get('/', (_request: express.Request, response: express.Response): void => {
	response.render('home');
});

app.listen(port, () => {
	console.log(`HTTP server started on port ${port}`);
});