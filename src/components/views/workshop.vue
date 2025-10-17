<template>
  <div class="workshop-page w-full pb-[120px]">
    <!-- ================== Hero / Banner ================== -->
    <section class="relative w-full h-60 md:h-72">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
        alt="Hero background"
      />
      <div class="absolute inset-0 bg-purple-900/50"></div>
      <div
        class="bg-black/80 w-full py-2 text-white flex items-center justify-center absolute bottom-0 text-sm md:text-base"
      >
        Home &gt; Workshop
      </div>
    </section>

    <!-- ================== Title Section ================== -->
    <section class="flex flex-col items-center justify-center py-12 text-center px-4">
      <h2 class="text-2xl font-bold text-[#1d3557] mb-2">
        WORKSHOP INFORMATION
      </h2>
      <div class="w-32 h-1 bg-purple-600 rounded mb-6"></div>

    </section>

    <!-- ================== Poster Section ================== -->
    <section class="flex items-center justify-center py-12 px-4">
      <img
        :src="poster"
        alt="Workshop Poster"
        class="max-w-full md:max-w-2xl rounded-lg shadow-lg mx-auto"
      />
    </section>
  </div>
</template>

<script setup>
import poster from "@/assets/WorkshopPosterSIRKM2025.png";
</script>
