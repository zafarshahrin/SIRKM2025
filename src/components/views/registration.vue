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
        Home &gt; Registration
      </div>
    </section>

    <!-- Main Registration Content -->
    <section class="py-10 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-[#1d3557] mb-6 text-center">REGISTRATION</h2>

        <p class="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
          All participants, presenters, and attendees are required to register for SIRKM'22. Registration ensures access to all sessions, workshops, and conference materials. Early registration is encouraged to secure your participation.
        </p>

        <!-- Registration Fees Table -->
        <div class="bg-orange-500 text-white rounded-lg shadow-lg p-4 mb-8">
          <h3 class="text-base font-bold mb-2">REGISTRATION FEES</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr>
                <td class="font-semibold pr-2 py-1">Presenter or Participant who are PECAMP Members:</td>
                <td class="text-right py-1">RM100 / USD25</td>
              </tr>
              <tr>
                <td class="font-semibold pr-2 py-1">Presenter or Participant:</td>
                <td class="text-right py-1">RM125 / USD30</td>
              </tr>
              <tr>
                <td class="font-semibold pr-2 py-1" colspan="2">
                  Let's become a PECAMP member: 
                  <a href="http://pecamp.org/main/membership.php" class="underline hover:text-gray-200" target="_blank">
                    http://pecamp.org/main/membership.php
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Registration Steps / Instructions -->
        <div class="bg-gray-50 rounded-lg shadow-lg p-4">
          <h3 class="text-base font-bold mb-2">REGISTRATION STEPS</h3>
          <ol class="list-decimal pl-6 text-sm text-gray-700 space-y-2">
            <li>Fill out the online registration form with accurate personal and institutional information.</li>
            <li>Submit the registration fee through the provided payment methods.</li>
            <li>Upload any required documents such as abstract or paper (if applicable).</li>
            <li>Once your registration is confirmed, you will receive an email confirmation and receipt.</li>
            <li>For any inquiries, contact the organizing committee via email: <a href="mailto:sirkm2022@ukm.edu.my" class="underline hover:text-gray-600">sirkm2022@ukm.edu.my</a>.</li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
/* Optional hover effect on links */
a:hover {
  color: #f39c12;
}
</style>
