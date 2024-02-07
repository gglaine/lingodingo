<script lang="ts">
  import { t } from '$lib';

  const sessions = [
    { id: 'accents', image: '/images/methods/various_ages.png', titleKey: 'common.sessions.accents.title', descKey: 'common.sessions.accents.description' },
    { id: 'etymology', image: '/images/methods/teaching_props.png', titleKey: 'common.sessions.etymology.title', descKey: 'common.sessions.etymology.description' },
    { id: 'news', image: '/images/methods/teaching_personnel.png', titleKey: 'common.sessions.news.title', descKey: 'common.sessions.news.description' },
    { id: 'bav', image: '/images/methods/street_class.png', titleKey: 'common.sessions.bav.title', descKey: 'common.sessions.bav.description' },
    // Assuming 'outdoor_class', 'museum_class', and 'dingologo' are IDs for other sessions
    { id: 'outdoor', image: '/images/methods/outdoor_class.png', titleKey: 'common.sessions.outdoor.title', descKey: 'common.sessions.outdoor.description' },
    { id: 'museum', image: '/images/methods/museum_class.png', titleKey: 'common.sessions.museum.title', descKey: 'common.sessions.museum.description' },
    // If 'dingologo' is not a session but a logo, it wouldn't be listed here
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each sessions as session}
    <div class="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-100">
      <img src={session.image} alt={`Image for ${session.id}`} class="w-full md:w-1/2 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{$t(session.titleKey)}</h3>
        <p class="text-gray-600">{$t(session.descKey)}</p>
      </div>
    </div>
  {/each}
</div>

<style>
  /* Custom styles can still be added here if necessary */
</style>
