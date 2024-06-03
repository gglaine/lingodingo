<script>
  import { t } from '$lib';
  import { onMount } from 'svelte';

  onMount(() => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      parallaxLayers.forEach((layer, index) => {
        const depth = index + 1;
        const movement = (scrollPosition * depth) / 2;
        layer.style.transform = `translateY(${movement}px)`;
      });
    });
  });
</script>

<!-- Hero Section with Parallax Effect -->
<div class="hero overflow-hidden relative flex flex-col mb-8 items-center justify-around" style="height: 100vh; width: 100vw; background-repeat: no-repeat;">
  <!-- Background Layers for Parallax Effect -->
  <div class="absolute inset-0 z-0">
    <img src="/images/refred2.png" class="absolute h-full object-cover parallax-layer" style="z-index: 2; left: 200; top: 0; opacity: 1;">

    <img src="/images/baobab2.png" class="absolute w-full h-full object-contain parallax-layer" style="z-index: 1; left: 0%; top: 0%; opacity: 1;">
    <img src="/images/methods/busriders.svg" class="absolute w-full h-full object-cover parallax-layer" style="z-index: 1; left: -5%; top: 0%; opacity: 1;">
  </div>

  <div class="relative z-10 w-[1/2] bg-violet-800 w-128 overflow-visible bg-opacity-90 items-center justify-around flex flex-col p-8 rounded-md shadow-xl">
    <h1 class="text-6xl font-bold text-center text-slate-100 mb-4">{$t('common.hero.title')}</h1>
    <h1 class="text-4xl font-bold text-center text-slate-100 mb-4">{$t('common.hero.subtitle')}</h1>
  </div>
</div>

<style>
.hero::before {
  content: "";
  background-size: cover;
  opacity: 95%;
  background-repeat: no-repeat;
  background-position: top;
  filter: blur(13px); /* Adjust the blur strength as needed */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it's behind the content */
  transition: transform 0.5s ease-out; /* Smooth transition for zoom effect */
}

.hero:hover::before {
  transform: scale(1.05); /* Scale the background image up on hover */
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
