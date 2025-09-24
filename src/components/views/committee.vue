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
        Home &gt; Committee
      </div>
    </section>

    <!-- Main Committee Content -->
    <section class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-8 text-center">COMMITTEE MEMBERS</h2>

        <!-- Committee Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Example Committee Member -->
          <div class="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/mizo.jpg"
              alt="Chair"
              class="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 class="font-bold text-[#1d3557]">Riichiro Mizoguchi</h3>
            <p class="text-sm text-gray-700">Chair, Japan Advanced Institute of Science and Technology</p>
          </div>

          <div class="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/shahrulterkini.jpg"
              alt="Co-Chair"
              class="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 class="font-bold text-[#1d3557]">Shahrul Azman Mohd Noah</h3>
            <p class="text-sm text-gray-700">Co-Chair, Universiti Kebangsaan Malaysia</p>
          </div>

          <div class="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/alan.jpg"
              alt="Committee Member"
              class="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 class="font-bold text-[#1d3557]">Alan Smeaton</h3>
            <p class="text-sm text-gray-700">Committee Member, Dublin City University</p>
          </div>

          <!-- Add more members as needed -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
/* Optional hover effect on images */
img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>
