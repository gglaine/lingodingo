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
  
  <div class="container mx-auto py-6">
    <h2 class="text-3xl font-bold mb-8 mt-1">{$t('common.sections.teachers')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each teachers as teacher}
        <div class="bg-white shadow-md rounded-lg overflow-hidden relative w-full h-64">
          {#if playingVideoId === teacher.videoId && teacher.videoId}
            <!-- Use the Youtube component for embedding YouTube videos -->
            <Youtube videoId={teacher.videoId} />
          {:else}
            <img src={teacher.imageUrl} alt={teacher.name} class="w-full h-64 object-cover">
            {#if teacher.videoId}
            <button class="video-button w-24 h-24 rounded-full z-10 bg-white hover:bg-red-500 hover:scale-105" on:click={() => playVideo(teacher.videoId)}>
              <!-- Play icon overlay -->
              <svg class="w-24 h-16 text-blue-500 hover:text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10,16.5L16,12L10,7.5V16.5Z" />
              </svg>
            </button>
            
            {/if}
          {/if}
          <!-- Display teacher's name and other details -->
          <div class="px-4 py-2 absolute bottom-0 left-0 bg-white text-gray-800">
            <h3 class="text-lg font-semibold mb-1">{teacher.name}</h3>
            <p class="text-sm"> {teacher.city},
              {#each teacher.countries as country}
                <span class="mr-2">{country.flag} {country.name}</span>
              {/each}
             
            </p>
     
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  