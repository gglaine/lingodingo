<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { locale as globalLocale, t } from '$lib';

  let showMenu = writable(false);
  let selectedLocale = writable('en');
  let showOptions = writable(false); // Changed to writable store

  function toggleOptions() {
    showOptions.update(opt => !opt); // Updated to use writable update
  }

  function selectLocale(newLocale: string) {
    selectedLocale.set(newLocale);
    globalLocale.set(newLocale);
    localStorage.setItem('userLocale', newLocale);
    showOptions.set(false); // Updated to use writable set
  }

  onMount(() => {
    const savedLocale = localStorage.getItem('userLocale') || 'en';
    selectedLocale.set(savedLocale);
    globalLocale.set(savedLocale);
  });

  function toggleMenu() {
    console.log("toggleMenu called");
    showMenu.update(m => !m);
    console.log("$showMenu:", $showMenu);
  }
</script>

<style>
  /* Your existing styles */

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  /* Additional styles for hamburger menu */
  /* Ensure the hamburger menu button is always visible */
  @media (min-width: 768px) {
    .md\:hidden {
      display: none;
    }
  }
</style>

<nav class="bg-gray-100 p-4 shadow-md flex items-center justify-between">
  <!-- Logo -->
  <a href="/" class="logo">
    <img src="/images/logo-new-tp.png" alt="Logo" class="h-12 md:h-24">
  </a>

  <!-- Language selection -->
  <div class="relative rounded-lg p-2">
    <button on:click={toggleOptions} class="inline-flex items-center justify-center px-4 py-2 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
      {#if $selectedLocale === 'en'}
        <span class="mr-1">🇬🇧 🇺🇸</span><span class="text-slate-500 font-light text-md">English</span>
      {:else}
        <span class="mr-1">🥐 🇫🇷</span><span class="text-slate-500 font-light  text-md">Français</span>
      {/if}
    </button>

    <!-- Language options dropdown -->
    {#if $showOptions}
      <div class="absolute right-2 mt-4 pt-2 pb-2 bg-white borde rounded-md shadow-md z-10">
        <button on:click={() => selectLocale('en')} class="block w-full text-slate-500 font-light text-md">
          🇬🇧 🇺🇸 English
        </button>
        <button on:click={() => selectLocale('fr')} class="block w-full text-slate-5OO font-light text-md  text-left p-2 hover:bg-blue-100">
          🥐 🇫🇷 Français
        </button>
      </div>
    {/if}
  </div>

  <!-- Hamburger menu button -->
  <button class="ml-4 md:hidden p-2" on:click={toggleMenu}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>

  <!-- Hamburger menu content -->
  {#if $showMenu}
  <div class="md:hidden absolute text-right gap-6 h-full p-4 pt-64 top-20 right-0 left-0 bg-blue-800 text-2xl shadow-md z-20 py-2 mt-2 transition-opacity duration-300 opacity-100">
    <a href="/" on:click={toggleMenu} class="block text-slate-100 hover:bg-blue-600  px-3 py-2 rounded-md font-medium transition-colors duration-300">{$t('common.navbar.home')}</a>
    <a href="/about" on:click={toggleMenu} class="block text-slate-100 hover:bg-blue-600  px-3 py-2 rounded-md font-medium transition-colors duration-300">{$t('common.navbar.about')}</a>
    <a href="/contact" on:click={toggleMenu} class="block text-slate-100 hover:bg-blue-600 px-3 py-2 rounded-md font-medium transition-colors duration-300">{$t('common.navbar.contact')}</a>
  </div>
{/if}

  <!-- Desktop Links -->
  <div class="hidden md:flex items-center space-x-4">
    <a href="/" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md font-medium">{$t('common.navbar.home')}</a>
    <a href="/about" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{$t('common.navbar.about')}</a>
    <a href="/contact" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{$t('common.navbar.contact')}</a>
  </div>
</nav>
