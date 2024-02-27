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
  
  <div class="w-full mt-48 min-h-[500px] p-8 mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
    <div class="text-center my-8">
      <div class="text-9xl mx-auto">🌎</div>
      <h2 class="text-4xl font-bold mt-4">A World of Learning</h2>
    </div>
    <div class="flex flex-col mx-auto items-center text-center">
     
        <div class="uppercase tracking-wide text-md text-indigo-500 italic serif font-semibold">{randomCuriosity.country}</div>
     
        <p class="mt-2 text-slate-800 font-serif font-bold text-6xl">
        "{randomCuriosity.word.word}"
        </p>
        <p class="italic font-light text-2xl">
          {randomCuriosity.word.meaning}
        </p>
</div>

    </div>
 
  
  <style>
    /* Add any additional CSS here, if needed */
  </style>
  