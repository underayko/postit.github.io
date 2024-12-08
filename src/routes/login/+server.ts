import { json } from '@sveltejs/kit';

// Simulated user database
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

// Simulated session storage
let session: { username: string } | null = null;

// Handle POST request (Login)
export async function POST({ request }: { request: Request }) {
    const { username, password } = await request.json();

    // Authenticate user
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        session = { username }; // Set session
        return json({ success: true, message: 'Login successful!' });
    } else {
        return json({ success: false, message: 'Invalid username or password.' }, { status: 401 });
    }
}

// Handle GET request (Check if user is authenticated)
export async function GET() {
    if (session) {
        return json({ authenticated: true, username: session.username });
    }
    return json({ authenticated: false });
}

// Handle DELETE request (Logout)
export async function DELETE() {
    session = null; // Clear session
    return json({ success: true, message: 'Logged out successfully.' });
}
