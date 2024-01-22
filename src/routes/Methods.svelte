<!-- src/components/Methods.svelte -->
<script lang="ts">
  // Assuming $t is your translation function
  import { t } from '$lib';

  const methods = [
    {
      id: 'clt',
      titleKey: 'common.methods.clt.title',
      descKey: 'common.methods.clt.description',
      imageSrc: '/images/diverse.png' // Replace with the actual image source
    },
    {
      id: 'tpr',
      titleKey: 'common.methods.tpr.title',
      descKey: 'common.methods.tpr.description',
      imageSrc: '/images/engaging_talk.png' // Replace with the actual image source
    },
    {
      id: 'storytelling',
      titleKey: 'common.methods.storytelling.title',
      descKey: 'common.methods.storytelling.description',
      imageSrc: '/images/storytelling.png' // Replace with the actual image source
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each methods as method}
    <div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <img src={method.imageSrc} alt={`Image for ${method.id}`} class="w-full md:w-1/2 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t(method.titleKey)}</h3>
        <p class="text-gray-600">{$t(method.descKey)}</p>
      </div>
    </div>
  {/each}
</div>
<style>
  /* You can still use custom styles if needed */
</style>
