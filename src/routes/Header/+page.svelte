<!-- <script lang="ts">
  import { goto } from '$app/navigation';
</script>

<nav class="bg-[#161614] p-4 shadow-md">
  <div class="flex items-center justify-between">
  
    <div class="flex items-center">
      <img src="/postit.png" alt="Post-It" class="w-20 h-13 ml-2" />
    </div>

   
    <div class="flex items-center space-x-6">

      <button 
        on:click={() => goto('/Blog')} 
        aria-label="Go to Home"
        class="text-white hover:text-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </button>

  
      <div class="relative group">
        <button 
          class="bg-gray-500 rounded-full w-10 h-10"
          aria-label="Profile menu"
        >
          <img src="/pfp.jpg" alt="Profile" class="w-full h-full object-cover rounded-full" />
        </button>
        <div class="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
   
          <button 
            class="block w-full text-left p-2 hover:bg-gray-700"
            aria-label="Log out"
            on:click={() => goto('/login')}> 
            Log Out
          </button>

          <button 
            class="block w-full text-left p-2 hover:bg-gray-700"
            aria-label="Go to Newsfeed"
            on:click={() => goto('/newsfeed')}>
            Newsfeed
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="border-[0.5px] border-[#ececec] mt-2"></div>
</nav> -->
<script lang="ts">
  import { goto } from '$app/navigation';

  const logout = async () => {
    try {
      const response = await fetch('/login', { method: 'DELETE' });
      const result = await response.json();

      if (result.success) {
        goto('/'); // Redirect to the main landing page (login form)
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  let sidebarOpen = false;

  const toggleSidebar = () => {
    sidebarOpen = !sidebarOpen;
  };

  const closeSidebar = () => {
    sidebarOpen = false;
  };

  // Close the sidebar when the page is scrolled
  const handleScroll = () => {
    if (sidebarOpen) {
      closeSidebar();
    }
  };

  // Adding the event listener to handle scroll
  import { onMount } from 'svelte';
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when the component is destroyed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<!-- Navbar Section with Gradient Background (Fixed at the Top) -->
<nav class="bg-[#c0a4bc] p-3 flex items-center justify-between px-6 space-x-4 fixed top-0 left-0 w-full z-20 shadow-md">
  <button
    class="text-gray-800 font-bold"
    on:click={toggleSidebar}
  >
    <!-- Replace the hamburger icon with a friends icon (SVG) -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="7" r="4" />
      <circle cx="15" cy="7" r="4" />
      <path d="M12 14c-4 0-6 3-6 3v4h12v-4s-2-3-6-3z" />
    </svg>
  </button>
  <!-- Middle: Newsfeed Button -->
  <div class="flex-1 flex items-center justify-center">
    <button
      class="text-gray-800 font-bold" style="font-family: 'Raleway', serif;"
      on:click={() => goto('/newsfeed')}
    >
      Newsfeed
    </button>
  </div>

  <!-- Middle: "Cup of Nis" -->
  <div class="text-center text-3xl font-bold text-gray-800 flex-1" style="font-family: 'Raleway', serif;">
    Cup of Nis
  </div>

  <!-- Right: Blog Button -->
  <div class="flex-1 flex items-center justify-center">
    <button 
      on:click={() => goto('/Blog')} 
      aria-label="Go to Blog"
      class="text-gray-800 font-bold" style="font-family: 'Raleway', serif;"
    >
      Blog
    </button>
  </div>

  <!-- Right: Profile Dropdown -->
  <div class="relative group">
    <button 
      class="bg-gray-500 rounded-full w-10 h-10"
      aria-label="Profile menu">
      <img src="/pfp.jpg" alt="Profile" class="w-full h-full object-cover rounded-full" />
    </button>
    <div class="absolute right-0 mt-3 w-40 bg-[#22211f] text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
      <button 
        class="block w-full text-left p-2 hover:bg-gray-700"
        on:click={logout}>
        Log Out
      </button>
    </div>
  </div>
</nav>

<!-- Sidebar Section (Hidden Initially) -->
<aside class={`fixed top-16 left-0 w-1/4 bg-[#22211f] p-6 space-y-6 rounded-lg shadow-lg max-h-screen overflow-y-auto transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-10`}>
  <!-- Close Button for Sidebar -->
  <button 
    class="absolute top-4 right-4 text-white text-2xl"
    on:click={closeSidebar}>
    ×
  </button>

  <h2 class="font-bold text-2xl text-gray-100">Authors you are friends with:</h2>
  <div class="space-y-4">
    <!-- Friend List Section -->
    <!-- Friend 1 -->
    <div class="flex items-center space-x-3">
      <img src="/charlotte.jpg" alt="Friend 1" class="w-12 h-12 rounded-full object-cover">
      <div>
        <span class="text-lg text-gray-100">Charlotte Buslon</span>
        <div class="text-sm text-gray-400">Friends since: 2024-03-10</div>
      </div>
    </div>
    <!-- Friend 2 -->
    <div class="flex items-center space-x-3">
      <img src="/jose.jpg" alt="Friend 2" class="w-12 h-12 rounded-full object-cover">
      <div>
        <span class="text-lg text-gray-100">Jose Maniago</span>
        <div class="text-sm text-gray-400">Joined on: 2024-02-22</div>
      </div>
    </div>
  </div>
</aside>
