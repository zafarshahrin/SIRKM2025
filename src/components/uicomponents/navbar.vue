<template>
  <header class="header">
    <div class="flex justify-end items-center w-full">
      <div class="flex w-[65%] items-center">
        <!-- Black slanted div -->
        <div
          class="bg-black text-white font-bold flex items-center px-6 gap-4 pr-8"
          style="clip-path: polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)"
        >
          <div class="pr-4 pl-2 text-sm">SIRKM'25</div>
          <div class="bg-purple-600 transform skew-x-20 px-2">
            <div class="-skew-x-20 text-white text-xs px-2 h-8 flex items-center">
              SEMINAR ON INFORMATION RETRIEVAL AND KNOWLEDGE MANAGEMENT 2025
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center">
      <div class="w-[55%] flex items-center justify-between gap-10 py-4">
        <!-- Logo -->
        <div class="logo shrink-0">
          <router-link to="/">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/logo-sirkmbaru.png"
              alt="SIRKM Logo"
            />
          </router-link>
        </div>

<!-- Navigation -->
<nav class="text-black text-[12px]">
  <ul class="flex gap-6">
    <li>
      <router-link
        to="/"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        exact-active-class="font-bold text-black border-b-2 border-black"
      >HOME</router-link>
    </li>
    <li>
      <router-link
        to="/calls"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >CALLS</router-link>
    </li>
    <li>
      <router-link
        to="/invited-speaker"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >INVITED SPEAKER</router-link>
    </li>
    <li>
      <router-link
        to="/abstract-submission"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >ABSTRACT SUBMISSION</router-link>
    </li>
    <li>
      <router-link
        to="/programme"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >PROGRAMME</router-link>
    </li>
    <li>
      <router-link
        to="/registration"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >REGISTRATION</router-link>
    </li>
    <li>
      <router-link
        to="/committee"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >COMMITTEE</router-link>
    </li>
    <li>
      <router-link
        to="/media"
        class="inline-block px-2 py-1 hover:text-red-800 border-b-2 border-transparent"
        active-class="font-bold text-black border-b-2 border-black"
      >MEDIA</router-link>
    </li>
  </ul>
</nav>






      </div>
    </div>
  </header>
</template>

<script setup>
// No script needed, Vue Router handles navigation
</script>

<style scoped>
/* Optional: Add small shadow below navbar */
header {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
