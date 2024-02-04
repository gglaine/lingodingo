<script lang="ts">
  import { t, locale } from '$lib';
  
  function changeLocale(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  if (selectElement) {
    const newLocale = selectElement.value;
    locale.set(newLocale); // Update the i18n locale store
    localStorage.setItem('userLocale', newLocale); // Store the locale in localStorage
    console.log(`Locale set to ${newLocale} and stored in localStorage.`);
  }
}

</script>

<!-- Use flex-col and justify-start on mobile screens -->
<nav class="flex flex-col md:flex-row md:items-center bg-gray-100 p-4 shadow-md">
  <div class="md:order-last ml-auto mb-3 md:mb-0"> <!-- Language select always sticks to the right -->
    <select value={$locale} on:change="{changeLocale}" class="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded leading-tight focus:outline-none focus:shadow-outline">
      <option value="en">🇬🇧🇺🇸{$t('common.navbar.english')}</option>
      <option value="fr">🥐 {$t('common.navbar.french')}</option>
      <!-- Other options -->
    </select>
  </div>
  <div class="flex-grow md:flex-grow-0 text-md flex justify-between items-center"> <!-- Adjust the flex-grow for mobile -->
    <div class="md:mr-4"> <!-- Logo container for desktop -->
      <a href="/" ><img src="/images/dingologo.png" alt="Logo" class="h-16 md:h-16"></a> <!-- Logo image -->
    </div>
    <a href="/" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md  font-medium">{$t('common.navbar.home')}</a>
    <a href="/about" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{$t('common.navbar.about')}</a>
    <a href="/contact" class="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">{$t('common.navbar.contact')}</a>
  </div>
</nav>
