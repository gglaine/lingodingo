<!-- src/components/Methods.svelte -->
<script lang="ts">
  // Assuming $t is your translation function
  import { t } from '$lib';

  const methods = [
    {
      id: 'clt',
      titleKey: 'common.methods.clt.title',
      descKey: 'common.methods.clt.description',
      imageSrc: '/images/diverse.png' // Original image, replace as needed
    },
    {
      id: 'tpr',
      titleKey: 'common.methods.tpr.title',
      descKey: 'common.methods.tpr.description',
      imageSrc: '/images/engaging_talk.png' // Original image, replace as needed
    },
    {
      id: 'storytelling',
      titleKey: 'common.methods.storytelling.title',
      descKey: 'common.methods.storytelling.description',
      imageSrc: '/images/storytelling.png' // Original image, replace as needed
    },
    // New methods with provided images
    {
      id: 'recipeTranslation',
      titleKey: 'common.methods.recipeTranslation.title',
      descKey: 'common.methods.recipeTranslation.description',
      imageSrc: '/images/recipe.png' // Image for Recipe Translation
    },
    {
      id: 'languageMedia',
      titleKey: 'common.methods.languageMedia.title',
      descKey: 'common.methods.languageMedia.description',
      imageSrc: '/images/podcasts_and_videos.png' // Image for Language Podcasts and Videos
    },
    {
      id: 'mediaClub',
      titleKey: 'common.methods.mediaClub.title',
      descKey: 'common.methods.mediaClub.description',
      imageSrc: '/images/movie_club.png' // Image for Movie and Book Club
    },
    {
      id: 'socialMediaChallenge',
      titleKey: 'common.methods.socialMediaChallenge.title',
      descKey: 'common.methods.socialMediaChallenge.description',
      imageSrc: '/images/social_media_app.png' // Image for Social Media Challenge
    },
    {
      id: 'flashcards',
      titleKey: 'common.methods.flashcards.title',
      descKey: 'common.methods.flashcards.description',
      imageSrc: '/images/flashcards.png' // Image for Flashcards and Vocabulary Lists
    },
    {
      id: 'penPals',
      titleKey: 'common.methods.penPals.title',
      descKey: 'common.methods.penPals.description',
      imageSrc: '/images/penpals.png' // Image for Pen Pals
    }
    // ... Add any other methods as needed
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each methods as method}
  <a href="/methods" class="no-underline">
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
<style>
  /* You can still use custom styles if needed */
</style>
