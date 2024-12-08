<script lang="ts">
    import Header from '../Header/+page.svelte'; // Import Header component
    import { base } from "$app/paths"; 
  
    let isAdded = false; // Track whether the author is added or not
  
    const toggleFollow = () => {
      isAdded = !isAdded; // Toggle between add and cancel
    };
  </script>
  
  <Header /> <!-- Render the Header component -->
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
    span, div, h3, p {
      color: black;
    }
  
    h3 {
      font-weight: 500 !important;
    }
  </style>
  
  <!-- Main Newsfeed Content -->
  <main class="flex justify-between w-full p-6 space-y-6">
    <!-- Left Side: Main Newsfeed -->
    <div class="w-3/4 space-y-6">
      <h1 class="text-3xl font-bold text-center">Newsfeed</h1>
  
      <!-- Friend 1 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
          <img src="{base}/charlotte.jpg" alt="Charlotte Buslon" class="w-16 h-16 rounded-full object-cover" />
          </a>
          <div>
            <span class="text-lg font-semibold text-gray-100">Charlotte Buslon</span>
            <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-100 mb-2">A Day at the Beach</h3>
        <p class="text-gray-400 mb-4">Spent a relaxing day at the beach with friends. The sunset was amazing!</p>
  
        <!-- Fixed container for the image -->
        <div class="relative w-full overflow-hidden rounded-lg mb-4">
          <img src="https://jacoblund.com/cdn/shop/products/0faeef0784e3cbbea607e1d501268b90_70abf30a-2f14-40cd-bd8b-e61116077b8b_grande.jpg?v=1608485082" alt="Beach" class="w-full h-auto object-cover" />
        </div>
  
        <p class="text-gray-500 italic">"The sea, once it casts its spell, holds one in its net of wonder forever." - Jacques Cousteau</p>
      </div>
  
      <!-- Friend 2 -->
  <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/jose.jpg" alt="Jose Maniago" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Jose Maniago</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">My New Project</h3>
      <p class="text-gray-400 mb-4">Here's a sneak peek of my new project. Can't wait to show you all more soon!</p>
      <!-- Image with full width, maintaining original aspect ratio -->
      <div class="relative w-full mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://historyofsoccer.info/wp-content/uploads/2021/12/sepak-takraw-ball-1024x682.webp" alt="Project" class="w-full object-cover rounded-lg" style="height: auto; aspect-ratio: auto;">
          </a>    
  </div>
      <p class="text-gray-500 italic">"Innovation distinguishes between a leader and a follower." - Steve Jobs</p>
      </div>
      
      
      <!-- Friend 3 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <a href="/Blog" class="w-16 h-16">
      <img src="{base}/ken.jpg" alt="Ken Sayl Peralta" class="w-full h-full rounded-full object-cover" />
      </a>
      <div>
      <span class="text-lg font-semibold text-gray-100">Ken Sayl Peralta</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Exploring the City</h3>
      <p class="text-gray-400 mb-4">Took a walk around the city today. It was full of new discoveries! Check out these amazing sights.</p>
      <!-- Image with full width, maintaining original aspect ratio -->
      <div class="relative w-full mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://nextcity.org/images/daily/_resized/7762611728_c19653d8fd_k.jpg" alt="City Exploration" class="w-full object-cover rounded-lg" style="height: auto; aspect-ratio: auto;">
      </a>   
  </div>
      <p class="text-gray-500 italic">"The world is a book, and those who do not travel read only one page." - Saint Augustine</p>
      </div>
      
      <!-- Friend 4 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/ace.jpg" alt="Ace Oledan" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Ace Oledan</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Weekend Adventures</h3>
      <p class="text-gray-400 mb-4">Spent the weekend exploring new hiking trails. Nature always brings peace.</p>
      <!-- Image with full width, maintaining original aspect ratio -->
      <div class="relative w-full mb-4">
      <img src="https://weekendgetaway.co.uk/wp-content/uploads/2021/02/E-biking-forest-e1616604542997.jpg" alt="Hiking Trails" class="w-full object-cover rounded-lg" style="height: auto; aspect-ratio: auto;">
      </div>
      <p class="text-gray-500 italic">"In every walk with nature, one receives far more than he seeks." - John Muir</p>
      </div>
      
      <!-- Friend 5 -->
      <div class="bg-transparent] p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/raymund.jpg" alt="Raymund Balugo" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Raymund Balugo</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">New Photography Gear</h3>
      <p class="text-gray-400 mb-4">Got my hands on a new camera! Can't wait to capture more amazing moments.</p>
      <!-- Image with full width, maintaining original aspect ratio -->
      <div class="relative w-full mb-4">
      <img src="https://photopxl.com/pxl-content/uploads/2020/05/image2_Ready_for_Web23.jpg" alt="Photography Gear" class="w-full object-cover rounded-lg" style="height: auto; aspect-ratio: auto;">
      </div>
      <p class="text-gray-500 italic">"Photography is the story I fail to put into words." - Destin Sparks</p>
      </div>
      
      <!-- Friend 6 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/gracielle.jpg" alt="Gracielle Benavidez" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Gracielle Benavidez</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">A Visit to the Museum</h3>
      <p class="text-gray-400 mb-4">Visited the museum today. It was fascinating to learn more about history and art!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg" alt="Museum" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Art is the only way to run away without leaving home." - Twyla Tharp</p>
      </div>
      
      <!-- Friend 7 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/iona.jpg" alt="Xanthei Iona Pilares" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Xanthei Iona Pilares</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Weekend Getaway</h3>
      <p class="text-gray-400 mb-4">Had a wonderful weekend getaway in the mountains. The view was breathtaking!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://www.fluxmagazine.com/wp-content/uploads/2021/12/Getaway-Web-1.jpg" alt="Weekend Getaway" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"The best view comes after the hardest climb." - Unknown</p>
      </div>
      
      <!-- Friend 8 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/tep.jpg" alt="Stephany Galo" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Stephany Galo</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Celebrating a Milestone</h3>
      <p class="text-gray-400 mb-4">Today marks a huge milestone for me. So grateful for all the support!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://catercurator.com/blog/wp-content/uploads/pexels-cottonbro-3171815-1024x684.jpg" alt="Milestone Celebration" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Success is the sum of small efforts, repeated day in and day out." - Robert Collier</p>
      </div>
      
      <!-- Friend 9 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/faith.jpg" alt="Faith Manada" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Faith Manada</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Music Festival Magic</h3>
      <p class="text-gray-400 mb-4">Just experienced an incredible music festival! The energy and music were absolutely electrifying!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://s1.ticketm.net/dam/a/a31/c0353cad-2ba4-476a-9fcb-b9ed6eb41a31_1432071_RETINA_PORTRAIT_3_2.jpg" alt="Music Festival" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Music is the universal language of mankind." - Henry Wadsworth Longfellow</p>
      </div>
      
      <!-- Friend 10 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/yzer.jpg" alt="Yzer De Omania" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Yzer De Omania</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Coding Challenge Completed</h3>
      <p class="text-gray-400 mb-4">Just finished an intense coding challenge. Learning and growing every single day!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://glider.ai/wp-content/uploads/glider-ai-whats-a-hackathon-and-why-theyre-important.webp" alt="Coding Challenge" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"The only way to do great work is to love what you do." - Steve Jobs</p>
      </div>
      
      
      <!-- Friend 11 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg mb-6">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/aaron.jpg" alt="Aaron Clark Perez" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Aaron Clark Perez</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Marathon Training Progress</h3>
      <p class="text-gray-400 mb-4">Another week of marathon training complete! Pushing my limits and feeling stronger every day.</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://media.gq-magazine.co.uk/photos/6422b386a74758f5d02d2b44/1:1/w_1080,h_1080,c_limit/How-to-train-for-a-marathon-hp-a.jpg" alt="Marathon Training" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"The miracle isn't that I finished. The miracle is that I had the courage to start." - John Bingham</p>
      </div>
      
      <!-- Friend 12 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg mb-6">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/mama.jpg" alt="Wilma Corpuz" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Wilma Corpuz</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Family Baking Day</h3>
      <p class="text-gray-400 mb-4">Spent the day baking traditional family recipes with my kids. Love these precious moments!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://cdn.shopify.com/s/files/1/0401/5462/8262/articles/Untitled_design.jpg?v=1608397171" alt="Family Baking" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Family is not an important thing. It's everything." - Michael J. Fox</p>
      </div>
      
      <!-- Friend 13 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg mb-6">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/papa.jpg" alt="Noel Dean Corpuz" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Noel Dean Corpuz</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Gardening Weekend</h3>
      <p class="text-gray-400 mb-4">Finally finished setting up my vegetable garden. Can't wait to harvest fresh, organic produce!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://gardenclub.org/sites/default/files/styles/dual_images/public/2021-01/boys-gardening-adobe.jpg?itok=7rkUzhTc" alt="Gardening" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"To plant a garden is to believe in tomorrow." - Audrey Hepburn</p>
      </div>
      
      <!-- Friend 14 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg mb-6">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/marlo.jpg" alt="Marlo Ditalo" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Marlo Ditalo</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Road Trip Adventure</h3>
      <p class="text-gray-400 mb-4">Epic road trip with friends this weekend. Discovered some amazing hidden spots!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://www.tripit.com/sites/g/files/sqenrx236/files/migrations/files-source/2/2020/05/road-trip-during-pandemic-1-scaled.jpg" alt="Road Trip" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Life is a highway, and the journey is the destination." - Unknown</p>
      </div>
      
      <!-- Friend 15 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg mb-6">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/edmar.jpg" alt="Edmar Mendoza" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Edmar Mendoza</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Art Exhibition Visit</h3>
      <p class="text-gray-400 mb-4">Attended an inspiring local art exhibition today. So much talent in our community!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2022/10/A8291-What-is-the-purpose-and-importance-of-an-art-exhibition-Image-2.jpg" alt="Art Exhibition" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Art enables us to find ourselves and lose ourselves at the same time." - Thomas Merton</p>
      </div>
      
      <!-- Friend 16 -->
      <div class="bg-transparent p-6 rounded-lg shadow-lg mb-6">
      <div class="flex items-center space-x-4 mb-4">
      <img src="{base}/andrew.jpg" alt="Perez Andrew" class="w-16 h-16 rounded-full object-cover" />
      <div>
      <span class="text-lg font-semibold text-gray-100">Perez Andrew</span>
      <div class="text-sm text-gray-400">Posted on: 2024-12-04</div>
      </div>
      </div>
      <h3 class="text-xl font-bold text-gray-100 mb-2">Tech Conference Insights</h3>
      <p class="text-gray-400 mb-4">Attending an amazing tech conference. So many groundbreaking innovations!</p>
      
      <!-- Fixed container for the image -->
      <div class="relative w-full overflow-hidden rounded-lg mb-4">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*7yYC87gVjpLmskPlcdeW8g.jpeg" alt="Tech Conference" class="w-full h-auto object-cover" />
      </div>
      
      <p class="text-gray-500 italic">"Innovation distinguishes between a leader and a follower." - Steve Jobs</p>
      </div>
    </div>
  
    <!-- Right Side: Sidebar Content -->
    <div class="w-1/4 space-y-6 ml border-l-2">
      <h2 class="text-2xl font-bold text-center mt-[60px]">Top 5 Authors</h2>
  
      <!-- Top Author 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Alice_Johnson_-_2019_State_of_the_Union_Guests_%2840035011983%29_%28cropped%29_%281%29.jpg" alt="Top Author" class="w-12 h-12 rounded-full object-cover" />
            </a>
          <div>
            <span class="text-lg font-semibold text-gray-100">Alice Johnson</span>
            <div class="text-sm text-gray-400">Top Author</div>
          </div>
        </div>
        <!-- Toggle button for Add/Cancel -->
    <button 
    class={`w-full py-2 rounded-lg ${isAdded ? 'bg-red-500' : 'bg-blue-500'} text-white`}
    on:click={toggleFollow}
  >
    {isAdded ? 'Cancel' : 'Add'}
  </button>
      </div>
  
      <!-- Top Author 2 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.jtcis.com/wp-content/uploads/2021/02/team-1.jpg" alt="Top Author" class="w-12 h-12 rounded-full object-cover" />
      </a>
          <div>
            <span class="text-lg font-semibold text-gray-100">John Doe</span>
            <div class="text-sm text-gray-400">Top Author</div>
          </div>
        </div>
        <button class="w-full py-2 bg-blue-500 text-white rounded-lg">Follow</button>
      </div>
  
      <!-- Top Author 3 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoivMMo9gouQXOLhba5w0KrT7SDJOet-5Gng&s" alt="Top Author" class="w-12 h-12 rounded-full object-cover" />
      </a>
          <div>
            <span class="text-lg font-semibold text-gray-100">Sophia Miller</span>
            <div class="text-sm text-gray-400">Top Author</div>
          </div>
        </div>
        <button class="w-full py-2 bg-blue-500 text-white rounded-lg">Follow</button>
      </div>
  
      <!-- Top Author 4 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://images.squarespace-cdn.com/content/v1/57accfc66a49636df23a11d6/9bc7adc3-192c-46eb-a3e5-25810b727e78/E8F71D97-F42F-4482-B686-1D5DCEB3F9D8.jpeg" alt="Top Author" class="w-12 h-12 rounded-full object-cover" />
      </a>
          <div>
            <span class="text-lg font-semibold text-gray-100">Emily Davis</span>
            <div class="text-sm text-gray-400">Top Author</div>
          </div>
        </div>
        <button class="w-full py-2 bg-blue-500 text-white rounded-lg">Follow</button>
      </div>
  
      <!-- Top Author 5 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4 mb-4">
          <a href="https://www.thecreativepenn.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://images.genius.com/d0683a0fb9bda6ff57125d53da26244c.471x471x1.png" alt="Top Author" class="w-12 h-12 rounded-full object-cover" />
      </a>
          <div>
            <span class="text-lg font-semibold text-gray-100">Chris Adams</span>
            <div class="text-sm text-gray-400">Top Author</div>
          </div>
        </div>
        <button class="w-full py-2 bg-blue-500 text-white rounded-lg">Follow</button>
      </div>
  
      <!-- Advertisement 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
        <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
        <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
      </div>
  
      <!-- Advertisement 2 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
        <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
        <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
      </div>
  
      <!-- Advertisement 3 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
        <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
        <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
      </div>
  
      <!-- Advertisement 4 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
        <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
        <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
      </div>
      
      <!-- Advertisement 5 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
        <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
        <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
      </div>
  
      <!-- Advertisement 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
        </div>
    
        <!-- Advertisement 2 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
        </div>
    
        <!-- Advertisement 3 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
        </div>
    
        <!-- Advertisement 4 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
        </div>
        
        <!-- Advertisement 5 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
        </div>
        <!-- Advertisement 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
        </div>
    
        <!-- Advertisement 2 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
        </div>
    
        <!-- Advertisement 3 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
        </div>
    
        <!-- Advertisement 4 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
        </div>
        
        <!-- Advertisement 5 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
        </div>
    
        <!-- Advertisement 1 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
          </div>
      
          <!-- Advertisement 2 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
          </div>
      
          <!-- Advertisement 3 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
          </div>
      
          <!-- Advertisement 4 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
          </div>
          
          <!-- Advertisement 5 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
          </div>
          <!-- Advertisement 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
        </div>
    
        <!-- Advertisement 2 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
        </div>
    
        <!-- Advertisement 3 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
        </div>
    
        <!-- Advertisement 4 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
        </div>
        
        <!-- Advertisement 5 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
        </div>
        <!-- Advertisement 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
        </div>
    
        <!-- Advertisement 2 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
        </div>
    
        <!-- Advertisement 3 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
        </div>
    
        <!-- Advertisement 4 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
        </div>
        
        <!-- Advertisement 5 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
        </div>
    
        <!-- Advertisement 1 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
          </div>
      
          <!-- Advertisement 2 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
          </div>
      
          <!-- Advertisement 3 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
          </div>
      
          <!-- Advertisement 4 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
          </div>
          
          <!-- Advertisement 5 -->
          <div class="bg-transparent p-4 rounded-lg shadow-lg">
            <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/b-g0z-YyaE4jy45AUUTujQ/1000s.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
            <p class="text-gray-500 text-sm">"Upgrade your gadgets today with great discounts!"</p>
          </div>
          <!-- Advertisement 1 -->
      <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://media.allure.com/photos/615259c709502afa1922a390/4:3/w_1919,h_1439,c_limit/best-bob-shampoo-conditioner-sets.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Discover amazing products! Click to explore more."</p>
        </div>
    
        <!-- Advertisement 2 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://jollibee-menu.com/wp-content/uploads/2024/07/Jollibee-Menu.jpg" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Amazing deals just for you! Don’t miss out!"</p>
        </div>
    
        <!-- Advertisement 3 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://i0.wp.com/mycebu.ph/wp-content/uploads/2022/06/Shopee-6.6-7.7-Launch.jpg?fit=1920%2C1080&ssl=1" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Check out the latest fashion trends!"</p>
        </div>
    
        <!-- Advertisement 4 -->
        <div class="bg-transparent p-4 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold text-gray-100 mb-4">Advertisement</h3>
          <img src="https://img.alicdn.com/imgextra/i3/O1CN013unkbj1Ke9XRiZ22v_!!6000000001188-2-tps-1918-1077.png" alt="Advertisement" class="w-full mb-4 rounded-lg" />
          <p class="text-gray-500 text-sm">"Special offer: 50% off on all items. Shop now!"</p>
        </div>
  
    
    </div>
  </main>
  