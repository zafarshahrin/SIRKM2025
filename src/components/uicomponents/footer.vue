<template>
  <footer class="bg-black text-white py-8 mt-10 flex justify-center">
    <div class="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-4">
      <div class="flex justify-between items-center">
<div class="flex flex-nowrap justify-center md:justify-start gap-0 text-xs font-bold mb-4 divide-x divide-gray-500">
  <router-link to="/" class="px-1 py-1 hover:text-red-800">Home</router-link>
  <router-link to="/calls" class="px-1 py-1 hover:text-red-800">Calls</router-link>
  <router-link to="/invited-speaker" class="px-1 py-1 hover:text-red-800">Invited Speaker</router-link>
  <router-link to="/abstract-submission" class="px-1 py-1 hover:text-red-800">Abstract Submission</router-link>
  <router-link to="/programme" class="px-1 py-1 hover:text-red-800">Programme</router-link>
  <router-link to="/registration" class="px-1 py-1 hover:text-red-800">Registration</router-link>
  <router-link to="/committee" class="px-1 py-1 hover:text-red-800">Committee</router-link>
  <router-link to="/media" class="px-1 py-1 hover:text-red-800">Media</router-link>
</div>


        <!-- Logo -->
        <div class="shrink-0">
          <router-link to="/">
            <img src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/sirkmlogowhitefooter.png" alt="SIRKM Logo" />
          </router-link>
        </div>
      </div>

      <hr />

      <!-- Address -->
      <div class="text-sm mb-4 text-center md:text-left">
        Faculty of Information Science and Technology, Universiti Kebangsaan
        Malaysia, 43600 Bangi, Selangor, Malaysia.
      </div>

      <!-- Contact -->
      <div class="text-sm mb-4 text-center md:text-left">
        Email:
        <a href="mailto:sirkm2022@ukm.edu.my" class="hover:text-gray-400">sirkm2022@ukm.edu.my</a>
        &nbsp;|&nbsp; Attention to: Masnizah Mohd / Lailatul Qadri Zakaria
      </div>

      <div class="flex items-center justify-between">
        <!-- Copyright -->
        <div class="text-sm text-center md:text-left">&copy; 2022 SIRKM2022</div>

        <!-- Social media -->
        <div class="flex justify-center md:justify-start gap-4 mb-4">
          <a href="#" class="hover:text-gray-400">Facebook</a>
          <a href="#" class="hover:text-gray-400">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
</template>
