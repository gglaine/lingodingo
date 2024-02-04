<script lang="ts">
import Youtube from './Youtube.svelte'

    const teachers = [
      {
        name: 'Bob',
        countries: [{ flag: '🇬🇧', name: 'UK' }],
        city: 'London',
        languages: ['English'],
        videoId: '3VUCVl-C8QQ',
        imageUrl: '/images/BOB.jpg', // Replace with actual image path
      },
      {
        name: 'Charlotte',
        countries: [{ flag: '🇲🇽', name: 'France' }],
        city: 'Paris',
        languages: ['French', 'English'],
        imageUrl: '/images/charlotte.png', // Replace with actual image path
      },
      {
        name: 'Cornel',
        countries: [{ flag: '🇲🇽', name: 'USA' }],
        city: 'New-York',
        languages: ['French', 'English'],
        videoId: 'https://www.youtube.com/embed/VIDEO_ID1',
        imageUrl: '/images/cornel.png', // Thumbnail for the video // Example video URL
      },
      {
        name: 'Esperanza',
        countries: [{ flag: '🇪🇸', name: 'Spain' }, { flag: '🇲🇽', name: 'Mexico' }],
        city: 'Madrid',
        languages: ['Spanish', 'English'],
        imageUrl: '/images/carletta.png', // Replace with actual image path
      },
      {
        name: 'Oumi',
        countries: [{ flag: '🇨🇺', name: 'Senegal' }, { flag: '🇫🇷', name: 'France' }],
        city: 'Dakar',
        languages: ['English', 'French', 'Wolof'],
        imageUrl: '/images/Oumi.png', // Replace with actual image path
      },
      {
        name: 'Pape',
        countries: [{ flag: '🇺🇸', name: 'USA' }, { flag: '🇫🇷', name: 'France' }],
        city: 'New York',
        languages: ['English', 'French', 'Wolof'],
        videoId: 'https://www.youtube.com/watch?v=3VUCVl-C8QQ',
        imageUrl: '/images/paps.jpeg', // Thumbnail for the video // Example video URL
      },
      // Adding more teachers with mixed media
      {
        name: 'Martha',
        countries: [{ flag: '🇨🇦', name: 'Canada' }],
        city: 'Toronto',
        languages: ['English', 'French'],
        imageUrl: '/images/marthastewart.jpg', // Replace with actual image path
      },
      {
        name: 'Maite',
        countries: [{ flag: '🇮🇹', name: 'France' }],
        city: 'Gaillac',
        languages: ['French', 'English'],
        imageUrl: '/images/maite.jpg', // Replace with actual image path
        videoId: 'https://www.youtube.com/embed/VIDEO_ID3', // Example video URL
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
    <h2 class="text-3xl font-bold mb-4">Meet Our Teachers</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each teachers as teacher}
          <div class="bg-white shadow-md rounded-lg overflow-hidden relative w-full h-64">
            {#if playingVideoId === teacher.videoId && teacher.videoId}
              <!-- Corrected prop passing syntax -->
              <Youtube videoId={teacher.videoId} />
            {:else}
              <img src={teacher.imageUrl} alt={teacher.name} class="w-full h-64 object-cover">
              {#if teacher.videoId}
                <button class="video-button" on:click={() => playVideo(teacher.videoId)}>
                  <!-- Play icon overlay -->
                  <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M10,16.5L16,12L10,7.5V16.5Z" /></svg>
                </button>
              {/if}
            {/if}
          </div>
        {/each}
      </div>
  </div>