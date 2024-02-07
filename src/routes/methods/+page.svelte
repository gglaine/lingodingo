<script lang="ts">
  import { t } from '$lib'; // Adjust this path to where your translation function is actually located
  import methodsData from '$lib/methodsData';
</script>

<main>
  <div class="p-8">
    <h3 class="font-bold text-xl">French and English Easy Learning</h3>
    <h3 class="font-bold text-xl">Can you F.E.E.L. It?</h3>
    <p>Des méthodes pour tous, quel que soit votre niveau</p>
    <p>Rejoignez une session sur le thème qui vous plait</p>
  </div>
 
  <!-- Update this div to use Tailwind's responsive utilities -->
  <div class="p-8 pt-4 mb-4 md:columns-3 md:gap-4">
    {#each methodsData as method (method.id)}
      <!-- Use Tailwind's break-inside utility if available or fallback to inline style for older versions -->
      <div class="mb-4 break-inside-avoid">
        <a href={`/methods/${method.id}`} class="no-underline block">
          <article class="border rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:bg-gray-100 flex flex-col">
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

