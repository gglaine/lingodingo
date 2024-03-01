<script lang="ts">
    import { onMount, onDestroy, tick } from 'svelte';
    import type { FirebaseApp } from 'firebase/app'; // Ensure proper TypeScript imports
    import { getAuth, EmailAuthProvider } from 'firebase/auth';
    import app from '../../firebaseConfig'; // Adjust the path as needed

    // FirebaseUI import dynamically to avoid SSR issues
    let firebaseui: any;

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
            // Import firebaseui only if window is defined (client-side)
            firebaseui = await import('firebaseui');

            const auth = getAuth(app as FirebaseApp); // Correctly typecast your Firebase app instance

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
            await tick(); // Ensures the DOM is updated
        if (ui && document.querySelector('#firebaseui-auth-container')) {
            ui.start('#firebaseui-auth-container', uiConfig);
        } else {
            console.error('FirebaseUI container not found');
        }
        }
    });

    onDestroy(() => {
        ui?.delete();
    });

    function toggleView() {
        showSignUp = !showSignUp;
    }
</script>

<div>
    {#if showSignUp}
        <div class="w-full p-12" style="height: 70vh; background-image: url('/images/walkny.webp'); background-size: cover; background-position: top; opacity: 0.9; background-repeat: no-repeat;">
            <h2>Sign Up</h2>
            <!-- Your custom sign-up form goes here -->
            <button on:click={toggleView}>Already have an account? Sign In</button>
        </div>
    {:else}
        <div class="w-full flex flex-col justify-around" style="height: 70vh; background-image: url('/images/walkny.webp'); background-size: cover; background-position: top; opacity: 0.9; background-repeat: no-repeat;">
            <div id="firebaseui-auth-container"></div>
            <button on:click={toggleView}>Need an account? Sign Up</button>
        </div>
    {/if}
</div>