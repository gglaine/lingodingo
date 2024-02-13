<!-- src/routes/dashboard/+page.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation';
  
    onMount(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          // If no user is signed in, redirect to the sign-in page
          goto('/signin');
        }
        // Otherwise, the user is authenticated, and you can display the dashboard
      });
    });
  </script>
  
  <main>
    <h1>Dashboard</h1>
    <p>Welcome to your Dashboard!</p>
    <!-- Your dashboard content here -->
  </main>
  