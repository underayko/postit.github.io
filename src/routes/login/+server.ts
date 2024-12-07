// import { json } from '@sveltejs/kit';
// import type { RequestEvent } from '@sveltejs/kit';

// export const GET = async ({ cookies }: RequestEvent) => {
//   // Check if the session cookie exists
//   const session = cookies.get('session');

//   if (session === 'authenticated') {
//     return json({ authenticated: true });
//   } else {
//     return json({ authenticated: false });
//   }
// };

// export const POST = async ({ request, cookies }: RequestEvent) => {
//   const data = await request.json();
//   const { username, password } = data;

//   // Define the valid credentials
//   const validUsername = 'admin';
//   const validPassword = '1234';

//   // Validate credentials
//   if (username === validUsername && password === validPassword) {
//     // Set a session cookie if needed
//     cookies.set('session', 'authenticated', { 
//       path: '/',
//       httpOnly: true,
//       secure: import.meta.env.PROD, // Check if in production
//       maxAge: 60 * 60 * 24 // 24 hours
//     });

//     return json({ success: true, message: 'Login successful!' });
//   } else {
//     return json({ success: false, message: 'Invalid credentials. Please try again.' });
//   }
// };
import { json, error } from '@sveltejs/kit';

// Simulating user data, in a real scenario, you'd fetch this from a database
const users = [
  { username: 'user1', password: 'password1' }, // Example user
  { username: 'admin', password: '1234' },
];

let session: { username: string } | null = null; // Simulate session storage

// Handle POST request (Login)
export async function POST({ request }) {
  const { username, password } = await request.json();

  // Simulate user authentication (check credentials)
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    session = { username }; // Set session if authentication is successful
    return json({ success: true, message: 'Login successful!' });
  } else {
    return json({ success: false, message: 'Invalid username or password.' });
  }
}

// Handle GET request (Check if the user is authenticated)
export async function GET() {
  if (session) {
    return json({ authenticated: true, username: session.username });
  }
  return json({ authenticated: false });
}

// Handle DELETE request (Logout)
export async function DELETE() {
  session = null; // Clear the session to log out the user
  return json({ success: true, message: 'Logged out successfully' });
}
