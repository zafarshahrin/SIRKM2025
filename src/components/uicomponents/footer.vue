<template>
  <footer class="bg-black text-white py-8 mt-10 flex justify-center">
    <div class="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-4">
        <div class="flex justify-between items-center">
      <div
        class="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium mb-4 divide-x-">
        <a href="#" class="hover:text-gray-400">Home</a>
        <a href="#" class="hover:text-gray-400">Calls</a>
        <a href="#" class="hover:text-gray-400">Invited Speaker</a>
        <a href="#" class="hover:text-gray-400">Abstract Submission</a>
        <a href="#" class="hover:text-gray-400">Programme</a>
        <a href="#" class="hover:text-gray-400">Registration</a>
        <a href="#" class="hover:text-gray-400">Committee</a>
        <a href="#" class="hover:text-gray-400">Media</a>
      </div>
            <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/sirkmlogowhitefooter.png" alt="SIRKM Logo" />
          </router-link>
        </div>
        </div>
      <hr></hr>
      <!-- Address -->
      <div class="text-sm mb-4 text-center md:text-left">
        Faculty of Information Science and Technology, Universiti Kebangsaan
        Malaysia, 43600 Bangi, Selangor, Malaysia.
      </div>

      <!-- Contact -->
      <div class="text-sm mb-4 text-center md:text-left">
        Email:
        <a href="mailto:sirkm2022@ukm.edu.my" class="hover:text-gray-400"
          >sirkm2022@ukm.edu.my</a
        >
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
