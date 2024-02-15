<script lang="ts">
    import { languageCuriosities } from '$lib/language_curiosities';
    import { onMount } from 'svelte';
  
    let randomCuriosity = { country: '', word: { word: '', meaning: '' } };
  
    function getRandomCuriosity() {
      const randomCountryIndex = Math.floor(Math.random() * languageCuriosities.length);
      const randomCountry = languageCuriosities[randomCountryIndex];
      const randomWordIndex = Math.floor(Math.random() * randomCountry.data.length);
      const randomWord = randomCountry.data[randomWordIndex];
      return { country: randomCountry.country, word: randomWord };
    }
  
    onMount(() => {
      randomCuriosity = getRandomCuriosity();
    });
  </script>
  
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Language Curiosity</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{randomCuriosity.country}</a>
        <p class="mt-2 text-gray-500">Did you know? The word "<span class="font-bold">{randomCuriosity.word.word}</span>" means "<span class="italic">{randomCuriosity.word.meaning}</span>" in {randomCuriosity.country}.</p>
      </div>
    </div>
  </div>
  
  <style>
    /* Add any additional CSS here, if needed */
  </style>
  