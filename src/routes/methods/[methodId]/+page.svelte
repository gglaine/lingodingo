<script lang="ts">
  import { page } from '$app/stores';
  import methodsData from '$lib/methodsData';
  import { derived } from 'svelte/store';
  import { t } from '$lib/translations';
  import { fade } from 'svelte/transition';

  function lazyLoad(node: Element) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let img = node as HTMLImageElement;
        // Ensure data-src attribute exists and is not undefined before assigning it to src
        const src = img.dataset.src;
        if (typeof src === 'string') { // Checks if src is a string and not undefined
          img.src = src;
          observer.unobserve(node);
          node.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.1 });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}


  const methodId = derived(page, $page => $page.params.methodId);
  const method = derived(methodId, $methodId => methodsData.find(m => m.id === $methodId));

  const title = derived([method, t], ([$method, $t]) => $method ? $t($method.titleKey) : 'Learning Methods');
</script>

<svelte:head>
  <title>{$title}</title>
</svelte:head>

{#if $method}
<article class="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-8">
  <div class="bg-gradient-to-r from-blue-500 to-blue-300 p-6">
    <h1 class="text-3xl font-bold text-white mb-4">{@html $t($method.titleKey)}</h1>
    <img use:lazyLoad data-src="{$method.imageSrc}" alt={$t($method.titleKey)} class="w-full max-h-80 object-cover rounded-lg shadow-md opacity-0 transition-opacity duration-500" />
  </div>
  <div class="p-6">
    <h2 class="text-2xl font-semibold text-gray-900 mb-4">{@html $t($method.howItWorks)}</h2>
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:w-1/3 bg-blue-50 rounded-lg shadow-md p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t('common.cta.whyYoullLoveIt')} 🫶</h3>
        <p class="text-gray-700">{$t($method.whyYoullLoveIt)}</p>
      </div>
      <div class="md:w-2/3 p-4 bg-blue-50 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t('common.cta.getStartedTips')} 🪄</h3>
        <p class="text-gray-700">{$t($method.getStartedTips)}</p>
      </div>
    </div>
    <div class="mt-5 flex flex-col space-y-5 md:flex-row md:space-x-5">
      <div class="flex-shrink-0 md:w-1/3 bg-blue-50 rounded-lg shadow-md p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t('common.cta.joinTheCommunity')}</h3>
        <p class="text-gray-700">{$t($method.joinTheCommunity)}</p>
      </div>
      <div class="md:w-2/3 p-4 bg-blue-50 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t('common.cta.successWith')}</h3>
        <p class="text-gray-700">{$t($method.successWith)}</p>
      </div>
    </div>
    <div class="text-center mt-6">
      <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full inline-block hover:shadow-lg transition duration-300 ease-in-out">
        {@html $t('common.cta.joinNow')}
      </a>
    </div>
  </div>
</article>
{:else}
  <p>Method not found.</p>
{/if}

<style>
  .opacity-0 {
    opacity: 0;
  }
  .visible {
    opacity: 1;
  }
</style>
