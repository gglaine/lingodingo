<script lang='ts'>
  import { t, locale } from '$lib';
  import Hero from '../components/Hero.svelte';
  import Teachers from '../components/Teachers.svelte';
  import Sponsors from '../components/Sponsors.svelte';
  import LanguageCuriosityCard from '../components/LanguageCuriosityCard.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Sessions from '../components/Sessions.svelte';
  import { countries } from '$lib/countries'
  import PhoneticsPairingGame from '../components/PhoneticsPairingGame.svelte'
  import SpellingGame from '$components/SpellingGame.svelte';

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
  
<div class="container p-0 w-full">
  <div class="w-full p-0 scroll-py-4 m-0">
    <Hero />

  
  </div>

  <div class="mt-8 p-6 w-full">
    <div class="flex bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
        <div class="flex flex-col md:flex-row items-center p-4 opacity-85">
            <img class="w-24 h-24 opacity-1 rounded-full mr-3 mb-4 md:mb-0" src="/images/teachers/pape.jpg" alt="Avatar">
            <div class="flex-1">
                <h5 class="text-lg font-medium">{$t('common.joinConversation.header')}</h5>
                <p class="text-sm text-gray-500">{$t('common.joinConversation.content')}</p>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center md:items-center p-4">
                <button class="px-4 py-2 text-slate-800 text-sm font-medium rounded hover:bg-blue-600 mb-4 md:mb-0 md:mr-4">{$t('common.joinConversation.button')}</button>
                <img class="w-12 h-12 rounded-full" src="/images/whatsapp.png" alt="WhatsApp Icon">
            </div>
        </div>
    </div>



    <div class="mt-8 p-4">
      <!-- Featured Methods Section -->
        <div class="mx-auto overflow-visible mt-24 p-4 transition duration-500 ease-in-out transform hover:scale-105">
          <h2 class="text-5xl font-bold max-w-[1/2] mb-12 tracking-tight leading-none animate-fadeInUp">🚀 {$t('common.homepage.methodsSection.title')}</h2>
          <a href="/methods" class="block relative rounded-lg shadow-lg overflow-hidden group">
            <img src="/images/grid_methods_980.png" alt="Explore Our Methods" class="w-full object-contain pb-12">
            <div class="absolute inset-12 top-[150%]  bg-opacity-90 flex justify-center items-end">
              <div class="text-center font-light rounded-lg bg-red-600 opacity-90 text-white p-6">
                <p class="text-xl max-w-md mx-auto leading-relaxed animate-fadeInUp">{$t('common.homepage.methodsSection.description')}</p>
              </div>
            </div>
          </a>
        </div>
    </div> 
  </div>
  
  <div class="mt-8 p-8">
    <Teachers/>
  </div>
  
  <!-- <div class="p-4 mt-12">
    <div class="w-full flex justify-around items-center p-16">
      <h2 class="text-2xl font-semibold mb-4">{$t('common.cta.meetPeople')}</h2>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
      {#each countries as country}
      <div class="p-2 border border-gray-300 rounded-lg text-center hover:bg-gray-100">
        <span class="text-6xl block">{country.emoji}</span>  
        <span class="text-xl text-black font-bold">{country.name}</span>
      </div>
      {/each}
    </div>
  </div> -->

  <div class="mt-8 w-full p-8 border-4 border-gold-500 rounded-lg shadow-2xl bg-blue-50 mx-auto text-gray-800">
    <h2 class="text-5xl text-left font-bold text-slate-800 mb-12">{$t('common.games.playAndLearn')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

      <!-- Spelling Game Card as Link -->
      <a href="/games/spellingquest" class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
        <div class="md:flex">
          <!-- Image Section -->
          <div class="md:flex-shrink-0">
              <img src="/images/games/spellingquest.webp" alt="Spelling Game" class="h-full w-full object-cover md:w-48">
          </div>
          <!-- Text Section -->
          <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.games.spellingGame')}</h3>
          </div>
        </div>
      </a>
      <!-- Phonetic Pairs Game Card as Link -->
      <a href="/games/phoneticspairing" class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
        <div class="md:flex">
          <!-- Image Section -->
          <div class="md:flex-shrink-0">
              <img src="/images/games/phoneticpairs.webp" alt="Phonetic Pairs Game" class="h-full w-full object-cover md:w-48">
          </div>
          <!-- Text Section -->
          <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-700 mb-4">Phonetic Pairs Game</h3>
              <p>Match sounds and improve your phonetics</p>
          </div>
        </div>
      </a>
    </div>
  </div>

  <div class="mt-8 p-12">
   <LanguageCuriosityCard />
  </div>
  <div class="mt-8 p-12">
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
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.cookies.title')}</h2>
      <!-- Modal message -->
      <p class="text-lg text-gray-600 mb-6">{$t('common.cookies.notice')}</p>  
      <!-- Action buttons -->
      <div class="flex justify-center space-x-4">
        <!-- Accept cookies button -->
        <button on:click={acceptCookies} class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out">{$t('common.cookies.accept')}</button>
        <!-- Learn more button (optional) -->
        <button class="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300 ease-in-out">{$t('common.cookies.more')}</button>
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


  </style>
