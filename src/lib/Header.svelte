<script lang="ts">
 import { t, locale } from '$lib';
  
    function changeLocale(event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      if (selectElement) {
        locale.set(selectElement.value); // Update the i18n locale
      }
    }
  </script>
  
  <nav class="header">
    <a href="/">{$t('common.navbar.home')}</a>
    <a href="/about">{$t('common.navbar.about')}</a>
    <select value={$locale} on:change="{changeLocale}">
      <option value="en">{$t('common.navbar.english')}</option>
      <option value="fr">{$t('common.navbar.french')}</option>
      <!-- Other options -->
    </select>
  </nav>
  
  <!-- Your styles here -->
  
  
  <style>
    .header {
      /* Add your styles for the header here */
      background-color: #f3f4f6; /* Example background color */
      padding: 1rem;
      text-align: center;
    }
    .header a {
      margin: 0 1rem;
      text-decoration: none;
      color: #333;
    }
  </style>
  