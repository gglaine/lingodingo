<!-- Sponsors.svelte -->
<script>
    import { t } from '$lib/translations';
    // Import any necessary functions or stores
  </script>
  
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Nos partenaires</h2>
  
    <!-- Add your sponsor content here -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
      <!-- Sponsor Item -->
      <div class="bg-slate-200 shadow-md rounded-lg overflow-hidden p-4">
        <img src="/images/sponsors/hautsdeseine.png" alt="Sponsor 1" class="w-full h-24 object-contain" />
        <div class="p-4 text-slate-700">
          <h3 class="text-sm font-semibold mb-0">Département des Hauts de Seine</h3>
          <p class="text-slate-700">Quartiers connectés</p>
        </div>
      </div>
      <!-- <div class="bg-slate-200 shadow-md rounded-lg overflow-hidden p-4">
        <img src="/images/sponsors/bridge.png" alt="Sponsor 1" class="w-full h-24 object-contain" />
        <div class="p-4 text-slate-700">
          <h3 class="text-sm font-semibold mb-0">The Bridge École-Entreprises</h3>
          <p class="text-slate-700">Business English 2024</p>
        </div>
      </div> -->
      <div class="bg-slate-200 shadow-md rounded-lg overflow-hidden p-4">
        <img src="/images/sponsors/cites.png" alt="Sponsor 1" class="w-full h-24 object-contain" />
        <div class="p-4 text-slate-700">
          <h3 class="text-sm font-semibold mb-0">Cité Educatives</h3>
          <p class="text-slate-700">Label 2023-2024</p>
        </div>
      </div>

      
      
      <!-- Add more sponsor items as needed -->
  
    </div>
    <!-- <div class="bg-white shadow-md rounded-lg overflow-hidden text-center mt-6">
      <div class="p-12">
      <img src="/images/logo-new-tp.png" alt="Sponsor 1" class="w-full h-24 object-cover" />
     
        <a href="your-link-url-here">
          <h3 class="text-sm font-semibold mb-2">{$t('common.cta.sponsorUs')}</h3>

        </a>
        <p class="text-gray-600">Construisons ensemble</p>
      
    </div> -->
    </div>

  
  <style>
    /* You can add additional styling here */
  </style>
  