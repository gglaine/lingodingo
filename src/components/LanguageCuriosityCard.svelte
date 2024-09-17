<script lang="ts">
  import { languageCuriosities } from '$lib/language_curiosities';
  import { onMount } from 'svelte';

  let curiosities = [
    { country: '', flag: '', word: { word: '', meaning: '' } },
    { country: '', flag: '', word: { word: '', meaning: '' } },
    { country: '', flag: '', word: { word: '', meaning: '' } }
  ];

  // Define the flags for the specific countries/slang regions
  const countryFlags = {
    "American Slang": '🇺🇸',
    "Black American Vernacular": '🇺🇸', // Same flag for both American variants
    "Jamaican Patois": '🇯🇲',
    "Welsh": '🏴', // Flag for Wales
    "Indian": '🇮🇳',
    "Scottish": '🏴', // Flag of Scotland
    "South-African Slang": '🇿🇦'
  };

  function getRandomCuriosity() {
    const randomCountryIndex = Math.floor(Math.random() * languageCuriosities.length);
    const randomCountry = languageCuriosities[randomCountryIndex];
    const randomWordIndex = Math.floor(Math.random() * randomCountry.data.length);
    const randomWord = randomCountry.data[randomWordIndex];

    // Get the appropriate flag
    const flag = countryFlags[randomCountry.country] || '🌍'; // Default globe emoji if no flag is found
    return { country: randomCountry.country, flag, word: randomWord };
  }

  onMount(() => {
    curiosities = [getRandomCuriosity(), getRandomCuriosity(), getRandomCuriosity()];
  });
</script>

<div class="p-6 mt-12 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <h2 class="text-center text-3xl font-bold mb-8 text-blue-600">English Spoken Here</h2>

  <!-- Responsive card layout -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each curiosities as curiosity}
      <div class="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <div class="uppercase tracking-wide text-xl italic serif font-semibold text-center">
          {curiosity.flag} Let's learn {curiosity.country} today
        </div>
        <p class="mt-4 text-slate-800 font-serif font-bold text-5xl text-center">
          "{curiosity.word.word}"
        </p>
        <p class="mt-2 italic font-light text-2xl text-center">
          {curiosity.word.meaning}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
