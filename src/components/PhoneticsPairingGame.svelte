<script lang="ts">
    import { onMount } from 'svelte';
    import { writable, derived } from 'svelte/store';
    import { t, locale as globalLocale } from '$lib';
    import { levels as enLevels } from '../lib/games/phonetics_game/en/levels';
    import { levels as frLevels } from '../lib/games/phonetics_game/fr/levels';
  
    const levels = writable<App.Level[]>([]);
    const currentLevelIndex = writable<number>(0);
    const selectedWords = writable<string[]>([]);
    const feedbackMessage = writable<string>('');
    const selectedStatus = writable<{ [key: string]: { isCorrect: boolean, hasBeenSelected: boolean } }>({});
  
    const currentLevel = derived(
    [levels, currentLevelIndex],
    ([$levels, $currentLevelIndex]) => $levels[$currentLevelIndex]
  );


    onMount(() => {
      globalLocale.subscribe(($locale) => {
        switch ($locale) {
          case 'en':
            levels.set(frLevels.levels);
            break;
          case 'fr':
            levels.set(enLevels.levels);
            break;
          default:
            console.error(`Locale not supported: ${$locale}`);
            levels.set([]);
        }
      });
    });
  
    const shuffledWords = derived([levels, currentLevelIndex], ([$levels, $currentLevelIndex]) => {
      const level = $levels[$currentLevelIndex];
      if (level) {
        const words = [...level.correct_pairs.flat(), ...level.distractors];
        return words.sort(() => Math.random() - 0.5);
      }
      return [];
    });
  
    function selectWord(word: string, index: number) {
      selectedWords.update(currentSelection => {
        const updatedSelection = [...currentSelection, word];
        if (updatedSelection.length === 2) {
          validatePair(updatedSelection, index);
          return [];
        }
        return updatedSelection;
      });
    }
  
    function validatePair(pair: string[], index: number) {
      const level = $levels[$currentLevelIndex];
      const isCorrect = level && level.correct_pairs.some(([word1, word2]) => 
        pair.includes(word1) && pair.includes(word2)
      );
  
      feedbackMessage.set(isCorrect ? 'Correct pair!' : 'Try again.');
      selectedStatus.update(status => {
        const newState = {...status};
        pair.forEach(word => {
          const wordIndex = $levels[$currentLevelIndex].correct_pairs.flat().concat($levels[$currentLevelIndex].distractors).indexOf(word);
          newState[wordIndex] = {isCorrect: isCorrect, hasBeenSelected: true};
        });
        return newState;
      });
  
      selectedWords.set([]);
    }
  
    const isLevelCompleted = derived([feedbackMessage, selectedWords], ([$feedbackMessage, $selectedWords]) => 
      $feedbackMessage === 'Correct pair!' && $selectedWords.length === 0
    );
  
    function nextLevel() {
      currentLevelIndex.update(n => n + 1 < $levels.length ? n + 1 : n);
      feedbackMessage.set('');
      selectedWords.set([]);
      selectedStatus.set({});
    }
  </script>
  
  <style>
    .word {
      padding: 0.5rem;
      border: 1px solid;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.2s; /* Smooth transitions */
      aspect-ratio: 1 / 1; /* Square cards */
      width: 100%; /* Full width within the grid cell */
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center; /* Ensure text is centered */
    }
    .word:hover, .correct-pair {
      background-color: #0bd451; /* Softer green for correct or hovered cards */
    }
    .incorrect-pair {
      background-color: #e01313; /* Softer red for incorrect selections */
    }
  </style>
  
  <div class="w-full bg-slate-200 rounded-md drop-shadow-2xl mx-auto p-5">
    <h2 class="text-4xl text-slate-800 font-bold mb-4">Let's play !</h2>
    <span class="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 mr-2 rounded">
        Level {#if $currentLevelIndex}{$currentLevelIndex + 1}{/if}
      </span>
    <p class="mb-4 text-2xl">Match words with the same phonetic feature!</p>
    <p class="mb-4 text-4xl font-bold italic">{#if $currentLevel}{$currentLevel.phonetic_feature}{/if}</p>
    <div class="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {#each $shuffledWords as word, index}
        <button 
          class:correct-pair={$selectedStatus[index]?.isCorrect}
          class:incorrect-pair={!$selectedStatus[index]?.isCorrect && $selectedStatus[index]?.hasBeenSelected}
          class="word bg-yellow-500 text-slate-800  text-4xl font-bold"
          on:click={() => selectWord(word, index)}>
          {word}
        </button>
      {/each}
    </div>
    {#if $feedbackMessage}
      <div class="feedback mt-5 p-3 bg-gray-100 text-gray-800 rounded">{ $feedbackMessage }</div>
    {/if}
    {#if $isLevelCompleted}
      <button class="mt-5 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-700" on:click={nextLevel}>Next Level</button>
    {/if}
  </div>
  