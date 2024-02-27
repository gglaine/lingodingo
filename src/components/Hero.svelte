<script>
  import { t } from '$lib';
</script>

<div class="hero overflow-hiddenrelative flex flex-col mt-6 mb-12 items-center justify-end md:bg-cover md:bg-center w-full" style="height: 70vh; background-image: url('/images/walkny.webp'); background-size: cover; background-position: top; opacity: 0.9; background-repeat: no-repeat;">
  <div class="bg-slate-200 bg-opacity-90 w-full md:w-[40%] p-8 rounded-lg shadow-xl">
    <h1 class="text-2xl font-bold text-center text-slate-800 mb-4">{$t('common.hero.title')}</h1>
    <button type="button" class="relative ml-auto flex flex-col justify-center items-center w-full px-8 py-4 text-lg font-semibold text-slate-800 bg-green-500 border border-transparent rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
      <span class="mr-2 mb-4 text-center">
        {$t('common.hero.cta')}
      </span>
      <span class="mr-2 mb-4 text-center font-light text-sm">
        Join 335 people connected
      </span>
    </button>
  </div>
</div>

<style>
/* Apply the blur effect to the pseudo-element */
.hero::before {
  content: "";
  /* background-image: url("../static/images/walkny.webp"); */
  background-size: cover;
  opacity: 90%;
  background-repeat: no-repeat;
  background-position: top;
  filter: blur(0px); /* Adjust the blur strength as needed */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure it's behind the content */
  transition: transform 0.5s ease-out; /* Smooth transition for zoom effect */
}

.hero:hover::before {
  transform: scale(1.05); /* Scale the background image up on hover */
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
