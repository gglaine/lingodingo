<script>
  import { t } from '$lib';
</script>

<div class="hero relative flex flex-col items-center justify-center md:bg-contain" style="height: 70vh;"> <!-- Apply the inline style here --><!-- Adjust the width and height as needed -->
  <div class="bg-slate-100 w-64 p-4 rounded-md">
<!-- Usage in your Svelte component -->
<h1 class="text-4xl font-bold text-slate-800 mb-4">{$t('common.hero.title')}</h1>
<p class="text-2xl text-slate-800 text-center mb-6">{$t('common.hero.subtitle')}</p>

    <button type="button" class="text-white text-right w-full bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      {$t('common.hero.cta')}
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
  </div>


</div>

<style>
/* Apply the blur effect to the pseudo-element */
.hero::before {
  content: "";
  background-image: url("/images/CANVAS.png");
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
