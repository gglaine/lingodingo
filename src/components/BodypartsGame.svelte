<script lang="ts">
  import { onMount } from 'svelte';
  import { countries } from '$lib/countries';

  interface Country {
  emoji: string;
  name: string;
  greeting?: string; // Mark optional fields with ?
  timezone?: string;
  capital?: string;
  population?: string;
  fun_fact?: string;
  languages?: string[];
  other_languages?: string[];
}

  interface Question {
    question: string;
    options: Country[];
    correctAnswer: string;
  }

  let questions: Question[] = [];
  let currentQuestionIndex = 0;
  let correctAnswersCount = 0;
  let gameCompleted = false;

  onMount(() => {
    prepareQuestions();
  });

  function prepareQuestions(): void {
    const shuffledCountries: Country[] = countries.sort(() => Math.random() - 0.5) as Country[];
    questions = shuffledCountries.slice(0, 10).map((country, index): Question | null => {
  const pairIndex = index % 2 === 0 ? index + 1 : index - 1;
  if (pairIndex < shuffledCountries.length) {
    return {
      question: `Which country says "${country.greeting}" as a greeting?`, // Ensure greeting is not optional or handle its absence
      options: [country, shuffledCountries[pairIndex]].sort(() => Math.random() - 0.5),
      correctAnswer: country.name
    };
  }
  return null;
}).filter(Boolean) as Question[];
  }

  function checkAnswer(selectedCountryName: string): void {
    if (questions[currentQuestionIndex].correctAnswer === selectedCountryName) {
      correctAnswersCount++;
    }
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
    } else {
      gameCompleted = true;
    }
  }

  function restartGame(): void {
    prepareQuestions();
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    gameCompleted = false;
  }
</script>

<div class="container mx-auto p-4">
  {#if !gameCompleted && questions.length > 0 && questions[currentQuestionIndex]}
    <div class="question">
      <h2 class="text-2xl font-bold mb-4">{questions[currentQuestionIndex]?.question}</h2>
      <div class="flex justify-center space-x-4">
        {#if questions[currentQuestionIndex]?.options && questions[currentQuestionIndex].options.length > 0}
          {#each questions[currentQuestionIndex].options as option (option.name)}
            <button on:click={() => checkAnswer(option.name)} class="flex flex-col items-center bg-blue-500 text-white p-2 mt-2 rounded">
              <span class="text-3xl">{option.emoji}</span>
              <span>{option.name}</span>
            </button>
          {/each}
        {:else}
          <p>Loading options...</p>
        {/if}
      </div>
    </div>
    {:else if gameCompleted}
    <div class="game-completed text-center">
      <h2 class="text-3xl font-bold mb-4">Congratulations! You've completed the game!</h2>
      <p class="text-xl">Your score: {correctAnswersCount} out of {questions.length}</p>
      <button on:click={restartGame} class="btn bg-green-500 text-white p-2 mt-4 rounded">Restart Game</button>
    </div>
  {:else}
    <p>Loading game...</p>
  {/if}
</div>