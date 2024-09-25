<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { t, locale as globalLocale } from '$lib';

  let showMenu = writable(false);
  let selectedLocale = writable('en');
  let showOptions = writable(false);
  let isUserLoggedIn = writable(false);

  function toggleOptions() {
    showOptions.update(o => !o);
  }

  function selectLocale(newLocale: string) {
    selectedLocale.set(newLocale);
    globalLocale.set(newLocale);
    localStorage.setItem('userLocale', newLocale);
    showOptions.set(false);
  }

  function toggleMenu() {
    showMenu.update(m => !m);
  }

  onMount(() => {
    const defaultLocale = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const savedLocale = localStorage.getItem('userLocale') || defaultLocale;
    selectedLocale.set(savedLocale);
    globalLocale.set(savedLocale);
    isUserLoggedIn.set(localStorage.getItem('isUserLoggedIn') === 'true');
  });
</script>

<nav class="p-4 bg-slate-100 shadow-lg sticky top-0 z-50 flex items-center justify-between text-slate-800">
  <a href="/" class="w-32 text-center flex flex-col items-center justify-around space-y-0 text-slate-800">
    <div class="h-24 w-24 overflow-hidden flex items-center justify-center">
        <img src="/images/logoefelcenter.png" alt="Logo" class="object-cover h-full">
    </div>
    <span class="hidden md:block text-3xl font-black font-serif leading-none">
        EFEL<br>CENTER
    </span>
</a>



  <!-- Desktop Links -->
  <div class="hidden md:flex space-x-6 text-slate-800 font-light">
    <a href="/contact" class="hover:text-yellow-400 transition duration-200">
      {$t('common.navbar.contact')}
    </a>
  </div>

  <div class="flex items-center">
    <!-- Language Selection -->
    <div class="relative mr-3">
      <button on:click={toggleOptions} class="px-4 py-2 text-sm font-light text-slate-800 bg-white rounded-md shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
        {#if $selectedLocale === 'en'}
          🇬🇧  Site in English
        {:else}
          🥐  Site en Français
        {/if}
      </button>
      {#if $showOptions}
        <div class="absolute mt-2 py-1 w-32 bg-white rounded-sm shadow-lg z-10">
          <button on:click={() => selectLocale('en')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🇬🇧 English
          </button>
          <button on:click={() => selectLocale('fr')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🇫🇷 Français
          </button>
        </div>
      {/if}
    </div>

    <!-- Hamburger Menu Icon for Mobile -->
    <button on:click={toggleMenu} class="ml-3 md:hidden p-2 text-slate-800 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if $showMenu}
    <div class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20 py-2 mt-2 w-full">
      <a href="/" on:click={toggleMenu} class="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50">
        {$t('common.navbar.home')}
      </a>
      <a href="/contact" on:click={toggleMenu} class="block px-3 py-2 text-base text-gray-700 hover:bg-gray-50">
        {$t('common.navbar.contact')}
      </a>
    </div>
  {/if}
</nav>
