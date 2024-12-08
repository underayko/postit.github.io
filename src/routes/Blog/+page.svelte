<script lang="ts">
    import Header from '../Header/+page.svelte';
    import { base } from '$app/paths';
  
    let album = [
      {
        image: "isf.jpg",
        title: "Cherished Fun with Faith, Iona, and Stephany",
        caption: "A wonderful day filled with laughter and friendship!",
      },
      {
        image: "jcj.jpg",
        title: "Memorable Moments with High School Friends",
        caption: "Reliving those golden days with my amazing classmates.",
      },
      {
        image: "ae.jpg",
        title: "Missing These Amazing People So Much!",
        caption: "Can't wait to meet and create new memories with them again.",
      },
      {
        text: "My Dearest Circle of Friends",
        message: "They are my source of joy, comfort, and inspiration. I love each one of them dearly and cherish every moment we share. Here's to more memories together!",
      },
    ];
  
    let petAlbum = [
      "mike.jpg",
      "mike1.jpg",
      "orin.jpg",
      "orin1.jpeg",
      "withorin.jpg",
      "withorin1.jpg",
    ];
  
    // Dark mode state
    let darkMode = true;  // Default to dark mode
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
  
    /* Custom Scrollbar */
    .scrollable {
      overflow-x: auto;
      scroll-behavior: smooth;
    }
  
    .scrollable::-webkit-scrollbar {
      height: 8px; /* Vertical scrollbar thickness */
    }
  
    .scrollable::-webkit-scrollbar-thumb {
      background: #c0a4bc; /* Scrollbar thumb color */
      border-radius: 10px;
    }
  
    .scrollable::-webkit-scrollbar-track {
      background: #2E2E2E; /* Track background */
      border-radius: 10px;
    }
  
    .scrollable::-webkit-scrollbar-button {
      background: transparent;
    }
  
    /* Dark mode background */
    .dark-mode {
      background-color: #161614;
      color: white;
    }
  
    /* Light mode background */
    .light-mode {
      background-color: white;
      color: black;
    }
  </style>
  
  <Header />
  
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  </head>
  
  <div class={darkMode ? 'bg-[#161614] text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
    <div class="flex justify-center w-full">
      <!-- Main Section -->
      <div class="w-3/4 relative">
        <!-- Cover Photo -->
        <div class="relative w-full h-[500px] bg-gray-300 mb-8 mt-13 top-[55px] bg-transparent">
          <img src="{base}/hdcov.jpg" alt="Cover photo of beautiful flowers" class="w-full h-full absolute top-[50px] left-0 object-cover" aria-hidden="true" />
          <!-- Large Text Banner -->
  <div class="absolute top-[595px] left-1/2 transform -translate-x-1/2 text-center w-full">
    <h1 class={`text-4xl tracking-wider drop-shadow-md ${darkMode ? 'text-white' : 'text-black'}`} style="font-family: 'Raleway', serif;">
      "The comfort of seeing flowers."
    </h1>
  </div>
  
        </div>
  
        <!-- Divider Line -->
        <div class={`border-t-2 mt-[230px] ${darkMode ? 'border-white' : 'border-black'}`}></div>
  
        <!-- Introduction -->
        <section class="p-6 text-center mb-10 mt-[80px]">
          <div class="flex items-center justify-center mb-4">
            <h2 class="text-2xl font-bold mr-4" style="font-family: 'Raleway', serif;">
              Hi, I'm Eunice
            </h2>
            <!-- Dark Mode Button with Switch Icon -->
            <button 
              class="py-2 px-4 flex items-center justify-center bg-gray-400 text-black rounded-full"
              on:click={() => darkMode = !darkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} 
            >
              <i class={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-2xl`}></i>
            </button>
          </div>
          <p class={darkMode ? 'text-gray-300 text-lg' : 'text-black text-lg'}>
            Flowers are my escape. They bring me peace, relax my mind, and help me find beauty in simplicity. 
            I’d love to share my journey and passion with you.
          </p>
        </section>
        
  
        <div class={`border-t-2 mt-[75px] ${darkMode ? 'border-white' : 'border-black'}`}></div>
  
        <!-- Friends Section -->
        <section class="p-6">
          <h2 class={darkMode ? 'text-xl font-bold text-gray-200 mb-6 text-center mt-[30px]' : 'text-xl font-bold text-black mb-6 text-center mt-[30px]'} style="font-family: 'Raleway', serif;">
            Friends I Love Hanging Out With
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {#each album as item, index}
              {#if item.image}
                <!-- Image Items -->
                <div class="bg-transparent p-4 text-center">
                  <img
                    src={item.image}
                    alt={`Image of ${item.title}`} 
                    class="w-full h-56 object-cover mb-4"
                    style="aspect-ratio: 4/3; object-position: center;"
                  />
                  <h3 class={darkMode ? 'text-lg font-semibold text-gray-200 mb-2' : 'text-lg font-semibold text-black mb-2'} style="font-family: 'Raleway', serif;">
                    {item.title}
                  </h3>
                  <p class={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-800'}>{item.caption}</p>
                </div>
              {:else}
                <!-- Text Item (Placed Beside the 'ae' Image) -->
                {#if index === 3}
                  <div class="bg-transparent p-4 flex items-center justify-end">
                    <div class="text-right w-full max-w-md">
                      <h3 class={darkMode ? 'text-lg font-semibold text-gray-200 mb-2' : 'text-lg font-semibold text-black mb-2'} style="font-family: 'Raleway', serif;">
                        {item.text}
                      </h3>
                      <p class={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-800'}>{item.message}</p>
                    </div>
                  </div>
                {/if}
              {/if}
            {/each}
          </div>
        </section>
  
        <!-- Divider Line Below Friends Section -->
        <div class={`border-t-2 mt-[75px] ${darkMode ? 'border-white' : 'border-black'}`}></div>
  
        <!-- Who Loves Beach Section -->
        <section class="p-6">
          <h2 class={darkMode ? 'text-xl font-bold text-gray-200 mb-9 text-center mt-[30px]' : 'text-xl font-bold text-black mb-9 text-center mt-[30px]'} style="font-family: 'Raleway', serif;">
            Who Loves Beach?
          </h2>
  
          <!-- Beach Image and Caption -->
          <div class="flex items-center justify-end mb-6">
            <img src="meatthebeach.jpg" alt="Beach" class="w-1/2 h-auto object-cover mr-6" />
            <div class="text-right max-w-md">
              <h3 class={darkMode ? 'text-lg font-semibold text-gray-200 mb-2' : 'text-lg font-semibold text-black mb-2'} style="font-family: 'Raleway', serif;">
                My Obsession with Beaches
              </h3>
              <p class={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-800'}>
                The sound of the waves, the warm sun on my skin, and the feeling of the sand beneath my feet. 
                There's nothing more peaceful than being at the beach.
              </p>
            </div>
          </div>
  
          <!-- White Beach Image and Caption -->
          <div class="flex items-center justify-start">
            <div class="text-left max-w-md mr-6">
              <h3 class={darkMode ? 'text-lg font-semibold text-gray-200 mb-2' : 'text-lg font-semibold text-black mb-2'} style="font-family: 'Raleway', serif;">
                Watching the Waves
              </h3>
              <p class={darkMode ? 'text-sm text-gray-400' : 'text-sm text-gray-800'}>
                I could watch the waves roll in for hours, it's so calming. The endless horizon reminds me of the beauty and peace the ocean offers.
              </p>
            </div>
            <img src="white.jpg" alt="White Beach" class="w-1/2 h-auto object-cover" />
          </div>
        </section>
  
        <!-- Divider Line Below Friends Section -->
        <div class={`border-t-2 mt-[75px] ${darkMode ? 'border-white' : 'border-black'}`}></div>
  
        <!-- My Beloved Pets Section -->
        <section class="p-6">
          <h2 class={darkMode ? 'text-xl font-bold text-gray-200 mb-6 text-center mt-[30px]' : 'text-xl font-bold text-black mb-6 text-center mt-[30px]'} style="font-family: 'Raleway', serif;">
            My Beloved Pets: Orin and Mike
          </h2>
          <p class={darkMode ? 'text-center text-lg text-gray-300 mb-6' : 'text-center text-lg text-black mb-6'}>
            I miss them dearly, and the bond we shared will forever hold a special place in my heart. Even though I now have many pets, their memories continue to bring warmth to my soul. I often find myself telling others about the joy and love they brought into my life. They remain a cherished part of who I am, never fading, always alive in my heart.
          </p>
          
          <div class="scrollable flex gap-6 mb-10">
            {#each petAlbum as petImage}
              <div class="flex-shrink-0 w-48 h-48 bg-gray-700 rounded-md">
                <img
                  src={petImage}
                  alt={`Image of my pet ${petImage.split('.')[0]}`} 
                  class="w-full h-full object-cover rounded-md"
                />
              </div>
            {/each}
          </div>
        </section>
  
      </div>
    </div>
  </div>
  
  <!-- Footer Section -->
  <footer class="bg-[#c0a4bc] text-black py-8">
    <div class="flex justify-center">
      <div class="w-3/4 text-center">
        <p class="text-lg font-semibold mb-4" style="font-family: 'Raleway', serif;">
          Thank you for visiting my blog!
        </p>
        <p class="text-black mb-4">
          Stay connected and follow my journey through life, flowers, and memories.
        </p>
        <div class="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com/" target="_blank" class="text-blue-900">
            <i class="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://github.com/underayko" target="_blank" class="text-black">
            GitHub
          </a>
          <a href="https://www.instagram.com/its.nisdre/" target="_blank" class="text-violet-900">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
        <p class="text-sm text-gray-500">
          &copy; 2024 Post It. All Rights Reserved.
        </p>
        
      </div>
    </div>
  </footer>
  