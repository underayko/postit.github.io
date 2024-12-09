import { json } from '@sveltejs/kit';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
};

// Handle POST request (Login)
export async function POST({ request }: { request: Request }) {
    const { username, password } = await request.json();

    try {
        // Establish a database connection
        const connection = await mysql.createConnection(dbConfig);

        // Check if user exists and password matches
        const [rows] = await connection.execute(
            'SELECT * FROM login WHERE username = ? AND password = ?',
            [username, password]
        );

        // Close the connection
        await connection.end();

        if ((rows as any[]).length > 0) {
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
        return json({ success: true, message: 'Logout successful!' });
    } catch (error) {
        console.error('Logout failed:', error);
        return json({ success: false, message: 'An error occurred while logging out.' }, { status: 500 });
    }
}
