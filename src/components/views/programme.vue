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

    <!-- Two-line gap -->
    <div class="h-8"></div>

    <!-- Tentative Programme -->
    <section class="max-w-6xl mx-auto px-6 mt-16 space-y-12">
      <h2 class="text-2xl font-bold text-[#1d3557] mb-2">TENTATIVE</h2>
      <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>

      <!-- Two-line gap -->
      <div class="h-8"></div>

      <!-- Morning Session -->
      <div>
        <h3 class="text-2xl font-semibold mb-4">Morning Session</h3>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-center">
          Microsoft Teams Link : TBA
        </p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full border border-gray-300 text-sm">
            <thead>
              <tr class="bg-purple-500 text-white text-left">
                <th class="border px-4 py-2">Time</th>
                <th class="border px-4 py-2">Activity</th>
                <th class="border px-4 py-2">Title</th>
                <th class="border px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
<tr>
  <!-- merge dua baris time -->
  <td class="border px-4 py-2" rowspan="2">09:00 am – 11:00 am</td>
  <td class="border px-4 py-2">Parallel Session 1</td>
  <td class="border px-4 py-2">Breakout Room 1 - Gemini</td>
  <td class="border px-4 py-2">Information Retrieval [IR]</td>
</tr>
<tr>
  <!-- time column dah merge, jadi kosongkan -->
  <td class="border px-4 py-2">Parallel Session 2</td>
  <td class="border px-4 py-2">Breakout Room 2 - Perplexity</td>
  <td class="border px-4 py-2">Knowledge Management [KM]</td>
</tr>

              <tr class="bg-gray-50">
                <td class="border px-4 py-2">11:00 am – 11:15 am</td>
                
                <!-- merge Title + Notes -->
                <td class="border px-4 py-2 text-center" colspan="3">Break</td>
              </tr>
              <tr>
                <td class="border px-4 py-2" rowspan="2">11:15 am – 01:00 pm</td>
                <td class="border px-4 py-2">Parallel Session 3</td>
                <td class="border px-4 py-2">Breakout Room 1 – Gemini</td>
                <td class="border px-4 py-2">
                  Artificial Intelligence & Data Science [DS]
                </td>
              </tr>
              <tr>
                
                <td class="border px-4 py-2">Parallel Session 4</td>
                <td class="border px-4 py-2">Breakout Room 2 – Perplexity</td>
                <td class="border px-4 py-2">
                  Information Visualisation [IV] & Others [O]
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border px-4 py-2">01:00 pm – 02:00 pm</td>
                
                <!-- merge Title + Notes -->
                <td class="border px-4 py-2 text-center" colspan="3">Lunch Break</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Two-line gap -->
      <div class="h-8"></div>

      <!-- Afternoon Session -->
      <div>
        <h3 class="text-2xl font-semibold mb-4">Afternoon Session</h3>
        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-center">
          Microsoft Teams Link : TBA
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full border border-gray-300 text-sm">
            <thead>
              <tr class="bg-purple-500 text-white text-left">
                <th class="border px-4 py-2">Time</th>
                <th class="border px-4 py-2">Activity</th>
                <th class="border px-4 py-2">Title</th>
                <th class="border px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Tba</td>
                <td class="border px-4 py-2">Workshop 1</td>
                <td class="border px-4 py-2">Tba</td>
                <td class="border px-4 py-2">Tba</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border px-4 py-2">Tba</td>
                <td class="border px-4 py-2">Workshop 2</td>
                <td class="border px-4 py-2">Tba</td>
                <td class="border px-4 py-2">Tba</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Tba</td>
                <td class="border px-4 py-2">Ziela & Zaf </td>
                <td class="border px-4 py-2">Tba</td>
                <td class="border px-4 py-2">Tba</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
