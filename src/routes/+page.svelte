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
  <div class="w-full m-0 pt-12 mt-12 ">
    <Hero />
  </div>

  <div class="mt-8 p-4 w-full">
   
      <h3 class="text-5xl text-left font-bold text-slate-800 mb-12">{$t('common.homepage.welcome')}</h3>
      <div class="flex  p-4 flex-col md:flex-row rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
        
        <div class="w-full flex flex-col md:flex-row items-cent">
          <img class="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-3" src="/images/teachers/pape.jpg" alt="Avatar">
          <div class="flex-2 p-8 text-center md:text-left">
            <h5 class="text-lg mb-3 font-medium text-gray-800">{$t('common.joinConversation.header')}</h5>
            <p class="text-lg text-gray-600">{$t('common.joinConversation.content')}</p>
            <p class="mt-2 text-xl font-medium text-gray-700">{$t('common.joinConversation.happyLearning')}</p>
          </div>

     
        </div>
  
    
 
      </div>
    
    <div class="mt-8 p-4">
      <!-- Featured Methods Section -->
      <div class="mx-auto overflow-visible mt-24 p-4 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <h2 class="text-5xl font-bold mb-12 tracking-tight leading-none animate-fadeInUp">{$t('common.homepage.methodsSection.title')}</h2>
        <a href="/methods" class="block relative rounded-lg shadow-lg overflow-hidden group">
          <img src="/images/grid_methods_980.png" alt="Explore Our Methods" class="w-full object-contain pb-12">
          <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <div class="text-center font-light bg-red-600 bg-opacity-90 text-white p-6 rounded-lg">
              <p class="text-xl max-w-md mx-auto leading-relaxed animate-fadeInUp">{$t('common.homepage.methodsSection.description')}</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-lg">
      <div class="flex flex-col justify-center items-start md:items-center p-4 text-center md:text-left">
        <h4 class="text-2xl font-bold mb-2">  {$t('common.joinConversation.whatsapp')}</h4>
        <p class="text-sm mb-4">{$t('common.joinConversation.whatsappdesc')}</p>
        <button class="px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 text-sm font-medium rounded shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out mb-4 md:mb-0 md:mr-4">
          {$t('common.joinConversation.button')}
        </button>
      </div>
      <div class="flex justify-center items-center p-4">
        <img class="w-12 h-12 rounded-full" src="/images/whatsapp.png" alt="WhatsApp Icon">
      </div>
    </div>

  <div class="mt-8 p-8">
    <Teachers/>
  </div>
  
  <!-- <div class="mt-8 p-4">
    <h3 class="text-5xl text-left font-bold text-slate-800 mb-12">{$t('common.games.playAndLearn')}</h3>
    <div class="mt-8 w-full p-8 border-4 border-gold-500 rounded-lg shadow-2xl bg-blue-50 mx-auto text-gray-800">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <a href="/games/spellingquest" class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img src="/images/games/spellingquest.webp" alt="Spelling Game" class="h-full w-full object-cover md:w-48">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.games.spellingGame')}</h3>
            </div>
          </div>
        </a>
        <a href="/games/phoneticspairing" class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img src="/images/games/phoneticpairs.webp" alt="Phonetic Pairs Game" class="h-full w-full object-cover md:w-48">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.games.phoneticPairs')}</h3>
                <p>{$t('common.games.phoneticPairsDescription')}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div> -->

  <div class="mt-8 p-12">
   <LanguageCuriosityCard />
  </div>

  <section class="mt-8 mb-8 w-full mx-auto">
    <div class="text-center mb-8">
        <h2 class="text-2xl font-semibold">{$t('common.support.missionTitle')}</h2>
        <p class="text-md text-gray-600">{$t('common.support.missionDescription')}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <!-- Donation Card -->
        <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.support.donationTitle')}</h3>
                <p>{$t('common.support.donationDescription')}</p>
                <a href="/donate" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">{$t('common.support.donateButton')}</a>
            </div>
        </div>

        <!-- One-on-One Lessons Card -->
        <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.support.oneOnOneTitle')}</h3>
                <p>{$t('common.support.oneOnOneDescription')}</p>
                <ul class="list-disc pl-6 mt-4">
                    <li>{$t('common.support.oneOnOnePrice30')}</li>
                    <li>{$t('common.support.oneOnOnePrice60')}</li>
                </ul>
                <a href="/lessons" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">{$t('common.support.bookNowButton')}</a>
            </div>
        </div>

        <!-- Low-Fee Activities Card -->
        <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.support.activitiesTitle')}</h3>
                <p>{$t('common.support.activitiesDescription')}</p>
                <ul class="list-disc pl-6 mt-4">
                    <li>{$t('common.support.activitiesPrice')}</li>
                </ul>
                <a href="/activities" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">{$t('common.support.viewActivitiesButton')}</a>
            </div>
        </div>
    </div>
  </section>

  <!-- <section class="bg-slate-800 flex flex-col justify-around mt-24 min-h-[50vh] md:max-h-32 mb-12 py-8 mx-auto" style="height: 100%; width: 100%; background-image: url('/images/club.png'); background-size: cover; background-position: center; opacity: 0.9; background-repeat: no-repeat;">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-4 bg-slate-100 p-8 rounded-lg">
          <h2 class="text-2xl font-bold text-slate-800">{$t('common.newsletter.title')}</h2>
          <p class="text-md text-gray-600">{$t('common.newsletter.description')}</p>
      </div>
      <div class="flex justify-center">
          <div class="bg-white rounded-lg">
              <div class="flex flex-wrap justify-between md:flex-row">
                  <input type="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none focus:placeholder-transparent" placeholder="{$t('common.newsletter.placeholder')}" aria-label="{$t('common.newsletter.placeholder')}">
                  <button class="w-full md:w-auto px-4 py-2 m-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none">{$t('common.newsletter.subscribeButton')}</button>
              </div>
          </div>
      </div>
    </div>
  </section> -->

  <div class="mt-8 p-12">
    <Sponsors />
  </div>

  <!-- <section class="bg-gray-100 py-12 mb-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                {$t('common.careers.joinTeam')}
            </h2>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
                {$t('common.careers.description')}
            </p>
        </div>
        <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
                <a href="/careers" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    {$t('common.careers.viewPositions')}
                </a>
            </div>
        </div>
    </div>
  </section> -->
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
