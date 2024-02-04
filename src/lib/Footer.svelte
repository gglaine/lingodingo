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
            <li><button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
              </svg></li>
            <li><a href="#" class="hover:text-gray-300"><button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
              <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
              </svg>
              Sign in with Github
              </button></a></li>
            <li><a href="#" class="hover:text-gray-300">LinkedIn</a></li>
          </ul>
        </div>

      </div>
  
      <div class="text-center mt-6">
        <p class="text-sm">Agrée ESS - Entreprise Sociale et Solidaire</p>
        <p class="text-sm">© {new Date().getFullYear()} EFEL CENTER. All Rights Reserved.</p>
        <p class="text-sm">© {new Date().getFullYear()} Design by GL</p>
      </div>
      <img src="/images/logo-esus.png" alt="Logo" class="h-24 md:h-24 my-4 mx-auto"> <!-- Add your logo URL in the src attribute -->

    </div>
  </footer>
  
  <style>
    /* You can add additional styling here */
  </style>
  
  