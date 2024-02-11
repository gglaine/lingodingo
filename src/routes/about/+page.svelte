<script lang="ts">
    import { t } from '$lib';
</script>

<div class="flex flex-col justify-center items-center min-h-screen py-8 sm:py-12 md:py-24 px-4 sm:px-6 lg:px-8">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-prose w-full text-gray-800">
        <p class="text-2xl font-semibold mb-4">{$t('common.about.inspired_learning_method')}</p>
        <p class="text-2xl font-semibold mb-4">{$t('common.about.fun_workshops')}</p>
        <p class="text-2xl mb-4">{$t('common.about.fun_workshops_text')}</p>
  
        <p class="text-2xl mb-4">{$t('common.about.inspired_learning_method_text')}</p>
        <p class="text-2xl font-semibold mb-4">{$t('common.about.explore_together')}</p>
        <p class="text-2xl mb-4">{$t('common.about.explore_together_text')}</p>
        <p class="text-2xl font-semibold mb-4">{$t('common.about.empower_your_voice')}</p>
        <p class="text-2xl mb-4">{$t('common.about.empower_your_voice_text')}</p>
        <a href="#" class="text-blue-600 hover:underline">{$t('common.cta.learnMore')}</a>
    </div>
</div>
