<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { repositories, isLoading, error} from './stores/github.js';
  import LanguageIcon from './components/LanguageIcon.svelte';


  let isVisible = false;
  let activeFilter = 'all';
  
  onMount(() => {
    console.log(repositories)
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
  
</script>

<div class="min-h-[80vh] py-12">
  <!-- Projects Header -->
  <div class="mb-12" in:fade={{ duration: 700 }}>
    <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent inline-block">
      My Projects
    </h2>
    <p class="text-lg text-white/70 max-w-3xl">
      Here's a selection of my recent work. Each project represents a unique challenge and solution OR a couple of sleepless nights of trying to figure out new features.
    </p>
  </div>
  
  
  <!-- Projects Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each repositories as project, i}
      <div 
        in:fade={{ duration: 700, delay: 200 + (i * 100) }}
        class="group bg-dark-bg/50 rounded-xl overflow-hidden border border-white/5 hover:border-[#9333ea]/30 transition-all duration-500 hover:shadow-glow-sm"
      >
        <!-- Project Header with Language Icon -->
        <div class="h-24 overflow-hidden relative bg-gradient-to-r from-gray-900 to-gray-800 p-4">
          <div class="absolute top-0 right-0 p-3">
            <LanguageIcon language={project.language} />
          </div>
          <div class="flex items-center h-full">
            <h3 class="text-2xl font-bold text-white">{project.name}</h3>
          </div>
        </div>
        
        <!-- Project Info -->
        <div class="p-6 space-y-4">
          <div class="flex items-center space-x-2 text-white/60 text-sm mb-2">
            <span class="px-2 py-1 bg-[#9333ea]/20 rounded-md text-xs font-medium text-[#9333ea]">{project.language || 'Unknown'}</span>
            {#if project.stargazers_count}
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {project.stargazers_count}
              </span>
            {/if}
            {#if project.forks}
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3a2 2 0 00-2 2v1h16V5a2 2 0 00-2-2H5zm13 4H4v1a1 1 0 001 1h1v5a1 1 0 001 1h2a1 1 0 001-1v-5h4v5a1 1 0 001 1h2a1 1 0 001-1v-5h1a1 1 0 001-1V7z"></path>
                </svg>
                {project.forks}
              </span>
            {/if}
          </div>
          
          <p class="text-white/70">{project.description}</p>
          
          <!-- Technologies Used -->
          <div class="flex flex-wrap gap-2 pt-2">
            {#if project.technologies && project.technologies.length > 0}
              {#each project.technologies as tech}
                <span class="px-2 py-1 bg-dark-bg rounded-md text-xs text-white/60 border border-white/10">{tech}</span>
              {/each}
            {/if}
          </div>
          
          <!-- Project Link -->
          <div class="pt-4">
            <a 
              href={project.html_url} 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center space-x-2 text-[#9333ea] hover:text-[#3b82f6] transition-colors duration-300"
            >
              <span>View on GitHub</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>