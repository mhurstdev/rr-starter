import { http, HttpResponse } from 'msw';

export const handlers = [
	http.post('https://api.example.com/button-click', () => {
		return HttpResponse.json({ success: true });
	}),
];
