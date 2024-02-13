<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { getAuth, EmailAuthProvider } from 'firebase/auth';
    import app from '../../firebaseConfig'; // Adjust the path as needed
    import type firebaseui from 'firebaseui';

    let ui: firebaseui.auth.AuthUI | null = null;

    // Define the AuthResult interface to type the authResult parameter
    interface AuthResult {
        user: {
            uid: string;
            email?: string;
            displayName?: string;
            photoURL?: string;
            // Add other relevant user properties here
        };
        // Include other properties from authResult as needed
    }

    // Dynamic import for FirebaseUI
    onMount(async () => {
        if (typeof window !== 'undefined') {
            const firebaseui = await import('firebaseui');
            await import('firebaseui/dist/firebaseui.css');

            const auth = getAuth(app); // Initialize Firebase Auth
            ui = new firebaseui.auth.AuthUI(auth);

            const uiConfig: firebaseui.auth.Config = {
                signInSuccessUrl: '/',
                signInOptions: [
                    EmailAuthProvider.PROVIDER_ID, // Correctly reference EmailAuthProvider
                    // Add other providers
                ],
                callbacks: {
                    signInSuccessWithAuthResult: (authResult: AuthResult, redirectUrl?: string) => {
                        console.log(authResult.user.uid); // Example of accessing a typed property
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
</script>

<div id="firebaseui-auth-container"></div>
