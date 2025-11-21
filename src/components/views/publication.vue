<template>
  <div class="abstract-submission-page w-full pb-[120px]">
    <!-- Hero / Banner -->
    <section class="relative w-full h-60">
      <img
        src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/bg/sub-event-bg.jpg"
        class="w-full h-full object-cover"
        alt="Hero background"
      />
      <div class="absolute inset-0 bg-purple-400/50 opacity-60"></div>
      <div
        class="bg-black w-full py-2 text-white flex items-center justify-center absolute bottom-0"
      >
        Home > Publication
      </div>
    </section>

    <!-- Content -->
    <section class="py-10 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Left Content -->
        <div class="md:col-span-2 space-y-10">
          <!-- Publication Opportunity -->
          <div class="max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold text-[#1d3557] mb-2">
              TENTATIVE
            </h2>
            <div class="w-32 h-1 bg-purple-600 rounded mb-4 mx-auto"></div>

            <!-- Two-line gap -->
            <div class="h-8"></div>

            <p class="text-sm text-gray-700 leading-relaxed">
              All accepted and presented papers will be published in the
              <span class="font-semibold">Conference E-Proceeding</span> (with
              ISBN/ISSN). Selected papers will be invited for publication in one
              of the following refereed journals, with some indexed in
              <span class="font-semibold">MyCite</span>, subject to journal
              editorial review and publication policies.
            </p>
          </div>

          <!-- Two-line gap -->
          <div class="h-8"></div>

          <!-- Indexed Journals Table -->
          <div class="max-w-4xl mx-auto">
            <h5 class="text-xl font-bold text-[#1d3557] mb-2">
              INDEXED JOURNALS :
            </h5>

            <div class="w-32 h-1 bg-purple-600 rounded mb-6 mx-auto"></div>

 <!-- Two-line gap -->
            <div class="h-8"></div>

            <div class="overflow-x-auto">
              <table class="w-full border border-gray-300 text-sm text-left">
                <thead>
                  <tr class="bg-purple-500 text-white">
                    <th class="border px-4 py-2 w-16 text-center">No.</th>
                    <th class="border px-4 py-2">Journal Name</th>
                    <th class="border px-4 py-2">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="border px-4 py-2 text-center">1</td>
                    <td class="border px-4 py-2">
                      Mathematical Sciences and Informatics Journal (MIJ)
                    </td>
                    <td class="border px-4 py-2">
                      <a
                        href="https://mijuitm.com.my/"
                        target="_blank"
                        class="text-purple-600 hover:underline"
                      >
                        https://mijuitm.com.my/
                      </a>
                    </td>
                  </tr>

                  <tr class="hover:bg-gray-50">
                    <td class="border px-4 py-2 text-center">2</td>
                    <td class="border px-4 py-2">
                      Journal of Information and Knowledge Management (JIKM)
                    </td>
                    <td class="border px-4 py-2">
                      <a
                        href="https://journal.uitm.edu.my/ojs/index.php/JIKM"
                        target="_blank"
                        class="text-purple-600 hover:underline"
                      >
                        https://journal.uitm.edu.my/ojs/index.php/JIKM
                      </a>
                    </td>
                  </tr>

                                    <tr class="hover:bg-gray-50">
                    <td class="border px-4 py-2 text-center">3</td>
                    <td class="border px-4 py-2">
                      Malaysian Journal of Computing (MJoC)
                    </td>
                    <td class="border px-4 py-2">
                      <a
                        href="https://mjoc.uitm.edu.my/main/"
                        target="_blank"
                        class="text-purple-600 hover:underline"
                      >
                        https://mjoc.uitm.edu.my/main/
                      </a>
                    </td>
                  </tr>

                  <tr class="hover:bg-gray-50">
                    <td class="border px-4 py-2 text-center">4</td>
                    <td class="border px-4 py-2">
                      Journal of Information Retrieval and Knowledge Management
                      (JIRKM)
                    </td>
                    <td class="border px-4 py-2">
                      <a
                        href="http://jirkm.pecamp.org/"
                        target="_blank"
                        class="text-purple-600 hover:underline"
                      >
                        http://jirkm.pecamp.org/
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Right empty column or future sidebar -->
        <div></div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
