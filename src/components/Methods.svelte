<script lang="ts">
  import { t } from '$lib';
  import methodsData from '$lib/methodsData';

  // Reactively transform methodsData based on the current locale
  // $: localizedMethodsData = methodsData.map(method => ({
  //   ...method,
  //   title: $t(method.titleKey),
  //   description: $t(method.descKey)
  // }));
</script>


<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each methodsData as method}
    <a href={`/methods/${method.id}`} class="no-underline">
      <div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-100">
        <img src={method.imageSrc} alt={`Image for ${method.id}`} class="w-full md:w-1/2 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t(method.titleKey)}</h3>
          <p class="text-gray-600">{$t(method.descKey)}</p>
        </div>
      </div>
    </a>
  {/each}
</div>
