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
        Home &gt; Abstract Submission
      </div>
    </section>

    <!-- Abstract Submission Info -->
    <section class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-6 text-center">ABSTRACT SUBMISSION</h2>
        
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          The Seminar on Information Retrieval and Knowledge Management 2022 (SIRKM'22) invites researchers to submit their extended abstracts for presentation. Abstracts should describe ongoing research or completed work in information retrieval, knowledge management, data science, and related areas.
        </p>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          Abstracts must include the following details:
        </p>

        <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-6 text-sm">
          <li>Title of the work</li>
          <li>Author(s) name and affiliation</li>
          <li>Contact email</li>
          <li>Abstract text (maximum 300 words)</li>
          <li>Keywords (3-5)</li>
        </ul>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          All submissions should be uploaded in PDF format through our online submission portal. Please make sure your abstract follows the template provided on the website.
        </p>

        <p class="text-sm text-gray-700 leading-relaxed mb-6 text-justify">
          Submission deadline: <strong>9 January 2022</strong><br>
          Notification of acceptance: <strong>17 January 2022</strong>
        </p>

        <!-- Download Template Button -->
        <div class="flex justify-center">
          <a
            href="#"
            download
            class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
          >
            <i class="fa-solid fa-download"></i>
            Download Abstract Template
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
/* Optional hover effect on the button */
a:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}
</style>
