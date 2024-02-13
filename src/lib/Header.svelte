<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { t, locale as globalLocale } from '$lib';

  let showMenu = writable(false);
  let selectedLocale = writable('en');
  let showOptions = writable(false);

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
  });
</script>

<style>
  /* Custom styles if needed */
</style>

<nav class="bg-gray-100 p-4 shadow-md sticky top-0 z-50 flex items-center justify-between">
  <!-- Logo -->
  <a href="/" class="logo">
    <img src="/images/logo-new-tp.png" alt="Logo" class="h-12 md:h-24">
  </a>
  
  <!-- Language selection -->
  <div class="flex items-center space-x-4">
    <div class="relative">
      <button on:click={toggleOptions} class="px-4 py-2 bg-white rounded-md shadow text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300">
        {#if $selectedLocale === 'en'}
          <span>🇬🇧 🇺🇸 English</span>
        {:else}
          <span>🥐 🇫🇷 Français</span>
        {/if}
      </button>
      {#if $showOptions}
        <div class="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-lg z-10">
          <button on:click={() => selectLocale('en')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🇬🇧 🇺🇸 English
          </button>
          <button on:click={() => selectLocale('fr')} class="block px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50">
            🥐 🇫🇷 Français
          </button>
        </div>
      {/if}
    </div>

    <!-- Hamburger menu button for mobile -->
    <button class="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" on:click={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>

  <!-- Hamburger menu content -->
  {#if $showMenu}
    <div class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-20 py-2 mt-2">
      <a href="/" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</a>
      <a href="/about" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About</a>
      <a href="/contact" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
    </div>
  {/if}
</nav>
