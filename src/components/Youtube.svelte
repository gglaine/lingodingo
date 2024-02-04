<script lang="ts">
    import { onMount } from 'svelte';
    
    export let videoId: string = 'Pi9fFbW8yqQ'; // Default video ID, can be overridden by props
    
    let player: YT.Player | undefined;
    let playerReady: boolean = false;
    
    onMount(() => {
      const onYouTubeIframeAPIReady = () => {
        if (videoId) createPlayer(videoId);
      };
    
      // Assigning the function directly to `window` can overwrite existing handlers.
      // It's safer to check if YT is already loaded.
      if ((window as any).YT && (window as any).YT.Player) {
        createPlayer(videoId);
      } else {
        // This approach might still not be entirely safe if multiple components try to set this at once.
        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
    });
    
    $: if (playerReady && player) {
      player.loadVideoById(videoId);
    }
    
    function createPlayer(videoId: string) {
      player = new YT.Player('player', {
        height: '220', // Set height to 220px
        width: '100%', // Set width to 100% for responsiveness
        videoId: videoId,
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReady,
        }
      });
    }
    
    function onPlayerReady(event: YT.PlayerEvent) {
      playerReady = true;
    }
</script>
  
<style>
  /* Define the aspect ratio wrapper */
  .responsive-video-container {
    position: relative;
    width: 100%;
  }

  /* Style the iframe to fill the container */
  .responsive-video-container iframe {
    width: 100%;
  }
</style>

<!-- Wrap the video in a responsive container -->
<div class="responsive-video-container">
  <div id="player" class="p-4 border-slate-200 border-8"></div>
</div>
