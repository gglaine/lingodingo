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

<nav class="bg-gray-100 p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
  <a href="/" class="flex items-center space-x-3">
    <img src="/images/logo-new-tp.png" alt="Logo" class="h-12 md:h-24">
    <span class="hidden md:block text-lg md:text-2xl font-bold ml-3">EFEL CENTER</span>
  </a>

  <div class="flex items-center">
    <!-- Language Selection -->
    <div class="relative mr-3">
      <button on:click={toggleOptions} class="px-4 py-2 bg-white rounded-md shadow text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300">
        {#if $selectedLocale === 'en'}
          🇬🇧 🇺🇸 English
        {:else}
          🥐 🇫🇷 Français
        {/if}
      </button>
      {#if $showOptions}
        <div class="absolute mt-2 py-1 w-48 bg-white rounded-md shadow-lg z-10">
          <button on:click={() => selectLocale('en')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🇬🇧 🇺🇸 English
          </button>
          <button on:click={() => selectLocale('fr')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🥐 🇫🇷 Français
          </button>
        </div>
      {/if}
    </div>

    <!-- Sign In / Up Link Visible on All Views -->
    {#if !$isUserLoggedIn}
      <a href="/signin" class="px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
        Sign In / Up
      </a>
    {/if}

    <!-- Hamburger Menu Icon for Mobile -->
    <button on:click={toggleMenu} class="ml-3 md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>

  <!-- Desktop Links Visible on Desktop -->
  <div class="hidden md:flex space-x-4">
    <a href="/" class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
      {$t('common.navbar.home')}
    </a>
    <a href="/about" class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
      {$t('common.navbar.about')}
    </a>
    <a href="/contact" class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
      {$t('common.navbar.contact')}
    </a>
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

