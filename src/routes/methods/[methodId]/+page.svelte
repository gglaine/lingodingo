<script lang="ts">
  import { page } from '$app/stores';
  import methodsData from '$lib/methodsData';
  import { derived } from 'svelte/store';
  import { t } from '$lib/translations'; // Adjust paths as necessary

  // Derived store to reactively get the current methodId from the URL
  const methodId = derived(page, $page => $page.params.methodId);

  // Find the method in methodsData that matches the current methodId
  const method = derived(methodId, $methodId => methodsData.find(m => m.id === $methodId));

  // Optionally, derive the translated title for dynamic use in <svelte:head>
  const title = derived([method, t], ([$method, $t]) => $method ? $t($method.titleKey) : 'Learning Methods');

</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

{#if $method}
<article class="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-5">
  <div class="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 p-5">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">{$t($method.titleKey)}</h1>
  </div>
  <div class="p-5">
    <img src="{$method.imageSrc}" alt={$t($method.titleKey)} class="w-full h-auto rounded-lg shadow-md">
  </div>
  <div class="p-5">
    <p class="text-gray-700 text-base">{$t($method.descKey)}</p>
    <!-- Display more method details as needed -->
  </div>
    <div class="p-5 text-center">
    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block hover:shadow-md transition duration-300 ease-in-out">
      {$t(`common.cta.joinNow`)}
    </a>
  </div>
</article>

{:else}
  <p>Method not found.</p>
{/if}
