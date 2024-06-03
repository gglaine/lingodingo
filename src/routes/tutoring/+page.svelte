<script lang="ts">
  // You can add any JavaScript here
  import { t } from '$lib';
</script>

<div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
  <h1 class="text-4xl font-bold text-gray-900 mb-8">{$t('common.tutoring.header')}</h1>

  <div class="flex flex-wrap p-4 justify-center">
      <!-- Online Workshops Card -->
      <div class="flex p-4 flex-col md:flex-row rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg m-2">
          <div class="w-full flex flex-col md:flex-row items-center">
              <img class="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-3" src="path/to/online-workshops-image.jpg" alt="Online Workshops">
              <div class="flex-1 p-8 text-center md:text-left">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">{$t('common.tutoring.onlineWorkshopsTitle')}</h5>
                  <p class="text-lg text-gray-600">{$t('common.tutoring.onlineWorkshopsDescription')}</p>
              </div>
          </div>
      </div>

      <!-- Meetups Card -->
      <div class="flex p-4 flex-col md:flex-row rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg m-2">
          <div class="w-full flex flex-col md:flex-row items-center">
              <img class="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-3" src="path/to/meetups-image.jpg" alt="Meetups">
              <div class="flex-1 p-8 text-center md:text-left">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">{$t('common.tutoring.meetupsTitle')}</h5>
                  <p class="text-lg text-gray-600">{$t('common.tutoring.meetupsDescription')}</p>
              </div>
          </div>
      </div>

      <!-- On-Site Workshops Card -->
      <div class="flex p-4 flex-col md:flex-row rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg m-2">
          <div class="w-full flex flex-col md:flex-row items-center">
              <img class="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-3" src="path/to/on-site-workshops-image.jpg" alt="On-Site Workshops">
              <div class="flex-1 p-8 text-center md:text-left">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">{$t('common.tutoring.onSiteWorkshopsTitle')}</h5>
                  <p class="text-lg text-gray-600">{$t('common.tutoring.onSiteWorkshopsDescription')}</p>
              </div>
          </div>
      </div>

      <!-- Community Card -->
      <div class="flex p-4 flex-col md:flex-row rounded-lg shadow-md overflow-hidden transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg m-2">
          <div class="w-full flex flex-col md:flex-row items-center">
              <img class="w-36 h-36 rounded-full mb-4 md:mb-0 md:mr-3" src="path/to/community-image.jpg" alt="Community">
              <div class="flex-1 p-8 text-center md:text-left">
                  <h5 class="text-lg mb-3 font-medium text-gray-800">{$t('common.tutoring.communityTitle')}</h5>
                  <p class="text-lg text-gray-600">{$t('common.tutoring.communityDescription')}</p>
              </div>
          </div>
      </div>
  </div>

  <div class="mt-8">
      <a href="/" class="inline-block bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium py-2 px-4 rounded">{$t('common.tutoring.returnHomeButton')}</a>
  </div>
</div>
