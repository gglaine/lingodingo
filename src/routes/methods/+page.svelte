<script lang="ts">
  import { t } from '$lib'; // Adjust this path to where your translation function is actually located
  import methodsData from '$lib/methodsData';
</script>

<main>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each methodsData as method (method.id)}
          <article class="border rounded-lg overflow-hidden shadow-md hover:shadow-lg">
              <img src={method.imageSrc} alt={$t(method.titleKey)} class="w-full h-auto" />
              <div class="p-4">
                  <h2 class="text-xl font-semibold mb-2">{$t(method.titleKey)}</h2>
                  <p class="text-gray-600">{$t(method.descKey)}</p>
                  <a href={`/methods/${method.id}`} class="block mt-2 text-blue-500 hover:underline">{$t('common.learnMore')}</a>
              </div>
          </article>
      {/each}
  </div>
</main>
