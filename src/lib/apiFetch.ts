import axios, { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid';
import { logger } from './logger';

export const apiGet = async <T>(url: string): Promise<T> => {
	const reqID = uuid();
	logger.log('apiGet', `request=${reqID} - fetching URL=${url}`);

	let result: T;
	try {
		const axiosResponse = await axios.get<T>(url);
		result = axiosResponse.data;
		logger.log(
			'apiGet',
			`request=${reqID} - received response result=`,
			result
		);
	} catch (ex) {
		logger.error('apiGet', `request=${reqID} - received error=`, ex);
		throw ex;
	}

	return result;
};
