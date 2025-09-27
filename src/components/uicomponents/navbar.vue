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
          <div class="bg-[#4B0082] transform skew-x-20 px-2">
            <div
              class="-skew-x-20 text-white text-xs px-2 h-8 flex items-center"
            >
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
            <img :src="logo" alt="SIRKM Logo" class="h-12 object-contain" />
          </router-link>
        </div>

        <!-- Navigation -->
        <div class="text-black text-[12px]">
          <ul class="flex gap-6">
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
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import logo from "@/assets/logo3.png"; // ✅ import local image

const route = useRoute();
const router = useRouter();

// Define nav items with routeName to match route.name
const navItems = [
  { name: "HOME", path: "/", routeName: "home" },
  { name: "CALLS", path: "/calls", routeName: "calls" },
  {
    name: "INVITED SPEAKER",
    path: "/invited-speaker",
    routeName: "invited-speaker",
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
