<script lang='ts'>
  import { t, locale } from '$lib'; // Import necessary functions or stores
</script>

<footer class="bg-gray-100 text-gray-800 py-8">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap justify-between items-center">
      <!-- Logo and Quick Links -->
      <div class="w-full lg:w-1/4 mb-6 lg:mb-0">
        <a href="/" class="flex items-center justify-center lg:justify-start mb-4">
          <img src="/images/logo-new-tp.png" alt="Logo" class="h-12 w-auto">
        </a>
        <ul class="text-sm space-y-2">
          <li><a href="/home" class="hover:text-blue-500 transition-colors duration-300">{$t('common.navbar.home')}</a></li>
          <li><a href="/about" class="hover:text-blue-500 transition-colors duration-300">{$t('common.navbar.about')}</a></li>
          <li><a href="/contact" class="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
        </ul>
      </div>

      <!-- Social Media Links -->
      <div class="w-full lg:w-1/4">
        <h5 class="uppercase mb-4 font-bold text-sm">Suivez nous</h5>
        <ul class="flex items-center justify-center lg:justify-start space-x-4">
          <li>
            <a href="https://www.facebook.com/YourPage" class="text-gray-800 hover:bg-gray-200 rounded-lg p-2 transition-colors duration-300">
              <i class="fab fa-facebook-f"></i> <!-- Ensure you have FontAwesome or similar -->
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/YourUsername" class="text-gray-800 hover:bg-gray-200 rounded-lg p-2 transition-colors duration-300">
              <i class="fab fa-instagram"></i> <!-- FontAwesome icon -->
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/YourChannel" class="text-gray-800 hover:bg-gray-200 rounded-lg p-2 transition-colors duration-300">
              <i class="fab fa-youtube"></i> <!-- FontAwesome icon -->
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Copyright and Legal Text -->
    <div class="text-center mt-8 text-sm">
      <p>Agrée ESS - Entreprise Sociale et Solidaire</p>
      <p>© {new Date().getFullYear()} Tous droits réservés EFEL CENTER</p>
      <p>Design by G.</p>
    </div>
  </div>
</footer>
