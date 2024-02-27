<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { getAuth, EmailAuthProvider } from 'firebase/auth';
    import app from '../../firebaseConfig'; // Adjust the path as needed

    // FirebaseUI import
    import * as firebaseui from 'firebaseui'
    import 'firebaseui/dist/firebaseui.css'

    let ui: firebaseui.auth.AuthUI | null = null;
    let showSignUp = false; // Toggle this based on your application logic

    interface AuthResult {
        user: {
            uid: string;
            email?: string;
            displayName?: string;
            photoURL?: string;
        };
    }

    onMount(async () => {
        if (typeof window !== 'undefined') {
            const firebaseui = await import('firebaseui');
         

            const auth = getAuth(app); // Initialize Firebase Auth
            ui = new firebaseui.auth.AuthUI(auth);

            const uiConfig: firebaseui.auth.Config = {
                signInSuccessUrl: '/',
                signInOptions: [
                    EmailAuthProvider.PROVIDER_ID,
                ],
                callbacks: {
                    signInSuccessWithAuthResult: (authResult: AuthResult, redirectUrl?: string) => {
                        console.log(authResult.user.uid);
                        return true;
                    },
                },
            };

            ui.start('#firebaseui-auth-container', uiConfig);
        }
    });

    onDestroy(() => {
        ui?.delete();
    });

    // Function to toggle the sign-in and sign-up view
    function toggleView() {
        showSignUp = !showSignUp;
    }
</script>


<!-- Conditional rendering based on showSignUp -->
{#if showSignUp}
    <div class="w-full p-12">
        <!-- Custom Sign Up Form -->
        <h2>Sign Up</h2>
        <!-- Add your sign-up form here -->
        <button on:click={toggleView}>Already have an account? Sign In</button>
    </div>
{:else}
    <div>
        <!-- FirebaseUI Sign In Container -->
        <h2>Sign In</h2>
        <div id="firebaseui-auth-container"></div>
        <button on:click={toggleView}>Need an account? Sign Up</button>
    </div>
{/if}

