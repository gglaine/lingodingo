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
    const savedLocale = localStorage.getItem('userLocale') || 'en';
    selectedLocale.set(savedLocale);
    globalLocale.set(savedLocale);
    // Simulate user authentication check
    isUserLoggedIn.set(localStorage.getItem('isUserLoggedIn') === 'true');
  });
</script>

<nav class="p-2 pt-4 pb-4 pr-2 mh-12 py-2 bg-blue-600 shadow-lg sticky top-0 z-50 flex items-center justify-between text-white">
  <a href="/" class="flex items-center space-x-3 text-white">
    <div class="h-12 w-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
        <img src="/images/club.png" alt="Logo" class="object-cover h-full">
    </div>
    <span class="hidden md:block text-xl font-bold ml-3">EFELCENTER</span>
  </a>

  <!-- Desktop Links Visible on Desktop -->
  <div class="hidden md:flex space-x-6 text-white font-medium">
    <a href="/about" class="hover:text-yellow-400 transition duration-200">
      {$t('common.navbar.whoWeAre')}
    </a>
    <a href="/" class="hover:text-yellow-400 transition duration-200">
      {$t('common.navbar.businessLanguage')}
    </a>
    <a href="/tutoring" class="hover:text-yellow-400 transition duration-200">
      {$t('common.tutoring.category')}
    </a>
    <a href="/contact" class="hover:text-yellow-400 transition duration-200">
      {$t('common.navbar.contact')}
    </a>
  </div>

  <div class="flex items-center">
    <!-- Language Selection -->
    <div class="relative mr-3">
      <button on:click={toggleOptions} class="px-4 py-2 text-sm font-bold text-yellow-800 bg-white rounded-full shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300">
        {#if $selectedLocale === 'en'}
          🇬🇧  English
        {:else}
          🥐  Français
        {/if}
      </button>
      {#if $showOptions}
        <div class="absolute mt-2 py-1 w-32 bg-white rounded-md shadow-lg z-10">
          <button on:click={() => selectLocale('en')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🇬🇧 English
          </button>
          <button on:click={() => selectLocale('fr')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🇫🇷 Français
          </button>
        </div>
      {/if}
    </div>

    <!-- Sign In / Up Link Visible on All Views -->
    {#if !$isUserLoggedIn}
      <a href="/signin" class="px-4 py-2 rounded-md text-base font-thin text-white bg-red-500 hover:bg-blue-600 transition duration-200">
        {$t('common.navbar.signIn')}
      </a>
    {/if}
    {#if $isUserLoggedIn}
      <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </div>
    {/if}

    <!-- Hamburger Menu Icon for Mobile -->
    <button on:click={toggleMenu} class="ml-3 md:hidden p-2 text-gray-100 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu Content -->
  {#if $showMenu}
    <div class="md:hidden absolute min-h-[100vh] items-end pt-12 top-full left-0 right-0 bg-white shadow-lg z-20 py-2 mt-2 w-full">
      <a href="/" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
        {$t('common.navbar.home')}
      </a>
      <a href="/about" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
        {$t('common.navbar.about')}
      </a>
      <a href="/contact" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
        {$t('common.navbar.contact')}
      </a>
    </div>
  {/if}
</nav>
