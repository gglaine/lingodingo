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
    const parallaxCards = document.querySelectorAll('.parallax-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.transform = 'translateY(150px)';
          entry.target.style.opacity = 0;
        }
      });
    }, { threshold: 0.5 });

    parallaxCards.forEach(card => {
      observer.observe(card);
    });
    const cookiesAcceptedValue = localStorage.getItem('cookiesAccepted');
    if (cookiesAcceptedValue === 'true' || cookiesAcceptedValue === 'false') {
      cookiesAccepted.set(true);
    } else {
      showCookiesNotice.set(true); // Show the cookies notice if no preference is found
    }
  });
</script>
  
<div class="w-full">
  <div class="w-full m-0 -pt-2 mt-0 mb-24 ">
    <Hero />
  </div>
  <div class="mt-12 w-full p-4">
    <h2 class="text-4xl ml-8 font-bold mb-12 text-blue-500 tracking-tight leading-none" id="methods-section-title">{$t('common.homepage.methodsSection.title')}</h2>
    <div class="w-3/4 md:ml-12 mb-12 flex flex-col md:flex-row overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg bg-white shadow-md parallax-card"></div>
      <!-- Text Content -->
      <div class="flex-1 w-1/2 p-4 md:p-8 text-left">
        <p class="text-lg max-w-prose text-gray-600 mb-4 leading-relaxed" data-key="intro">
          {@html $t('common.hero.paragraphs.intro')} {@html $t('common.hero.paragraphs.method')}
        </p>
        <p class="text-lg text-gray-600 mb-4 leading-relaxed" data-key="today">
          { @html $t('common.hero.paragraphs.today')}
        </p>
      </div>
        <!-- Image Section -->
        <div class="w-1/2 md:w-auto flex-shrink-0">
          <img class="w-56 h-40 md:w-48 md:h-48  mb-4 md:mb-0 md:mr-6 object-cover" src="/images/teachers/pape.jpg" alt="Avatar">
        </div>
    </div>
  </div>
  <div class="mt-8 w-full z-50 ">
    <div class="mx-auto flex flex-wrap p-1 justify-center mb-42 w-full">
      <div class="flex w-full p-4 md:p-12 mt-12 flex-col justify-between items-center bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-center items-start p-4 text-left">
          <h4 class="text-2xl font-bold mb-6">{$t('common.joinConversation.whatsapp')}</h4>
          <p class="text-xl mb-4 text-left">{$t('common.joinConversation.whatsappdesc')}</p>
          <p class="text-xl mb-4 text-left">{$t('common.joinConversation.whatsappdesc2')}</p>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-start -space-x-1 overflow-hidden ml-2 mb-2">
            <img class="h-16 w-16 rounded-full ring-white" src="/images/whatsapp.gif" alt="WhatsApp Icon">
            <img class="h-16 w-16 rounded-full ring-white" src="/images/meetups/bernadette1.png" alt="User 1">
            <img class="h-16 w-16 rounded-full ring-white" src="/images/meetups/guy1.png" alt="User 2">
            <img class="h-16 w-16 rounded-full ring-white" src="/images/meetups/annie1.png" alt="User 3">
            <img class="h-16 w-16 rounded-full ring-white" src="/images/meetups/efel1.png" alt="User 4">
            <span class="font-medium h-16 w-16 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center ring-2 ring-white text-center text-xl leading-none">+230</span>
          </div>
        </div>
        <button class="flex items-center px-4 mt-12 py-2 text-white bg-blue-500 text-sm font-medium rounded shadow-md hover:bg-blue-600 transition duration-300 ease-in-out mb-4 md:mb-0 md:mr-4">
          <a href="/contact
          " class='flex items-center'>
          <img class="w-12 h-12 mr-4 rounded-full" src="/images/whatsapp.png" alt="WhatsApp Icon"> 
          <div class="text-left">{$t('common.joinConversation.button')}</div>
        </a>
        </button>
      </div>
  </div>
  <div class="flex w-full p-6 md:p-12 mt-12 flex-col justify-between items-center bg-white text-gray-900 rounded-lg shadow-lg">
    <div class="flex flex-col justify-start p-4 text-left">
      <h4 class="text-2xl font-bold mb-6 text-blue-600">Rejoignez-nous en tant que bénévole !</h4>
      <p class="text-xl mb-4">
        Vous avez des compétences ou du temps à offrir ? Rejoignez notre équipe de bénévoles et contribuez à faire une différence. Que vous soyez intéressé par l'organisation d'événements, la gestion des réseaux sociaux, ou tout autre domaine, nous avons besoin de vous !
      </p>
      <p class="text-xl mb-4">
        Les bénévoles jouent un rôle crucial dans le succès de nos initiatives. Votre soutien nous permet de continuer à offrir des opportunités d'apprentissage et à élargir notre communauté.
      </p>
      <p class="text-xl mb-4">
        Si vous êtes motivé et souhaitez vous impliquer, nous serions ravis de discuter des façons dont vous pourriez nous aider.
      </p>
    </div>
    <button class="flex items-center px-4 mt-8 py-2 text-white bg-green-500 text-sm font-medium rounded shadow-md hover:bg-green-600 transition duration-300 ease-in-out mb-4">
      <a href="/contact">
        <div>Devenir bénévole</div>
      </a>
    </button>
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
  .parallax-card {
    transform: translateY(150px);
    opacity: 0;
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
  #methods-section-title {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  .parallax-card {
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    opacity: 0;
  }
  </style>
