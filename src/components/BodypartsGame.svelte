<script lang="ts">
  import { onMount } from 'svelte';
  import { countries } from '$lib/countries'; // Assuming you've moved the countries array to a separate module
  
  let level = 1;
  let questions = [];
  let currentQuestionIndex = 0;
  let userAnswer = '';
  let correctAnswersCount = 0;
  let gameCompleted = false;
  
  // Initiate with a shuffled subset of countries to create a varied game experience
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  onMount(() => {
    shuffleArray(countries);
    setQuestionsForLevel();
  });
  
  function checkAnswer() {
    // Check the answer logic here
    if (userAnswer.toLowerCase() === questions[currentQuestionIndex].capital.toLowerCase()) { // For example, checking against the capital
      correctAnswersCount++;
    }
    // Navigation logic remains unchanged
  }
  
  function setQuestionsForLevel() {
    questions = countries.slice(0, 5); // Adjust based on levels or types of questions
    // Reset states for new level
  }
  
  function initializeGame() {
    level = 1;
    gameCompleted = false;
    correctAnswersCount = 0;
    currentQuestionIndex = 0;
    setQuestionsForLevel();
  }
  </script>
  
  <div class="container mx-auto p-4">
    {#if !gameCompleted}
      <div class="question">
        <h2 class="text-2xl font-bold mb-4">Level {level}: What is the capital of {questions[currentQuestionIndex]?.name}?</h2>
        <img src={questions[currentQuestionIndex]?.emoji} alt="Flag" class="w-32 h-32 mb-4" />
        <input type="text" bind:value={userAnswer} class="input border border-gray-400 p-2" placeholder="Type the capital here" />
        <button on:click={checkAnswer} class="btn bg-blue-500 text-white p-2 mt-2">Check Answer</button>
      </div>
  
      <div class="progress">
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>Correct answers: {correctAnswersCount}</p>
      </div>
    {:else}
      <div class="game-completed">
        <h2 class="text-3xl font-bold mb-4">Congratulations! You've completed the game!</h2>
        <p class="text-xl">Your score: {correctAnswersCount} out of {questions.length}</p>
        <button on:click={initializeGame} class="btn bg-green-500 text-white p-2 mt-4">Restart Game</button>
      </div>
    {/if}
  </div>
  