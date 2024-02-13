<!-- Sponsors.svelte -->
<script>
    import { t } from '$lib/translations';
    // Import any necessary functions or stores
  </script>
  
  <div class="container mx-auto py-6">
    <h2 class="text-3xl font-bold mb-4">Our Sponsors</h2>
  
    <!-- Add your sponsor content here -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- Sponsor Item -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="/images/sponsors/hautsdeseine.png" alt="Sponsor 1" class="w-full h-32 object-contain" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Département des Hauts de Seine</h3>
          <p class="text-gray-600">Quartiers connectés</p>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="/images/sponsors/bridge.png" alt="Sponsor 1" class="w-full h-32 object-contain" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">The Bridge École-Entreprises</h3>
          <p class="text-gray-600">Business English 2024</p>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="/images/sponsors/cites.png" alt="Sponsor 1" class="w-full h-32 object-contain" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">Cité Educatives</h3>
          <p class="text-gray-600">Label 2023-2024</p>
        </div>
      </div>
      <div class="bg-white shadow-md rounded-lg overflow-hidden text-center">
        <img src="/images/logo-new-tp.png" alt="Sponsor 1" class="w-full h-32 object-contain" />
        <div class="p-4">
          <a href="your-link-url-here">
            <h3 class="text-xl font-semibold mb-2">{$t('common.cta.sponsorUs')}</h3>

          </a>
          <p class="text-gray-600">Construisons ensemble</p>
        </div>
      </div>
      
      
      <!-- Add more sponsor items as needed -->
  
    </div>
  </div>
  
  <style>
    /* You can add additional styling here */
  </style>
  