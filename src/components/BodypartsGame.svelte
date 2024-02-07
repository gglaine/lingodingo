<script lang="ts">
import { onMount } from 'svelte';

let level = 1;
let questions = [];
let currentQuestionIndex = 0;
let userAnswer = '';
let correctAnswersCount = 0;
let gameCompleted = false; // Track if the game is completed
  
    // Sample data for demonstration. Ideally, fetch this from an API or more complex store.
    const levels = [
  {
    questions: [
      { part: "Head", answer: "Head", imageUrl: "/images/games/bodypart/head.png" },
      { part: "Arm", answer: "Arm", imageUrl: "/images/games/bodypart/arm.png" },
      { part: "Leg", answer: "Leg", imageUrl: "/images/games/bodypart/leg.png" },
      { part: "Foot", answer: "Foot", imageUrl: "/images/games/bodypart/foot.png" },
      { part: "Hand", answer: "Hand", imageUrl: "/images/games/bodypart/hand.png" },
      { part: "Finger", answer: "Finger", imageUrl: "/images/games/bodypart/finger.png" }
    ]
  },
  {
    questions: [
      { part: "Elbow", answer: "Elbow", imageUrl: "/images/games/bodypart/elbow.png" },
      { part: "Knee", answer: "Knee", imageUrl: "/images/games/bodypart/knee.png" },
      { part: "Ankle", answer: "Ankle", imageUrl: "/images/games/bodypart/ankle.png" },
      { part: "Neck", answer: "Neck", imageUrl: "/images/games/bodypart/neck.png" },
      { part: "Shoulder", answer: "Shoulder", imageUrl: "/images/games/bodypart/shoulder.png" },
      { part: "Wrist", answer: "Wrist", imageUrl: "/images/games/bodypart/wrist.png" }
    ]
  },
  {
    questions: [
      { part: "Eyebrow", answer: "Eyebrow", imageUrl: "/images/games/bodypart/eyebrow.png" },
      { part: "Cheek", answer: "Cheek", imageUrl: "/images/games/bodypart/cheek.png" },
      { part: "Chin", answer: "Chin", imageUrl: "/images/games/bodypart/chin.png" },
      { part: "Forehead", answer: "Forehead", imageUrl: "/images/games/bodypart/forehead.png" },
      { part: "Thumb", answer: "Thumb", imageUrl: "/images/games/bodypart/thumb.png" },
      { part: "Toe", answer: "Toe", imageUrl: "/images/games/bodypart/toe.png" }
    ]
  }
];
  


// Levels array remains unchanged

onMount(() => {
  initializeGame();
});

function checkAnswer() {
  // Logic remains largely unchanged
  if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
    correctAnswersCount++;
  }

  // Adjusted completion logic
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
  } else {
    if (level < levels.length) {
      level++;
      setQuestionsForLevel();
    } else {
      gameCompleted = true; // Set game to completed
    }
  }

  userAnswer = ''; // Reset answer for the next question
}

function initializeGame() {
  level = 1;
  gameCompleted = false;
  setQuestionsForLevel();
}

function setQuestionsForLevel() {
  // Initialization logic remains unchanged
}
  </script>
  
  <div class="container mx-auto p-4">
    {#if !gameCompleted}
    <div class="question">
        <h2 class="text-2xl font-bold mb-4">Level {level}: What is this body part?</h2>
        <img src={questions[currentQuestionIndex]?.imageUrl} alt={questions[currentQuestionIndex]?.part} class="w-32 h-32 mb-4" />
        <input type="text" bind:value={userAnswer} class="input border border-gray-400 p-2" placeholder="Type your answer here" />
        <button on:click={checkAnswer} class="btn bg-blue-500 text-white p-2 mt-2">Check Answer</button>
      </div>
      
      
      <div class="progress">
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>Correct answers: {correctAnswersCount}</p>
      </div>
      {:else}
      <div class="game-completed">
        <h2 class="text-3xl font-bold mb-4">Congratulations! You've completed the game!</h2>
        <p class="text-xl">Your score: {correctAnswersCount} out of {questions.length * levels.length}</p>
        <button on:click={initializeGame} class="btn bg-green-500 text-white p-2 mt-4">Restart Game</button>
      </div>
    {/if}
  </div>
  