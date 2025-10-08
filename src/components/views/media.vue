<template>
  <div class="media-page w-full pb-[120px]">
    <!-- Hero / Banner -->
    <section class="relative w-full h-60">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-purple-400/50 opacity-60"></div>
      <div
        class="bg-black w-full py-2 text-white flex items-center justify-center absolute bottom-0"
      >
        Home > Media
      </div>
    </section>

    <!-- Two-line gap -->
    <div class="h-8"></div>

    <div class="container mx-auto px-6 mt-12">
      <!-- Posters + Buttons Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-center">
        <!-- Seminar Poster -->
        <div>
        <a
          href="/seminarposter.pdf"
          download
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <UiIcon :icon="['fas', 'cloud-arrow-down']" />
          <span>SEMINAR POSTER</span>
        </a>
          <!-- Two-line gap -->
          <div class="h-8"></div>
          <img
            src="/seminarposter1.jpg"
            alt="Seminar Poster"
            class="rounded-lg shadow-md mx-auto"
          />
        </div>

        <!-- Virtual Background -->
        <div>
        <a
          href="/virtualbackground1.pdf"
          download
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <UiIcon :icon="['fas', 'cloud-arrow-down']" />
          <span>VIRTUAL BACKGROUND</span>
        </a>
          <!-- Two-line gap -->
          <div class="h-8"></div>
          <img
            src="/virtualbackground1.jpg"
            alt="Virtual Background"
            class="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
import UiIcon from "@/components/uicomponents/UiIcon.vue";
</script>
