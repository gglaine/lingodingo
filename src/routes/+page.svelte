<!-- src/routes/+page.svelte -->
<script>
    import { t, locale } from '$lib';
  import Hero from '../components/Hero.svelte';
  import Methods from '../components/Methods.svelte';
  import Sessions from '../components/Sessions.svelte';
  import Teachers from '../components/Teachers.svelte';
  import Sponsors from '../components/Sponsors.svelte';

  let countries = [
    // French-speaking countries
    { emoji: "🇫🇷", name: "France" },
    { emoji: "🇧🇪", name: "Belgium" },
    { emoji: "🇨🇦", name: "Canada" },
    { emoji: "🇨🇭", name: "Switzerland" },
    { emoji: "🇲🇦", name: "Morocco" },
    { emoji: "🇹🇳", name: "Tunisia" },
    { emoji: "🇩🇿", name: "Algeria" },
    { emoji: "🇸🇳", name: "Senegal" },
    { emoji: "🇲🇱", name: "Mali" },
    { emoji: "🇳🇪", name: "Niger" },
    { emoji: "🇨🇮", name: "Ivory Coast" },
    { emoji: "🇧🇯", name: "Benin" },
    { emoji: "🇹🇬", name: "Togo" },
    { emoji: "🇬🇦", name: "Gabon" },
    { emoji: "🇨🇩", name: "Democratic Republic of the Congo" },
    { emoji: "🇷🇼", name: "Rwanda" },
    { emoji: "🇧🇮", name: "Burundi" },
    { emoji: "🇨🇲", name: "Cameroon" },
    { emoji: "🇨🇫", name: "Central African Republic" },
    { emoji: "🇨🇬", name: "Republic of the Congo" },

    // English-speaking countries
    { emoji: "🇺🇸", name: "United States" },
    { emoji: "🇬🇧", name: "United Kingdom" },
    { emoji: "🇦🇺", name: "Australia" },
    { emoji: "🇨🇦", name: "Canada" },
    { emoji: "🇮🇪", name: "Ireland" },
    { emoji: "🇳🇿", name: "New Zealand" },
    { emoji: "🇿🇦", name: "South Africa" },
    { emoji: "🇮🇳", name: "India" },
    { emoji: "🇯🇲", name: "Jamaica" },
    { emoji: "🇧🇸", name: "The Bahamas" },
    { emoji: "🇳🇬", name: "Nigeria" },
    { emoji: "🇵🇰", name: "Pakistan" },
    { emoji: "🇵🇭", name: "Philippines" },
    { emoji: "🇸🇬", name: "Singapore" },
    { emoji: "🇹🇿", name: "Tanzania" },
    // Add more countries as needed
];
  </script>
  
  <div class="container mx-auto p-4">
    <!-- Wrap your content inside a container -->
    <!-- Add space between Header and Hero -->
    <div class="mt-0 w-full">
      <!-- Add a heading for Hero section -->
      <Hero />
    </div>

 
   
    
    
  
    <!-- Add space between Hero and Methods -->
    <div class="mt-8 p-8 font-bold">
      <a href={`/methods`} class="no-underline">
        <h2 class="text-2xl font-semibold mb-4">{$t('common.sections.methods')}</h2>
      </a>
      <Methods />
    </div>
  
    <!-- Add space between Methods and Sessions -->
    <div class="mt-8 p-8">
      <!-- Add a heading for Sessions section -->
      <h2 class="text-2xl font-semibold mb-4">{$t('common.sections.sessions')}</h2>
      <Sessions />
    </div>
        <!-- Add space between Methods and Sessions -->
        <div class="mt-8 p-8">
          <Teachers/>
        </div>
        <div class="p-4 mt-12">
          <h2 class="text-2xl font-semibold mb-4">{$t('common.cta.meetPeople')}</h2>
    
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
            {#each countries as country}
              <div class="p-2 border border-gray-300 rounded-lg text-center">
                <span class="text-2xl">{country.emoji}</span>
              </div>
            {/each}
          </div>
        </div>
            <!-- Add space between Methods and Sessions -->
    <div class="mt-8">
      <Sponsors />
    </div>

  </div>
  
  
  <!-- Rest of your homepage content goes here -->
  