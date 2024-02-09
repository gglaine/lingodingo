<script lang='ts'>
      import { t, locale } from '$lib';// Import any necessary functions or stores
  </script>
  
  <footer class="bg-slate-100 text-slate-800 py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <!-- Quick Links -->
        <div class="w-full md:w-1/4 mb-6 md:mb-0">
       
                <img src="/images/lingo-logo.png" alt="Logo" class="h-16 md:h-16"> <!-- Logo image -->
             
          <ul class="ml-2">
            <li><a href="/home" class="hover:text-gray-300">{$t('common.navbar.home')}</a></li>
            <li><a href="/about" class="hover:text-gray-300">{$t('common.navbar.about')}</a></li>
            <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

<!-- Social Media Links -->
<div class="w-full md:w-1/4">
  <h5 class="uppercase mb-4 font-bold">Suivez nous</h5>
  <ul class="flex items-center space-x-4">
    <!-- Facebook -->
    <li>
      <a href="https://www.facebook.com/YourPage" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
        <i class="fab fa-facebook-f w-4 h-4 me-2"></i>
      </a>
    </li>
    <!-- Instagram -->
    <li>
      <a href="https://www.instagram.com/YourUsername" class="text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-pink-200/55 me-2 mb-2">
        <i class="fab fa-instagram w-4 h-4 me-2"></i>
      </a>
    </li>
    <!-- YouTube -->
    <li>
      <a href="https://www.youtube.com/YourChannel" class="text-white bg-[#FF0000] hover:bg-[#FF0000]/90 focus:ring-4 focus:outline-none focus:ring-[#FF0000]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#FF0000]/55 me-2 mb-2">
        <i class="fab fa-youtube w-4 h-4 me-2"></i>
      </a>
    </li>
  </ul>
</div>

      </div>
  
      <div class="text-center mt-6">
        <p class="text-sm">Agrée ESS - Entreprise Sociale et Solidaire</p>
        <p class="text-sm">© {new Date().getFullYear()} Tous droits réservés EFEL CENTER</p>
        <p class="text-sm">© {new Date().getFullYear()} Design by G. </p>
      </div>
      <img src="/images/LOGO-FEELINGO.png" alt="Logo" class="h-24 md:h-24 my-4 mx-auto"> <!-- Add your logo URL in the src attribute -->

    </div>
  </footer>
  
  <style>
    /* You can add additional styling here */
  </style>
  
  