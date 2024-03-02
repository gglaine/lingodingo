<script lang="ts">
    import { t } from '$lib';
    import Youtube from './Youtube.svelte'; 

    const teachers = [
      {
        name: 'Bob',
        countries: [{ flag: '🇬🇧', name: 'UK' }],
        city: 'London',
        languages: ['English'],
        videoId: 'Pi9fFbW8yqQ',
        imageUrl: '/images/teachers/bob.png', // Replace with actual image path
      },
      {
        name: 'Charlotte',
        countries: [{ flag: '🇲🇫', name: 'France' }],
        city: 'Paris',
        languages: ['French', 'English'],
        imageUrl: '/images/teachers/charlotte.png', // Replace with actual image path
      },
      {
        name: 'Cornel',
        countries: [{ flag: '🇫🇷', name: 'USA' }],
        city: 'New-York',
        languages: ['French', 'English'],
        videoId: 'hLOw_SzkRQ8',
        imageUrl: '/images/teachers/cornel.png', // Thumbnail for the video // Example video URL
      },
      {
        name: 'Esperanza',
        countries: [{ flag: '🇲🇽', name: 'Mexico' }],
        city: 'Mexico',
        languages: ['Spanish', 'English'],
        imageUrl: '/images/teachers/carletta.png', // Replace with actual image path
      },
      {
        name: 'Oumi',
        countries: [{ flag: '🇨🇺', name: 'Senegal' }, { flag: '🇫🇷', name: 'France' }],
        city: 'Dakar',
        languages: ['English', 'French', 'Wolof'],
        imageUrl: '/images/teachers/Oumi.png', // Replace with actual image path
      },
      {
        name: 'Pape',
        countries: [{ flag: '🇺🇸', name: 'USA' }, { flag: '🇫🇷', name: 'France' }],
        city: 'New York',
        languages: ['English', 'French', 'Wolof'],
        videoId: 'b_8GXsRzZoM',
        imageUrl: '/images/teachers/paps.png', // Thumbnail for the video // Example video URL
      },
      // Adding more teachers with mixed media
      {
        name: 'Maite',
        countries: [{ flag: '🇮🇹', name: 'France' }],
        city: 'Gaillac',
        languages: ['French', 'English'],
        imageUrl: '/images/teachers/maite.jpg', // Replace with actual image path
        videoId: 'z94mWhAavkQ', // Example video URL
      },
      {
        name: 'Guillaume',
        countries: [{ flag: '🇮🇹', name: 'France' }],
        city: 'Paris',
        languages: ['French', 'English'],
        imageUrl: '/images/teachers/gui2.png', // Replace with actual image path
        videoId: 'z94mWhAavkQ', // Example video URL
      },
      {
        name: 'Sofiane',
        countries: [{ flag: '🇮🇹', name: 'France' }],
        city: 'Naterre',
        languages: ['French', 'English'],
        imageUrl: '/images/teachers/sofiane.png', // Replace with actual image path
        videoId: 'z94mWhAavkQ', // Example video URL
      },
    ];
        // Correctly declare 'playingVideoUrl' to track the currently playing video URL
        let playingVideoId = '';
  
        function playVideo(videoId: string | undefined) {
  if (!videoId) {
    console.warn('No video ID provided');
    return; // Exit the function if videoId is undefined
  }
  playingVideoId = videoId;
}

  
// Function to handle keydown events
function handleKeydown(event: KeyboardEvent, videoUrl: string) {
  // Check if the key pressed is 'Enter'
  if (event.key === 'Enter') {
    playVideo(videoUrl); // Use 'videoUrl' instead of 'videoId'
  }
}

  </script>
  
  <style>
    .video-button {
      background: none;
      border: none;
      padding: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  </style>
  
  <div class="container mx-auto py-12">
    <h2 class="text-5xl text-left font-bold text-slate-800 mb-4">{$t('common.sections.teachers')}</h2>
    <h3 class="mb-8 text-2xl">Des profs de tous les pays avec tous les accents et pour tous les niveaux</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each teachers as teacher}
        <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <!-- Conditional Rendering for Video/Image -->
          {#if playingVideoId === teacher.videoId && teacher.videoId}
            <!-- Embed YouTube Video -->
            <Youtube videoId={teacher.videoId}  />
          {:else}
            <img src={teacher.imageUrl} alt={teacher.name} class="w-full h-64 object-cover transition-transform duration-300 hover:scale-105">
            {#if teacher.videoId}
              <!-- Play Video Button -->
              <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition duration-300" on:click={() => playVideo(teacher.videoId)}>
                <!-- SVG Play Icon -->
                <svg viewBox="0 0 24 24" class="w-8 h-8 text-white" fill="currentColor">
                  <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                </svg>
              </button>
            {/if}
          {/if}
          <!-- Teacher Details Overlay -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
            <h3 class="text-xl font-semibold">{teacher.name}</h3>
            <p class="text-sm"> {teacher.city},
              {#each teacher.countries as country}
                <span>{country.flag} {country.name}</span>
              {/each}
            </p>
          </div>
        </div>
      {/each}
    </div>
</div>

  