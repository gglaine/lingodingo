<script>
    import { onMount } from 'svelte';
  
    export let videoId = 'Pi9fFbW8yqQ&t=5s'; // Default video ID, can be overridden by props
  
    let player;
    let playerReady = false;
  
    onMount(() => {
      window.onYouTubeIframeAPIReady = () => {
        createPlayer(videoId);
      };
  
      if (window['YT'] && window['YT'].Player) {
        createPlayer(videoId);
      }
    });
  
    $: if (playerReady) {
      player.loadVideoById(videoId);
    }
  
    function createPlayer(videoId) {
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: videoId,
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReady,
        }
      });
    }
  
    function onPlayerReady(event) {
      playerReady = true;
    }
  </script>
  
  <div id="player"></div>
  