<!-- src/routes/+page.svelte -->
<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import Hero from '../components/Hero.svelte';
    import Methods from '../components/Methods.svelte';
  import Sessions from '../components/Sessions.svelte';
  import Teachers from '../components/Teachers.svelte';
  import Sponsors from '../components/Sponsors.svelte';
  </script>
  
  <div class="container mx-auto">
    <!-- Wrap your content inside a container -->

  
    <!-- Add space between Header and Hero -->
    <div class="mt-8">
      <!-- Add a heading for Hero section -->
      <Hero />
    </div>
  
    <!-- Add space between Hero and Methods -->
    <div class="mt-8">
      <!-- Add a heading for Methods section -->
      <h2 class="text-2xl font-semibold mb-4">Methods Section</h2>
      <Methods />
    </div>
  
    <!-- Add space between Methods and Sessions -->
    <div class="mt-8">
      <!-- Add a heading for Sessions section -->
      <h2 class="text-2xl font-semibold mb-4">Sessions Section</h2>
      <Sessions />
    </div>
        <!-- Add space between Methods and Sessions -->
        <div class="mt-8">
          <!-- Add a heading for Sessions section -->
          <h2 class="text-2xl font-semibold mb-4">Sessions Section</h2>
          <Teachers/>
        </div>
            <!-- Add space between Methods and Sessions -->
    <div class="mt-8">
      <!-- Add a heading for Sessions section -->
      <h2 class="text-2xl font-semibold mb-4">Sessions Section</h2>
      <Sponsors />
    </div>

  </div>
  
  
  <!-- Rest of your homepage content goes here -->
  