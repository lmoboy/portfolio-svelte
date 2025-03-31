<script>
  // @ts-nocheck
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  injectAnalytics();
  injectSpeedInsights();

  import { onMount } from "svelte";
  import { fade, fly, slide } from "svelte/transition";

  // Import all portfolio pages
  import Home from "./lib/Home.svelte";
  import About from "./lib/About.svelte";
  import Projects from "./lib/Projects.svelte";
  import Skills from "./lib/Skills.svelte";
  import Contact from "./lib/Contact.svelte";

  // Import navigation store
  import { currentPage, navigateTo } from "./lib/stores/navigation";

  // Define page components mapping
  const pageComponents = {
    home: Home,
    about: About,
    projects: Projects,
    skills: Skills,
    contact: Contact,
  };

  // Mobile menu state
  let isMobileMenuOpen = false;

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  // Close mobile menu when navigating
  function handleNavigate(page) {
    navigateTo(page);
    isMobileMenuOpen = false;
  }

  // Initialize with a smooth fade-in
  onMount(() => {
    // Svelte transitions will handle the animations automatically
  });

  // Transition parameters
  const fadeParams = {
    duration: 300,
  };

  // Subscribe to the currentPage store to get its value
  let currentPageValue;
  currentPage.subscribe((value) => {
    currentPageValue = value;
  });
</script>

<div class="h-full bg-[#0f0f1a] text-white main-content">
  <nav
    class="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md bg-[#0f0f1a] z-50 border-b border-[#9333ea]/20"
  >
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div
          class="text-2xl font-bold bg-gradient-to-r from-[#9333ea] via-[#4f46e5] to-[#3b82f6] bg-clip-text text-transparent hover:shadow-glow-md transition-all duration-300"
        >
          Portfolio
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <button
            class="nav-link relative px-2 py-1 transition-all duration-300 {currentPageValue ===
            'home'
              ? 'text-[#9333ea]'
              : 'text-white/80 hover:text-white'}"
            on:click={() => navigateTo("home")}
          >
            Home
            {#if currentPageValue === "home"}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] transform animate-pulse-slow"
              ></span>
            {/if}
          </button>

          <button
            class="nav-link relative px-2 py-1 transition-all duration-300 {currentPageValue ===
            'about'
              ? 'text-[#9333ea]'
              : 'text-white/80 hover:text-white'}"
            on:click={() => navigateTo("about")}
          >
            About
            {#if currentPageValue === "about"}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] transform animate-pulse-slow"
              ></span>
            {/if}
          </button>

          <button
            class="nav-link relative px-2 py-1 transition-all duration-300 {currentPageValue ===
            'projects'
              ? 'text-[#9333ea]'
              : 'text-white/80 hover:text-white'}"
            on:click={() => navigateTo("projects")}
          >
            Projects
            {#if currentPageValue === "projects"}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] transform animate-pulse-slow"
              ></span>
            {/if}
          </button>

          <button
            class="nav-link relative px-2 py-1 transition-all duration-300 {currentPageValue ===
            'skills'
              ? 'text-[#9333ea]'
              : 'text-white/80 hover:text-white'}"
            on:click={() => navigateTo("skills")}
          >
            Skills
            {#if currentPageValue === "skills"}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] transform animate-pulse-slow"
              ></span>
            {/if}
          </button>

          <button
            class="nav-link relative px-2 py-1 transition-all duration-300 {currentPageValue ===
            'contact'
              ? 'text-[#9333ea]'
              : 'text-white/80 hover:text-white'}"
            on:click={() => navigateTo("contact")}
          >
            Contact
            {#if currentPageValue === "contact"}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] transform animate-pulse-slow"
              ></span>
            {/if}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white focus:outline-none"
          on:click={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Side Menu -->
  {#if isMobileMenuOpen}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      role="button"
      tabindex="0"
      on:click={toggleMobileMenu}
      on:keydown={(e) => e.key === "Enter" && toggleMobileMenu()}
      transition:fade={{ duration: 200 }}
    ></div>
  {/if}

  <div
    class="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#0f0f1a] border-l border-[#9333ea]/20 z-50 transform transition-transform duration-300 ease-in-out {isMobileMenuOpen
      ? 'translate-x-0'
      : 'translate-x-full'}"
  >
    <!-- Mobile Menu Header -->
    <div
      class="flex justify-between items-center p-6 border-b border-[#9333ea]/20"
    >
      <div
        class="text-xl font-bold bg-gradient-to-r from-[#9333ea] via-[#4f46e5] to-[#3b82f6] bg-clip-text text-transparent"
      >
        Portfolio
      </div>
      <button
        class="text-white focus:outline-none"
        on:click={toggleMobileMenu}
        aria-label="Close menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Links -->
    <div class="p-6 space-y-4">
      <button
        class="block w-full text-left py-3 px-4 rounded-lg {currentPageValue ===
        'home'
          ? 'bg-gradient-to-r from-[#9333ea]/20 to-[#3b82f6]/20 text-white'
          : 'text-white/80 hover:bg-white/5'} transition-all duration-300"
        on:click={() => handleNavigate("home")}
      >
        Home
      </button>

      <button
        class="block w-full text-left py-3 px-4 rounded-lg {currentPageValue ===
        'about'
          ? 'bg-gradient-to-r from-[#9333ea]/20 to-[#3b82f6]/20 text-white'
          : 'text-white/80 hover:bg-white/5'} transition-all duration-300"
        on:click={() => handleNavigate("about")}
      >
        About
      </button>

      <button
        class="block w-full text-left py-3 px-4 rounded-lg {currentPageValue ===
        'projects'
          ? 'bg-gradient-to-r from-[#9333ea]/20 to-[#3b82f6]/20 text-white'
          : 'text-white/80 hover:bg-white/5'} transition-all duration-300"
        on:click={() => handleNavigate("projects")}
      >
        Projects
      </button>

      <button
        class="block w-full text-left py-3 px-4 rounded-lg {currentPageValue ===
        'skills'
          ? 'bg-gradient-to-r from-[#9333ea]/20 to-[#3b82f6]/20 text-white'
          : 'text-white/80 hover:bg-white/5'} transition-all duration-300"
        on:click={() => handleNavigate("skills")}
      >
        Skills
      </button>

      <button
        class="block w-full text-left py-3 px-4 rounded-lg {currentPageValue ===
        'contact'
          ? 'bg-gradient-to-r from-[#9333ea]/20 to-[#3b82f6]/20 text-white'
          : 'text-white/80 hover:bg-white/5'} transition-all duration-300"
        on:click={() => handleNavigate("contact")}
      >
        Contact
      </button>
    </div>
  </div>

  <!-- Main Content with Page Transitions -->
  <div class="pt-24 pb-12 px-6 container mx-auto main-content">
    <div>
      {#key currentPageValue}
        <div transition:fade={fadeParams}>
          <svelte:component this={pageComponents[currentPageValue]} />
        </div>
      {/key}
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-[#0f0f1a] border-t border-[#9333ea]/20 py-6">
    <div class="container mx-auto px-6 text-center text-white/60">
      <p>© 2024 Portfolio. No rights reserved. Do whatever.</p>
      <div class="mt-4 flex justify-center space-x-6">
        <a
          href="https://github.com/lmoboy"
          class="text-white/60 hover:text-[#9333ea] transition-colors duration-300"
          aria-label="Visit my GitHub profile"
        >
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</div>

<style>
  /* Global styles */
  :global(body) {
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
  }

  :global(::-webkit-scrollbar) {
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #0f0f1a;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: linear-gradient(to bottom, #9333ea, #4f46e5);
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: linear-gradient(to bottom, #a855f7, #6366f1);
  }

  /* Animation keyframes */
  @keyframes -global-fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes -global-fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes -global-slideIn {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes -global-slideOut {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-50px);
      opacity: 0;
    }
  }

  @keyframes -global-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Animation classes */
  :global(.animate-fade-in) {
    animation: fadeIn 0.5s ease-in-out;
  }

  :global(.animate-fade-out) {
    animation: fadeOut 0.5s ease-in-out;
  }

  :global(.animate-pulse-slow) {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Shadow classes */
  :global(.shadow-glow-sm) {
    box-shadow: 0 0 5px rgba(147, 51, 234, 0.5);
  }

  :global(.shadow-glow-md) {
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
  }

  :global(.shadow-glow-lg) {
    box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);
  }
</style>
