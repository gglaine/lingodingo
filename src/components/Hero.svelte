<script>
  import { t } from '$lib';
</script>
<!-- Use viewport width for full screen width -->
<div class="hero overflow-hidden relative flex -mt-24 flex-col mb-8 items-center justify-around" style="height: 100vh; width: 100vw; background-image: url('/images/clubplane.webp'); background-size: cover; background-position: top; opacity: 0.95; background-repeat: no-repeat;">

  <div class="bg-blue-600 w-128 overflow-visible bg-opacity-90 items-center justify-around flex flex-col p-8 rounded-md shadow-xl">
    <h1 class="text-2xl font-bold text-center text-slate-100 mb-4">{$t('common.hero.title')}</h1>
    <button type="button" class=" bg-yellow-500 rounded-full w-42 relative ml-auto mx-auto flex flex-col justify-center items-center  p-4 border border-transparent shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
      <span class="p-2 text-center font-bold">
        {$t('common.hero.cta')}
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
  opacity: 95%;
  background-repeat: no-repeat;
  background-position: top;
  filter: blur(13px); /* Adjust the blur strength as needed */
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
