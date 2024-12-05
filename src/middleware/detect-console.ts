import express from 'express';

export default function DetectConsoleMiddleware(_request: express.Request, _response: express.Response, next: express.NextFunction): void {
	// TODO - Attempt to detect game console via user agent to skip form input
	return next();
}