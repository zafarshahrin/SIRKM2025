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
        Home &gt; Programme
      </div>
    </section>

    <!-- Programme Content -->
    <section class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-6 text-center">PROGRAMME</h2>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          The Seminar on Information Retrieval and Knowledge Management 2022 (SIRKM'22) will include keynote speeches, invited talks, parallel sessions, and the AWIST Doctoral Consortium. Participants will have opportunities to present their research, attend technical sessions, and interact with experts in the field.
        </p>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          The programme is designed to facilitate knowledge sharing, discussion, and networking among researchers, academicians, and practitioners in Information Retrieval, Knowledge Management, Data Science, and related areas.
        </p>

        <!-- Optional Download Buttons -->
        <div class="flex justify-center flex-wrap gap-4 mt-6">
          <a
            href="#"
            download
            class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
          >
            <i class="fa-solid fa-download"></i>
            GENERAL PROGRAMME SCHEDULE
          </a>

          <a
            href="#"
            download
            class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
          >
            <i class="fa-solid fa-download"></i>
            PARALLEL SESSION 1 &amp; 2 SCHEDULE
          </a>

          <a
            href="#"
            download
            class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
          >
            <i class="fa-solid fa-download"></i>
            PARALLEL SESSION 3 SCHEDULE
          </a>

          <a
            href="#"
            download
            class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
          >
            <i class="fa-solid fa-download"></i>
            E-PROCEEDING
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
/* Optional hover effect on buttons */
a:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
</style>
