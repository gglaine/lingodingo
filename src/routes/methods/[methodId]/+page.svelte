<script lang="ts">
  import { page } from '$app/stores';
  import methodsData from '$lib/methodsData';
  import { derived } from 'svelte/store';
  import { t } from '$lib/translations'; 
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
    <img src="{$method.imageSrc}" alt={$t($method.titleKey)} class="w-full max-h-64 rounded-lg shadow-md">
  </div>
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray-800 mb-2">{$t($method.howItWorks)}</h2>
    <!-- Additional method details -->
    <div class=" flex flex-col  md:flex-row md:space-x-5">
      <div class="w-full md:w-1/3 rounded-lg bg-white shadow-md p-5">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{$t($method.whyYoullLoveIt)}</h2>
        <img src="{$method.whyYoullLoveIt}" alt={$t($method.whyYoullLoveIt)} class="w-full h-auto rounded-lg">
      </div>
      <div class="md:w-2/3 p-5">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{$t($method.getStartedTips)}</h2>
        <img src="{$method.imageSrc}" alt={$t($method.getStartedTips)} class="w-full h-auto rounded-lg">
      </div>
    </div>
    <div class="p-5 flex flex-col space-y-5 md:flex-row md:space-x-5">
      <div class="flex-shrink-0 md:w-1/3 rounded-lg bg-white shadow-md p-5">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{$t($method.joinTheCommunity)}</h2>
        <img src="{$method.joinTheCommunity}" alt={$t($method.joinTheCommunity)} class="w-full h-auto rounded-lg">
      </div>
      <div class="md:w-2/3 p-5">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{$t($method.successWith)}</h2>
        <img src="{$method.successWith}" alt={$t($method.successWith)} class="w-full h-auto rounded-lg">
      </div>
    </div>

    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block hover:shadow-md transition duration-300 ease-in-out">
      {$t('common.cta.joinNow')}
    </a>
  </div>
</article>
{:else}
  <p>Method not found.</p>
{/if}
