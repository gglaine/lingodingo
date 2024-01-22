<script lang="ts">
  import { t, locale } from '$lib';
  
  function changeLocale(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      locale.set(selectElement.value); // Update the i18n locale
    }
  }
</script>

<!-- Use flex-col and justify-start on mobile screens -->
<nav class="flex flex-col justify-start md:flex-row md:items-center bg-gray-100 p-4 shadow-md">
  <div class="md:mr-4"> <!-- Logo container for desktop -->
    <img src="/images/lingo-logo.png" alt="Logo" class="h-16 md:h-16"> <!-- Logo image -->
  </div>
  <div class="flex-grow md:flex-grow-0"> <!-- Adjust the flex-grow for mobile -->
    <a href="/" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{$t('common.navbar.home')}</a>
    <a href="/about" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{$t('common.navbar.about')}</a>
  </div>
  <select value={$locale} on:change="{changeLocale}" class="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline mt-3 md:mt-0"> <!-- Adjust margin for mobile -->
    <option value="en">{$t('common.navbar.english')}</option>
    <option value="fr">{$t('common.navbar.french')}</option>
    <!-- Other options -->
  </select>
</nav>
