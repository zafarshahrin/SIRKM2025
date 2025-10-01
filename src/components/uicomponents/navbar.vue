<template>
  <header class="header">
    <!-- ✅ Title section always top-right -->
    <div class="w-full flex justify-end">
      <div class="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 flex justify-end">
        <div
          class="bg-black text-white font-bold flex items-center px-6 gap-4 pr-8"
          style="clip-path: polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)"
        >
          <div class="pr-4 pl-2 text-sm">SIRKM'25</div>
          <div class="bg-[#4B0082] transform skew-x-20 px-2">
            <div
              class="-skew-x-20 text-white text-xs sm:text-sm md:text-base px-2 h-8 flex items-center text-right"
            >
              SEMINAR ON INFORMATION RETRIEVAL AND KNOWLEDGE MANAGEMENT 2025
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Navigation & logo row -->
    <div class="w-full flex justify-center">
      <div
        class="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 flex items-center justify-between gap-10 py-4"
      >
        <!-- Logo -->
        <div class="logo shrink-0">
          <router-link to="/">
            <img :src="logo" alt="SIRKM Logo" class="h-12 object-contain" />
          </router-link>
        </div>

        <!-- Hamburger (mobile only) -->
        <button
          class="sm:hidden text-black focus:outline-none"
          @click="menuOpen = !menuOpen"
        >
          <!-- Icon -->
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <!-- Navigation (desktop) -->
        <div class="hidden sm:block text-black text-[12px]">
          <ul class="flex gap-6 flex-wrap">
            <li
              v-for="item in navItems"
              :key="item.path"
              @click="goTo(item.path)"
              class="inline-block px-2 py-1 cursor-pointer hover:text-red-800 border-b-2 border-transparent"
              :class="{
                'text-indigo-500 !font-bold border-b-2 border-indigo-500':
                  isActive(item).value,
              }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="menuOpen"
      class="sm:hidden bg-white shadow-md absolute top-[100%] left-0 w-full z-50"
    >
      <ul class="flex flex-col gap-4 p-4 text-black text-sm">
        <li
          v-for="item in navItems"
          :key="item.path"
          @click="goTo(item.path); menuOpen = false"
          class="cursor-pointer hover:text-red-800 border-b border-gray-200 pb-2"
          :class="{
            'text-indigo-500 font-bold': isActive(item).value,
          }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/logo3.png";

const route = useRoute();
const router = useRouter();
const menuOpen = ref(false);

// Define nav items
const navItems = [
  { name: "HOME", path: "/", routeName: "home" },
  { name: "CALLS", path: "/calls", routeName: "calls" },
  {
    name: "WORKSHOP",
    path: "/workshop",
    routeName: "workshop",
  },
  {
    name: "ABSTRACT SUBMISSION",
    path: "/abstract-submission",
    routeName: "abstract-submission",
  },
  { name: "PROGRAMME", path: "/programme", routeName: "programme" },
  { name: "REGISTRATION", path: "/registration", routeName: "registration" },
  { name: "COMMITTEE", path: "/committee", routeName: "committee" },
  { name: "MEDIA", path: "/media", routeName: "media" },
];

// Navigate manually
const goTo = (path) => {
  router.push(path);
};

// Check active state
const isActive = (item) =>
  computed(() => {
    const routeName = route.name?.toUpperCase().replace(/-/g, "");
    const itemName = item.routeName.trim().toUpperCase().replace(/-/g, "");
    return routeName === itemName;
  });
</script>

<style scoped>
header {
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
