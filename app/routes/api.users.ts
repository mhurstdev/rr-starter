import type { Route } from './+types/api.users';

type User = {
	username: string;
};

let users: User[] = [
	{ username: 'Jade' },
	{ username: "Pey'j" },
	{ username: 'Secundo' },
];

const db = {
	async add(user: User) {
		users.push(user);
		return user;
	},
	async delete(username: string) {
		users = users.filter((u) => u.username !== username);
	},
	async list() {
		return users;
	},
};

export async function loader() {
	const allUsers = await db.list();
	return Response.json({ data: { users: allUsers } });
}

export async function action({ request }: Route.ActionArgs) {
	switch (request.method) {
		case 'POST': {
			const body = await request.json();
			const user = await db.add({ username: body.username });
			return Response.json({ user }, { status: 201 });
		}
		case 'DELETE': {
			const body = await request.json();
			await db.delete(body.username);
			return Response.json({ success: true });
		}
		default:
			return Response.json(
				{ error: 'Method not allowed' },
				{ status: 405 },
			);
	}
}
