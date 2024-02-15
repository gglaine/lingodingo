<script lang='ts'>
import { writable, derived } from 'svelte/store';
import { locale as globalLocale } from '$lib';

interface Level {
  id: number;
  phonetic_feature: string;
  correct_pairs: string[][];
  distractors: string[];
}

interface LevelsModule {
  levels: Level[];
}

const levels = writable<LevelsModule>({ levels: [] });
const currentLevelIndex = writable<number>(0);
const selectedWords = writable<string[]>([]);
const feedbackMessage = writable<string>('');

$: $globalLocale && loadLevels($globalLocale);

async function loadLevels(locale: string) {
  try {
    const modulePath = locale === 'en'
      ? '../lib/games/phonetics_game/en/levels'
      : '../lib/games/phonetics_game/fr/levels';
    const { levels: importedLevels } = await import(modulePath);
    levels.set({ levels: importedLevels });
  } catch (error) {
    console.error("Failed to load levels:", error);
    levels.set({ levels: [] });
  }
}
  
    // Derived store to shuffle words of the current level
    const shuffledWords = derived(
      [levels, currentLevelIndex], 
      ([$levels, $currentLevelIndex]) => {
        const level = $levels.levels[$currentLevelIndex];
        if (level) {
          // Assuming correct_pairs and distractors are arrays of words
          const words = level.correct_pairs.flat().concat(level.distractors);
          return words.sort(() => Math.random() - 0.5); // Shuffle words
        }
        return [];
      }
    );
  
    // Function to select a word and check if it forms a correct pair
    function selectWord(word: string) {
      selectedWords.update(currentSelection => {
        const updatedSelection = [...currentSelection, word];
        if (updatedSelection.length === 2) {
          validatePair(updatedSelection);
          return []; // Reset selection after a pair is selected
        }
        return updatedSelection;
      });
    }
  
    // Function to validate the selected pair of words
    function validatePair(pair: string[]) {
      const level = $levels.levels[$currentLevelIndex];
      const isCorrect = level && level.correct_pairs.some(([word1, word2]) => 
        pair.includes(word1) && pair.includes(word2)
      );
  
      feedbackMessage.set(isCorrect ? 'Correct pair!' : 'Try again.');
      selectedWords.set([]); // Reset selected words after validation
    }
  
    // Derived store to check if the current level is completed
    const isLevelCompleted = derived(
      [feedbackMessage, selectedWords], 
      ([$feedbackMessage, $selectedWords]) => 
        $feedbackMessage === 'Correct pair!' && $selectedWords.length === 0
    );
  
    // Function to advance to the next level
    function nextLevel() {
      currentLevelIndex.update(n => n + 1 < $levels.levels.length ? n + 1 : n); // Advance if not last level
      // Reset feedback and selected words
      feedbackMessage.set('');
      selectedWords.set([]);
    }
  </script>
  
  
  <style>
    .word {
      padding: 0.5rem;
      border: 1px solid;
      border-radius: 0.25rem;
      cursor: pointer;
    }
    .word:hover {
      background-color: #bfdbfe;
    }
    .selected {
      background-color: #dbeafe;
    }
  </style>
  
  <div class="max-w-4xl mx-auto p-5">
    <h2 class="text-2xl font-bold mb-4">Phonetic Pairing Game</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {#if $levels.levels.length > 0}
        {#each $shuffledWords as word}
          <button class="word" on:click={() => selectWord(word)}>{word}</button>
        {/each}
      {/if}
    </div>
    {#if $feedbackMessage}
      <div class="feedback mt-5 p-3 bg-gray-100 text-gray-800">{$feedbackMessage}</div>
    {/if}
    {#if $isLevelCompleted}
      <button class="mt-5 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" on:click={nextLevel}>Next Level</button>
    {/if}
  </div>
  