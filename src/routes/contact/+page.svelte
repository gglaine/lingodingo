<script lang="ts">
    // You can add any JavaScript here
    import { t } from '$lib';
  </script>
  
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">{$t('common.navbar.contact')}</h1>
    
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.utils.phone')}</h2>
        <p class="text-gray-600">01 47 21 86 04</p>
      </div>
      
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Email</h2>
        <p class="text-gray-600">efelcenter@gmail.com</p>
      </div>
      <div class="mb-6">
        <p class="text-gray-600">54 Avenue de la Liberté 9 2000 NANTERRE</p>
      </div>

      <div class="mt-8">
        <a href="/" class="inline-block bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium py-2 px-4 rounded">{$t('common.utils.returnhome')}</a>
      </div>
    </div>
</div>



  
