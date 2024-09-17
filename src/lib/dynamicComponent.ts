import { writable } from 'svelte/store';

/**
 * Dynamically import a Svelte component.
 * @param componentPromise - A promise that resolves to a Svelte component.
 * @returns - A writable store that will contain the component once loaded.
 */
export function dynamicComponent(componentPromise: Promise<any>) {
  const componentStore = writable(null);

  // Dynamically import the component and update the store when ready
  componentPromise
    .then((module) => {
      componentStore.set(module.default);
    })
    .catch((error) => {
      console.error('Error loading component:', error);
      componentStore.set(null);
    });

  return componentStore;
}
