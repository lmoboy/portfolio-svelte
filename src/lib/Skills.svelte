<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  onMount(() => {
    // Svelte transitions will handle animations automatically
  });
  
  // Skill categories with data
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Svelte', level: 60 },
        { name: 'Vue.js', level: 55 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      name: 'Backend Development',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      skills: [
        { name: 'Node.js', level: 45 },
        { name: 'Express', level: 50 },
        { name: 'Python', level: 55 },
        { name: 'Django', level: 20 },
        { name: 'PHP', level: 85 },
        { name: 'GraphQL', level: 45 }
      ]
    },
    {
      name: 'Database & DevOps',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      skills: [
        // { name: 'MongoDB', level: 85 },
        // { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 35 },
        { name: 'CI/CD', level: 60 }
      ]
    },
    {
      name: 'Tools & Others',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 75 },
        { name: 'Figma', level: 80 },
        { name: 'Jest', level: 30 },
        { name: 'TypeScript', level: 55 },
        { name: 'RESTful APIs', level: 90 }
      ]
    }
  ];
  
  // Get color class based on skill level
  function getColorClass(level) {
    if (level >= 90) return 'from-[#9333ea] to-[#3b82f6]';
    if (level >= 80) return 'from-[#3b82f6] to-[#4f46e5]';
    if (level >= 70) return 'from-[#4f46e5] to-[#9333ea]';
    if (level >= 60) return 'from-[#9333ea] to-[#4f46e5]';
    return 'from-[#3b82f6] to-[#9333ea]';
  }
</script>

<div class="min-h-[80vh] py-12">
  <!-- Skills Header -->
  <div class="mb-16" in:fade={{ duration: 700 }}>
    <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent inline-block">
      Skills & Expertise
    </h2>
    <p class="text-lg text-white/70 max-w-3xl">
      I've developed a diverse set of skills throughout my career. Here's an overview of my technical expertise and proficiency levels.
    </p>
  </div>
  
  <!-- Skills Categories -->
  <div class="space-y-16">
    {#each skillCategories as category, categoryIndex}
      <div in:fade={{ duration: 700, delay: categoryIndex * 150 }}>
        <!-- Category Header -->
        <div class="flex items-center mb-8 space-x-4">
          <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9333ea] to-[#3b82f6] flex items-center justify-center shadow-glow-sm">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={category.icon}></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white">{category.name}</h3>
        </div>
        
        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each category.skills as skill, i}
            <div class="space-y-2">
              <!-- Skill Name and Percentage -->
              <div class="flex justify-between items-center">
                <span class="text-white font-medium">{skill.name}</span>
                <span class="text-white/60 text-sm">{skill.level}%</span>
              </div>
              
              <!-- Progress Bar -->
              <div class="h-3 w-full bg-dark-bg/50 rounded-full overflow-hidden border border-white/5">
                <div 
                  class="h-full bg-gradient-to-r {getColorClass(skill.level)} rounded-full transition-all duration-1000 ease-out"
                  style="width: {skill.level}%"
                ></div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Additional Skills Section -->
  <div class="mt-20 transition-all duration-700 delay-600 transform translate-y-0 opacity-100"> 
    <h3 class="text-2xl font-bold text-white mb-8">Other Skills</h3>
    
    <div class="flex flex-wrap gap-4">
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#9333ea]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">Problem Solving</span>
      </div>
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#4f46e5]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">Project Management</span>
      </div>
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#9333ea]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">UI/UX Design</span>
      </div>
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">Agile Methodology</span>
      </div>
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#4f46e5]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">Technical Writing</span>
      </div>
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#9333ea]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">Code Review</span>
      </div>
      <div class="px-6 py-3 bg-dark-bg/50 rounded-lg border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300 hover:shadow-glow-sm">
        <span class="text-white">Friendly</span>
      </div>
    </div>
  </div>
</div>