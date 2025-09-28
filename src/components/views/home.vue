<template>
  <div class="home-content w-full pb-[120px]">
    <!-- Hero Section -->
    <section
      :style="{ backgroundImage: `url(${heroImg})` }"
      class="relative h-[250px] sm:h-[350px] md:h-[500px] bg-cover sm:bg-cover md:bg-cover bg-center flex items-center justify-center"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-white/5"></div>

      <!-- Optional centered hero content -->
      <div class="relative z-10 text-center text-white">
        <!-- You can add hero text here if needed -->
      </div>
    </section>

    <!-- Download Buttons -->
    <section class="downloads bg-white py-8 px-4 text-center">
      <div class="flex justify-center flex-wrap gap-4">
        <a
          href="#"
          download
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <i class="fa-solid fa-cloud-arrow-down"></i>
          GENERAL PROGRAMME SCHEDULE
        </a>

        <a
          href="#"
          download
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <i class="fa-solid fa-cloud-arrow-down"></i>
          PARALLEL SESSION 1 &amp; 2 SCHEDULE
        </a>

        <a
          href="#"
          download
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <i class="fa-solid fa-cloud-arrow-down"></i>
          PARALLEL SESSION 3 SCHEDULE
        </a>

        <a
          href="#"
          download
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <i class="fa-solid fa-cloud-arrow-down"></i>
          E-PROCEEDING
        </a>
      </div>
    </section>

    <!-- Introduction + Important Dates -->
    <section class="introduction py-9 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <!-- Introduction (2/3) -->
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold text-[#1d3557] mb-2">INTRODUCTION</h2>
          <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>
          <div class="h-8"></div>

          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            The Seminar on Information Retrieval and Knowledge Management 2025
            (SIRKM'25) welcome all researchers to share their ongoing research...
          </p>
          <!-- Your remaining introduction text unchanged -->
        </div>

        <!-- Important Dates (1/3) -->
        <div class="bg-gradient-to-b from-purple-700 to-purple-400 text-white rounded shadow-md">
          <h2 class="text-lg font-bold px-4 py-3 border-b border-white/30">
            IMPORTANT DATES
          </h2>
          <div class="bg-[#4B0082] divide-y divide-white/30 text-sm">
            <div class="px-4 py-3">
              <p class="font-semibold">EXTENDED ABSTRACT DEADLINE:</p>
              <p>3 NOVEMBER 2025</p>
            </div>
            <div class="px-4 py-3">
              <p class="font-semibold">NOTIFICATION OF ACCEPTANCE:</p>
              <p>10 NOVEMBER 2025</p>
            </div>
            <div class="px-4 py-3">
              <p class="font-semibold">CAMERA READY SUBMISSION (12 Pages):</p>
              <p>24 NOVEMBER 2025</p>
            </div>
            <div class="px-4 py-3">
              <p class="font-semibold">REGISTRATION &amp; PAYMENT DEADLINE:</p>
              <p>TBA</p>
            </div>
            <div class="px-4 py-3">
              <p class="font-semibold">SEMINAR PRESENTATION (ONLINE):</p>
              <p>25 NOVEMBER 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Topic of Interest -->
    <section class="topics py-9 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-2">TOPIC OF INTEREST</h2>
        <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>
        <div class="h-8"></div>
        <!-- Your topic text unchanged -->
      </div>
    </section>
  </div>
</template>

<script setup>
import heroImg from "@/assets/homesliderpage8.jpeg";
</script>
