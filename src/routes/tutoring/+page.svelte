<script lang="ts">
    // You can add any JavaScript here
    import { t } from '$lib';
  </script>
  
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">{$t('common.tutoring.header')}</h1>
    
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
      <div class="mb-6">

        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.phoneTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.phoneDescription')}</p>
      </div>
      
      <div class="mb-6">
        <img src="path/to/email-image.jpg" alt="Email" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.emailTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.emailDescription')}</p>
      </div>
  
      <div class="mb-6">
        <img src="path/to/address-image.jpg" alt="Address" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.addressTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.addressDescription')}</p>
      </div>
  
      <div class="mb-6">
        <img src="path/to/hours-image.jpg" alt="Opening Hours" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.hoursTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.hoursDescription')}</p>
      </div>
  
      <div class="mb-6">
        <img src="path/to/map-image.jpg" alt="Map" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.mapTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.mapDescription')}</p>
        <!-- Embed a map iframe or image here -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999299833135!2d2.292292615675714!3d48.85884427928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef2e1c2b4b5%3A0x44d7a55a81bb0b02!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1622206831608!5m2!1sen!2sfr" width="100%" height="200" style="border:0;" allowfullscreen={true} title="title" loading="lazy"></iframe>
      </div>
  
      <div class="mb-6">
        <img src="path/to/tutoring-image.jpg" alt="Tutoring Sessions" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.tutoringTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.tutoringDescription')}</p>
      </div>
  
      <div class="mb-6">
        <img src="path/to/workshops-image.jpg" alt="Workshops" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.workshopsTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.workshopsDescription')}</p>
      </div>
  
      <div class="mb-6">
        <img src="path/to/community-image.jpg" alt="Community" class="w-full h-auto object-cover mb-4">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{$t('common.tutoring.communityTitle')}</h2>
        <p class="text-gray-600">{$t('common.tutoring.communityDescription')}</p>
      </div>
  
      <div class="mt-8">
        <a href="/" class="inline-block bg-indigo-600 hover:bg-indigo-800 text-white text-sm font-medium py-2 px-4 rounded">{$t('common.tutoring.returnHomeButton')}</a>
      </div>
    </div>
  </div>
  