<!-- src/routes/dashboard/+page.svelte -->
<script lang="ts">
   
    

  </script>
  
  <main>
    <header class="text-center mb-8">
        <h1 class="text-2xl font-bold">Let's Play!</h1>
        <p class="text-md mt-2">Fun games to play and learn</p>
        <p class="mt-2">Create an account to track your progress and share your progress with your friends</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Spelling Game Card -->
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            <!-- Image Section -->
            <div class="md:flex-shrink-0">
                <img src="/images/games/spellingquest.webp" alt="Spelling Game" class="h-48 w-full object-cover md:h-full md:w-48">
            </div>
            <!-- Text Section -->
            <div class="p-4">
                <h3 class="text-lg font-semibold text-blue-600 mb-2">Spelling Game</h3>
                <p class="text-gray-700">Calling out all the spelling bees</p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Join Now</button>
            </div>
        </div>

        <!-- Phonetic Pairs Game Card (Example) -->
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            <!-- Image Section -->
            <div class="md:flex-shrink-0">
                <img src="/images/games/phoneticpairs.webp" alt="Phonetic Pairs Game" class="h-48 w-full object-cover md:h-full md:w-48">
            </div>
            <!-- Text Section -->
            <div class="p-4">
                <h3 class="text-lg font-semibold text-green-600 mb-2">Phonetic Pairs Game</h3>
                <p class="text-gray-700">Match sounds and improve your phonetics</p>
                <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">Start Playing</button>
            </div>
        </div>
    </div>
  </main>
  