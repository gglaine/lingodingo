<script>
  import { t } from '$lib';
  import { onMount } from 'svelte';

  onMount(() => {
    const parallaxLayers = [...document.querySelectorAll('.parallax-layer')].map(layer => ({
      element: layer,
      depth: parseFloat(layer.getAttribute('data-depth')) || 1,
    }));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      parallaxLayers.forEach(({ element, depth }) => {
        const movement = (scrollPosition * depth) / 2;
        element.style.transform = `translateY(${movement}px)`;
      });
    };

    // Optimize scroll listener with passive true for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<!-- Hero Section with Parallax Effect -->
<div class="hero overflow-hidden relative flex flex-col mb-8 items-center justify-around h-screen w-full bg-no-repeat">
  <!-- Background Layers for Parallax Effect -->
  <div class="absolute inset-0 z-0">
    <img src="/images/methods/busriders.png" class="absolute w-full h-full object-cover parallax-layer" data-depth="1.2" alt="busriders">
  </div>

  <div class="relative z-10 w-full md:w-1/2 bg-white bg-opacity-90 flex flex-col items-center justify-center p-2 rounded-md shadow-xl mt-4 md:mt-0 md:ml-auto">
    <div class="p-4 rounded-lg opacity-90 text-center">
      <h1 class="text-6xl text-blue-600 font-bold mb-4">{@html $t('common.hero.title')}</h1>
      <h2 class="text-3xl text-blue-800 italic font-medium mb-4">{@html $t('common.hero.subtitle')}</h2>
    </div>
  </div>
</div>

<style>
  .hero::before {
    content: "";
    background-image: url('images/walkny.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    filter: blur(1px);
    opacity: 0.95;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.5s ease-out;
  }

  .hero:hover::before {
    transform: scale(1.05);
  }

  button {
    @apply py-2 px-4 bg-blue-500 text-white rounded-md transition duration-300;
  }

  button:hover {
    @apply bg-blue-700;
  }
</style>
