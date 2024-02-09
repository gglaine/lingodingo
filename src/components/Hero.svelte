<script>
  import { t } from '$lib';
</script>

<div class="hero relative flex flex-col items-center justify-center md:bg-contain" style="height: 70vh;"> <!-- Apply the inline style here --><!-- Adjust the width and height as needed -->
  <div class="bg-slate-100 w-[1/2] opacity-90 p-12 rounded-lg">
<!-- Usage in your Svelte component -->
<h1 class="text-4xl font-bold text-slate-800 mb-4">{$t('common.hero.title')}</h1>
<p class="text-2xl text-slate-800 text-center mb-6">{$t('common.hero.subtitle')}</p>

<button type="button" class="group text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  {$t('common.hero.cta')}
  <span class="inline-block ml-2">
    <svg class="w-6 h-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
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
