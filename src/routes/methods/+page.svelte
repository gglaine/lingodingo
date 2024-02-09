<script lang="ts">
  import { t } from '$lib'; // Adjust this path to where your translation function is actually located
  import methodsData from '$lib/methodsData';
</script>

<main>
  <div class="w-full bg-slate-200 text-slate-900 text-center p-8">
    <h3 class="font-bold text-2xl md:text-3xl">{$t('common.cta.tagline')}</h3>
    <h3 class="font-bold text-xl md:text-2xl mt-2">{$t('common.cta.slogan')}</h3>
    <p class="mt-4 text-base md:text-lg">{$t('common.cta.methodsDescription')}</p>
    <p class="mt-2 text-base md:text-lg">{$t('common.cta.joinSession')}</p>
  </div>
  
  <!-- Modified div for a masonry-like layout using CSS columns -->
  <div class="p-8 pt-4 mb-4" style="column-count: 3; column-gap: 1rem;">
    {#each methodsData as method (method.id)}
      <div class="mb-4 break-inside-avoid-page">
        <a href={`/methods/${method.id}`} class="no-underline block">
          <article class="border rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:bg-gray-100 flex flex-col mb-4">
            <img src={method.imageSrc} alt={$t(method.titleKey)} class="w-full h-auto object-cover">
            <div class="p-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-2">{$t(method.titleKey)}</h2>
              <p class="text-gray-600 mb-2">{$t(method.descKey)}</p>
              <span class="block mt-2 text-blue-500 hover:underline">{$t('common.learnMore')}</span>
            </div>
          </article>
        </a>
      </div>
    {/each}
  </div>
</main>


