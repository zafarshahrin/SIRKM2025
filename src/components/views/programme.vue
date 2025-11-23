<template>
  <div class="programme-page w-full pb-[120px]">
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
        Home > Programme
      </div>
    </section>

    <div class="h-8"></div>

    <!-- Tentative Programme -->
    <section class="max-w-6xl mx-auto px-6 mt-16 space-y-12">
     
            <h2 class="text-2xl font-bold text-[#1d3557] mb-2">
              TENTATIVE
            </h2>
            <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>

      <div class="h-8"></div>

      <!-- ⚡ Beautiful Event Info Section -->
      <div
        class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="flex items-center gap-4">
          <div class="bg-white/20 p-3 rounded-full">
            <span class="text-2xl">📅</span>
          </div>
          <div>
            <p class="text-sm opacity-80">Date</p>
            <p class="text-lg font-semibold">25 November 2025</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="bg-white/20 p-3 rounded-full">
            <span class="text-2xl">📆</span>
          </div>
          <div>
            <p class="text-sm opacity-80">Day</p>
            <p class="text-lg font-semibold">Tuesday</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="bg-white/20 p-3 rounded-full">
            <span class="text-2xl">💻</span>
          </div>
          <div>
            <p class="text-sm opacity-80">Platform</p>
            <p class="text-lg font-semibold">Online Google Meet</p>
          </div>
        </div>
      </div>

      <!-- Two-line gap -->
      <div class="h-8"></div>

      <!-- Programme Table -->
      <div>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border border-gray-300 text-sm">
            <thead>
              <tr class="bg-purple-500 text-white text-left">
                <th class="border px-4 py-2">Time</th>
                <th class="border px-4 py-2">Details</th>
                <th class="border px-4 py-2">Link</th>
              </tr>
            </thead>

            <tbody>
              <!-- 8.30 AM -->
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">8.30 am</td>
                <td class="text-center border-l px-4 py-2">Setup & Arrival</td>
                <td class="border-r px-4 py-2 text-center"></td>
              </tr>

              <!-- 9.00 AM -->
              <tr>
                <td class="border px-4 py-2">9.00 am</td>
                <td class="border px-4 py-2">
                  <strong>Presentation Session 1</strong><br />
                  <strong>Tracks:</strong><br />
                  Information Retrieval [IR]<br />
                  Information Visualisation [IV]<br />
                  Artificial Intelligence [AI] & Data Science [DS]
                </td>
                <td class="border px-4 py-2 text-center">
                  <a
                    
                  >
                    TBA
                  </a>
                </td>
              </tr>

              <!-- 11.30 AM -->
              <tr>
                <td class="border px-4 py-2">11.30 am</td>
                <td class="border px-4 py-2">
                  <strong>Presentation Session 2</strong><br />
                  <strong>Tracks:</strong><br />
                  Knowledge Management [KM]<br />
                  Artificial Intelligence [AI] & Data Science [DS]
                </td>
                <td class="border px-4 py-2 text-center">
                  <a  >TBA</a>
                    
                  
                    
                  
                </td>
              </tr>

              <!-- BREAK -->
              <tr class="bg-gray-100">
                <td class="border px-4 py-2">1.30 pm</td>
                <td class="text-center border-l px-4 py-2">Break</td>
                <td class="border-r px-4 py-2 text-center"></td>
              </tr>

              <!-- 2.00 PM -->
              <tr>
                <td class="border px-4 py-2">2.00 pm</td>
                <td class="border px-4 py-2">
                  <strong>Closing Ceremony</strong><br /><br />
                  <strong>Closing speech by:</strong><br />
                  • FSKM Dean (PM Dr Norjansalika Janom)<br />
                  • President of PECAMP (Prof. Ts. Dr Nurfadhlina Mohd Sharef)
                </td>
                <td class="border px-4 py-2">
                  <a
                    href="https://tinyurl.com/ClosingSIRKM25"
                    target="_blank"
                    class="text-blue-600 underline"
                  >
                    https://tinyurl.com/ClosingSIRKM25
                  </a>
                </td>
              </tr>

              <!-- WORKSHOP -->
              <tr>
                <td class="border px-4 py-2">2.30 pm – 4.00 pm</td>
                <td class="border px-4 py-2">
                  <strong>Workshop Title:</strong>
                  <em>Enhancing Academic Productivity with NotebookLM</em><br />
                  <strong>Speaker:</strong> Dr. Zaihosnita Hood (UKM)
                </td>
                <td class="border px-4 py-2 text-center">TBA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
