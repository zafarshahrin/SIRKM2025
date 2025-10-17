<template>
  <footer class="bg-black text-white py-8 mt-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <!-- Top section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Navigation Links -->
        <div
          class="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 text-xs font-bold text-center md:text-left"
        >
          <router-link to="/" class="px-1 py-1 hover:text-red-800">Home</router-link>
          <router-link to="/calls" class="px-1 py-1 hover:text-red-800">Calls</router-link>
          <router-link to="/workshop" class="px-1 py-1 hover:text-red-800">Workshop</router-link>
          <router-link to="/abstract-submission" class="px-1 py-1 hover:text-red-800">Abstract Submission</router-link>
          <router-link to="/programme" class="px-1 py-1 hover:text-red-800">Programme</router-link>
          <router-link to="/registration" class="px-1 py-1 hover:text-red-800">Registration</router-link>
          <router-link to="/committee" class="px-1 py-1 hover:text-red-800">Committee</router-link>
          <router-link to="/media" class="px-1 py-1 hover:text-red-800">Media</router-link>
        </div>

        <!-- Logo -->
        <div class="shrink-0">
          <router-link to="/">
            <img
              :src="logo"
              alt="SIRKM Logo"
              class="h-10 md:h-12 object-contain mx-auto md:mx-0"
            />
          </router-link>
        </div>
      </div>

      <hr class="border-gray-600" />

      <!-- Address -->
      <div class="text-sm text-center md:text-left">
        Faculty of Computer and Mathematical Sciences, Universiti Teknologi MARA,
        40450 Shah Alam, Selangor, Malaysia
      </div>

      <!-- Contact -->
      <div class="text-sm text-center md:text-left">
        Email:
        <a href="mailto:sirkm2025@gmail.com" class="hover:text-gray-400">
          sirkm2025@gmail.com
        </a>
        &nbsp;|&nbsp; Attention to: Dr Haslizatul Fairuz binti Mohamed Hanum
      </div>

      <!-- Bottom section -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Copyright -->
        <div class="text-sm text-center md:text-left">
          &copy; 2025 SIRKM2025
        </div>


      </div>
    </div>
  </footer>
</template>

<script setup>
// ✅ Use BASE_URL so it works in localhost and deployed site (/SIRKM2025/)
const logo = `${import.meta.env.BASE_URL}assets/footernakal2.png`;
</script>
