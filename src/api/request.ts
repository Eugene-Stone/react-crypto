// const BASE_URL = 'http://localhost:3001';

const BASE_URL = 'https://react-crypto.eugenestone-work.workers.dev'.replace(/\/+$/, '');

interface RequestOptions extends RequestInit {
	method?: string;
	body?: string;
}

export async function request<T>(endpoint = '/', options: RequestOptions = {}): Promise<T> {
	const url = `${BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

	const headers: HeadersInit = options.body
		? {
				'Content-Type': 'application/json',
			}
		: {};

	const response = await fetch(url, {
		headers,
		...options,
	});

	if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

	return response.json();
}
