import { json } from '@sveltejs/kit';
import mysql from 'mysql2/promise';

// MySQL connection setup (make sure to adjust credentials)
const db = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'nis',
    password: 'orin',
    database: 'postit',
    port: 3306,
});

// Handle POST request (Login)
export async function POST({ request }: { request: Request }) {
    const { username, password } = await request.json();

    try {
        // Check if user exists and password matches
        const [rows] = await db.execute(
            'SELECT * FROM login WHERE username = ? AND password = ?',
            [username, password]
        );

        if (rows.length > 0) {
            // User found
            return json({ success: true, message: 'Login successful!' });
        } else {
            return json({ success: false, message: 'Invalid username or password.' }, { status: 401 });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return json({ success: false, message: 'An error occurred. Please try again later.' }, { status: 500 });
    }
}

// Handle GET request (Check if user is authenticated)
export async function GET() {
    // You would typically check a session or token here
    return json({ authenticated: false });
}

export async function DELETE() {
    try {
        // Handle logout logic (e.g., clearing session, JWT, etc.)
        // For now, we'll simulate logging out by sending a response.
        return json({ success: true, message: 'Logout successful!' });
    } catch (error) {
        console.error('Logout failed:', error);
        return json({ success: false, message: 'An error occurred while logging out.' }, { status: 500 });
    }
}
