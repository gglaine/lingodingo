<script>
  import { t } from '$lib';
</script>

<div class="hero relative flex flex-col mt-8 mb-24 items-center justify-center md:bg-cover md:bg-center" style="height: 70vh;">
  <div class="bg-blue-600 bg-opacity-90 w-full md:w-[40%] p-12 rounded-lg shadow-xl">
    <h1 class="text-4xl font-bold text-center text-white mb-4">{$t('common.hero.title')}</h1>
    <p class="text-2xl text-center text-white mb-6">{$t('common.hero.subtitle')}</p>
  
    <button type="button" class="relative ml-auto flex flex-col justify-center items-center w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-600 border border-transparent rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
      <span class="mr-2 text-center">
        {$t('common.hero.cta')}
      </span>
      <span class="animate-pulse text-4xl">
        🖐🏻
      </span>
    </button>
  </div>
</div>


<style>
/* Apply the blur effect to the pseudo-element */
.hero::before {
  content: "";
  background-image: url("/images/eyecity.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(0px); /* Adjust the blur strength as needed */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it's behind the content */
}

button {
  /* Style your button here */
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
