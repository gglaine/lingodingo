<script>
 import { t } from '$lib';
</script>

<div class="hero">
  <h1>{$t('common.hero.title')}</h1>
  <p>{$t('common.hero.subtitle')}</p>
  <button>{$t('common.hero.cta')}</button>
</div>

<style>
  .hero {
    background-color: #e5e7eb; 
    padding: 2rem;
    text-align: center;
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
