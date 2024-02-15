<script lang='ts'>
  import { t, locale } from '$lib';
  import Hero from '../components/Hero.svelte';
  import Sessions from '../components/Sessions.svelte';
  import Teachers from '../components/Teachers.svelte';
  import Sponsors from '../components/Sponsors.svelte';
  import LanguageCuriosityCard from '../components/LanguageCuriosityCard.svelte';
  import { countries } from '$lib/countries'
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import PhoneticsPairingGame from '../components/PhoneticsPairingGame.svelte'

  function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal instanceof HTMLElement) {
      modal.style.display = 'none';
    }
  }

  let showCookiesNotice = writable(true);

  function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    showCookiesNotice.set(false);
  }

  function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    showCookiesNotice.set(false);
  }

  let cookiesAccepted = writable(false);

  onMount(() => {
    const cookiesAcceptedValue = localStorage.getItem('cookiesAccepted');
    if (cookiesAcceptedValue === 'true' || cookiesAcceptedValue === 'false') {
      cookiesAccepted.set(true);
    } else {
      showCookiesNotice.set(true); // Show the cookies notice if no preference is found
    }
  });
</script>
  
<div class="container mx-auto p-4">
  <div class="w-full">
    <!-- Hero Section -->
    <div class="mt-0">
      <Hero />
    </div>
     <!-- Add space between Methods and Sessions -->
  <div class="mt-8 p-8">
    <Teachers/>
  </div>

    <!-- Sessions Section -->
    <div class="mt-12">
      <h2 class="text-4xl p-4 font-semibold mb-12 text-center animate-slideInRight">{$t('common.sections.sessions')}</h2>
      <Sessions />
    </div>

    <div class="mt-8 p-8">
      <LanguageCuriosityCard />
    </div>

    <div class="mt-24 p-8 border-3 border-red-500">
      <PhoneticsPairingGame />
    </div>

  <div class="mt-8">
    <!-- Featured Methods Section -->
      <div class="mx-auto transition duration-500 ease-in-out transform hover:scale-105">
        <a href="/methods" class="block relative rounded-lg shadow-lg overflow-hidden group">
          <img src="/images/PALABRES.png" alt="Explore Our Methods" class="w-full h-[48rem] object-cover pb-12">
          <div class="absolute inset-0 bottom-2  bg-opacity-90 flex justify-center items-end">
            <div class="text-center rounded-lg bg-blue-600 opacity-90 text-white p-6">
              <h2 class="text-5xl font-bold mb-4 tracking-tight leading-none animate-fadeInUp">{$t('common.homepage.methodsSection.title')}</h2>
              <p class="text-xl max-w-md mx-auto leading-relaxed animate-fadeInUp">{$t('common.homepage.methodsSection.description')}</p>
            </div>
          </div>
        </a>
      </div>
  </div>

  </div>

  <div class="p-4 mt-12">
    <h2 class="text-2xl font-semibold mb-4">{$t('common.cta.meetPeople')}</h2>

    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
      {#each countries as country}
      <div class="p-2 border border-gray-300 rounded-lg text-center hover:bg-gray-100">
        <span class="text-6xl block">{country.emoji}</span>

        <!-- Initially hidden, shown on hover -->
        <span class="text-xl text-black font-bold opacity-0 hover:opacity-100">{country.name}</span>
      </div>
      {/each}
    </div>
  </div>

  <div class="mt-8">
    <Sponsors />
  </div>
</div>

{#if !$cookiesAccepted && $showCookiesNotice}
<!-- Cookies notice modal -->
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div class="relative bg-white rounded-lg p-8 max-w-md">
    <!-- Modal content -->
    <div class="text-center">
      <!-- Modal title -->
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cookie Notice</h2>
      
      <!-- Modal message -->
      <p class="text-lg text-gray-600 mb-6">We use cookies to enhance your experience on our website. By continuing to use our site, you agree to our use of cookies.</p>
      
      <!-- Action buttons -->
      <div class="flex justify-center space-x-4">
        <!-- Accept cookies button -->
        <button on:click={acceptCookies} class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out">Accept</button>
        
        <!-- Learn more button (optional) -->
        <button class="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300 ease-in-out">Learn More</button>
      </div>
      
      <!-- Close button -->
      <button on:click={rejectCookies} class="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800 focus:outline-none">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</div>
{/if}


<style>
     @keyframes breathe {
      0%, 100% {
        transform: scale(0.95);
        opacity: 0.7;
      }
      50% {
        transform: scale(1);
        opacity: 1;
      }
    }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }


  @keyframes scrollHint {
    0%, 100% {
      opacity: 0;
      transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .transition-opacity {
    transition: opacity 0.5s ease-in-out;
  }

  </style>
