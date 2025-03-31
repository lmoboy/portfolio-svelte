<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  let formSubmitted = false;

  onMount(() => {
    // Svelte transitions will handle animations automatically
  });

  function handleSubmit() {
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData);
    formSubmitted = true;

    // Reset form after submission
    setTimeout(() => {
      formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      formSubmitted = false;
    }, 3000);
  }
</script>

<div class="min-h-[80vh] py-12">
  <!-- Contact Header -->
  <div
    class="mb-16" in:fade={{ duration: 700 }}
  >
    <h2
      class="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] bg-clip-text text-transparent inline-block"
    >
      Get In Touch
    </h2>
    <p class="text-lg text-white/70 max-w-3xl">
      Have a project in mind or want to discuss potential opportunities? I'd
      love to hear from you. Fill out the form below or reach out through any of
      the provided contact methods.
    </p>
  </div>

  <div class="flex flex-col lg:flex-row gap-16">
    <!-- Contact Form -->
    <div
      class="lg:w-2/3" in:fly={{ y: 10, duration: 700, delay: 200 }}
    >
      <div
        class="bg-dark-bg/50 rounded-xl p-8 border border-white/10 hover:border-[#9333ea]/20 transition-all duration-300 hover:shadow-glow-sm"
      >
        {#if formSubmitted}
          <div class="py-12 text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-md"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p class="text-white/70">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Name Field -->
              <div class="space-y-2">
                <label
                  for="name"
                  class="block text-white/80 text-sm font-medium"
                  >Your Name</label
                >
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:outline-none focus:border-[#9333ea]/50 text-white transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <!-- Email Field -->
              <div class="space-y-2">
                <label
                  for="email"
                  class="block text-white/80 text-sm font-medium"
                  >Your Email</label
                >
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:outline-none focus:border-[#9333ea]/50 text-white transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <!-- Subject Field -->
            <div class="space-y-2">
              <label
                for="subject"
                class="block text-white/80 text-sm font-medium">Subject</label
              >
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                required
                class="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:outline-none focus:border-[#9333ea]/50 text-white transition-colors duration-300"
                placeholder="Your subject..."
              />
            </div>

            <!-- Message Field -->
            <div class="space-y-2">
              <label
                for="message"
                class="block text-white/80 text-sm font-medium">Message</label
              >
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="5"
                class="w-full px-4 py-3 bg-dark-bg border border-white/10 rounded-lg focus:outline-none focus:border-[#9333ea]/50 text-white transition-colors duration-300 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="px-6 py-3 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 text-white font-medium"
            >
              Send Message
            </button>
          </form>
        {/if}
      </div>
    </div>

    <!-- Contact Information -->
    <div
      class="lg:w-1/3" in:fly={{ y: 10, duration: 700, delay: 400 }}
    >
      <div class="space-y-8">
        <!-- Contact Card -->
        <div
          class="bg-dark-bg/50 rounded-xl p-6 border border-white/10 hover:border-[#3b82f6]/20 transition-all duration-300 hover:shadow-glow-sm"
        >
          <h3 class="text-xl font-bold text-white mb-6">Contact Information</h3>

          <div class="space-y-4">
            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 rounded-full bg-[#9333ea]/10 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <svg
                  class="w-5 h-5 text-[#9333ea]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-white/80 font-medium">Email</h4>
                <a
                  href="mailto:steamgoyu19@gmail.com"
                  class="text-[#9333ea] hover:text-[#3b82f6] transition-colors duration-300"
                  >steamgoyu19@gmail.com</a
                >
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <svg
                  class="w-5 h-5 text-[#3b82f6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-white/80 font-medium">Location</h4>
                <p class="text-white/60">Latvia, Riga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
