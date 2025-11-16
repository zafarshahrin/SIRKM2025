<template>
  <div class="home-content w-full pb-[120px]">
    <!-- Hero Section -->
<section
  :style="{ backgroundImage: `url(/assets/WebBannerupdate2.jpg)` }"
  class="relative bg-contain sm:bg-cover bg-center flex items-center justify-center 
  h-[250px] sm:h-[350px] md:h-[550px] bg-no-repeat"
>
  <div class="absolute inset-0 bg-white/5"></div>
  <div class="relative z-10 text-center text-white"></div>
</section>


    <!-- Download Buttons 
    <section class="downloads bg-white py-8 px-4 text-center">
      <div class="flex justify-center flex-wrap gap-4">

         Button 1 
        <a
          href="#"
          
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <UiIcon :icon="['fas', 'cloud-arrow-down']" />
          <span>GENERAL PROGRAMME SCHEDULE</span>
        </a>

         Button 2 
        <a
          href="#"
          
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <UiIcon :icon="['fas', 'cloud-arrow-down']" />
          <span>PARALLEL SESSION 1 &amp; 2 SCHEDULE</span>
        </a>

         Button 3 
        <a
          href="#"
         
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <UiIcon :icon="['fas', 'cloud-arrow-down']" />
          <span>PARALLEL SESSION 3 SCHEDULE</span>
        </a>

         Button 4
        <a
          href="#"
          
          class="bg-[#1d3557] text-white px-5 py-3 rounded-md text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#f39c12] transition"
        >
          <UiIcon :icon="['fas', 'cloud-arrow-down']" />
          <span>E-PROCEEDING</span>
        </a>

      </div>
    </section>
-->

    <!-- Introduction + Important Dates -->
    <section class="introduction py-9 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <!-- Introduction -->
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold text-[#1d3557] mb-2">INTRODUCTION</h2>
          <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>
          <div class="h-8"></div>

          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            The Seminar on Information Retrieval and Knowledge Management 2025
            (SIRKM'25) welcomes all researchers to share their ongoing research
            and provide an opportunity to share their work. SIRKM'25 aims to
            encourage knowledge sharing by providing a platform for interactive
            discussions with experts in information retrieval, knowledge
            management, and its related fields. It also hopes to encourage
            community-building by connecting early and advanced researchers.
          </p>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            SIRKM'25 is jointly organised by the Universiti Teknologi MARA (UiTM) 
            and the Society of Information Retrieval and Knowledge Management, 
            Malaysia (PECAMP). Area of interest: SIRKM’25 invites both local and 
            international researchers to submit extended abstracts of current 
            research being undertaken on the following topics (but not limited to):
          </p>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            1. Information Retrieval [IR]: Information Seeking and Behaviour,
            Search interfaces, Search Engine, Semantic Technology, IR
            Applications.
          </p>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            2. Knowledge Management [KM]: Ontology, Decision Support System,
            Business Intelligence, Knowledge Innovation, Knowledge Sharing.
          </p>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            3. Artificial Intelligence & Data Science [DS]: Machine
            Learning, Big Data, Data Analytics and its Application, Sentiment
            Analysis, Natural Language Processing.
          </p>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            4. Information Visualisation [IV]: Virtual and Augmented Reality
            Technology, Multimedia Analytics, Human-Computer Interaction, Game
            Design, Computer Vision.
          </p>
          <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
            5. Others: [O] Cyber Security, Emerging ICT Application, Mobile
            Technology Applications, Internet of Things, Industrial Computing.
          </p>
        </div>

        <!-- Important Dates -->
        <div class="flex flex-col gap-6">
          <div class="bg-gradient-to-b from-purple-700 to-purple-400 text-white rounded shadow-md">
            <h2 class="text-lg font-bold px-4 py-3 border-b border-white/30">
              IMPORTANT DATES
            </h2>

            <div class="bg-[#4B0082] divide-y divide-white/30 text-sm">
<div class="px-4 py-3">
  <p class="font-semibold">EXTENDED ABSTRACT DEADLINE:</p>
  <p class="text-sm">
    <span class="line-through text-gray-400 mr-2">9 NOVEMBER 2025</span>
    <span class="text-yellow-300 font-bold animate-pulse">→ 15 NOVEMBER 2025</span>
  </p>
</div>


              <div class="px-4 py-3">
                <p class="font-semibold">NOTIFICATION OF ACCEPTANCE:</p>
                <p>10 NOVEMBER 2025</p>
              </div>
              <div class="px-4 py-3">
                <p class="font-semibold">CAMERA READY SUBMISSION:</p>
                <p class="text-sm">
                <span class="line-through text-grey-400 mr-2">24 NOVEMBER 2025</span>
                <span class="text-yellow-300 font bold animate-pulse">→ 9 DECEMBER 2025</span>
                </p>
              </div>
              <div class="px-4 py-3">
                <p class="font-semibold">REGISTRATION & PAYMENT DEADLINE:</p>
                <p>TBA</p>
              </div>
              <div class="px-4 py-3">
                <p class="font-semibold">SEMINAR PRESENTATION (ONLINE):</p>
                <p>25 NOVEMBER 2025</p>
              </div>
              <div class="px-4 py-3">
                <p class="font-semibold">ONLINE WORKSHOP:</p>
                <p>25 NOVEMBER 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Topics -->
    <section class="topics py-9 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-2">
          TOPIC OF INTEREST
        </h2>
        <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>
        <div class="h-8"></div>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          SIRKM’25 invites both local and international researchers to submit
          extended abstracts of current research being undertaken on the
          following topics (but not limited to):
        </p>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          1. Information Retrieval [IR]: Information Seeking and Behaviour,
          Search interfaces, Search Engine, Semantic Technology, IR
          Applications.
        </p>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          2. Knowledge Management [KM]: Ontology, Decision Support System,
          Business Intelligence, Knowledge Innovation, Knowledge Sharing.
        </p>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          3. Artificial Intelligence & Data Science [DS]: Machine
          Learning, Big Data, Data Analytics and its Application, Sentiment
          Analysis, Natural Language Processing.
        </p>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          4. Information Visualisation [IV]: Virtual and Augmented Reality
          Technology, Multimedia Analytics, Human-Computer Interaction, Game
          Design, Computer Vision.
        </p>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          5. Others [O]: Cyber Security, Emerging ICT Application, Mobile
          Technology Applications, Internet of Things, Industrial Computing.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import UiIcon from "@/components/uicomponents/UiIcon.vue";
</script>
