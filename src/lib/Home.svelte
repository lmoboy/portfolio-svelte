<script>
  // Animation helpers
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { navigateTo } from './stores/navigation';
  
</script>

<div class="min-h-[80vh] flex flex-col justify-center">
  <!-- Hero Section -->
  <div class="flex flex-col md:flex-row items-center justify-between gap-12">
    <!-- Text Content -->
    <div class="md:w-1/2 space-y-6" in:fly={{ x: -50, duration: 700, delay: 100 }}>
      <h1 class="text-4xl md:text-6xl font-bold">
        <span class="block">Hi, I'm</span>
        <span class="bg-gradient-to-r from-[#9333ea] via-[#4f46e5] to-[#3b82f6] bg-clip-text text-transparent">Daniel</span>
      </h1>
      
      <h2 class="text-2xl md:text-3xl text-white/80">
        Full Stack Developer
      </h2>
      
      <p class="text-lg text-white/70 leading-relaxed">
        I create somewhat pretty, functional, and user-friendly digital experiences with modern web technologies.
      </p>
      
      <div class="pt-4 flex space-x-4">
        <button
        on:click={() => navigateTo('projects')}
        class="px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-lg transition-all duration-300 transform hover:-translate-y-1" style="box-shadow: 0 0 15px rgba(147, 51, 234, 0.5); hover:box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);">
          View Projects
        </button>
        
        <button 
        on:click={()=>navigateTo('contact')}
        class="px-6 py-3 bg-transparent border border-[#9333ea]/50 rounded-lg hover:border-[#9333ea] transition-all duration-300 transform hover:-translate-y-1">
          Contact Me
        </button>
      </div>
    </div>
    
    <!-- Hero Image/Animation -->
    <div class="md:w-1/2" in:fly={{ x: 50, duration: 700, delay: 300 }}>
      <div class="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
        <!-- Animated background elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#9333ea]/20 to-[#3b82f6]/20 rounded-full" style="animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
        <div class="absolute inset-4 bg-gradient-to-tr from-[#4f46e5]/30 to-[#3b82f6]/30 rounded-full" style="animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; animation-delay: 1s;"></div>
        
        <!-- Profile image placeholder -->
        <div class="absolute inset-8 rounded-full flex items-center justify-center border-2 border-white/10 overflow-hidden" style="background-color: #0f0f1a;">
          <!-- Replace with actual profile image if available -->
          <div class="text-6xl font-bold bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent">DV</div>
        </div>
        
        <!-- Orbiting elements -->
        <div class="absolute w-12 h-12 rounded-full bg-[#9333ea]/80 top-0 left-1/2 -translate-x-1/2 flex items-center justify-center animate-bounce" style="box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); animation-duration: 3s;">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
        
        <div class="absolute w-10 h-10 rounded-full bg-[#3b82f6]/80 bottom-4 right-0 flex items-center justify-center animate-bounce" style="box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); animation-duration: 2.5s; animation-delay: 0.5s;">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        </div>
        
        <div class="absolute w-8 h-8 rounded-full bg-[#4f46e5]/80 bottom-12 left-0 flex items-center justify-center animate-bounce" style="box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); animation-duration: 3.5s; animation-delay: 1s;">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 000-1.41z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Tech Stack Section -->
  <div class="mt-24" in:fade={{ duration: 700, delay: 500 }}>
    <h3 class="text-xl text-center text-white/60 mb-8">Technologies I work with</h3>
    
    <div class="flex flex-wrap justify-center gap-8">
      <!-- Tech icons - replace with actual tech stack -->
      <div class="tech-icon w-16 h-16 rounded-xl flex items-center justify-center border border-[#9333ea]/20 hover:border-[#9333ea]/60 transition-all duration-300 group" style="background-color: #0f0f1a;">
        <div class="text-white/60 group-hover:text-white transition-colors duration-300">HTML</div>
      </div>
      
      <div class="tech-icon w-16 h-16 rounded-xl flex items-center justify-center border border-[#9333ea]/20 hover:border-[#9333ea]/60 transition-all duration-300 group" style="background-color: #0f0f1a;">
        <div class="text-white/60 group-hover:text-white transition-colors duration-300">CSS</div>
      </div>
      
      <div class="tech-icon w-16 h-16 rounded-xl flex items-center justify-center border border-[#9333ea]/20 hover:border-[#9333ea]/60 transition-all duration-300 group" style="background-color: #0f0f1a;">
        <div class="text-white/60 group-hover:text-white transition-colors duration-300">JS</div>
      </div>
      
      <div class="tech-icon w-16 h-16 rounded-xl flex items-center justify-center border border-[#9333ea]/20 hover:border-[#9333ea]/60 transition-all duration-300 group" style="background-color: #0f0f1a;">
        <div class="text-white/60 group-hover:text-white transition-colors duration-300">React</div>
      </div>
      
      <div class="tech-icon w-16 h-16 rounded-xl flex items-center justify-center border border-[#9333ea]/20 hover:border-[#9333ea]/60 transition-all duration-300 group" style="background-color: #0f0f1a;">
        <div class="text-white/60 group-hover:text-white transition-colors duration-300">Node</div>
      </div>
      
      <div class="tech-icon w-16 h-16 rounded-xl flex items-center justify-center border border-[#9333ea]/20 hover:border-[#9333ea]/60 transition-all duration-300 group" style="background-color: #0f0f1a;">
        <div class="text-white/60 group-hover:text-white transition-colors duration-300">Svelte</div>
      </div>
    </div>
  </div>
</div>