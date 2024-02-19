<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { writable, derived, get } from 'svelte/store';
  import { t, locale as globalLocale } from '$lib';
  import { spellingQuestEnForFr } from '../lib/games/spelling_quest/en/levels';
  import { spellingQuestFrForEn } from '../lib/games/spelling_quest/fr/levels';

  interface Level {
    sentence: string;
    options: {
      correct: string;
      incorrect: string;
    };
    phonetics: string;
    translation: string;
  }

  interface SpellingQuestData {
    easy: Level[];
    medium: Level[];
    hard: Level[];
  }

  const levels = writable<Level[]>([]);
  const currentLevelDifficulty = writable<'easy' | 'medium' | 'hard'>('easy');
  const currentWordIndex = writable<number>(0);
  const userSelection = writable<string>('');
  const feedbackMessage = writable<string>('');
  const gameCompleted = writable<boolean>(false);
  const gameStarted = writable<boolean>(false);
  const currentStreak = writable(0);
  const highestStreak = writable(0);
  const levelCompleted = writable(false);
  let countdown: number;
  const timer = writable<number>(3);

  const currentWord = derived(
    [levels, currentWordIndex],
    ([$levels, $currentWordIndex]) => {
      return $currentWordIndex < $levels.length ? $levels[$currentWordIndex] : null;
    }
  );

  function loadLevels(difficulty: 'easy' | 'medium' | 'hard') {
    const $locale = get(globalLocale);
    const questData = $locale === 'en' ? spellingQuestEnForFr : spellingQuestFrForEn;
    levels.set(questData[difficulty]);
    currentWordIndex.set(0);
    feedbackMessage.set('');
    userSelection.set('');
    gameCompleted.set(false);
    levelCompleted.set(false);
    resetTimer();
  }

  function startGame() {
    gameStarted.set(true);
    loadLevels(get(currentLevelDifficulty));
    currentStreak.set(0); // Reset current streak when game starts
  }

  function selectSpelling(option: string) {
    clearInterval(countdown);
    userSelection.set(option);
    const correct = option === get(currentWord)?.options?.correct;
    if (correct) {
        currentStreak.update(n => n + 1);
        highestStreak.update(n => Math.max(n, get(currentStreak)));
        feedbackMessage.set('Right on!');
        setTimeout(() => {
            const nextIndex = get(currentWordIndex) + 1;
            if (nextIndex < get(levels).length) {
                nextWord();
            } else {
                gameCompleted.set(true);
                levelCompleted.set(true);
            }
        }, 2000);
    } else {
        feedbackMessage.set('Oh no ! You\'ll be back soon !');
        highestStreak.update(n => Math.max(n, get(currentStreak)));
        currentStreak.set(0);
        setTimeout(() => {
            gameStarted.set(false); // Show start/restart button
        }, 2000);
    }
  }

  function nextWord() {
    currentWordIndex.update(n => n + 1);
    resetTimer();
  }

  function resetGame() {
    gameStarted.set(false); // Adjusted to control visibility of start/restart button
    levelCompleted.set(false);
    gameCompleted.set(false);
    currentWordIndex.set(0);
    feedbackMessage.set('');
    userSelection.set('');
    loadLevels(get(currentLevelDifficulty)); // Reload levels to reset game
  }

  function resetTimer() {
    timer.set(30); // Adjusted for example, set according to your game's needs
    clearInterval(countdown);
    countdown = setInterval(() => {
      timer.update(n => {
        if (n === 0) {
          clearInterval(countdown);
          selectSpelling(''); // Treat as incorrect if time runs out
          return n;
        }
        return n - 1;
      });
    }, 1000);
  }

  onDestroy(() => {
    clearInterval(countdown);
  });
</script>

<!-- Updated Svelte template with conditional displays and functionality -->
{#if $gameStarted}
  {#if $currentWord}
    {#if $gameCompleted}
      <p class="text-xl text-green-600">Well done! You've completed the level.</p>
      <!-- You can add a button here to start the next level or restart the current level -->
    {:else}
    <div class="min-h-screen flex flex-col justify-center items-center bg-blue-50 p-4">
      <div class="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <p class="text-2xl font-semibold text-red-600 flex justify-center items-center mb-4">
              <span>Time left:</span>
              <span class="font-mono bg-gray-800 text-white py-1 px-2 ml-2 rounded">{$timer}</span>
          </p>
  
          <div class="text-center mb-6">
              <p class="text-lg font-medium">Level: {$currentLevelDifficulty.toUpperCase()}, Question: {$currentWordIndex + 1}</p>
              <p class="text-lg font-medium">Current Streak: {$currentStreak}</p>
          </div>
  
          <p class="text-2xl font-semibold mb-4">{$currentWord.sentence}</p>
          
          <div class="flex flex-wrap justify-center gap-4 mb-4">
              <p class="w-full text-center font-medium mb-4">Select the correct spelling:</p>
              {#each [$currentWord.options.correct, $currentWord.options.incorrect].sort(() => 0.5 - Math.random()) as option}
                  <button
                      on:click={() => selectSpelling(option)}
                      class="w-32 h-32 p-4 bg-white border-2 border-blue-500 text-blue-500 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer">
                      {option}
                  </button>
              {/each}
          </div>
  
          {#if $feedbackMessage}
              <p class="text-center font-medium text-lg text-green-600">{$feedbackMessage}</p>
          {/if}
      </div>
  </div>
  
    {/if}
  {/if}
  {:else}
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-300">
    <div class="text-center">
        <p class="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Highest Streak: {$highestStreak}</p>
        <button
            on:click={startGame}
            class="text-lg md:text-xl lg:text-2xl px-6 py-3 bg-white rounded-full font-semibold text-blue-700 hover:bg-blue-200 transition duration-300">
            Start Game
        </button>
    </div>
</div>

{/if}
