import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api/v1/users/')({
	server: {
		handlers: ({ createHandlers }) =>
			createHandlers({
				GET: {
					middleware: [],
					handler: () => {
						return new Response(`Hello from /api/users!`);
					},
				},
			}),
	},
});
