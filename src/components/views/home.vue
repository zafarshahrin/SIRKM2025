<template>
  <div class="home-content w-full pb-[120px]">
    <!-- Hero Section -->
    <section
      :style="{ backgroundImage: `url(${heroImg})` }"
      class="relative h-[500px] bg-cover bg-center flex items-center justify-center"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-white/5"></div>

      <!-- Optional centered hero content (kept empty as requested) -->
      <div class="relative z-10 text-center text-white">
        <!-- leave blank or add hero text here -->
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
    </section>

 <!-- Introduction + Important Dates side by side -->
    <section class="introduction py-9 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <!-- Introduction (2/3 width) -->
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold text-[#1d3557] mb-4">INTRODUCTION</h2>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            The Seminar on Information Retrieval and Knowledge Management 2022
            (SIRKM'22) welcome all researchers to share their ongoing research and
            provide an opportunity to share their work. SIRKM'22 aims to encourage
            knowledge sharing by providing a platform for interactive discussions
            with experts in information retrieval, knowledge management, and its
            related fields. It also hopes to encourage community-building by
            connecting early and advanced researchers. SIRKM'22 is jointly
            organised by the Universiti Kebangsaan Malaysia (UKM) and the Society
            of Information Retrieval and Knowledge Management, Malaysia (PECAMP).
          </p>
          <p class="text-sm text-gray-700 leading-relaxed text-justify">
            SIRKM was founded in 2017, is a PECAMP key event for the discussion of
            research on information retrieval and knowledge management. Our past
            SIRKM were SIRKM'20-Online (University of Malaya), SIRKM'18
            (International Islamic University Malaysia), and SIRKM'17 (Universiti
            Putra Malaysia).
          </p>
        </div>
<!-- Important Dates (1/3 width) -->
<div class="bg-orange-500 text-white rounded-lg shadow-lg p-4">
  <h3 class="text-lg font-bold mb-3">IMPORTANT DATES</h3>
  <table class="w-full text-xs">
    <tbody>
      <tr>
        <td class="font-semibold pr-3 whitespace-nowrap py-1">Extended abstract deadline:</td>
        <td class="text-right py-1">3 January 2022 → <strong>9 January 2022</strong></td>
      </tr>
      <tr>
        <td class="font-semibold pr-3 whitespace-nowrap py-1">Notification of Acceptance:</td>
        <td class="text-right py-1">17 January 2022</td>
      </tr>
      <tr>
        <td class="font-semibold pr-3 whitespace-nowrap py-1">Camera ready:</td>
        <td class="text-right py-1">4 February 2022</td>
      </tr>
      <tr>
        <td class="font-semibold pr-3 whitespace-nowrap py-1">Registration &amp; payment deadline:</td>
        <td class="text-right py-1">21 February 2022</td>
      </tr>
      <tr>
        <td class="font-semibold pr-3 whitespace-nowrap py-1">Seminar presentation (ONLINE):</td>
        <td class="text-right py-1">2 &amp; 3 March 2022</td>
      </tr>
    </tbody>
  </table>
</div>









      </div>
    </section>

    <!-- Topic of Interest -->
    <section class="topics py-9 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-6">TOPIC OF INTEREST</h2>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          SIRKM’22 invite both local and international researchers to submit
          extended abstracts of current research being undertaken on the
          following topics (but not limited to):
        </p>

        <ul class="list-disc pl-6 text-gray-700 space-y-3 mb-6 text-sm">
          <li>
            <strong>Information Retrieval [IR]:</strong> Information Seeking and
            Behaviour, Search interfaces, Search Engine, Semantic Technology, IR
            Applications.
          </li>
          <li>
            <strong>Knowledge Management [KM]:</strong> Ontology, Decision
            Support System, Business Intelligence, Knowledge Innovation,
            Knowledge Sharing.
          </li>
          <li>
            <strong>Data Science [DS]:</strong> Machine Learning, Big Data, Data
            Analytics and its Application, Sentiment Analysis, Natural Language
            Processing.
          </li>
          <li>
            <strong>Information Visualisation [IV]:</strong> Virtual and
            Augmented Reality Technology, Multimedia Analytics, Human-Computer
            Interaction, Game Design, Computer Vision.
          </li>
          <li>
            <strong>Others:</strong> Cyber Security, Emerging ICT Application,
            Mobile Technology Applications, Internet of Things, Industrial
            Computing.
          </li>
        </ul>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          Presenters have the following opportunities for full paper
          publications:
        </p>

        <ul class="list-disc pl-6 text-gray-700 space-y-2 text-sm">
          <li>
            <strong>2023 Sixth International Conference on Information Retrieval
            and Knowledge Management (CAMP):</strong> Our previous CAMP is
            CAMP'21 (Online), CAMP’18, CAMP’16, CAMP’12, and CAMP’10.
          </li>
          <li>
            <strong>Journal of Information Retrieval and Knowledge Management
            (JIRKM)</strong>
          </li>
          <li>
            <strong>Asia-Pacific Journal of Information Technology and Multimedia
            (APJITM)</strong>
          </li>
        </ul>

        <p class="text-sm text-gray-700 leading-relaxed mt-4 text-justify">
          Authors of all accepted extended abstracts are invited to submit the
          full version of the papers for publication consideration in the
          Journal of Information Retrieval and Knowledge Management (JIRKM)
          Vol. 5.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import heroImg from '@/assets/homepageslider.png'
</script>
