const log = (level: string, ...message: unknown[]): void => {
	console.log(`[${level.toUpperCase()}]`, ...message);
};

export const logger = {
	log: (...message: unknown[]): void => log('log', message),
	error: (...message: unknown[]): void => log('error', message),
	warn: (...message: unknown[]): void => log('warn', message),
	info: (...message: unknown[]): void => log('info', message),
	debug: (...message: unknown[]): void => log('debug', message),
};
