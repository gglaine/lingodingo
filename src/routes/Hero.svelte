<script>
  import { t } from '$lib';
</script>

<div class="hero relative flex flex-col items-center justify-center md:bg-contain" style="height: 70vh;"> <!-- Apply the inline style here -->
  <img src="/images/lingo-logo.png" alt="Logo" class="mb-4 w-48 h-48" /> <!-- Adjust the width and height as needed -->

  <h1 class="text-4xl font-bold text-white mb-4">{$t('common.hero.title')}</h1>
  <p class="text-2xl text-white mb-6">{$t('common.hero.subtitle')}</p>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{$t('common.hero.cta')}</button>
</div>

<style>
/* Apply the blur effect to the pseudo-element */
.hero::before {
  content: "";
  background-image: url('/images/groupmob.png');
  background-size: cover;
  background-position: center;
  filter: blur(3px); /* Adjust the blur strength as needed */
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
