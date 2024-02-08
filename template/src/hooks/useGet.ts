import { apiGet } from '../lib/apiFetch';
import React, { useEffect, useState } from 'react';

export const useGet = <T>(url: string): [T | null, string | null, boolean] => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		apiGet<T>(url)
			.then((res) => {
				setData(res);
			})
			.catch((ex) => {
				setError(ex.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	return [data, error, loading];
};
