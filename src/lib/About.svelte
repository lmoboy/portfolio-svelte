<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  let imageLoaded = false;
  let profileImage;
  
  onMount(() => {
    // Create a new image to preload
    profileImage = new Image();
    profileImage.onload = () => {
      imageLoaded = true;
    };
    // Set the image source - replace with your actual image path
    profileImage.src = '/1728544854901.jpg';
  });
  
  // CSS for the bouncing letters animation
  const bounceLetterStyle = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .bounce-letter {
      display: inline-block;
      animation: bounce 1.5s ease infinite;
    }
  `;
  
  // Experience timeline data
  const experiences = [
    {
      period: '2022 - Present',
      title: 'Junior Full Stack Developer',
      company: 'Tech university.',
      description: 'Leading top of my class in developement of web applications and websites on both Frontend and Backend.',
    },
  ];
  
  // Education data
  const education = [
    {
      period: '2022 - 2026',
      degree: 'Programming Technician',
      institution: 'Tech University'
    },
    {
      period: '2020 - 2021', 
      degree: 'C# and .NET certification',
      institution: 'Datorium online courses'
    }
  ];
</script>

<div class="min-h-[80vh] py-12">
  <!-- About Me Section -->
  <div class="mb-20" in:fade={{ duration: 700 }}>
    <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent inline-block">
      About Me
    </h2>
    
    <div class="flex flex-col md:flex-row gap-12">
      <!-- Profile Image -->
      <div class="md:w-1/3">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-lg blur-md opacity-75"></div>
          <div class="relative aspect-square bg-dark-bg rounded-lg overflow-hidden border border-white/10">
            {#if imageLoaded}
              <img 
                src="/1728544854901.jpg" 
                alt="Profile" 
                class="w-full h-full object-cover" 
                in:fade={{ duration: 800 }}
              />
            {/if}
            
            <!-- Loading animation with bouncing letters -->
            <div 
              class="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-bg to-[#9333ea]/20"
              class:hidden={imageLoaded}
              out:fade={{ duration: 500 }}
            >
              <div class="flex">
                <span class="text-8xl font-bold bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent bounce-letter">D</span>
                <span class="text-8xl font-bold bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent bounce-letter" style="animation-delay: 0.2s">V</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Info -->
        <div class="mt-6 space-y-3">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-[#9333ea]/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-[#9333ea]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span class="text-white/80">steamgoyu19@gmail.com</span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span class="text-white/80">Latvia, Riga</span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-[#4f46e5]/10 flex items-center justify-center">
              <svg class="w-5 h-5 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <span class="text-white/80">Available for freelance or contract work</span> 
          </div>
        </div>
      </div>
      
      <!-- Bio -->
      <div class="md:w-2/3 space-y-6">
        <p class="text-lg text-white/80 leading-relaxed">
          I'm a passionate Full Stack Developer with over {new Date().getFullYear() - 2023} years of experience building web applications and digital experiences. My journey in web development and programming started during summer of my 8th grade, where I discovered my love for writing code in C++, then i slowly transitioned to a more requested workspace aka web developement.
        </p>
        
        <p class="text-lg text-white/80 leading-relaxed">
          Throughout my years of coding, I've worked with various technologies and frameworks, specializing in JavaScript ecosystems like React, Svelte, and Node.js. I'm also experienced with modern backend technologies such as Laravel or Flask.
        </p>
        
        <p class="text-lg text-white/80 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, playing some indie games, or sharing my knowledge through blog posts and community events.
        </p>
        
        <div class="pt-4 flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-[#9333ea]/10 rounded-full text-[#9333ea] border border-[#9333ea]/20">Problem Solver</span>
          <span class="px-4 py-2 bg-[#3b82f6]/10 rounded-full text-[#3b82f6] border border-[#3b82f6]/20">Team Player</span>
          <span class="px-4 py-2 bg-[#4f46e5]/10 rounded-full text-[#4f46e5] border border-[#4f46e5]/20">Fast Learner</span>
          <span class="px-4 py-2 bg-[#9333ea]/10 rounded-full text-[#9333ea] border border-[#9333ea]/20">Detail-Oriented</span>
          <span class="px-4 py-2 bg-[#3b82f6]/10 rounded-full text-[#3b82f6] border border-[#3b82f6]/20">Creative Thinker</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Experience Section -->
  <div class="mb-20" in:fade={{ duration: 700, delay: 200 }}>
    <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent inline-block">
      Experience
    </h2>
    
    <div class="space-y-8">
      {#each experiences as exp, i}
        <div class="relative pl-8 pb-8 border-l-2 border-[#9333ea]/30 last:border-transparent">
          <!-- Timeline dot -->
          <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#9333ea] to-[#3b82f6] shadow-glow-md"></div>
          
          <!-- Content -->
          <div class="bg-dark-bg/50 border border-white/5 rounded-lg p-6 hover:border-[#9333ea]/30 transition-all duration-300 hover:shadow-glow-sm">
            <span class="text-sm text-[#9333ea] font-medium">{exp.period}</span>
            <h3 class="text-xl font-bold text-white mt-1">{exp.title}</h3>
            <h4 class="text-lg text-white/70">{exp.company}</h4>
            <p class="mt-3 text-white/60">{exp.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Education Section -->
  <div in:fade={{ duration: 700, delay: 400 }}>
    <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent inline-block">
      Education
    </h2>
    
    <div class="space-y-8">
      {#each education as edu, i}
        <div class="relative pl-8 pb-8 border-l-2 border-[#3b82f6]/30 last:border-transparent">
          <!-- Timeline dot -->
          <div class="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#4f46e5] shadow-glow-md"></div>
          
          <!-- Content -->
          <div class="bg-dark-bg/50 border border-white/5 rounded-lg p-6 hover:border-[#3b82f6]/30 transition-all duration-300 hover:shadow-glow-sm">
            <span class="text-sm text-[#3b82f6] font-medium">{edu.period}</span>
            <h3 class="text-xl font-bold text-white mt-1">{edu.degree}</h3>
            <h4 class="text-lg text-white/70">{edu.institution}</h4>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>