<!-- src/routes/+page.svelte -->
<script>
    import { t, locale } from '$lib';
  import Hero from '../components/Hero.svelte';
  import Sessions from '../components/Sessions.svelte';
  import Teachers from '../components/Teachers.svelte';
  import Sponsors from '../components/Sponsors.svelte';
  import BodypartsGame from '../components/BodypartsGame.svelte';
  import { countries } from '$lib/countries'
  
</script>
  
<div class="container mx-auto p-4">
  <div class="w-full">
    <!-- Hero Section -->
    <div class="mt-0">
      <Hero />
    </div>
    
    <!-- Scroll Down Indicator -->
    <div class="text-center my-8 animate-bounce">
      <span>{$t('common.scrollIndicator')}</span>
      <svg class="mx-auto h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  
    <!-- Featured Methods Section -->
    <div class="mx-auto transition duration-500 ease-in-out transform hover:scale-105">
      <a href="/methods" class="block relative rounded-lg shadow-lg overflow-hidden group">
        <img src="/images/methods/methods_inhand.webp" alt="Explore Our Methods" class="w-full h-[30rem] object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-50 flex justify-center items-center">
          <div class="text-center text-white p-4">
            <h2 class="text-5xl font-bold mb-4 tracking-tight leading-none animate-fadeInUp">{$t('common.homepage.methodsSection.title')}</h2>
            <p class="text-xl max-w-md mx-auto leading-relaxed animate-fadeInUp">{$t('common.homepage.methodsSection.description')}</p>
          </div>
        </div>
      </a>
    </div>
  
    <!-- Sessions Section -->
    <div class="mt-16 p-8">
      <h2 class="text-4xl font-semibold mb-6 text-center animate-slideInRight">{$t('common.sections.sessions')}</h2>
      <Sessions />
    </div>
  </div>
  <!-- Add space between Methods and Sessions -->
  <div class="mt-8 p-8">
    <Teachers/>
    <BodypartsGame />
  </div>
  <div class="p-4 mt-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('common.cta.meetPeople')}</h2>

    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
      {#each countries as country}
        <div class="p-2 border border-gray-300 rounded-lg text-center">
          <span class="text-2xl">{country.emoji}</span>
      
          <span class="text-2xl">{country.name}</span>
        </div>
      {/each}
    </div>
  </div>
  <div class="mt-8">
    <Sponsors />
  </div>
</div>
  