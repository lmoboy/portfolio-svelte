import { writable } from 'svelte/store';

// Create a writable store for the current page
const currentPage = writable('home');

// Note: The actual page components are defined in App.svelte
// This is just for reference

// Navigation function
function navigateTo(page) {
  // Only update if it's a different page
  currentPage.update(current => {
    if (current === page) return current;
    return page;
  });
}

// Export the store and navigation function
export { currentPage, navigateTo };