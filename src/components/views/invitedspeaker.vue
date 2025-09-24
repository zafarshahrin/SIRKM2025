<template>
  <div class="home-content w-full pb-[120px]">
    <!-- Hero Section -->
    <section class="relative w-full h-60">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-orange-500 opacity-60"></div>
      <div class="bg-black w-full py-2 text-white flex items-center justify-center absolute bottom-0">
        Home &gt; Invited Speakers
      </div>
    </section>

    <!-- Invited Speakers Section -->
    <section class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-8 text-center">INVITED SPEAKERS</h2>
        
        <div class="flex flex-wrap justify-center gap-8">
          <!-- Speaker 1 -->
          <div class="flex flex-col items-center text-center w-48">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/mizo.jpg"
              alt="Riichiro Mizoguchi"
              class="rounded-lg w-48 h-48 object-cover mb-2"
            />
            <h3 class="font-bold text-sm">Riichiro Mizoguchi</h3>
            <p class="text-xs text-gray-700">Japan Advanced Institute of Science and Technology</p>
          </div>

          <!-- Speaker 2 -->
          <div class="flex flex-col items-center text-center w-48">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/shahrulterkini.jpg"
              alt="Shahrul Azman Mohd Noah"
              class="rounded-lg w-48 h-48 object-cover mb-2"
            />
            <h3 class="font-bold text-sm">Shahrul Azman Mohd Noah</h3>
            <p class="text-xs text-gray-700">Universiti Kebangsaan Malaysia</p>
          </div>

          <!-- Speaker 3 -->
          <div class="flex flex-col items-center text-center w-48">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/alan.jpg"
              alt="Alan Smeaton"
              class="rounded-lg w-48 h-48 object-cover mb-2"
            />
            <h3 class="font-bold text-sm">Alan Smeaton</h3>
            <p class="text-xs text-gray-700">Dublin City University</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
/* Optional: add some hover effect on speaker images */
img:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
</style>
