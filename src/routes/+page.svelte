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

  export let methods = [
    {
      image: '/images/methods/funny_words.webp',
      title: 'Funny words',
      description: 'Funny Words Challenge.'
    },
    {
      image: '/images/methods/rotated_tongue_twister.webp',
      title: 'Method 2',
      description: 'Tongue Twister Challenge.'
    },
    {
      image: '/images/methods/spellingquest.jpg',
      title: 'Method 3',
      description: 'Spelling Quest Challenge.'
    },
    // Add more methods as needed
  ];

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

  <!-- <div class="w-full h-52 block p-4">
    <img src="/images/baobab.png" class="absolute w-full h-full object-contain parallax-layer z-0" >
  </div> -->

  <div class="mt-12 w-full p-4">
    <h2 class="text-4xl ml-8 font-bold mb-12 text-blue-500 tracking-tight leading-none" id="methods-section-title">{$t('common.homepage.methodsSection.title')}</h2>

    <div class="w-3/4  md:ml-12 mb-12 flex flex-col md:flex-row overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg bg-white shadow-md">

    
      <!-- Text Content -->
      <div class="flex-1 w-1/2 p-4 md:p-8 text-left">
        <!-- <h1 class="text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">{@html $t('common.hero.title')}</h1>
        <h2 class="text-2xl text-gray-700 italic mb-4">{@html $t('common.hero.subtitle')}</h2>
     -->
        <p class="text-lg max-w-prose text-gray-600 mb-4 leading-relaxed" data-key="intro">
          {@html $t('common.hero.paragraphs.intro')} {@html $t('common.hero.paragraphs.method')}
        </p>
    
        <p class="text-lg text-gray-600 mb-4 leading-relaxed" data-key="today">
          { @html $t('common.hero.paragraphs.today')}
        </p>
    
        <!-- <p class="text-lg text-gray-600 leading-relaxed" data-key="join">
          {@html $t('common.hero.paragraphs.join')}
        </p> -->
      </div>
            <!-- Image Section -->
            <div class="w-1/2 md:w-auto flex-shrink-0">
              <img class="w-56 h-40 md:w-48 md:h-48  mb-4 md:mb-0 md:mr-6 object-cover" src="/images/teachers/pape.jpg" alt="Avatar">
            </div>
    </div>
    
    

  </div>
  <div class="mt-8 w-full z-50 ">

    <!-- Featured Methods Section -->
    <!-- <div class="mt-6 w-full md:p-0 p-4">
  
      <div class="mx-auto overflow-visible mt-12 mb-24 p-4">
        <h2 class="text-4xl ml-8 font-bold mb-12 text-blue-500 tracking-tight leading-none" id="methods-section-title">{$t('common.homepage.methodsSection.title')}</h2>
        <p class="text-xl ml-8 md:ml-12 font-light mb-12 text-gray-700 tracking-tight leading-relaxed">
          Découvrez des dizaines de jeux éducatifs et amusants, adaptés à tous les âges et accessibles directement en ligne. Que vous souhaitiez améliorer vos compétences linguistiques, résoudre des énigmes captivantes ou simplement passer un bon moment, nous avons le jeu parfait pour vous ! Relevez les défis, apprenez tout en vous amusant, et progressez à votre rythme. Choisissez votre aventure dès maintenant et laissez le jeu commencer !
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {#each methods as method, i}
            <div class="relative rounded-lg shadow-lg overflow-hidden group transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg parallax-card" style="transform: translateY({i * 50}px)">
              <img src={method.image} alt={method.title} class="w-full h-48 object-cover">
              <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div class="text-center font-light bg-red-600 bg-opacity-90 text-white p-6 rounded-lg">
                  <p class="text-xl max-w-md mx-auto leading-relaxed">{method.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div> -->

    <div class="mx-auto flex flex-wrap p-1 justify-center mb-42 w-full">
      <!-- <h2 class="text-4xl text-center text-violet-800 font-bold mb-12 tracking-tight leading-none" id="methods-section-title">{$t('common.homepage.methodsSection.alttitle')}</h2> -->
      <!-- Bernadette's Card -->
      <!-- <div class="flex flex-col p-4 w-full md:w-1/3">
        <h2 class="text-5xl font-bold mb-12 tracking-tight leading-none" id="methods-section-title">{$t('common.sections.teachers')}</h2>

          <div class="rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img class="w-full h-48 object-cover" src="/images/meetups/bernadette1.png" alt="Bernadette">
              <div class="p-4">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">Bernadette</h5>
                  <p class="text-lg text-gray-600">Senior English Instructor</p>
                  <p class="mt-2 text-gray-600">"I love bringing literature to life with my dramatic readings."</p>
                  <div class="mt-4">
                      <h6 class="text-md font-medium text-gray-800">Workshops</h6>
                      <ul class="list-inside text-gray-600">
                          <li>Shakespearean Drama</li>
                          <li>Advanced Grammar</li>
                          <li>Public Speaking</li>
                      </ul>
                  </div>
                  <div class="mt-4">
                      <a href="/chatroom/bernadette" class="inline-block bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium py-2 px-4 rounded">Let's chat</a>
                  </div>
              </div>
          </div>
      </div> -->

      <!-- Annie's Card -->
      <!-- <div class="flex flex-col p-4 w-full md:w-1/3">
          <div class="rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img class="w-full h-48 object-cover" src="/images/meetups/annie1.png" alt="Annie">
              <div class="p-4">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">Annie</h5>
                  <p class="text-lg text-gray-600">Conversation Club Coordinator</p>
                  <p class="mt-2 text-gray-600">"I believe every discussion can be engaging and inclusive."</p>
                  <div class="mt-4">
                      <h6 class="text-md font-medium text-gray-800">Workshops</h6>
                      <ul class="list-disc list-inside text-gray-600">
                          <li>Debate Skills</li>
                          <li>Interactive Storytelling</li>
                          <li>Cultural Exchange Sessions</li>
                      </ul>
                  </div>
                  <div class="mt-4">
                      <a href="/chatroom/annie" class="inline-block bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium py-2 px-4 rounded">Join me at the club</a>
                  </div>
              </div>
          </div>
      </div> -->

      <!-- Guy's Card -->
      <!-- <div class="flex flex-col p-4 w-full md:w-1/3">
          <div class="rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img class="w-full h-48 object-cover" src="/images/meetups/guy1.png" alt="Guy">
              <div class="p-4">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">Guy</h5>
                  <p class="text-lg text-gray-600">Creative Writing Mentor</p>
                  <p class="mt-2 text-gray-600">"Writing is an adventure, and I'm here to guide you."</p>
                  <div class="mt-4">
                      <h6 class="text-md font-medium text-gray-800">Workshops</h6>
                      <ul class="list-disc list-inside text-gray-600">
                          <li>Creative Writing</li>
                          <li>Poetry and Prose</li>
                          <li>Fiction Writing</li>
                      </ul>
                  </div>
                  <div class="mt-4">
                      <a href="/chatroom/guy" class="inline-block bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium py-2 px-4 rounded">Join me at the club</a>
                  </div>
              </div>
          </div>
      </div> -->


    

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
    
    



<!-- <div class="mt-8 p-8">
      <Teachers/>
    </div> -->



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

  <!-- <div class="mt-2 p-12">
   <LanguageCuriosityCard />
  </div> -->

  <section class="mt-4 mb-4 w-full mx-auto">


    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <!-- Donation Card -->
        <!-- <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.support.donationTitle')}</h3>
                <p>{$t('common.support.donationDescription')}</p>
                <a href="/donate" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">{$t('common.support.donateButton')}</a>
            </div>
        </div> -->

        <!-- One-on-One Lessons Card -->
        <!-- <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.support.oneOnOneTitle')}</h3>
                <p>{$t('common.support.oneOnOneDescription')}</p>
                <ul class="list-disc pl-6 mt-4">
                    <li>{$t('common.support.oneOnOnePrice30')}</li>
                    <li>{$t('common.support.oneOnOnePrice60')}</li>
                </ul>
                <a href="/lessons" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">{$t('common.support.bookNowButton')}</a>
            </div>
        </div> -->

        <!-- Low-Fee Activities Card -->
        <!-- <div class="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-blue-700 mb-4">{$t('common.support.activitiesTitle')}</h3>
                <p>{$t('common.support.activitiesDescription')}</p>
                <ul class="list-disc pl-6 mt-4">
                    <li>{$t('common.support.activitiesPrice')}</li>
                </ul>
                <a href="/activities" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">{$t('common.support.viewActivitiesButton')}</a>
            </div>
        </div> -->
    </div>
  </section>

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

  <!-- <div class="mt-8 p-12">
    <Sponsors />
  </div> -->

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
  #methods-section-title {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  .parallax-card {
    transition: transform 1s ease-in-out, opacity 1s ease-in-out;
    opacity: 0;
  }


  </style>
