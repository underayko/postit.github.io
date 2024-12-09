<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    let username = '';
    let password = '';
    let errorMessage = '';
    let successMessage = '';
    
    // Logout functionality
    const logout = async () => {
      try {
        const response = await fetch('/login', { method: 'DELETE' }); // Assuming /login handles logout
        const result = await response.json();
    
        if (response.ok && result.success) {
          // Show success message for logout
          successMessage = 'You have logged out successfully!';
          setTimeout(() => {
            goto('/'); // Redirect to the login page after logout
          }, 2000);
        } else {
          errorMessage = 'An error occurred during logout.';
        }
      } catch (error) {
        console.error('Logout failed:', error);
        errorMessage = 'An error occurred. Please try again.';
      }
    };
  
    // Handle form submission for login
    const handleSubmit = async (event: Event) => {
      event.preventDefault();
      errorMessage = ''; // Clear previous errors
      successMessage = ''; // Clear any previous success messages
    
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
    
        const result = await response.json();
    
        if (response.ok && result.success) {
          successMessage = result.message || 'Login successful!';
          setTimeout(() => {
            goto('/Blog'); // Redirect to blog page after successful login
          }, 2000);
        } else {
          errorMessage = result.message || 'Invalid credentials.';
        }
      } catch (error) {
        console.error('Login error:', error);
        errorMessage = 'An error occurred. Please try again.';
      }
    };
  
    // Check if the user is already authenticated on mount
    onMount(async () => {
      try {
        const response = await fetch('/login');
        const result = await response.json();
  
        if (result.authenticated) {
          goto('/Blog'); // Redirect if the user is already logged in
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    });
  </script>
  
  <div class="bg-[#161614] text-white min-h-screen flex justify-center items-center">
    <div class="w-full max-w-md bg-[#22211f] p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center text-gray-200 mb-6">Login</h2>
      
      {#if errorMessage}
        <div class="text-red-500 mb-4">{errorMessage}</div>
      {/if}
      {#if successMessage}
        <div class="text-green-500 mb-4">{successMessage}</div>
      {/if}
  
      <form on:submit={handleSubmit}>
        <div class="mb-4">
          <label for="username" class="block text-gray-200">Username</label>
          <input
            type="text"
            id="username"
            bind:value={username}
            class="w-full px-4 py-2 bg-[#161614] border border-[#ececec] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
  
        <div class="mb-6">
          <label for="password" class="block text-gray-200">Password</label>
          <input
            type="password"
            id="password"
            bind:value={password}
            class="w-full px-4 py-2 bg-[#161614] border border-[#ececec] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-[#374254] text-white py-2 rounded-lg hover:bg-[#9fb8c2]"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
  